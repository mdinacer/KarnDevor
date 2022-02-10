import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { MeatCategory } from '../../data/interfaces'

interface Props {
  category: MeatCategory
}

export default function MenuListMobile({ category }: Props) {
  return (
    <AnimatePresence>
      <motion.div className="flex flex-col gap-5 py-10 lg:hidden">
        {category.items.map((item) => (
          <motion.div
            key={item.id}
            className="relative my-auto h-[30vh] w-full "
          >
            <div className="relative h-1/2 w-full">
              <Image
                src={item.image}
                alt="menuItem"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className=" transition-all sm:grayscale-50 sm:hover:grayscale-0"
              />
            </div>
            <div className=" mx-auto w-auto max-w-sm">
              <p className=" font-Oswald text-3xl">{item.title}</p>
              <p className=" font-Montserrat">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
