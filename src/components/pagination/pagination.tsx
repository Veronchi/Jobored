import { FC } from 'react';
import { MantineProvider, Pagination } from '@mantine/core';

export const PaginationBar: FC = () => {
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
      <Pagination total={3} sx={{ alignSelf: 'center' }} />
    </MantineProvider>
  );
};
