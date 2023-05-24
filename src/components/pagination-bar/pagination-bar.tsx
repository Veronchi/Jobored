import { FC } from 'react';
import { MantineProvider, Pagination } from '@mantine/core';
import { useAppSelector } from '@/store/hooks';
import { useLocation } from 'react-router-dom';

type PaginationBarProps = {
  hadleClick: (page: number) => void;
  totalAmount?: number;
};

export const PaginationBar: FC<PaginationBarProps> = ({ hadleClick, totalAmount }) => {
  const { pathname } = useLocation();
  const pagSearch = useAppSelector((state) => state.pagination);
  const pagFav = useAppSelector((state) => state.paginationFav);

  const setNumberPage = (page: number) => {
    hadleClick(page);
  };

  const favTotal = totalAmount && totalAmount > 4 ? totalAmount : 4;

  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Pagination: {
            styles: ({ colors, black, other, white, fontSizes }) => ({
              control: {
                borderColor: colors.grey[2],
                color: black,
                borderRadius: other.br[0],
                fontWeight: 400,
                fontSize: fontSizes.sm,

                '@media (max-width: 410px)': {
                  padding: '0',
                },

                '&:first-of-type, &:last-child': {
                  color: colors.grey[4],
                },
                '&:hover': {
                  backgroundColor: colors.customBlue[4],
                },
                '&:not([data-disabled]):hover': {
                  backgroundColor: colors.grey[0],
                },
                '&[data-disabled]': {
                  backgroundColor: white,
                  borderColor: colors.grey[1],
                  color: colors.grey[2],
                },
                '&[data-active]': {
                  backgroundColor: colors.customBlue[4],
                  border: `1px solid ${colors.customBlue[4]}`,
                },
                '&[data-active]:not([data-disabled]):hover': {
                  backgroundColor: colors.customBlue[3],
                  borderColor: colors.customBlue[3],
                },
                '&[data-active]:not([data-disabled]):active': {
                  backgroundColor: colors.customBlue[5],
                  borderColor: colors.customBlue[5],
                },
              },
            }),
          },
        },
      }}
    >
      {pathname === '/favorites' ? (
        <Pagination
          total={Math.ceil(favTotal / pagFav.count)}
          value={pagFav.page}
          siblings={0}
          onChange={setNumberPage}
          sx={{
            alignSelf: 'center',
          }}
        />
      ) : (
        <Pagination
          total={(pagSearch.total - 1) / pagSearch.count}
          value={pagSearch.page}
          siblings={0}
          onChange={setNumberPage}
          sx={{
            alignSelf: 'center',
          }}
        />
      )}
    </MantineProvider>
  );
};
