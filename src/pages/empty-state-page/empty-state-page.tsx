import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@/utils/constants';
import { useAppDispatch } from '@/store/hooks';
import EmptyStateImg from '@/assets/img/empty-state.svg';
import { Box, Button, Image, Title } from '@mantine/core';
import { removeFilters } from '@/store/slices/filters-slice';
import { resetTotal } from '@/store/slices/pagination-slice';

export const EmptyStatePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToMain = () => {
    navigate(Paths.HOME, { replace: true });
  };

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
        <Button
          onClick={navigateToMain}
          sx={({ colors, other, fontSizes, white }) => ({
            height: '42px',
            width: '164px',
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 600,
            fontSize: fontSizes.xs,
            lineHeight: other.lh[2],
            backgroundColor: colors.customBlue[0],
            borderRadius: other.br[1],
            color: colors.customBlue[5],
            padding: '10px 24px',
            border: 'none',

            '@media (max-width: 440px)': {
              padding: '10px 18px',
            },

            '&:hover': {
              backgroundColor: colors.customBlue[4],
              color: white,
            },

            '&:active': {
              backgroundColor: colors.customBlue[5],
            },
          })}
        >
          Поиск Вакансий
        </Button>
      </Box>
    </Box>
  );
};
