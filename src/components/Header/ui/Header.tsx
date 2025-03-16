'use client';
import {ChangeEvent, useEffect, useState} from 'react';
import Link from 'next/link';
import useSWRMutation from 'swr/mutation';
import {useDebouncedCallback} from 'use-debounce';
import {getSearchRecipe} from '../model/getSearchRecipe';
import {MealInter} from '@/lib/types/type';
import styles from './Header.module.scss';

export const Header = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [mealsData, setMealsData] = useState<MealInter[] | null>(null);

    const {trigger} = useSWRMutation(`search.php?f=${searchValue}`, getSearchRecipe);

    const debouncedFetchData = useDebouncedCallback(async () => {
        await trigger()
            .then((response) => {
                if (typeof response !== 'string') {
                    setMealsData(response);
                }
            })
            .catch((error) => console.log('catch', error));
    }, 500);

    useEffect(() => {
        if (searchValue.length > 0) debouncedFetchData();
        else setMealsData(null);
    }, [searchValue, debouncedFetchData]);

    return (
        <header className={styles.header}>
            <Link href="/">Recipes</Link>
            <div className={styles.inputWrap}>
                <input
                    value={searchValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                />
                {mealsData && (
                    <ul className={styles.result}>
                        {Array.isArray(mealsData) && mealsData.map((item) => <li key={item.idMeal}>{item.strMeal}</li>)}
                    </ul>
                )}
            </div>
        </header>
    );
};
