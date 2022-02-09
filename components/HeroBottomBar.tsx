import { AnimatePresence, motion } from 'framer-motion'
import { MeatCategory } from '../data/interfaces'
import { Categories } from '../data/lists'

interface Props {
  setSelectedItem: (item: MeatCategory) => void
}

export default function HeroBottomBar({ setSelectedItem }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="relative mt-auto flex flex-row items-center justify-evenly bg-black bg-opacity-0 py-5 backdrop-blur-md sm:backdrop-blur-sm"
      >
        {Categories.map((category) => (
          <motion.div variants={item} key={category.id} className="text-white">
            <motion.button
              className=" my-2 sm:mx-10"
              type="button"
              title={category.title}
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              onClick={() => setSelectedItem(category)}
            >
              <p className=" font-Oswald text-base uppercase sm:text-2xl">
                {category.title}
              </p>
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
  hidden: { y: 200, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: 200 },
}
