import { CategoryItem, MeatCategory } from './intefaces'

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
    description: 'Lorem ipsum dolor sit amet.',
    video: '/assets/videos/lamb.mp4',
    items: [],
  },
  {
    id: 2,
    title: 'Beef',
    logo: 'lion.webp',
    image: '',
    description: 'Lorem ipsum dolor sit amet.',
    video: '/assets/videos/beef.mp4',
    items: items,
  },
  {
    id: 3,
    title: 'Fish',
    logo: 'bear.webp',
    image: '',
    description: 'Lorem ipsum dolor sit amet.',
    video: '/assets/videos/fish.mp4',
    items: [],
  },
  {
    id: 4,
    title: 'Poultry',
    logo: 'eagle.webp',
    image: '',
    description: 'Lorem ipsum dolor sit amet.',
    video: '/assets/videos/poultry.mp4',
    items: [],
  },
]
