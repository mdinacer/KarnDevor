import { motion } from 'framer-motion'
import Link from 'next/link'
import { MeatCategory } from '../../data/interfaces'

interface Props {
  item: MeatCategory
}

export default function HeroCategoryItem({ item }: Props) {
  return (
    <>
      <motion.div
        key={`image${item.id}`}
        className="absolute top-0 left-0 flex h-full w-full  items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.5,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.4, 1, 5],
          }}
          transition={{
            delay: 1,
            scale: { duration: 1, times: [0, 0.3, 1] },
            opacity: { duration: 1, times: [0, 0.3, 1] },
          }}
          style={{
            background: `url("/assets/images/${item.logo}"`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
          className="mx-auto h-24 w-24 mix-blend-screen grayscale sm:h-40 sm:w-40"
        ></motion.div>
      </motion.div>
      <motion.div
        key={`text${item.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -500 }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="relative mx-auto flex h-full w-full items-end justify-center self-end pb-20 sm:items-center  sm:self-center sm:pb-0 "
      >
        <div className=" select-none rounded-2xl bg-black bg-opacity-5 px-5 py-5 text-center text-white sm:backdrop-blur-sm  lg:px-7">
          <p className=" hidden font-Cinzel text-2xl sm:text-4xl">Taste our</p>
          <h1 className="font-CinzelDeco text-7xl leading-normal sm:text-9xl">
            {item.title}
          </h1>
          <p className="mx-auto max-w-md pt-0 text-left font-Montserrat text-base sm:max-w-md sm:pt-2 sm:text-center">
            {item.description}
          </p>
          <div className="my-5  ">
            <Link href={`/menu/${item.slug}`} passHref>
              <a
                type="button"
                title="View details"
                className="rounded-full border border-[#B33030] bg-[#B33030] p-5 opacity-100 transition-all duration-300 hover:bg-opacity-100 sm:bg-opacity-50"
              >
                <motion.svg
                  animate={{
                    scale: [1, 1.2],
                    transition: { repeat: Infinity, repeatType: 'reverse' },
                  }}
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
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </motion.svg>
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}
