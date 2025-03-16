'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import classNames from 'classnames';
import {countLinks} from '../model/helpers/countLinks';
import cls from './PaginationBlock.module.scss';
import Image from 'next/image';

interface PaginationBlockProps {
    page: number;
    pages: number;
}

export const PaginationBlock = (props: PaginationBlockProps) => {
    const {pages, page} = props;
    const path = usePathname();

    const linksTitle: (undefined | number | string)[] = countLinks(pages, page);

    return (
        <div className={cls.wrap}>
            {page !== 1 && (
                <Link
                    href={`${path}?page=${page - 1}`}
                    className={cls.arrow}
                >
                    <Image
                        className={cls.leftChevron}
                        src={'/arrow_down.svg'}
                        alt="arrow"
                        width={32}
                        height={32}
                    />
                </Link>
            )}
            <ul className={cls.buttonWrap}>
                {linksTitle.map((item, index) =>
                    item === '...' ? (
                        <li
                            key={index}
                            className={cls.link}
                        >
                            {item}
                        </li>
                    ) : (item && page === item) || (!item && page === index + 1) ? (
                        <li
                            key={index}
                            className={classNames(cls.link, cls.activeLink)}
                        >
                            {item ? item : index + 1}
                        </li>
                    ) : (
                        <li key={index}>
                            <Link
                                href={`${path}?page=${item ? item : index + 1}`}
                                className={cls.link}
                            >
                                {item ? item : index + 1}
                            </Link>
                        </li>
                    )
                )}
            </ul>
            {page !== pages && (
                <Link
                    href={`${path}?page=${page + 1}`}
                    className={cls.arrow}
                >
                    <Image
                        className={cls.rightChevron}
                        src={'/arrow_down.svg'}
                        alt="arrow"
                        width={32}
                        height={32}
                    />
                </Link>
            )}
        </div>
    );
};
