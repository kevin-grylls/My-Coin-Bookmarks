import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';

export const renderComponent = (Component: React.FC) =>
  render(
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>,
  );

export const getTestId = (id: string) => `[data-test-id="${id}"]`;
