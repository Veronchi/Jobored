import { FC, useState } from 'react';
import { NumberInput, Select, Button, MantineProvider } from '@mantine/core';
import { SelectArrow } from './select-arrow';
import './filters.scss';

export const Filters: FC = () => {
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <MantineProvider
      theme={{
        components: {
          Input: {
            classNames: { input: 'input', rightSection: 'input__right-section' },
          },
          Select: {
            classNames: { item: 'select__item' },
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
          <button className="filters__reset">Сбросить все</button>
        </div>
        <div className="filters__section">
          <h3 className="filters__subtitle">Отрасль</h3>
          <Select
            placeholder="Выберите отрасль"
            styles={() => ({
              rightSection: { pointerEvents: 'none' },
            })}
            data={['React', 'Angular', 'Svelte', 'Vue', '1111', '2222']}
            rightSection={<SelectArrow rotate={isToggle} />}
            onDropdownOpen={handleToggle}
            onDropdownClose={handleToggle}
          />
        </div>
        <div className="filters__section">
          <h3 className="filters__subtitle">Оклад</h3>
          <NumberInput placeholder="От" type="number" />
          <NumberInput placeholder="До" type="number" />
        </div>
        <Button>Применить</Button>
      </aside>
    </MantineProvider>
  );
};
