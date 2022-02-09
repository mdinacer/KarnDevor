import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MeatCategory } from '../data/interfaces'
import HeroBottomBar from './HeroBottomBar'
import HeroCategoryItem from './HeroCategoryItem'
import HeroHeader from './HeroHeader'

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState<MeatCategory | null>(null)

  return (
    <motion.div className="relative flex h-screen w-full flex-col bg-[#000]">
      <AnimatePresence>
        {!selectedItem?.video && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            key="heroBg"
            className="absolute top-0 left-0  h-full w-full bg-[url('/assets/images/hero.webp')] bg-cover bg-center mix-blend-screen"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedItem?.video && (
          <motion.video
            playsInline
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            key={selectedItem.id}
            autoPlay
            poster="/assets/images/hero.webp"
            loop
            muted
            src={selectedItem.video}
            className="absolute top-0 left-0 h-full w-full object-cover object-center "
          ></motion.video>
        )}
      </AnimatePresence>

      <HeroHeader />

      <AnimatePresence>
        {!selectedItem ? (
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 1.5 },
            }}
            exit={{
              opacity: 0,
              x: 500,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
          >
            <div className=" text-white">
              <h1 className="">
                <span className="font-CinzelDeco text-7xl sm:text-9xl">K</span>
                <span className="font-CinzelDeco text-5xl sm:text-7xl">
                  arn
                </span>
                <span className="font-CinzelDeco text-7xl sm:text-9xl">D</span>
                <span className="font-CinzelDeco text-5xl sm:text-7xl">
                  evor
                </span>
              </h1>
              <p className="text-center font-CinzelDeco text-base sm:-translate-y-6 sm:text-right sm:text-2xl">
                Unleash the predator inside.
              </p>
            </div>
          </motion.div>
        ) : (
          <HeroCategoryItem
            item={selectedItem}
            setSelectedItem={(item) => setSelectedItem(item)}
          />
        )}
      </AnimatePresence>

      <HeroBottomBar setSelectedItem={(item) => setSelectedItem(item)} />
    </motion.div>
  )
}
