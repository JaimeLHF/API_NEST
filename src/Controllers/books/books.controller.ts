import { Controller, Delete, Get, Patch, Post, Body, Param } from '@nestjs/common';
import { BookDTO } from "src/DTO/book.dto";
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {

    constructor(
        private readonly bookService: BooksService
    ) { }

    @Get()
    getAllBooks(): Promise<Book[]> {
        return this.bookService.getAllBooks();
    }

    @Get(':bookID')
    async getBookById(@Param('bookID') bookID: string) {
        return await this.bookService.getBookById(bookID);
    }

    @Post()
    async saveBook(@Body() newBook: BookDTO): Promise<Book> {
        return await this.bookService.saveBook(newBook)
    }

    @Patch()
    updateBook(): string {
        return "Livro Atualizado!"
    }

    @Delete(':bookID')
    async deleteBook(@Param('bookID') bookID: string) {

        return await this.bookService.deleteBook(bookID)
    }

}
