import type {Metadata} from 'next';
import Link from 'next/link';
import {Header} from '@/components/Header';
// import {StoreProvider} from '@/store';
import {Raleway, Montserrat_Alternates} from 'next/font/google';
import './globals.css';

const montserrat = Montserrat_Alternates({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-montserrat',
    weight: ['500', '600'],
    display: 'block',
});
const raleway = Raleway({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-raleway',
    weight: ['400', '500', '700'],
    display: 'block',
});

export const metadata: Metadata = {
    title: 'Recipes app',
    description: 'Delicious recipes from around the world',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <StoreProvider>
        <html lang="en">
            <body className={`${montserrat.variable} ${raleway.variable}`}>
                <div className="body-container">
                    <Header />
                    <main>{children}</main>
                    <footer>
                        <Link href="/">Recipes</Link>
                    </footer>
                </div>
            </body>
        </html>
        // </StoreProvider>
    );
}
