import type { AppContext, AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { ThemeContextProvider } from '../context/ThemeContextProvider';
import { ThemeString } from '../types/theme';
import '../styles/globals.css'

interface Props extends AppProps{
  cookieTheme: ThemeString
}
function MyApp({ Component, pageProps,cookieTheme}: Props) {
  return (
    <ThemeContextProvider initialTheme={cookieTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const cookies = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'};
  return {
    cookieTheme: cookies.theme  ,
  }
} 

export default MyApp
