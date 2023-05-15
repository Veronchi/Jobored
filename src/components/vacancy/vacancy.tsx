import { FC, useState } from 'react';
import { Box, Title, Text, ActionIcon, ThemeIcon, ColorSwatch, Paper } from '@mantine/core';
import { StarIcon } from './start-icon';
import { LocationIcon } from './location-icon';

export const Vacancy: FC = () => {
  const [fillColor, setFillColor] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    setFillColor(!fillColor);
    setIsHovered(true);
  }

  function onMouseEnter() {
    setIsHovered(true);
  }

  function onMouseLeave() {
    setIsHovered(false);
  }

  return (
    <Paper
      sx={({ white, other, colors, black }) => ({
        backgroundColor: white,
        border: `1px solid ${colors.grey[1]}`,
        borderRadius: other.br[2],
        color: black,
        padding: '24px',
        cursor: 'pointer',

        '&:hover': {
          boxShadow: `0 1px 3px ${colors.grey[3]}`,
        },
      })}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '12px',
        }}
      >
        <Title
          order={2}
          sx={({ fontSizes, other, colors }) => ({
            fontWeight: 600,
            fontSize: fontSizes.md,
            lineHeight: other.lh[2],
            color: colors.customBlue[4],
          })}
        >
          Менеджер-дизайнер
        </Title>
        <ActionIcon
          variant="transparent"
          onClick={handleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <StarIcon fillColor={fillColor} hovered={isHovered} />
        </ActionIcon>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <Text
          span
          sx={(theme) => ({
            fontWeight: 600,
            fontSize: theme.fontSizes.sm,
            lineHeight: theme.other.lh[1],
          })}
        >
          з/п от 70000 rub
        </Text>
        <ColorSwatch color="#7B7C88" size="5px" />
        <Text
          span
          sx={(theme) => ({
            fontWeight: 400,
            fontSize: theme.fontSizes.sm,
            lineHeight: theme.other.lh[1],
          })}
        >
          Полный рабочий день
        </Text>
      </Box>
      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <ThemeIcon variant="default" size="20px" sx={{ border: 'none' }}>
          <LocationIcon />
        </ThemeIcon>
        <Text
          span
          sx={(theme) => ({
            fontWeight: 400,
            fontSize: theme.fontSizes.sm,
            lineHeight: theme.other.lh[0],
          })}
        >
          Тюмень
        </Text>
      </Box>
    </Paper>
  );
};
