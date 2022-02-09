import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroHeader() {
  return (
    <div className="relative top-0 left-0 z-[5] flex h-auto w-full items-center justify-center bg-black bg-opacity-0 pt-5 backdrop-blur-sm">
      <motion.ul
        variants={container}
        animate="show"
        initial="hidden"
        exit={'hidden'}
        className=" flex flex-initial list-none flex-col items-center gap-5 font-Oswald text-base font-thin uppercase text-white sm:flex-row  "
      >
        {linksLeft.map((link, index) => (
          <motion.li
            variants={item}
            whileHover="hover"
            key={index}
            className="scale-100 transition-all duration-200 hover:scale-125"
          >
            <Link href={link.path} passHref>
              <a>{link.title}</a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        className="relative  mx-10  h-32 w-32 bg-clip-content"
      >
        <Image src={'/assets/images/logo.png'} alt="" layout="fill" />
      </motion.div>
      <motion.ul
        variants={container}
        animate="show"
        initial="hidden"
        exit={'hidden'}
        custom={-1}
        className=" flex flex-initial list-none flex-col items-center gap-5 font-Oswald text-base font-thin uppercase text-white sm:flex-row"
      >
        {linksRight.map((link, index) => (
          <motion.li
            variants={item}
            key={index}
            whileHover="hover"
            className="scale-100 transition-all duration-200 hover:scale-125"
          >
            <Link href={link.path} passHref>
              <motion.a>{link.title}</motion.a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

const linksLeft = [
  { title: 'Home', path: '#home' },
  { title: 'Menu', path: '#menu' },
  { title: 'Services', path: '#services' },
]
const linksRight = [
  { title: 'Gallery', path: '#gallery' },
  { title: 'Contact', path: '#contact' },
  { title: 'About', path: '#about' },
]

const container = {
  hidden: (direction: number = 1) => ({
    opacity: 0,
    x: 100 * direction,
  }),
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      staggerChildren: 0.35,
      delayChildren: 1,
    },
  },
  exit: {},
}

const item = {
  hidden: { scale: 0.5 },
  show: { scale: 1, transition: { duration: 1 } },
  hover: {},
  exit: { scale: 0.5 },
}
