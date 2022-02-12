export interface MeatCategory {
    id: number;
    slug: string;
    title: string;
    logo: string;
    video: string | null;
    items: CategoryItem[];
    description: string;
}


export interface CategoryItem {
    id: number;
    title: string;
    image: string;
    description: string;
    calories?: number;
    fat?: number;
    carbs?: number
    protein?: number;
}