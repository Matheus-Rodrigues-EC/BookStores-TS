import Joi from "joi";
import { CreateBook } from "../protocols/book-protocol";

const bookSchema = Joi.object<CreateBook>({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    year_publication: Joi.number().min(1000).required(),
    pages: Joi.number().min(1).required(),
    price: Joi.number().min(1).required()
});

export { bookSchema };