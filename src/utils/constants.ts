import { CSSProperties } from 'react';

export enum Paths {
  HOME = '/',
  FAVORITES = 'favorites',
  VACANCY = 'vacancy',
  EMPTY_STATE = 'empty-state',
}

export const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10%',
};
