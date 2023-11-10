import { BookDTO } from 'src/DTO/book.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    getAllBooks(): Promise<Book[]>;
    getBookById(bookID: string): Promise<Book>;
    saveBook(newBook: BookDTO): Promise<Book>;
    deleteBook(bookID: string): Promise<string>;
}
