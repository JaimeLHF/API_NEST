import { BookDTO } from "src/DTO/book.dto";
import { Model } from "mongoose";
import { Book } from "../Interfaces/book.interface";
export declare class BookRepository {
    private readonly bookModel;
    constructor(bookModel: Model<Book>);
    getAllBooks(): Promise<Book[]>;
    getBookById(bookID: string): Promise<Book>;
    saveBook(newBook: BookDTO): Promise<Book>;
    deleteBook(bookID: string): Promise<Book>;
}
