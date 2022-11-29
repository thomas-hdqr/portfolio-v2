/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'


function MyApp({ Component, pageProps }) {
  return (
      
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
