import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MeatCategory } from '../../data/interfaces'
import { Categories } from '../../data/lists'

interface Props {
  setSelectedItem: (item: MeatCategory) => void
}

export default function HeroBottomBar({ setSelectedItem }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<MeatCategory | null>(
    null
  )
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="relative mt-auto flex flex-row items-center overflow-hidden py-5 "
      >
        {Categories.map((category) => (
          <motion.div
            variants={item}
            key={category.id}
            style={{
              backgroundColor:
                selectedCategory?.id === category.id
                  ? 'rgba(255,255,255,.5)'
                  : 'rgba(255,255,255,.05)',
            }}
            className={
              'flex w-full flex-auto py-2 text-white backdrop-blur-md transition-all duration-700 lg:px-5'
            }
          >
            <motion.button
              className=" mx-auto w-auto flex-auto "
              type="button"
              title={category.title}
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              onClick={() => {
                setSelectedItem(category)
                setSelectedCategory(category)
              }}
            >
              <motion.p
                layoutId={`Hero${category.slug}`}
                className=" w-auto font-Oswald text-base  uppercase sm:text-2xl"
              >
                {category.title}
              </motion.p>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 2.5,
    },
  },
}

const item = {
  hidden: { y: -50, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: 200 },
}
