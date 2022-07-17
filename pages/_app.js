import '../styles/globals.scss';
import { ThemeProvider } from '@mui/material';
import { muiTheme, Layout } from '../components';
import Head from 'next/head';
import { useEffect } from 'react';

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-FNHH0T073Q');
  })

  return (
    <>
      <Head>
        <title>Star Lodge, Horwich</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FNHH0T073Q"></script>
      </Head>

      <ThemeProvider theme={muiTheme} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App;
