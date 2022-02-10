import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { MeatCategory } from '../../data/interfaces'
import { Categories } from '../../data/lists'

export default function Menu() {
  const router = useRouter()
  const { slug } = router.query
  const [category, setCategory] = useState<MeatCategory | null>(null)

  useEffect(() => {
    console.log(slug)

    if (slug) {
      const item = Categories.find((c) => c.slug === slug)
      setCategory(item ?? null)
    }

    return () => {
      setCategory(null)
    }
  }, [slug])

  if (!category) return <div>not found</div>

  return (
    <Layout
      title={category?.title ?? 'Menu'}
      description={category?.description ?? 'Menu'}
    >
      <div className="relative h-full min-h-screen w-full bg-black text-white ">
        <AnimatePresence>
          <motion.div className={'absolute top-0 left-0 h-full w-full'}>
            <motion.div
              className="relative h-full w-full  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4, transition: { duration: 1, delay: 1 } }}
            >
              <Image
                src={category?.image ?? '/assets/images/hero.webp'}
                layout="fill"
                alt={category?.title}
                className=" object-cover  object-center"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <Link href={'/'} passHref>
          <a title="Home">
            <div className="relatives flex h-auto w-full flex-col items-center p-5 sm:flex-row ">
              <div className="relative mx-2 mb-2 h-12 w-12 sm:mb-0">
                <Image
                  src={'/assets/images/logo.webp'}
                  alt="logo"
                  layout="fill"
                />
              </div>
              <p className="relative font-Cinzel text-2xl text-white">
                <span className="font-CinzelDeco text-2xl sm:text-4xl">K</span>
                <span className="font-CinzelDeco text-xl sm:text-2xl">arn</span>
                <span className="font-CinzelDeco text-2xl sm:text-4xl">D</span>
                <span className="font-CinzelDeco text-xl sm:text-2xl">
                  evor
                </span>
              </p>
            </div>
          </a>
        </Link>
        <div className="relative mx-auto h-screen w-full px-5 pb-14 pt-5 sm:w-auto sm:px-0 lg:container">
          <AnimatePresence>
            <motion.p
              variants={titleVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="relative text-center font-CinzelDeco text-7xl sm:text-left sm:text-9xl"
            >
              {category.title}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  )
}

const pageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}

const titleVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 2 },
  },
  exit: {},
}

const titleItemsVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
}
