import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://karndevor.netlify.app${router.route}`
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: './favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://www.test.ie/apple-touch-icon.png',
            sizes: '76x76',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        ]}
        titleTemplate="%s - KarnDevor"
        openGraph={{
          type: 'website',
          locale: 'en_Us',
          url,
          description: 'Unleash the predator inside',
          site_name: 'KarnDevor | KarnDevor.com',
          images: [
            {
              url: './preview.jpg',
              width: 1536,
              height: 960,
              alt: 'Og Image Alt',
            },
          ],
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
