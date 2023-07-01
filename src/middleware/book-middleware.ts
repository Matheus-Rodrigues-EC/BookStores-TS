import { NextFunction, Request, Response } from "express";
import { bookSchema } from "../schemas/book-schema";
import { CreateBook } from "../protocols/book-protocol";

export default function bookValidate(req: Request, res: Response, next: NextFunction){
    const {title, author, genre, year_publication, pages, price} = req.body as CreateBook;

    if(bookSchema.validate(
        {   title: title, 
            author: author, 
            genre: genre, 
            year_publication: year_publication, 
            pages: pages, 
            price: price}).error != undefined){

        if(bookSchema.validate(
            {   title: title, 
                author: author, 
                genre: genre, 
                year_publication: year_publication, 
                pages: pages, 
                price: price}).error?.message === '"title" is not allowed to be empty'){
                    return res.status(422).send('O título não pode estar vazio');
                }
                
        if(bookSchema.validate(
            {   title: title, 
                author: author, 
                genre: genre, 
                year_publication: year_publication, 
                pages: pages, 
                price: price}).error?.message === '"author" is not allowed to be empty'){
                    return res.status(422).send('O nome do autor não pode estar vazio');
                }
                
        if(bookSchema.validate(
            {   title: title, 
                author: author, 
                genre: genre, 
                year_publication: year_publication, 
                pages: pages, 
                price: price}).error?.message === '"genre" is not allowed to be empty'){
                    return res.status(422).send('O gênero do livro não pode estar vazio');
                }
                
        if(bookSchema.validate(
            {   title: title, 
                author: author, 
                genre: genre, 
                year_publication: year_publication, 
                pages: pages, 
                price: price}).error?.message === '"year_publication" must be greater than or equal to 1000'){
                    return res.status(422).send('O ano de publicação do livro deve ser superior a 1000');
                }
                
        if(bookSchema.validate(
            {   title: title, 
                author: author, 
                genre: genre, 
                year_publication: year_publication, 
                pages: pages, 
                price: price}).error?.message === '"pages" must be greater than or equal to 1'){
                    return res.status(422).send('A quantidade de páginas do livro deve ser informada');
                }
                
        if(bookSchema.validate(
            {   title: title, 
                author: author, 
                genre: genre, 
                year_publication: year_publication, 
                pages: pages, 
                price: price}).error?.message === '"price" must be greater than or equal to 1'){
                    return res.status(422).send('O valor do livro deve ser informado');
                }
        
        return res.status(422).send('Todos os campos devem ser devidamente preenchidos');
    }

    next();
}