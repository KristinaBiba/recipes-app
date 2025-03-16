import {MealInter} from '@/lib/types/type';

export async function getRecipeById(id: string): Promise<MealInter> {
    const res: {meals: MealInter[]} = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/lookup.php?i=${id}`).then((r) => r.json());
    return res.meals[0];
}
