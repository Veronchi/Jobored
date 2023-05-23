export type AuthDataProps = {
  access_token: string | null;
  refresh_token: string | null;
  ttl: number | null;
  expires_in: number | null;
  token_type: string | null;
  reg_user_resumes_count: number | null;
};

export type VacancyObj = {
  id: number;
  payment_from: number;
  payment_to: number;
  profession: string;
  currency: string;
  vacancyRichText: string;
  type_of_work: {
    title: string;
  };
  town: {
    title: string;
  };
  firm_name: string;
};

export type DataObject = {
  objects: Array<VacancyObj>;
  total: number;
};

export type Pagination = {
  total: number;
  page: number;
  count: number;
};

export type Catalogue = {
  title_rus: string;
  key: number;
};

export type SelectItem = {
  value: string;
  label: string;
};

export type Catalogues = Array<Catalogue>;
