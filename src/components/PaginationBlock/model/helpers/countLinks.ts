export const countLinks = (pages: number, page: number): (string | number)[] => {
    if (pages < 7) return [...Array(pages)]
    if (page <= 4) return [1, 2, 3, 4, 5, '...', pages]
    if (page > 3 && page < pages - 3) return [1, '...', page - 1, page, page + 1, '...', pages]
    if (page >= pages - 3) return [1, '...', pages - 4, pages - 3, pages - 2, pages - 1, pages]
    return [...Array(pages)]
}
