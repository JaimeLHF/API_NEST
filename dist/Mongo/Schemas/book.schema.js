"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = require("mongoose");
const author_schema_1 = require("./author.schema");
exports.BookSchema = new mongoose_1.Schema({
    name: String,
    author: [author_schema_1.AuthorSchema],
    language: String,
    releaseYear: Number,
    publisher: String,
    pages: Number
});
//# sourceMappingURL=book.schema.js.map