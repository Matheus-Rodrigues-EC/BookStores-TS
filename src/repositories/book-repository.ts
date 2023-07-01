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