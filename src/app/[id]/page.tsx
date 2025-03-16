import {Metadata} from 'next';
import {getRecipeById} from '@/helpers/actions/getRecipeById';
import {RecipePageView} from '@/views/RecipePageView';
import {getAllRecipes} from '@/helpers/actions/getAllRecipes';

interface RecipePageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    const data = await getAllRecipes();

    return data.map((item) => ({id: item.idMeal}));
}

export async function generateMetadata(props: RecipePageProps): Promise<Metadata> {
    const {id} = await props.params;
    const data = await getRecipeById(id);

    return {
        title: data.strMeal,
        description: data.strCreativeCommonsConfirmed,
        keywords: data.strTags,
    };
}

export default async function Recipe(props: RecipePageProps) {
    const {id} = await props.params;
    const data = await getRecipeById(id);

    return <RecipePageView data={data} />;
}
