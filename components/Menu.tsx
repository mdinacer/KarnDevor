import { motion } from 'framer-motion'

interface Props {
  item: { id: number; title: string; animal: string }
  setSelectedItem: (value: any) => void
}

export default function Menu({ item, setSelectedItem }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        opacity: {
          duration: 0.5,
        },
      }}
      exit={{ opacity: 0, y: '100vh' }}
      className="my-auto h-[80vh] w-full overflow-y-auto overflow-x-hidden bg-white"
    >
      <motion.div className="absolute top-0 left-0 flex h-full w-full items-center justify-center  ">
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
            background: `url("/assets/images/${item.animal}.png"`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
          className="mx-auto h-40 w-40"
        />
      </motion.div>

      <button
        type="button"
        title="exit"
        className=" absolute top-0 right-0 z-[5] m-10  text-black"
        onClick={() => setSelectedItem(null)}
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </motion.div>
  )
}
