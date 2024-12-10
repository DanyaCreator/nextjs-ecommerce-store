'use client';

import { useCallback, useEffect, useState } from 'react';

import { FormFilter } from '@/features/Filter';
import { Card } from '@/entities/card';
import { getProducts, getFilterEntities } from '@/shared/api';
import { defaultFilter, ProductEntity } from '@/shared/model';
import { FilterFormFields } from '@/shared/model/types';

export const Catalog = () => {
  const [filterData, setFilterData] = useState<FilterFormFields>(defaultFilter);

  const [products, setProducts] = useState<ProductEntity[] | null>(null);

  const fetchProducts = async () => {
    await getProducts().then((result) => {
      result ? setProducts(result) : setProducts(null);
    });
  };

  const fetchFilter = async () => {
    await getFilterEntities().then((result) => {
      result
        ? setFilterData({
            ...defaultFilter,
            categories: result[0],
            sizes: result[1],
            materials: result[2],
          })
        : '';
    });
  };

  useEffect(() => {
    fetchProducts();
    fetchFilter();
  }, []);

  const filterCards = useCallback(
    (card: ProductEntity) => {
      const matchesName =
        !filterData.name ||
        card.name.toLowerCase().includes(filterData.name.toLowerCase());

      const matchesPrice =
        (filterData.prices.min === 0 && filterData.prices.max === 50) ||
        (card.price >= filterData.prices.min &&
          card.price <= filterData.prices.max);

      const matchesInStock = filterData.inStock ? card.isArchived : true;

      const matchesOnSale = filterData.onSale ? card.isFeatured : true;

      return matchesName && matchesPrice && matchesInStock && matchesOnSale;
    },
    [filterData]
  );

  return (
    <main className={'container mt-[96px] flex flex-col gap-[40px]'}>
      <h1 className={'capitalize text-[33px] font-[500]'}>shop the latest</h1>
      <div className={'flex flex-row gap-[35px]'}>
        <aside className={'min-w-[260px]'}>
          <FormFilter
            onFilterUpdate={setFilterData}
            itemsCategories={filterData.categories}
            itemsMaterials={filterData.materials}
            itemsSizes={filterData.sizes}
          />
        </aside>
        <article
          className={'grid grid-cols-3 gap-x-[24px] gap-y-[70px] max-w-[60vw]'}>
          {filterData.isFiltering &&
            products &&
            products
              .filter(filterCards)
              .map((card, i) => (
                <Card
                  key={i}
                  name={card.name.split(' ').slice(0, 3).join(' ')}
                  price={card.price}
                  image={card.images[0].url}
                  isFeatured={card.isFeatured}
                  isArchived={card.isArchived}
                />
              ))}
          {!filterData.isFiltering &&
            products &&
            products.map((card, i) => (
              <Card
                key={i}
                name={card.name.split(' ').slice(0, 3).join(' ')}
                price={card.price}
                image={card.images[0].url}
                isFeatured={card.isFeatured}
                isArchived={card.isArchived}
              />
            ))}
        </article>
      </div>
    </main>
  );
};
