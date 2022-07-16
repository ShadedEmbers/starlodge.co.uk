import '../styles/globals.scss';
import { ThemeProvider } from '@mui/material';
import { muiTheme, Layout } from '../components';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={muiTheme} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App;
