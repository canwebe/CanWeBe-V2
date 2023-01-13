import '../styles/globals.css'
import '../styles/nprogress.css'
import Script from 'next/script'
import Head from 'next/head'
import Nav from '../components/nav'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import { Router } from 'next/router'

function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false })

  useEffect(() => {
    const handleStart = () => nProgress.start()
    const handleStop = () => nProgress.done()
    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleStop)
    Router.events.on('routeChangeError', handleStop)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleStop)
      Router.events.off('routeChangeError', handleStop)
    }
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KKCN2BJ79G
        "
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKCN2BJ79G', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      {/* <div className='navGap'></div> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
