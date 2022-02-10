import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import MenuBottomBar from '../../components/Menu/MenuBottomBar'
import MenuHeader from '../../components/Menu/MenuHeader'
import MenuItem from '../../components/Menu/MenuItem'
import MenuListMobile from '../../components/Menu/MenuListMobile'
import { CategoryItem, MeatCategory } from '../../data/interfaces'
import { Categories } from '../../data/lists'

export default function Menu() {
  const router = useRouter()
  const { slug } = router.query
  const [category, setCategory] = useState<MeatCategory | null>(null)
  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null)

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
      <AnimatePresence>
        <motion.div className={'fixed top-0 left-0 h-full w-full'}>
          <motion.div
            className="relative h-full w-full  "
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              transition: { duration: 0.5, delay: 0.5 },
            }}
          >
            <Image
              src={category?.image ?? '/assets/images/hero.webp'}
              layout="fill"
              alt={category?.title}
              className=" object-cover   object-center"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <AnimateSharedLayout>
        <div className="relative flex h-full min-h-screen w-full flex-col  text-white">
          <div className="h-auto min-h-[20vh] w-full flex-initial ">
            <MenuHeader category={category} />
          </div>
          <div className="h-[60vh] w-full flex-initial ">
            <MenuListMobile category={category} />
            <AnimatePresence>
              <AnimatePresence>
                {!selectedItem && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 1, delay: 2 },
                    }}
                    exit={{ opacity: 0 }}
                    className="m-auto flex h-full w-full items-center justify-center"
                  >
                    <p className=" max-w-lg text-center font-Cinzel text-2xl">
                      {category.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              {selectedItem && <MenuItem item={selectedItem} />}
            </AnimatePresence>
          </div>
          <div className="hidden h-auto min-h-[20vh] w-full  flex-initial sm:block ">
            <MenuBottomBar
              category={category}
              setSelectedItem={(item) => setSelectedItem(item)}
            />
          </div>
        </div>
      </AnimateSharedLayout>
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
