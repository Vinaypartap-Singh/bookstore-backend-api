import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'bookName is required' })
  @IsString()
  bookName: string;

  @IsNotEmpty({ message: 'bookCaption is required' })
  @IsString()
  bookCaption: string;

  @IsOptional()
  @IsString()
  tags?: string;
}
