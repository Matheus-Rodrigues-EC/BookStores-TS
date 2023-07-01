import { Request, Response } from "express";
import { createBook, readBooks, maxCount, readBook } from "../repositories/book-repository";
import { CreateBook } from "protocols/book-protocol";
import { testDataBook, RandomizeId } from "../services/book-service";

export async function AddBook(req: Request, res: Response){

    const Book: CreateBook = req.body as CreateBook

    if(!testDataBook(Book)) return res.sendStatus(400);

    try {
        await createBook(Book);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

export async function GetBooks(req: Request, res: Response){
    try {
        const booksList = await readBooks();
        return res.status(200).send(booksList);
    } catch (error) {
        return res.status(500).send(error);
    }
}

export async function RandonBook(req: Request, res: Response){

    try {
        const max = await maxCount();
        const id = RandomizeId(max);
        
        const book = await readBook(id);
        
        return res.status(200).send(book);

    } catch (error) {
        return res.status(500).send(error)
    }
}