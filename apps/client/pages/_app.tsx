import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import './styles.css';
import { theme } from '@trend-repositories/ui';
import { ApolloProvider } from '@apollo/client';
import { client } from '@app/lib';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </ApolloProvider>
        ,
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
