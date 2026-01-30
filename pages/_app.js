import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ApolloProvider } from '@apollo/client/react';
import { useMemo } from 'react';
import { createApolloClient } from '@/lib/apolloClient';

export default function App({ Component, pageProps, router }) {
  const client = useMemo(() => createApolloClient(), []);

  return (
    <ApolloProvider client={client}>
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </ApolloProvider>
  );
}
