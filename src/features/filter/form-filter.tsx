import { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { SelectField, TextField } from '@/shared/ui/form-fields';
import { RangeInput, SwitchInput } from '@/shared/ui/inputs';

export type FilterFormFields = {
  name: string;
  categories?: string[];
  materials?: string[];
  sizes?: number[];
  prices: { min: number; max: number };
  inStock: boolean;
  onSale: boolean;
  isFiltering: boolean;
};

type FormFilterProps = {
  onFilterUpdate: (filter: FilterFormFields) => void;
};

export const FormFilter = ({ onFilterUpdate }: FormFilterProps) => {
  const emptyListTitle = 'The list is still empty...';

  const { control, watch } = useForm<FilterFormFields>({
    defaultValues: {
      name: '',
      prices: { min: 0, max: 50 },
      onSale: false,
      inStock: false,
      isFiltering: false,
    },
  });

  const values = watch();

  // Создаем ref для хранения предыдущих значений фильтра
  const prevValuesRef = useRef<FilterFormFields>(values);

  const isFilterActive = () => {
    return (
      values.name !== '' ||
      values.prices.min !== 0 ||
      values.prices.max !== 50 ||
      values.onSale ||
      values.inStock
    );
  };

  const hasFilterChanged = (
    current: FilterFormFields,
    previous: FilterFormFields
  ) => {
    return (
      current.name !== previous.name ||
      current.prices.min !== previous.prices.min ||
      current.prices.max !== previous.prices.max ||
      current.onSale !== previous.onSale ||
      current.inStock !== previous.inStock
    );
  };

  useEffect(() => {
    if (hasFilterChanged(values, prevValuesRef.current)) {
      onFilterUpdate({
        ...values,
        isFiltering: isFilterActive(),
      });
      prevValuesRef.current = values;
    }
  }, [values, onFilterUpdate]);

  return (
    <form>
      <Controller
        name={'name'}
        control={control}
        render={({ field }) => (
          <TextField label={'Search...'} className={'mb-[40px]'} {...field} />
        )}
      />
      <section className={'flex flex-col gap-[16px]'}>
        <SelectField
          items={[]}
          unselectedTitle={'Categories'}
          emptyListText={emptyListTitle}
        />
        <SelectField
          items={[]}
          unselectedTitle={'Materials'}
          emptyListText={emptyListTitle}
        />
        <SelectField
          items={[]}
          unselectedTitle={'Sizes'}
          emptyListText={emptyListTitle}
        />
      </section>
      <Controller
        name={'prices'}
        control={control}
        render={({ field }) => (
          <RangeInput
            min={0}
            max={50}
            onChange={(range) => field.onChange(range)}
            {...field}
          />
        )}
      />
      <section className={'flex flex-col gap-[40px] mt-[40px]'}>
        <div className={'w-full flex justify-between'}>
          <span>On sale</span>
          <Controller
            name={'onSale'}
            control={control}
            render={({ field }) => <SwitchInput {...field} type={'checkbox'} />}
          />
        </div>
        <div className={'w-full flex justify-between'}>
          <span>In stock</span>
          <Controller
            name={'inStock'}
            control={control}
            render={({ field }) => <SwitchInput {...field} type={'checkbox'} />}
          />
        </div>
      </section>
    </form>
  );
};
