import express from "express";
import { addBook, viewAllBooks, viewBook, updateBook, deleteBook } from '../controllers/booksController.js'
import { authenticate } from '../middlewares/auth.js';

const booksRouter = express.Router();

//Add a Member
booksRouter.post("/", authenticate, addBook);

//View a member members/:id
booksRouter.get("/:id", authenticate, viewBook);

//View all members members/
booksRouter.get("/", authenticate, viewAllBooks);

//Update member record members/
booksRouter.put("/", authenticate, updateBook);

//Delete a member members/:id
booksRouter.delete("/:id", authenticate, deleteBook);

export default booksRouter;