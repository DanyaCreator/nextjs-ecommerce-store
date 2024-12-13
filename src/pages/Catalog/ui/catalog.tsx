'use client';

import { useCallback, useEffect, useState } from 'react';

import { FormFilter } from '@/features/Filter';
import { Card } from '@/entities/card';
import { getCatalog, getFilterEntities } from '@/shared/api';
import { defaultFilter, ItemsEntity, ProductEntity } from '@/shared/model';
import { FilterFormFields } from '@/shared/model/types';

export const Catalog = () => {
  const [products, setProducts] = useState<ProductEntity[] | null>(null);

  const [items, setItems] = useState<ItemsEntity>();

  const [filterData, setFilterData] = useState<FilterFormFields>(defaultFilter);

  const fetchProducts = async () => {
    await getCatalog().then((result) => {
      result ? setProducts(result) : setProducts(null);
    });
  };

  const fetchFilter = async () => {
    await getFilterEntities().then((result) => {
      result ? setItems(result) : {};
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

      const matchesInStock = filterData.inStock ? card.inStock : true;

      const matchesOnSale = filterData.onSale ? card.onSale : true;

      const matchesCategory =
        !filterData.categories.length ||
        filterData.categories.includes(card.category.id);

      const matchesMaterial =
        !filterData.materials.length ||
        filterData.materials.includes(card.material.id);

      const matchesSize =
        !filterData.sizes.length || filterData.sizes.includes(card.size.id);

      return (
        matchesName &&
        matchesPrice &&
        matchesInStock &&
        matchesOnSale &&
        matchesCategory &&
        matchesMaterial &&
        matchesSize
      );
    },
    [filterData]
  );

  return (
    <main className={'container mt-[96px] flex flex-col gap-[40px]'}>
      <h1 className={'capitalize text-[33px] font-[500]'}>shop the latest</h1>
      <div className={'flex flex-row gap-[35px] justify-between'}>
        <aside className={'min-w-[260px]'}>
          <FormFilter
            onFilterUpdate={setFilterData}
            itemsCategories={items ? items[0] : []}
            itemsSizes={
              items
                ? items[0].find((c) => c.id === filterData.categories)?.sizes ??
                  []
                : []
            }
            itemsMaterials={items ? items[1] : []}
            defaultValue={filterData}
          />
        </aside>
        <article
          className={
            'grid grid-cols-3 gap-x-[24px] gap-y-[70px] max-w-[60vw] h-full'
          }>
          {filterData.isFiltering &&
            products &&
            products
              .filter(filterCards)
              .map((card, i) => (
                <Card
                  key={i}
                  id={card.id}
                  name={card.name.split(' ').slice(0, 3).join(' ')}
                  price={card.price}
                  image={card.images[0].url}
                  inStock={card.inStock}
                  onSale={card.onSale}
                  sale={card.sale}
                />
              ))}
          {!filterData.isFiltering &&
            products &&
            products.map((card, i) => (
              <Card
                key={i}
                id={card.id}
                name={card.name.split(' ').slice(0, 3).join(' ')}
                price={card.price}
                image={card.images[0].url}
                inStock={card.inStock}
                onSale={card.onSale}
                sale={card.sale}
              />
            ))}
        </article>
      </div>
    </main>
  );
};
