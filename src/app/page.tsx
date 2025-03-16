import {HomePageView} from '@/views/HomePage';
import {getAllRecipes} from '@/helpers/actions/getAllRecipes';
import {getAllCategories} from '@/helpers/actions/getAllCategories';

export default async function Home() {
    const data = await getAllRecipes();
    const categories = await getAllCategories();

    return (
        <HomePageView
            data={data}
            categories={categories}
        />
    );
}
