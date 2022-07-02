import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../globalStyles/globalStyles'
import '../styles/globals.css'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider> 
}

export default MyApp
