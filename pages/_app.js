import '../styles/globals.scss';
import { ThemeProvider } from '@mui/material';

const App = ({ Component, pageProps }) => {
  return (
    // <ThemeProvider>
      <Component {...pageProps} />
    // </ThemeProvider>
  )
}

export default App;
