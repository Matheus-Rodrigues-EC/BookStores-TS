import { Request, Response } from "express";
import { createBook } from "../repositories/book-repository";
import { CreateBook } from "protocols/book-protocol";
import { testDataBook } from "../services/book-service";

export async function AddBook(req: Request, res: Response){

    const Book: CreateBook = req.body as CreateBook

    if(!testDataBook(Book)) return res.sendStatus(400);

    try {
        await createBook(Book);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
}