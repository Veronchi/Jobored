import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import { Paths } from '@/utils/constants';

export const NavigateBtn: FC = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate(Paths.HOME, { replace: true });
  };

  return (
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
  );
};
