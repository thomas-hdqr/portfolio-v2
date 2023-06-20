import '../styles/globals.css'
import Script from 'next/script'



function MyApp({ Component, pageProps, router }) {


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
        <Component {...pageProps} key={router.route} />

    </>
  )
}

export default MyApp
