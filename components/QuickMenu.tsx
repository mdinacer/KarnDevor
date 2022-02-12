import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export function QuickMenu() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        style={{
          backgroundColor: isVisible ? 'rgba(0,0,0,.7)' : 'rgba(0,0,0,.1)',
        }}
        initial={'hidden'}
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ stiffness: 280, duration: 0.4 }}
        className="fixed top-0 z-10 hidden h-full w-full  overflow-x-hidden overflow-y-scroll py-10  sm:flex"
      >
        <div className="relative mx-auto my-auto flex  h-auto w-auto flex-col justify-evenly rounded-md  p-14  text-white backdrop-blur-sm ">
          <div className="mx-auto max-w-2xl flex-initial px-5">
            <p className=" text-center font-Oswald text-3xl leading-loose">
              About
            </p>
            <p className=" mx-auto w-full pb-2 text-left font-Montserrat text-base font-thin leading-relaxed">
              Hi, I&apos;m, Mohammedi Abdenasser, a web developer, based in
              Algeria.
              <br /> I started coding late 2014, but my love for coding started
              at early age when I started coding with Pascal and Delphi 2.
              <br /> I Have always been fascinated by complex yet clean code,
              but Also by beautiful and elegant user interface Design.
            </p>
            <p className=" text-center font-Oswald text-3xl leading-loose">
              Note
            </p>
            <p className=" mx-auto w-full text-left font-Montserrat text-base font-thin leading-relaxed">
              Background images are downloaded from www.pexel.com.
              <br />
              PNG Images (animals and dishes images), are downloaded from
              www.pngegg.com and are used as placeholders for presentation
              purpose. (commercial use not allowed).
            </p>
          </div>
          <div className="mx-auto flex w-full  max-w-2xl flex-initial flex-col gap-4 px-5">
            <p className=" text-center font-Oswald text-3xl leading-loose">
              Contact
            </p>

            <a
              href="tel:+213 662 991 735"
              className=" flex flex-row justify-between"
            >
              <span className=" font-Oswald text-xl uppercase">Phone</span>
              <span className="text-center font-Montserrat text-xl">
                +213 662 991 735
              </span>
            </a>
            <a
              href="mailto:mdi.nacer@outlook.com"
              className=" flex flex-row justify-between"
            >
              <span className=" font-Oswald text-xl uppercase">Email</span>
              <span className="text-center font-Montserrat text-xl">
                mdi.nacer@outlook.com
              </span>
            </a>

            <p className=" flex flex-row items-end justify-between font-Montserrat text-xl uppercase">
              <span className=" font-Oswald text-xl uppercase">Follow us</span>
              {followLinks.map(({ title, path }, index) => (
                <a key={index} href={path} target={'_blank'} rel="noreferrer">
                  {title}
                </a>
              ))}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          title="show menu"
          className="fixed right-0 bottom-0 m-auto ml-auto flex h-auto w-auto items-center justify-center rounded-b-lg p-2   text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              animate={{ rotate: isVisible ? 180 : 0 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export function QuickMenuMobile() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <AnimatePresence>
      <motion.div
        style={{
          backgroundColor: isVisible ? 'rgba(0,0,0,.7)' : 'transparent',
        }}
        variants={containerMobile}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ stiffness: 280, duration: 0.4 }}
        className="fixed top-0 z-10 flex h-full w-full overflow-x-hidden  overflow-y-scroll bg-opacity-5  py-10 drop-shadow-lg backdrop-blur-lg sm:hidden "
      >
        {isVisible && (
          <div className="relative flex h-auto w-full flex-col items-center justify-evenly  p-6 text-white">
            <div className="max-w-sm flex-initial px-5">
              <p className=" text-center font-Oswald text-3xl leading-loose">
                About
              </p>
              <p className=" mx-auto w-full pb-2 text-left font-Montserrat text-base font-thin leading-relaxed">
                Hi, I&apos;m, Mohammedi Abdenasser, a web developer, based in
                Algeria.
                <br /> I started coding late 2014, but my love for coding
                started at early age when I started coding with Pascal and
                Delphi 2.
                <br /> I Have always been fascinated by complex yet clean code,
                but Also by beautiful and elegant user interface Design.
              </p>
              <p className=" text-center font-Oswald text-3xl leading-loose">
                Note
              </p>
              <p className=" mx-auto w-full text-left font-Montserrat text-base font-thin leading-relaxed">
                Background images are downloaded from www.pexel.com.
                <br />
                PNG Images (animals and dishes images), are downloaded from
                www.pngegg.com and are used as placeholders for presentation
                purpose. (commercial use not allowed).
              </p>
            </div>
            <div className="flex w-full max-w-sm flex-initial flex-col gap-4 px-5">
              <p className=" text-center font-Oswald text-3xl leading-loose">
                Contact
              </p>

              <a
                href="tel:+213 662 991 735"
                className=" flex flex-row justify-between"
              >
                <span className=" font-Oswald text-xl uppercase">Phone</span>
                <span className="text-center font-Montserrat text-xl">
                  +213 662 991 735
                </span>
              </a>
              <a
                href="mailto:mdi.nacer@outlook.com"
                className=" flex flex-row justify-between"
              >
                <span className=" font-Oswald text-xl uppercase">Email</span>
                <span className="text-center font-Montserrat text-xl">
                  mdi.nacer@outlook.com
                </span>
              </a>

              <p className=" font-Oswald text-xl uppercase">Follow us</p>
              <p className=" flex flex-row items-center justify-between font-Montserrat text-base uppercase">
                {followLinks.map(({ title, path }, index) => (
                  <a key={index} href={path} target={'_blank'} rel="noreferrer">
                    {title}
                  </a>
                ))}
              </p>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          title="show menu"
          className="absolute left-0 bottom-0 m-auto flex h-auto w-full items-center justify-center pb-2  text-white opacity-70"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              animate={{ rotate: isVisible ? 180 : 0 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

const container = {
  hidden: { y: '-95%', opacity: 0.3 },
  visible: { y: 0, opacity: 1 },
}

const containerMobile = {
  hidden: { y: '-96vh', opacity: 0.4 },
  visible: { y: 0, opacity: 1 },
}

const followLinks = [
  { title: 'Facebook', path: 'https://www.facebook.com/mdi.nacer.5' },
  { title: 'Instagram', path: 'https://www.instagram.com/poyzonous/' },
  {
    title: 'Linkedin',
    path: 'https://www.linkedin.com/in/mohammedi-abdenasser/',
  },
]
