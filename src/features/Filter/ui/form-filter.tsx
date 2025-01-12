import { useEffect } from 'react';

import { Controller, useForm, useWatch } from 'react-hook-form';
import { RxMagnifyingGlass } from 'react-icons/rx';

import {
  Category,
  Material,
  Size,
  FilterFormFields,
  defaultFilter,
} from '@/shared/model';
import { SelectField, TextField } from '@/shared/ui/form-fields';
import { RangeInput, SwitchInput } from '@/shared/ui/inputs';

type FormFilterProps = {
  onFilterUpdate: (filter: FilterFormFields) => void;
  categories: Category[];
  materials: Material[];
  sizes: Size[];
};

export const FormFilter = ({
  onFilterUpdate,
  categories,
  materials,
  sizes,
}: FormFilterProps) => {
  const { control } = useForm<FilterFormFields>({
    defaultValues: defaultFilter,
  });

  const values = useWatch({
    control,
  });

  useEffect(() => {
    // it's normal
    onFilterUpdate({ ...values, isFiltering: true } as FilterFormFields);
  }, [values]);

  const formattedCategories = categories.map((item) => ({
    id: item.id,
    value: item.name,
  }));

  const formattedMaterials = materials.map((item) => ({
    id: item.id,
    value: item.value,
  }));

  const formattedSizes = sizes
    .map((item) => ({
      id: item.id,
      value: item.value,
    }))
    .sort((a, b) => a.value - b.value);

  return (
    <form>
      <Controller
        name={'name'}
        control={control}
        render={({ field }) => (
          <TextField
            label={'Search...'}
            className={'mb-[40px]'}
            icon={
              <RxMagnifyingGlass
                className={
                  'w-[25px] h-[25px] absolute right-0 bottom-3 bg-white'
                }
              />
            }
            {...field}
          />
        )}
      />
      <fieldset className={'flex flex-col gap-[16px]'}>
        <Controller
          name={'categories'}
          control={control}
          render={({ field }) => (
            <SelectField
              items={formattedCategories}
              unselectedTitle={'Categories'}
              emptyListText={'The categories is empty yet'}
              {...field}
            />
          )}
        />
        <Controller
          name={'materials'}
          control={control}
          render={({ field }) => (
            <SelectField
              items={formattedMaterials}
              unselectedTitle={'Materials'}
              emptyListText={'The materials is empty yet'}
              {...field}
            />
          )}
        />
        <Controller
          name={'sizes'}
          control={control}
          render={({ field }) => (
            <SelectField
              items={formattedSizes}
              unselectedTitle={'Sizes'}
              emptyListText={'The sizes is empty yet'}
              {...field}
            />
          )}
        />
      </fieldset>
      <Controller
        name={'prices'}
        control={control}
        render={({ field }) => (
          <RangeInput
            min={0}
            max={50}
            onChange={(range) => field.onChange(range)}
          />
        )}
      />
      <fieldset className={'flex flex-col gap-[40px] mt-[40px]'}>
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
      </fieldset>
    </form>
  );
};
