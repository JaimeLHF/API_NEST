"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const book_repository_1 = require("../../Mongo/Repository/book.repository");
let BooksService = class BooksService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getAllBooks() {
        const allBooks = await this.bookRepository.getAllBooks();
        if (!allBooks.length) {
            throw new common_1.BadRequestException('Nenhum Livro Cadastrado!');
        }
        else {
            return allBooks;
        }
    }
    async getBookById(bookID) {
        try {
            return await this.bookRepository.getBookById(bookID);
        }
        catch (err) {
            throw new common_1.BadRequestException('Este Livro Naaaaão Existe!');
        }
    }
    async saveBook(newBook) {
        return await this.bookRepository.saveBook(newBook);
    }
    async deleteBook(bookID) {
        try {
            const bookExist = await this.bookRepository.getBookById(bookID);
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
                    return response.message;
                }
                else {
                    throw new common_1.BadRequestException('Esse Livro Não Existe!');
                }
            }
        }
        catch (err) {
            throw new common_1.BadRequestException('Esse Livro Não Existe!');
        }
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [book_repository_1.BookRepository])
], BooksService);
//# sourceMappingURL=books.service.js.map