import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-auto w-full items-center justify-center py-10">
      <motion.ul className=" flex list-none flex-col items-center gap-5 font-Oswald text-base font-thin uppercase text-white sm:flex-row">
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
  )
}
