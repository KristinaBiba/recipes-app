import {CategoriesInter} from '@/lib/types/type';

export async function getAllCategories(): Promise<CategoriesInter[]> {
    const res: {categories: CategoriesInter[]} = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/categories.php`).then((r) => r.json());
    return res.categories;
}
