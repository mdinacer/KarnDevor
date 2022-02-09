import { CategoryItem, MeatCategory } from './interfaces'

const items: CategoryItem[] = [
  {
    id: 1,
    title: 'Dish 1',
    image: '/assets/dishes/dish1.webp',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    title: 'Dish 2',
    image: '/assets/dishes/dish2.webp',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    title: 'Dish 3',
    image: '/assets/dishes/dish3.webp',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 4,
    title: 'Dish 4',
    image: '/assets/dishes/dish4.webp',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 5,
    title: 'Dish 5',
    image: '/assets/dishes/dish5.webp',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 6,
    title: 'Dish 6',
    image: '/assets/dishes/dish6.webp',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 7,
    title: 'Dish 7',
    image: '/assets/dishes/dish7.webp',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 8,
    title: 'Dish 8',
    image: '/assets/dishes/dish8.webp',
    description: 'Lorem ipsum dolor sit amet.',
  },
]

export const Categories: MeatCategory[] = [
  {
    id: 1,
    title: 'Lamb',
    logo: 'wolf.webp',
    image: '',
    description: `We work with farmers who prefer things a little old-fashioned. If they raise sheep like the days of old, then that means we'll get along.`,
    video: '/assets/videos/lamb.mp4',
    items: [],
  },
  {
    id: 2,
    title: 'Beef',
    logo: 'lion.webp',
    image: '',
    description:
      'Because cows are what they eat ... we offer the best grass-fed beef. No GMO-feed, antibiotics, or growth hormones, and we never compromise on quality.',
    video: '/assets/videos/beef.mp4',
    items: items,
  },
  {
    id: 3,
    title: 'Seafood',
    logo: 'bear.webp',
    image: '',
    description: `Our wild-caught seafood is so fresh and delicious you'll think you're eating this morning's catch right off the coast. Every bit of seafood we sell is supplied by Vital Choice and is certified sustainable and wild harvested. `,
    video: '/assets/videos/fish.mp4',
    items: [],
  },
  {
    id: 4,
    title: 'Poultry',
    logo: 'eagle.webp',
    image: '',
    description:
      'Better pastures. Better birds. Better taste. Our pastured poultry are raised on family farms based right here in the United States.',
    video: '/assets/videos/poultry.mp4',
    items: [],
  },
]
