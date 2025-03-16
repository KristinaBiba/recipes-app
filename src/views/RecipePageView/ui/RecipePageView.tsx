import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import {MealInter} from '@/lib/types/type';
import styles from './RecipePageView.module.scss';

interface RecipePageViewProps {
    data: MealInter;
}

export const RecipePageView = async (props: RecipePageViewProps) => {
    const {data} = props;

    const ingredients: string[] = [];
    const measures: string[] = [];

    for (const key in data) {
        const item = data[key as keyof MealInter];
        if (key.includes(`strIngredient`) && item) ingredients.push(item);
        if (key.includes(`strMeasure`) && item) measures.push(item);
    }

    const ingr: {ing: string; measure: string}[] = [];
    if (ingredients.length === measures.length) {
        ingredients.forEach((element, index) => {
            ingr.push({ing: element, measure: measures[index]});
        });
    }

    return (
        <section className={classNames('container', styles.section)}>
            <Link
                href={'/'}
                className={styles.linkToMain}
            >
                <Image
                    src={'/button_arrow.svg'}
                    alt="arrow"
                    width={32}
                    height={32}
                />
                Back to all recipes
            </Link>
            <h1>{data.strMeal}</h1>
            <div className={styles.contentWrap}>
                <Image
                    className={styles.img}
                    src={data.strMealThumb + '/large'}
                    alt={data.strMeal}
                    width={200}
                    height={0}
                />
                <div>
                    <div className={styles.flexWrap}>
                        <p className={styles.infoBlock}>{data.strArea}</p> <p className={styles.infoBlock}>{data.strCategory}</p>
                    </div>
                    <h2>Ingredients</h2>
                    <ul className={styles.ingrWrap}>
                        {ingr &&
                            ingr.map((item) => (
                                <li key={item.ing}>
                                    {item.ing}: {item.measure}
                                </li>
                            ))}
                    </ul>

                    <h3 className={styles.linkToYoutube}>
                        {'Watch video of '}
                        <Link
                            href={data.strYoutube}
                            target="_blank"
                        >
                            cooking process
                        </Link>
                    </h3>

                    <ul className={styles.flexWrap}>
                        {data.strTags &&
                            data.strTags.split(',').map((tag) => (
                                <li
                                    key={tag}
                                    className={styles.tag}
                                >
                                    {tag}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <h2>Instructions</h2>
            <p>{data.strInstructions}</p>
        </section>
    );
};
