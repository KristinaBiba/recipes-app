'use client';
import Image from 'next/image';
import {redirect} from 'next/navigation';
import styles from './HomePageView.module.scss';
import classNames from 'classnames';
import {CategoriesInter, MealInter} from '@/lib/types/type';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {PaginationBlock} from '@/components/PaginationBlock';

interface HomePageViewProps {
    data: MealInter[];
    categories: CategoriesInter[];
    page: string;
}

export const HomePageView = (props: HomePageViewProps) => {
    const {data, categories, page} = props;

    const tabs: CategoriesInter[] = [{strCategory: 'All', idCategory: 'all', strCategoryDescription: '', strCategoryThumb: ''}, ...categories];

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [filteredData, setFilteredData] = useState(data);

    const handleChangeTabs = (value: string) => {
        const newTab = tabs.filter((item) => item.strCategory === value)[0];
        setActiveTab(newTab);
        if (value === 'All') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((item) => item.strCategory === value));
        }
        redirect('/?page=1');
    };

    const [currentPageData, setCurrentPageData] = useState(data.slice(0, 10));

    useEffect(() => {
        setCurrentPageData(filteredData.slice((Number(page) - 1) * 10, Number(page) * 10 + 9));
    }, [filteredData, page]);

    return (
        <section className={classNames('container', styles.section)}>
            <h1>Recipes</h1>

            <ul className={styles.tabsWrap}>
                {tabs.map((tab) => (
                    <li key={tab.idCategory}>
                        <button
                            className={classNames(styles.button, {[styles.active]: tab.idCategory === activeTab.idCategory})}
                            onClick={() => handleChangeTabs(tab.strCategory)}
                        >
                            {tab.strCategory}
                        </button>
                    </li>
                ))}
            </ul>

            <ul className={styles.itemsWrap}>
                {currentPageData.map((item) => (
                    <li
                        key={item.idMeal}
                        className={styles.item}
                    >
                        <Link
                            href={`/${item.idMeal}`}
                            prefetch={false}
                            className={styles.link}
                        >
                            <div>
                                <Image
                                    className={styles.img}
                                    src={item.strMealThumb + '/large'}
                                    alt={item.strMeal}
                                    width={200}
                                    height={0}
                                />
                                <h2 className={styles.title}>{item.strMeal}</h2>
                            </div>
                            <div className={styles.flexWrap}>
                                <p className={styles.infoBlock}>{item.strCategory}</p>
                                <p className={styles.infoBlock}>{item.strArea}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            {Math.ceil(filteredData.length / 10) > 1 && (
                <PaginationBlock
                    pages={Math.ceil(filteredData.length / 10)}
                    page={Number(page)}
                />
            )}
        </section>
    );
};
