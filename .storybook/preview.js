import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/utils/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
