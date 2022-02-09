import { CategoryItem, MeatCategory } from './intefaces'

const items: CategoryItem[] = [
  {
    id: 1,
    title: 'Dish 1',
    image: '/assets/dishes/dish1.png',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    title: 'Dish 2',
    image: '/assets/dishes/dish2.png',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    title: 'Dish 3',
    image: '/assets/dishes/dish3.png',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 4,
    title: 'Dish 4',
    image: '/assets/dishes/dish4.png',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 5,
    title: 'Dish 5',
    image: '/assets/dishes/dish5.png',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 6,
    title: 'Dish 6',
    image: '/assets/dishes/dish6.png',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 7,
    title: 'Dish 7',
    image: '/assets/dishes/dish7.png',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 8,
    title: 'Dish 8',
    image: '/assets/dishes/dish8.png',
    description: 'Lorem ipsum dolor sit amet.',
  },
]

export const Categories: MeatCategory[] = [
  {
    id: 1,
    title: 'Lamb',
    logo: 'wolf',
    image:
      'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Lorem ipsum dolor sit amet.',
    video:
      'https://vod-progressive.akamaized.net/exp=1644422995~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4365%2F14%2F371829869%2F1544239560.mp4~hmac=7cb3ef4cc270d30acafaea1e1bddd0f13a1bacd77ec6c46b4be5b67e2f22b2f6/vimeo-prod-skyfire-std-us/01/4365/14/371829869/1544239560.mp4?download=1&filename=video.mp4',
    items: [],
  },
  {
    id: 2,
    title: 'Beef',
    logo: 'lion',
    image:
      'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Lorem ipsum dolor sit amet.',
    video:
      'https://vod-progressive.akamaized.net/exp=1644424223~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F765%2F20%2F503827444%2F2303415452.mp4~hmac=63cf117ad3e207eea55a87a265b8b756d3934c0e4910c954ea29dfc433c96df4/vimeo-prod-skyfire-std-us/01/765/20/503827444/2303415452.mp4?download=1&filename=pexels-denys-gromov-6577406.mp4',
    items: items,
  },
  {
    id: 3,
    title: 'Fish',
    logo: 'bear',
    image:
      'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Lorem ipsum dolor sit amet.',
    video:
      'https://vod-progressive.akamaized.net/exp=1644423405~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2309%2F19%2F486547470%2F2179986824.mp4~hmac=2330b2f319d43c133587598cbd2ed87ef32ef15c0ee4c58fa98053c5e5735b03/vimeo-prod-skyfire-std-us/01/2309/19/486547470/2179986824.mp4?download=1&filename=pexels-mohammad-taqi-6058156.mp4',
    items: [],
  },
  {
    id: 4,
    title: 'Poultry',
    logo: 'eagle',
    image:
      'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'Lorem ipsum dolor sit amet.',
    video:
      'https://vod-progressive.akamaized.net/exp=1644424337~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2568%2F19%2F487842996%2F2187304976.mp4~hmac=ce8bf9873e6c4f4ffd5106a5e15d26f0c82931024e5c6258ce3ee0437b11fde4/vimeo-prod-skyfire-std-us/01/2568/19/487842996/2187304976.mp4?download=1&filename=pexels-alleksana-6107299.mp4',
    items: [],
  },
]
