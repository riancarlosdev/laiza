import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global';
import { theme } from '@styles/theme/primary';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Laiza</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
