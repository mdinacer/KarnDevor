export interface MeatCategory {
    id: number;
    title: string;
    logo: string;
    image: string;
    video: string | null;
    items: CategoryItem[];
    description: string;
}


export interface CategoryItem {
    id: number;
    title: string;
    image: string;
    description: string;
}