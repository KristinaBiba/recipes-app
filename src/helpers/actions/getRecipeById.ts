import {MealInter} from '@/lib/types/type';
import {notFound} from 'next/navigation';

export async function getRecipeById(id: string): Promise<MealInter> {
    const res: {meals: MealInter[] | string} = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/lookup.php?i=${id}`).then((r) => r.json());

    if (typeof res === 'string') return notFound();

    return res.meals[0];
}
