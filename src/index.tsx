import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './utils/GlobalStyles';
import apolloClient from './utils/apolloClient';
// Creating a "theme switch" for the ThemeProvider
// would allow us to make a custom dark and light theme
import theme from './utils/theme';

import Block from './containers/Block/Block';
import Blocks from './containers/Blocks/Blocks';
import Transactions from './containers/Transactions/Transactions';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Blocks} />
            <Route exact path="/transactions" component={Transactions} />
            <Route path="/blocks/:id" component={Block} />
          </Switch>
          <GlobalStyles />
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
