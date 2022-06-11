import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/global';
import { theme } from '@styles/theme/primary';
import { Loading } from '@components/LoadingPage';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
            <Head>
              <title>inventta</title>
            </Head>
            <Loading>
                  <Component {...pageProps} />
            </Loading>
    </ThemeProvider>
  );
}

export default MyApp;
