export type Book = {
    id: number,
    title: string, 
    author: string, 
    genre: string, 
    year_publication: number, 
    pages: number, 
    price: number
}

export type CreateBook = Omit<Book, 'id'>