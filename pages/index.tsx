import { AnimatePresence, motion } from 'framer-motion'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title={'KarnDevor'} description={'Unleash the predator inside.'}>
      <Hero />
    </Layout>
  )
}
