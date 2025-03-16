import {MealInter} from '@/lib/types/type';

export async function getSearchRecipe(url: string): Promise<MealInter[] | string> {
    const res: {meals: MealInter[] | string} = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/${url}`, {}).then((r) => r.json());

    return res.meals;
}
