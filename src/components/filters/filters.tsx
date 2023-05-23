import { FC, useState } from 'react';
import { NumberInput, Select, Button, MantineProvider } from '@mantine/core';
import { SelectArrow } from './select-arrow';
import { SelectItem } from '@/utils/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeFilters, setSalaryFrom, setSalaryTo, setSelect } from '@/store/slices/filters-slice';
import './filters.scss';

type FiltersProp = {
  selectData: Array<SelectItem>;
  handleFilters: () => void;
};

export const Filters: FC<FiltersProp> = ({ selectData, handleFilters }) => {
  const [isToggle, setIsToggle] = useState(true);
  const { payment_from, payment_to, catalogues } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const hadleSelectChange = (val: string) => {
    dispatch(setSelect(val));
  };

  const hadleInputFrom = (val: number) => {
    dispatch(setSalaryFrom(String(val)));
  };

  const hadleInputTo = (val: number) => {
    dispatch(setSalaryTo(String(val)));
  };

  const handleResetFilters = () => {
    dispatch(removeFilters());
  };

  return (
    <MantineProvider
      theme={{
        components: {
          Input: {
            classNames: { input: 'input', rightSection: 'input__right-section' },
          },
          Select: {
            classNames: { dropdown: 'select__dropdown', item: 'select__item' },
          },
          ScrollArea: {
            classNames: { thumb: 'scroll-thumb' },
          },
          NumberInput: {
            classNames: {
              root: 'num-input',
              rightSection: 'num-input__right-section',
              control: 'num-input__control',
            },
          },
          Button: {
            classNames: {
              root: 'apply-btn',
            },
          },
        },
      }}
    >
      <aside className="filters">
        <div className="filters__header">
          <h2 className="filters__title">Фильтры</h2>
          <button className="filters__reset" onClick={handleResetFilters}>
            Сбросить все
          </button>
        </div>
        <div className="filters__section">
          <h3 className="filters__subtitle">Отрасль</h3>
          <Select
            data-elem="industry-select"
            placeholder="Выберите отрасль"
            styles={() => ({
              rightSection: { pointerEvents: 'none' },
            })}
            data={selectData}
            rightSection={<SelectArrow rotate={isToggle} />}
            value={`${catalogues}`}
            onDropdownOpen={handleToggle}
            onDropdownClose={handleToggle}
            onChange={(value: string) => hadleSelectChange(value)}
          />
        </div>
        <div className="filters__section">
          <h3 className="filters__subtitle">Оклад</h3>
          <NumberInput
            data-elem="salary-from-input"
            min={1}
            step={1}
            startValue={1}
            placeholder="От"
            type="number"
            value={Number(payment_from) || ''}
            onChange={(value: number) => hadleInputFrom(value)}
          />
          <NumberInput
            data-elem="salary-to-input"
            min={Number(payment_from)}
            step={1}
            startValue={Number(payment_from)}
            placeholder="До"
            type="number"
            value={Number(payment_to) || ''}
            onChange={(value: number) => hadleInputTo(value)}
          />
        </div>
        <Button data-elem="search-button" type="button" onClick={handleFilters}>
          Применить
        </Button>
      </aside>
    </MantineProvider>
  );
};
