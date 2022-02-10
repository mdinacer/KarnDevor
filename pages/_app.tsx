import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { url } from 'inspector'
import { DefaultSeo } from 'next-seo'
import Header from '../components/Header'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://karndevor.netlify.app${router.route}`
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - KarnDevor"
        openGraph={{
          type: 'website',
          locale: 'en_Us',
          url,
          description: 'Unleash the predator inside',
          site_name: 'KarnDevor | KarnDevor.com',
          images: [],
        }}
        canonical={url}
      />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
