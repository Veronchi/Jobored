import { MantineThemeOverride } from '@mantine/core';

import { Tuple, DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors = 'grey' | 'customBlue' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

declare module '@mantine/core' {
  export interface MantineThemeOther {
    lh: Array<string>;
    br: Array<string>;
  }
}

export const customTheme: MantineThemeOverride = {
  black: '#232134',
  colors: {
    grey: ['#f5f5f6', '#eaebed', '#d5d6dc', '#acadb9', '#7b7c88'],
    customBlue: ['#deecff', '#c9e0ff', '#b7d6ff', '#92c1ff', '#5e96fc', '#3b7cd3'],
  },
  fontFamily: 'Inter, sans-serif',
  fontSizes: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '1.75rem',
  },
  other: {
    lh: ['19px', '20px', '22px', '24px', '29px', '34px'],
    br: ['4px', '8px', '12px'],
  },
};
