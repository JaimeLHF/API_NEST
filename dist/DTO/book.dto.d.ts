import { AuthorDTO } from "./author.dto";
export declare class BookDTO {
    readonly name: string;
    readonly author: AuthorDTO[];
    readonly language: string;
    readonly releaseYear: number;
    readonly publisher: string;
    readonly pages: number;
}
