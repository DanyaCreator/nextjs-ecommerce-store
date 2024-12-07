'use client';

import { useCallback, useState } from 'react';

import { FormFilter } from '@/features/Filter';
import { Card } from '@/entities/card';
import { CardType, tempCards } from '@/shared/assets/texts';
import { defaultFilter } from '@/shared/model';
import { FilterFormFields } from '@/shared/model/types';

export const Catalog = () => {
  const [filterData, setFilterData] = useState<FilterFormFields>(defaultFilter);

  const filterCards = useCallback(
    (card: CardType) => {
      const matchesName =
        !filterData.name ||
        card.name.toLowerCase().includes(filterData.name.toLowerCase());

      const matchesPrice =
        (filterData.prices.min === 0 && filterData.prices.max === 50) ||
        (card.price >= filterData.prices.min &&
          card.price <= filterData.prices.max);

      const matchesInStock = filterData.inStock ? card.inStock : true;

      const matchesOnSale = filterData.onSale ? card.onSale : true;

      return matchesName && matchesPrice && matchesInStock && matchesOnSale;
    },
    [filterData]
  );

  return (
    <main className={'container mt-[96px] flex flex-col gap-[40px]'}>
      <h1 className={'capitalize text-[33px] font-[500]'}>shop the latest</h1>
      <div className={'flex flex-row gap-[35px]'}>
        <aside className={'min-w-[260px]'}>
          <FormFilter onFilterUpdate={setFilterData} />
        </aside>
        <article
          className={'grid grid-cols-3 gap-x-[24px] gap-y-[70px] max-w-[60vw]'}>
          {filterData.isFiltering &&
            tempCards
              .filter(filterCards)
              .map((card, i) => (
                <Card
                  key={i}
                  title={card.name}
                  price={card.price}
                  onSale={card.onSale}
                  inStock={card.inStock}
                  sale={card.sale}
                />
              ))}
          {!filterData.isFiltering &&
            tempCards.map((card, i) => (
              <Card
                key={i}
                title={card.name}
                price={card.price}
                onSale={card.onSale}
                inStock={card.inStock}
                sale={card.sale}
              />
            ))}
        </article>
      </div>
    </main>
  );
};
