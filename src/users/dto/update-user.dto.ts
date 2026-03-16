import { IsOptional, IsString, IsInt, Min } from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  age?: number;

}