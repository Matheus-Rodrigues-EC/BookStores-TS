import express, { Request, Response } from "express";

const port = 5000;
const app = express();
app.get('/health', (req: Request, res: Response) => {
    res.status(200).send("I'm Alive")
});

import book from "./routers/book-routers";

app.use(book);

// app

app.listen(port, () => console.log("Server is running at port: " + port));