import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>KarnDevor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
      </main>

      <footer className=""></footer>
    </div>
  )
}
