import { CategoryItem, MeatCategory } from './interfaces'

const lambItems: CategoryItem[] = [
  {
    id: 1,
    title: 'Rack of Lamb',
    image: '/assets/images/menu/lamb/dish1.webp',
    calories: 356,
    fat: 28,
    carbs: 3,
    protein: 11,
    description:
      'Our succulent rack of lamb is roasted and served with an easy red wine and herb pan sauce that pairs beautifully with the gamy flavor of the lamb.',
  },
  {
    id: 2,
    title: 'Classic Roast Leg of Lamb',
    image: '/assets/images/menu/lamb/dish2.webp',
    calories: 854,
    fat: 58,
    carbs: 8,
    protein: 7,
    description:
      'The simple herb, lemon, and garlic marinade is all this great cut of lamb needs before it’s roasted to pink perfection.',
  },
  {
    id: 3,
    title: 'Lemongrass Lamb Chops',
    image: '/assets/images/menu/lamb/dish3.webp',
    calories: 310,
    fat: 5,
    carbs: 47,
    protein: 26,
    description:
      'Blend citrusy, aromatic lemongrass with classic Asian flavors, and marinate chops overnight for tons of intense flavor.',
  },
  {
    id: 4,
    title: 'Grilled Rack of Lamb',
    image: '/assets/images/menu/lamb/dish4.webp',
    calories: 356,
    fat: 28,
    carbs: 3,
    protein: 11,
    description:
      'Coat racks of lamb in a tangy herb-infused Dijon mustard and white wine marinade, and cook on a hot grill. Allowing enough time for the meat to marinate will result in tender, juicy lamb with lots of savory flavor.',
  },
]

const beefItems: CategoryItem[] = [
  {
    id: 1,
    title: 'Thai Waterfall Beef Salad',
    image: '/assets/images/menu/beef/dish1.webp',
    calories: 500,
    fat: 14,
    carbs: 65,
    protein: 34,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 2,
    title: 'Crockpot Barbecue Beef',
    image: '/assets/images/menu/beef/dish2.webp',
    calories: 500,
    fat: 14,
    carbs: 65,
    protein: 34,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 3,
    title: 'Beef Tenderloin',
    image: '/assets/images/menu/beef/dish3.webp',
    calories: 500,
    fat: 14,
    carbs: 65,
    protein: 34,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 4,
    title: 'Thai Satay',
    image: '/assets/images/menu/beef/dish4.webp',
    calories: 500,
    fat: 14,
    carbs: 65,
    protein: 34,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
]

const seafoodItems: CategoryItem[] = [
  {
    id: 1,
    title: 'Cioppino',
    image: '/assets/images/menu/seafood/dish1.webp',
    calories: 648,
    fat: 24,
    carbs: 24,
    protein: 69,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 2,
    title: 'Basque Seafood Stew',
    image: '/assets/images/menu/seafood/dish2.webp',
    calories: 648,
    fat: 24,
    carbs: 24,
    protein: 69,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 3,
    title: 'Seafood Paella',
    image: '/assets/images/menu/seafood/dish3.webp',
    calories: 648,
    fat: 24,
    carbs: 24,
    protein: 69,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 4,
    title: 'Seafood Bastilla With Shrimp',
    image: '/assets/images/menu/seafood/dish4.webp',
    calories: 648,
    fat: 24,
    carbs: 24,
    protein: 69,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
]

const poultryItems: CategoryItem[] = [
  {
    id: 1,
    title: 'Baked Turkey Wings',
    image: '/assets/images/menu/poultry/dish1.webp',
    calories: 198,
    fat: 12,
    carbs: 3,
    protein: 17,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 2,
    title: 'Sichuan Orange Chicken',
    image: '/assets/images/menu/poultry/dish2.webp',
    calories: 198,
    fat: 12,
    carbs: 3,
    protein: 17,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 3,
    title: 'Chimichurri Chicken',
    calories: 198,
    fat: 12,
    carbs: 3,
    protein: 17,
    image: '/assets/images/menu/poultry/dish3.webp',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
  {
    id: 4,
    title: 'Spatchcock Turkey',
    image: '/assets/images/menu/poultry/dish4.webp',
    calories: 198,
    fat: 12,
    carbs: 3,
    protein: 17,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa minus quisquam ipsa repellendus maiores asperiores eius. Commodi, asperiores consequuntur!',
  },
]

export const Categories: MeatCategory[] = [
  {
    id: 1,
    title: 'Lamb',
    slug: 'lamb',
    logo: 'wolf.webp',
    image: '/assets/images/menu/poultry/cover.webp',
    description: `We work with farmers who prefer things a little old-fashioned. If they raise sheep like the days of old, then that means we'll get along.`,
    video: '/assets/videos/lamb.mp4',
    items: lambItems,
  },
  {
    id: 2,
    slug: 'beef',
    title: 'Beef',
    logo: 'lion.webp',
    image: '/assets/images/menu/poultry/cover.webp',
    description:
      'Because cows are what they eat ... we offer the best grass-fed beef. No GMO-feed, antibiotics, or growth hormones, and we never compromise on quality.',
    video: '/assets/videos/beef.mp4',
    items: beefItems,
  },
  {
    id: 3,
    slug: 'seafood',
    title: 'Seafood',
    logo: 'bear.webp',
    image: '/assets/images/menu/poultry/cover.webp',
    description: `Our wild-caught seafood is so fresh and delicious you'll think you're eating this morning's catch right off the coast. Every bit of seafood we sell is supplied by Vital Choice and is certified sustainable and wild harvested. `,
    video: '/assets/videos/fish.mp4',
    items: seafoodItems,
  },
  {
    id: 4,
    slug: 'poultry',
    title: 'Poultry',
    logo: 'eagle.webp',
    image: '/assets/images/menu/poultry/cover.webp',
    description:
      'Better pastures. Better birds. Better taste. Our pastured poultry are raised on family farms based right here in the United States.',
    video: '/assets/videos/poultry.mp4',
    items: poultryItems,
  },
]
