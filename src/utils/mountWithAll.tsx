import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { MemoryRouter } from 'react-router-dom';
import apolloClient from './apolloClient';
import { theme } from './theme';

/**
 * Mount test with libraries used in app
 */
function mountWithAll(children: React.ReactNode) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <MemoryRouter>{children}</MemoryRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default mountWithAll;
