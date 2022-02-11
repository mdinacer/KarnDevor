import { motion } from 'framer-motion'
import Image from 'next/image'
import { CategoryItem } from '../../data/interfaces'

interface Props {
  item: CategoryItem
}

export default function MenuItem({ item }: Props) {
  return (
    <motion.div
      key={`menu${item.id}`}
      className="relative mx-auto  hidden h-auto w-auto flex-row items-center justify-center bg-black bg-opacity-10 py-5 px-10 backdrop-blur-sm sm:flex"
    >
      <motion.div
        transition={{ duration: 0.6 }}
        layoutId={`dish${item.title}`}
        animate={{
          y: [5, -5],
          transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 3,
          },
        }}
        className="relative h-[30vh] w-[30vw]"
      >
        <Image
          src={item.image}
          layout="fill"
          alt="dish"
          objectFit="contain"
          objectPosition={'center'}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="relative my-auto h-auto w-auto"
      >
        <div className="flex flex-col gap-2">
          <p className=" font-CinzelDeco text-4xl leading-loose">
            {item.title}
          </p>
          <p className=" mb-3 max-w-lg font-Raleway text-base font-thin">
            {item.description}
          </p>
          <div className="flex flex-row items-end justify-start gap-5">
            <p>
              <span className="font-Raleway text-base uppercase">
                Calories:
              </span>
              <span className=" mx-2 font-Montserrat text-xl">
                {item.calories}
              </span>
            </p>
            <p>
              <span className="font-Raleway text-base uppercase">Fat:</span>
              <span className=" mx-2 font-Montserrat text-xl">{item.fat}g</span>
            </p>
            <p>
              <span className="font-Raleway text-base uppercase">Carbs:</span>
              <span className=" mx-2 font-Montserrat text-xl">
                {item.carbs}g
              </span>
            </p>
            <p>
              <span className="font-Raleway text-base uppercase">Protein:</span>
              <span className=" mx-2 font-Montserrat text-xl">
                {item.protein}g
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
