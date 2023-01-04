export interface prodacts {
    name: string,
    categoryId: number,
}

export interface categories {
    id: number
    name: string,
}

export interface type {
    categories: categories[]
    prodacts: prodacts[],
}