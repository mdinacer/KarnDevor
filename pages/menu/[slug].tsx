import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
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
      <div className="relative h-screen overflow-y-auto overflow-x-hidden">
        <AnimatePresence>
          {category?.video && (
            <motion.video
              playsInline
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 1,
              }}
              key={category.id}
              autoPlay
              poster="/assets/images/hero.webp"
              loop
              muted
              src={category.video}
              className="fixed top-0 left-0 h-screen w-full object-cover object-center "
            ></motion.video>
          )}
        </AnimatePresence>

        <AnimateSharedLayout>
          <div className="relative flex h-auto  w-full flex-col  text-white">
            <div className="h-auto min-h-[20vh] w-full flex-initial">
              <MenuHeader category={category} />
            </div>
            <div className="relative flex h-auto min-h-[60vh] w-full flex-auto items-center  justify-center">
              <MenuListMobile category={category} />
              <AnimatePresence>
                <AnimatePresence>
                  {!selectedItem ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 1, delay: 1 },
                      }}
                      exit={{ opacity: 0 }}
                      className="m-auto hidden h-full w-full items-center justify-center xl:flex"
                    >
                      <p className=" max-w-lg text-center font-Cinzel text-2xl md:max-w-2xl">
                        {category.description}
                      </p>
                    </motion.div>
                  ) : (
                    <MenuItem item={selectedItem} />
                  )}
                </AnimatePresence>
              </AnimatePresence>
            </div>
            <div className="hidden h-auto min-h-[20vh] w-full  flex-initial lg:block ">
              <MenuBottomBar
                category={category}
                setSelectedItem={(item) => setSelectedItem(item)}
              />
            </div>
          </div>
        </AnimateSharedLayout>
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
