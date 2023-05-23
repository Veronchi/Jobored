import { FC } from 'react';
import baloonImg from '@/assets/img/balloon.svg';
import { Box, Image, Title } from '@mantine/core';
import { NavigateBtn } from '@/components';

export const ErrorPage: FC = () => {
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
        <Image width="240px" height="230.27px" src={baloonImg} alt="error page image" />
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
          Упс, что-то пошло не так!
        </Title>
        <NavigateBtn />
      </Box>
    </Box>
  );
};
