import { FC } from 'react';
import EmptyStateImg from '@/assets/img/empty-state.svg';
import { Box, Button, Image, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Paths } from '@/utils/constants';

export const EmptyState: FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      marginTop: '80px',
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
      })}
    >
      Упс, здесь еще ничего нет!
    </Title>
    <Button
      component={Link}
      to={Paths.HOME}
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
);
