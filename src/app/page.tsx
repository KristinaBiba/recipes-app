import {HomePageView} from '@/views/HomePage';
import {getAllRecipes} from '@/helpers/actions/getAllRecipes';
import {getAllCategories} from '@/helpers/actions/getAllCategories';

interface HomeProps {
    searchParams: Promise<{
        page?: string;
    }>;
}

export default async function Home(props: HomeProps) {
    const {page = '1'} = await props.searchParams;
    const data = await getAllRecipes();
    const categories = await getAllCategories();

    return (
        <HomePageView
            data={data}
            categories={categories}
            page={page}
        />
    );
}
