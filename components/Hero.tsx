import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { MeatCategory } from '../data/intefaces'
import { Categories } from '../data/lists'
import HeroHeader from './HeroHeader'
import Menu from './Menu'

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
            className="absolute top-0 left-0  h-full w-full bg-[url('/assets/images/hero.jpeg')] bg-cover bg-center mix-blend-screen"
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
            poster="/assets/images/hero.jpeg"
            loop
            muted
            src={selectedItem.video}
            className="mix-blend- absolute top-0 left-0 h-full w-full object-cover object-center "
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
              <p className=" font-Cinzel text-4xl">Welcome to</p>
              <h1 className="">
                <span className="font-CinzelDeco text-9xl">K</span>
                <span className="font-CinzelDeco text-7xl">arn</span>
                <span className="font-CinzelDeco text-9xl">D</span>
                <span className="font-CinzelDeco text-7xl">evor</span>
              </h1>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={selectedItem.id}
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="absolute top-0 left-0 mx-auto flex h-full w-full items-center justify-center "
          >
            <div className=" text-center text-white">
              <p className=" font-Cinzel text-4xl">Taste our</p>
              <h1 className="font-CinzelDeco text-9xl">{selectedItem.title}</h1>
              <p className="mx-auto max-w-md text-center font-Cinzel">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                exercitationem laudantium consequuntur commodi qui repellat at
                dolorum.
              </p>
              <div className="my-5">
                <button
                  type="button"
                  title="close"
                  className="rounded-full border p-5 opacity-40 transition-all duration-300 hover:opacity-100"
                  onClick={() => setSelectedItem(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="relative mt-auto flex flex-row items-center justify-evenly bg-black bg-opacity-0 py-10 py-10 backdrop-blur-sm"
        >
          {Categories.map((category) => (
            <motion.div
              variants={item}
              key={category.id}
              className="text-white"
            >
              <motion.button
                type="button"
                title={category.title}
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                onClick={() => setSelectedItem(category)}
              >
                <p className=" font-Oswald text-2xl uppercase">
                  {category.title}
                </p>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
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
