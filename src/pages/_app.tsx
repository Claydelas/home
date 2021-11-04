import '@/styles/globals.css';

import Layout from '@/components/layout/AppLayout';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import type { NextPage } from 'next';
type NextPageWithLayout = NextPage & {
  includeModel?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider attribute='class'>
      <Layout includeModel={Component.includeModel ?? true}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
