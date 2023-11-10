import { Injectable, BadRequestException } from '@nestjs/common';
import { BookDTO } from 'src/DTO/book.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';
import { json } from 'stream/consumers';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ) { }


    async getAllBooks(): Promise<Book[]> {
        const allBooks = await this.bookRepository.getAllBooks();

        if (!allBooks.length) {
            throw new BadRequestException('Nenhum Livro Cadastrado!');
        }
        else {
            return allBooks;
        }
    }

    async getBookById(bookID: string): Promise<Book> {
        try {
            return await this.bookRepository.getBookById(bookID)
        } catch (err) {
            throw new BadRequestException('Este Livro Naaaaão Existe!')
        }
    }

    async saveBook(newBook: BookDTO): Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }

    async deleteBook(bookID: string) {
        try {
            const bookExist = await this.bookRepository.getBookById(bookID)

            if (bookExist) {
                const deletedBook = await this.bookRepository.deleteBook(bookID);

                if (deletedBook) {
                    const response = {
                        message: `Livro ${deletedBook.name} excluído com sucesso`,
                        deletedBook: {
                            id: deletedBook.id,
                            author: deletedBook.author,
                            name: deletedBook.name
                        },
                    };
                    return response.message
                } else {
                    throw new BadRequestException('Esse Livro Não Existe!')
                }
            }
        } catch (err) {
            throw new BadRequestException('Esse Livro Não Existe!')
        }
    }

}
