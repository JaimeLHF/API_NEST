import { BookDTO } from "src/DTO/book.dto";
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BooksService } from 'src/Services/books/books.service';
export declare class BooksController {
    private readonly bookService;
    constructor(bookService: BooksService);
    getAllBooks(): Promise<Book[]>;
    getBookById(bookID: string): Promise<Book>;
    saveBook(newBook: BookDTO): Promise<Book>;
    updateBook(): string;
    deleteBook(bookID: string): Promise<string>;
}
