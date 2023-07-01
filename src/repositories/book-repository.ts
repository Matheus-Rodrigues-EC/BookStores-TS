import { QueryResult } from "pg";
import { connection } from "../config/dataBase";
import { CreateBook } from "../protocols/book-protocol";

export async function createBook(Book: CreateBook) {
    
    const insert: string = `INSERT INTO books (title, author, genre, year_publication, pages, price) VALUES
    ($1, $2, $3, $4, $5, $6);`;

    await connection.query(insert, [Book.title, Book.author, Book.genre, Book.year_publication, Book.pages, Book.price]);

    return Book;
}

export async function readBooks(){
    const select: string = `SELECT * FROM books`;

    const list = await connection.query<CreateBook>(select);

    return list.rows;
}

export async function maxCount(){
    const select: string = `SELECT id FROM books`;

    const list = await connection.query<CreateBook>(select);

    return list.rowCount;
}

export async function readBook(id: number){
    const select: string = `SELECT * FROM books WHERE id = $1`;

    const book = await connection.query<CreateBook>(select, [id]);

    return book.rows[0];
}

export async function putBook(Book: CreateBook, id: number){
    const update: string = `UPDATE books SET title = $1, author = $2, genre = $3, 
                            year_publication = $4, pages = $5, price = $6 WHERE id = $7`;

    await connection.query(
        update, 
        [Book.title, Book.author, Book.genre, Book.year_publication, Book.pages, Book.price, id]
    )

    return Book;
}