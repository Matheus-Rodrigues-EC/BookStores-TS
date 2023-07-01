import { CreateBook } from "../protocols/book-protocol";

export function testDataBook(Book: CreateBook){
    if(Book.title === "" || Book.author === "" || Book.genre === "") return false;
    if(Book.pages === 0 || Book.pages === 0 || Book.price === 0) return false;
    return true
}

export function RandomizeId(max: number){
    const id: number = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    return id;
}

export function verifyId(id: number){
    if((!id) || (id <= 0)) return false;
    return true;
}