import { FC, useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import EmptyStateImg from '@/assets/img/empty-state.svg';
import { Box, Image, Title } from '@mantine/core';
import { removeFilters } from '@/store/slices/filters-slice';
import { resetTotal } from '@/store/slices/pagination-slice';
import { NavigateBtn } from '@/components';

export const EmptyStatePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(removeFilters());
    dispatch(resetTotal());
  }, []);

  return (
    <Box component="main" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          marginTop: '80px',

          '@media (max-width: 440px)': {
            marginTop: '0',
          },
        }}
      >
        <Image width="240px" height="230.27px" src={EmptyStateImg} alt="empty state image" />
        <Title
          order={2}
          sx={({ fontSizes, other }) => ({
            color: '#343A40',
            fontWeight: 700,
            fontSize: fontSizes.lg,
            lineHeight: other.lh[4],

            '@media (max-width: 960px)': {
              fontSize: fontSizes.md,
            },

            '@media (max-width: 500px)': {
              fontSize: fontSizes.sm,
            },
          })}
        >
          Упс, здесь еще ничего нет!
        </Title>
        <NavigateBtn />
      </Box>
    </Box>
  );
};
