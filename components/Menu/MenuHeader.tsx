import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MeatCategory } from '../../data/interfaces'

interface Props {
  category: MeatCategory
}

export default function MenuHeader({ category }: Props) {
  return (
    <div className="relative pt-10 sm:pt-0">
      <Link href={'/'} passHref>
        <a
          title="Home"
          className=" absolute top-0 left-0 flex  flex-row gap-2 rounded-br-lg bg-white bg-opacity-20 px-5 py-2 pr-5 font-Montserrat uppercase backdrop-blur-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Home
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <Link href={'/'} passHref>
          <a title="Home" className="">
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
      </div>
    </div>
  )
}

const titleVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 },
  },
  exit: {},
}
