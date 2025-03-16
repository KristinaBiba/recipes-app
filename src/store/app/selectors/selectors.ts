import {IStateSchema} from '@/store/config/types/store';

const getRecipes = (state: IStateSchema) => state.app.recipes;
const getMealsInWishlist = (state: IStateSchema) => state.app.mealsInWishlist;

export const appSelectors = {
    getRecipes,
    getMealsInWishlist,
};
