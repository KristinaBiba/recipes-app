import {MealInter} from '@/lib/types/type';

export interface IAppSchema {
    mealsInWishlist: null | MealInter[];
    recipes: null | MealInter[];
}
