import express from "express";

const book = express();
book.use(express.json());

import { AddBook } from "../controllers/book-controller";
import bookValidate from "../middleware/book-middleware";

book.post('/book/create', bookValidate, AddBook);
book.get('/book/:id');
book.get('/books');
book.put('/book/update/:id');
book.delete('/book/delete/:id');

export default book;