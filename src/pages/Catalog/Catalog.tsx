'use client';

import { useState } from 'react';

import { Card } from '@/entities/card';
import { tempCards } from '@/shared/assets/texts';
import { SelectField } from '@/shared/ui/form-fields';
import { TextField } from '@/shared/ui/form-fields';
import { RangeInput, SwitchInput } from '@/shared/ui/inputs';

export const Catalog = () => {
  const emptyListTitle = 'The list is still empty';

  const [rangeValues, setRangeValues] = useState({ min: 40, max: 300 });

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  return (
    <main className={'container mt-[96px] flex flex-col gap-[40px]'}>
      <h1 className={'capitalize text-[33px] font-[500]'}>shop the latest</h1>
      <div className={'flex flex-row gap-[35px]'}>
        <aside className={'min-w-[260px]'}>
          <TextField label={'Search...'} className={'mb-[40px]'} />
          <section className={'flex flex-col gap-[16px]'}>
            <SelectField
              items={[]}
              unselectedTitle={'Shop By'}
              emptyListText={emptyListTitle}
            />
            <SelectField
              items={[]}
              unselectedTitle={'Sort By'}
              emptyListText={emptyListTitle}
            />
          </section>
          <RangeInput min={40} max={300} onChange={handleRangeChange} />
          <section className={'flex flex-col gap-[40px] mt-[40px]'}>
            <div className={'w-full flex justify-between'}>
              <span>On sale</span>
              <SwitchInput />
            </div>
            <div className={'w-full flex justify-between'}>
              <span>In stock</span>
              <SwitchInput />
            </div>
          </section>
        </aside>
        <article
          className={'grid grid-cols-3 gap-x-[24px] gap-y-[70px] max-w-[60vw]'}>
          {tempCards.map((c, i) => (
            <Card key={i} title={c.title} price={c.price} />
          ))}
        </article>
      </div>
    </main>
  );
};
