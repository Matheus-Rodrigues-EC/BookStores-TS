import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.get('/health', (req: Request, res: Response) => {
    res.status(200).send("I'm Alive")
});

import book from "./routers/book-routers";

app.use(book);

// app

app.listen(process.env.PORT, () => console.log("Server is running at port: " + process.env.PORT));