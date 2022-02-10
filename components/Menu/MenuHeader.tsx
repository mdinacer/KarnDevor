import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MeatCategory } from '../../data/interfaces'

interface Props {
  category: MeatCategory
}

export default function MenuHeader({ category }: Props) {
  return (
    <>
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
              <span className="font-CinzelDeco text-xl sm:text-2xl">evor</span>
            </p>
          </div>
        </a>
      </Link>
      <AnimatePresence>
        <motion.p
          variants={titleVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="relative px-5
               text-center font-CinzelDeco text-7xl  sm:text-9xl"
        >
          {category.title}
        </motion.p>
      </AnimatePresence>
    </>
  )
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
