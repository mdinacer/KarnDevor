import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
  logoVisible: boolean
}

export default function HeroHeader({ logoVisible }: Props) {
  return (
    <AnimatePresence>
      <div className="relative top-0 left-0 z-[5] flex h-auto w-full items-center justify-center bg-black bg-opacity-0 pt-5 backdrop-blur-md sm:backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 p-5 pt-14 sm:pt-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            className="relative  mx-10  h-32 w-32 bg-clip-content"
          >
            <Image
              priority
              src={'/assets/images/logo.webp'}
              alt=""
              layout="fill"
            />
          </motion.div>

          {logoVisible && (
            <motion.div layoutId="logoLayout" className=" text-white">
              <h1 className="">
                <span className="font-CinzelDeco text-4xl sm:text-5xl">K</span>
                <span className="font-CinzelDeco text-3xl sm:text-3xl">
                  arn
                </span>
                <span className="font-CinzelDeco text-4xl sm:text-5xl">D</span>
                <span className="font-CinzelDeco text-3xl sm:text-3xl">
                  evor
                </span>
              </h1>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  )
}
