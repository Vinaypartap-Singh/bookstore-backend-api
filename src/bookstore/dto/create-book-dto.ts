import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'bookName is required' })
  @IsString()
  bookName: string;

  @IsNotEmpty({ message: 'bookCaption is required' })
  @IsString()
  bookCaption: string;

  @IsNotEmpty({ message: 'Please Provide a book cover' })
  @IsString()
  bookImageUrl: string;

  @IsNotEmpty({ message: 'Book Download Url Required' })
  @IsString()
  bookDownloadUrl: string;

  @IsNotEmpty({ message: 'Book Genre Required' })
  @IsString()
  bookGenre: string;

  @IsOptional()
  @IsString()
  tags?: string;
}
