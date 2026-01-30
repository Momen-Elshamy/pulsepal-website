import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

export function createApolloClient() {
  const uri = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

  if (!uri) {
    // Don't throw during build/runtime; pages can render a friendly message.
    // But keep this explicit so misconfig is obvious in dev.
    console.warn('Missing NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT');
  }

  return new ApolloClient({
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  });
}
