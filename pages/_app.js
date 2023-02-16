import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {


  return (
    <>
      <Script strategy='lazyOnload' src="https://www.googletagmanager.com/gtag/js?id=G-H4MB4WY3C5"/>
        <Script strategy='lazyOnload' id=''>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H4MB4WY3C5');
          `}
        </Script>
    <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
