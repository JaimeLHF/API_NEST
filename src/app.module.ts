import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BooksController } from './Controllers/books/books.controller';
import { BooksService } from './Services/books/books.service';
import { BookRepository } from './Mongo/Repository/book.repository';
import { BookSchema } from './Mongo/Schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jaimehansenfilho:jaime0hansen@clusternestjs.xccn7uy.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([
      { name: 'books', schema: BookSchema }
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})

export class AppModule { }
