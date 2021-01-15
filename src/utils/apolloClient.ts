import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://graphql.bitquery.io',
  cache: new InMemoryCache({}),
});

export default apolloClient;
