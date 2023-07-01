import { Request, Response } from "express";
import { createBook, readBooks, maxCount, readBook, putBook, deleteBook } from "../repositories/book-repository";
import { CreateBook } from "protocols/book-protocol";
import { testDataBook, RandomizeId, verifyId } from "../services/book-service";

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

export async function UpdateBook(req: Request, res: Response){

    const Book: CreateBook = req.body as CreateBook
    const id = Number(req.params.id);

    if(!verifyId(id)) return res.status(400).send("Id não identificado");

    if(!testDataBook(Book)) return res.sendStatus(400);

    try {
        await putBook(Book, id);
        return res.sendStatus(202);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

export async function RemoveBook(req: Request, res: Response){
    const id = Number(req.params.id);

    if(!verifyId(id)) return res.status(400).send("Id não identificado");

    try {
        await deleteBook(id);
        return res.sendStatus(202);
    } catch (error) {
        return res.status(500).send(error);
    }
}