import { $authHost } from '@/service/axios';
import { Catalogues, DataObject, VacancyObj } from '@/utils/types';

type FetchProps = {
  page: number;
  keyword: string;
  catalogues: string;
  payment_from: string;
  payment_to: string;
};

const fetchAllVacancies = async ({
  page = 1,
  keyword,
  catalogues,
  payment_from,
  payment_to,
}: FetchProps): Promise<DataObject> => {
  const { data } = await $authHost.get('/vacancies', {
    params: {
      count: 4,
      page,
      no_agreement: 1,
      published: 1,
      keyword,
      catalogues,
      payment_from,
      payment_to,
    },
  });

  return data;
};

const fetchVacancy = async (id: string): Promise<VacancyObj> => {
  const { data } = await $authHost.get(`/vacancies/${id}`);
  return data;
};

const fetchCatalogues = async (): Promise<Catalogues> => {
  const { data } = await $authHost.get('/catalogues');
  return data;
};

const fetchFilteredData = async ({
  page = 1,
  keyword,
  catalogues,
  payment_from,
  payment_to,
}: FetchProps): Promise<DataObject> => {
  const { data } = await $authHost.get('/vacancies', {
    params: {
      count: 4,
      page,
      no_agreement: 1,
      published: 1,
      keyword,
      catalogues,
      payment_from,
      payment_to,
    },
  });

  return data;
};

export { fetchAllVacancies, fetchVacancy, fetchCatalogues, fetchFilteredData };
