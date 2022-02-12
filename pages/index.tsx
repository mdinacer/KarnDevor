import Hero from '../components/hero/Hero'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title={'KarnDevor'} description={'Unleash the predator inside.'}>
      <Hero />
    </Layout>
  )
}
