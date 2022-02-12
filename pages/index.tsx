import Hero from '../components/hero/Hero'
import Layout from '../components/Layout'
import { QuickMenu, QuickMenuMobile } from '../components/QuickMenu'

export default function Home() {
  return (
    <Layout title={'KarnDevor'} description={'Unleash the predator inside.'}>
      <Hero />
      <QuickMenu />
      <QuickMenuMobile />
    </Layout>
  )
}
