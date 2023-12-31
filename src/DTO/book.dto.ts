import { ArrayMinSize, ValidateNested, IsNotEmptyObject, IsNotEmpty, IsString, IsPositive, IsNumber, MinLength, MaxLength } from "class-validator";
import { Type } from "class-transformer";
import { AuthorDTO } from "./author.dto";



export class BookDTO {
   
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name : string;

  
    @IsNotEmpty()
    @ValidateNested({ each : true})
    @Type(() => AuthorDTO)
    @ArrayMinSize(1)       
    readonly author: AuthorDTO[];

    @IsNotEmpty()
    @IsString()
    readonly language: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly releaseYear: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    readonly publisher: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly pages: number;
}
