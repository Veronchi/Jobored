import { VacancyObj } from './types';

export const getItemsFromLS = (): Array<VacancyObj> | undefined => {
  const items = localStorage.getItem('items');

  if (items) {
    const list: Array<VacancyObj> = JSON.parse(items);

    return list;
  }
};
