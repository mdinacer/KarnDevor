import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { CategoryItem, MeatCategory } from '../../data/interfaces'

interface Props {
  setSelectedItem: (item: CategoryItem | null) => void
  category: MeatCategory
}

export default function MenuBottomBar({ setSelectedItem, category }: Props) {
  return (
    <AnimatePresence>
      <div className="relative my-auto grid h-full grid-flow-row gap-10 px-5 sm:grid-flow-col">
        {category.items.map((item) => (
          <motion.button
            initial={{ scale: 0.8, y: 0 }}
            whileHover={{ scale: 1.3, y: -100 }}
            key={item.id}
            type="button"
            className=""
            onClick={() => setSelectedItem(item)}
            title={item.title}
          >
            <motion.div
              transition={{ duration: 0.4 }}
              className="relative my-auto h-[18vh] w-full "
              layoutId={`dish${item.title}`}
            >
              <Image
                src={item.image}
                alt="menuItem"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className=" transition-all sm:grayscale-50 sm:hover:grayscale-0"
              />
            </motion.div>
          </motion.button>
        ))}
      </div>
    </AnimatePresence>
  )
}
