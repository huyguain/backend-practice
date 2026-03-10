import { IsInt, IsString, Min, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsInt()
    @Min(1)
    price: number;

    @IsInt()
    @Min(0)
    stock: number;
}