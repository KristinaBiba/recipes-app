'use client';
import {createSlice} from '@reduxjs/toolkit';
import {IAppSchema} from '../types/app';

const initialState: IAppSchema = {
    recipes: null,
    mealsInWishlist: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // addRecipes: (state, action: PayloadAction<Record<string, boolean>>) => {
        //     if (state.recipes) {
        //         state.recipes.push(action.payload);
        //     } else state.recipes = [action.payload];
        // },
        // setMealsInWishlist: (state, action: PayloadAction<string[] | undefined>) => {
        //     state.mealsInWishlist = action.payload;
        // },
        // addMealsInWishlist: (state, action: PayloadAction<string>) => {
        //     if (state.mealsInWishlist) {
        //         state.mealsInWishlist.push(action.payload);
        //     } else state.mealsInWishlist = [action.payload];
        // },
        // removeMealsInWishlist: (state, action: PayloadAction<string>) => {
        //     if (state.mealsInWishlist) {
        //         state.mealsInWishlist = state.mealsInWishlist.filter((item) => item !== action.payload);
        //     } else state.mealsInWishlist = [];
        // },
    },
});

export const {actions: appActions, reducer: appReducer} = appSlice;
