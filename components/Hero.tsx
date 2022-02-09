import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { MeatCategory } from '../data/intefaces'
import { Categories } from '../data/lists'
import Menu from './Menu'

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState<MeatCategory | null>(null)

  return (
    <motion.div className="relative flex h-screen w-full flex-col bg-[#2C3333]">
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
            className="absolute top-0 left-0  h-full w-full bg-[url('https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center mix-blend-overlay"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedItem?.video && (
          <motion.video
            playsInline
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            key={selectedItem.id}
            autoPlay
            loop
            muted
            src={selectedItem.video}
            className="absolute top-0 left-0 h-full w-full object-cover object-center mix-blend-overlay"
          ></motion.video>
        )}
      </AnimatePresence>

      <div className=" flex h-auto w-full items-center justify-center py-10">
        <motion.ul className=" flex flex-initial list-none flex-col items-center gap-5 font-Oswald text-base font-thin uppercase text-white sm:flex-row">
          <motion.li className=" list-item">Home</motion.li>
          <motion.li className=" list-item">Menu</motion.li>
          <motion.li className=" list-item">Services</motion.li>
          <motion.li className=" list-item">
            <div className="relative  h-32  w-32 bg-clip-content">
              <Image src={'/assets/images/logo.png'} alt="" layout="fill" />
            </div>
          </motion.li>
          <motion.li className=" list-item">Gallery</motion.li>
          <motion.li className=" list-item">Contact</motion.li>
          <motion.li className=" list-item">About</motion.li>
        </motion.ul>
      </div>
      <AnimatePresence>
        {!selectedItem ? (
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{
              duration: 1,
              delay: 1,
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
              <p className="max-w-md text-center font-Cinzel">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                exercitationem laudantium consequuntur commodi qui repellat at
                dolorum.
              </p>
              <div className="my-5">
                <button
                  type="button"
                  title="close"
                  onClick={() => setSelectedItem(null)}
                >
                  <div className="flex flex-row items-center gap-5 rounded-md border px-3 opacity-40 transition-all duration-200 hover:opacity-100">
                    <p className=" font-Montserrat text-sm uppercase">Hide</p>
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
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <motion.div className="relative mt-auto flex flex-row items-center justify-evenly py-10">
          {Categories.map((category) => (
            <div key={category.id} className="text-white">
              <motion.button
                type="button"
                title={category.title}
                onClick={() => setSelectedItem(category)}
              >
                <p className=" font-Oswald text-2xl uppercase">
                  {category.title}
                </p>
              </motion.button>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

const meatListContainer = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const meatListItemBg = {
  hidden: { opacity: 0 },
  show: {
    opacity: 0,
  },
  hover: {
    opacity: 0.5,
  },
  exit: { opacity: 0 },
}

const meatListItemText = {
  hidden: { opacity: 0, y: 300 },
  hover: {},
  show: {
    opacity: 1,
    y: 0,
    transition: {},
  },
  exit: {},
}
