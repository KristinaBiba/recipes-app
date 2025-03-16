import {MealInter} from '@/lib/types/type';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export async function getAllRecipes(): Promise<MealInter[]> {
    const allRecipes: MealInter[] = [];

    await Promise.all(
        alphabet.map(async (letter) => {
            const res: {meals: MealInter[]} = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/search.php?f=${letter}`).then((r) => r.json());
            if (res.meals) allRecipes.push(...res.meals);
        })
    );
    return allRecipes;
}
