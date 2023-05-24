import { $authHost } from '@/service/axios';
import { Catalogues, DataObject, VacancyObj } from '@/utils/types';
import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

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
}: FetchProps): Promise<DataObject | void> => {
  try {
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
  } catch (error) {
    if (error instanceof AxiosError) {
      notifications.show({
        title: `${error.response?.data.error.code}`,
        message: `${error.response?.data.error.message}`,
      });
    }
  }
};

const fetchVacancy = async (id: string): Promise<VacancyObj | void> => {
  try {
    const { data } = await $authHost.get(`/vacancies/${id}`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      notifications.show({
        title: `${error.response?.data.error.code}`,
        message: `${error.response?.data.error.message}`,
      });
    }
  }
};

const fetchCatalogues = async (): Promise<Catalogues | void> => {
  try {
    const { data } = await $authHost.get('/catalogues');
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      notifications.show({
        title: `${error.response?.data.error.code}`,
        message: `${error.response?.data.error.message}`,
      });
    }
  }
};

const fetchFilteredData = async ({
  page = 1,
  keyword,
  catalogues,
  payment_from,
  payment_to,
}: FetchProps): Promise<DataObject | void> => {
  try {
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
  } catch (error) {
    if (error instanceof AxiosError) {
      notifications.show({
        title: `${error.response?.data.error.code}`,
        message: `${error.response?.data.error.message}`,
      });
    }
  }
};

export { fetchAllVacancies, fetchVacancy, fetchCatalogues, fetchFilteredData };
