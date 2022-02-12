import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { QuickMenu, QuickMenuMobile } from './QuickMenu'

type Props = {
  children: ReactNode
  title: string
  description: string
}

const variants = {
  hidden: { opacity: 0, y: '100%' },
  enter: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: '50', transition: { duration: 1 } },
}

const Layout = ({ children, title, description }: Props): JSX.Element => (
  <div>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      className="relative h-full w-full "
    >
      {children}
      <QuickMenu />
      <QuickMenuMobile />
    </motion.main>
  </div>
)

export default Layout
