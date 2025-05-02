import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateBookstoreDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  bookName?: string;

  @IsOptional()
  @IsString()
  bookCaption?: string;

  @IsOptional()
  @IsString()
  bookImageUrl?: string;

  @IsOptional()
  @IsString()
  bookDownloadUrl: string;

  @IsOptional()
  @IsString()
  bookGenre: string;

  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @IsOptional()
  @IsDateString()
  updatedAt?: string;

  @IsOptional()
  @IsString()
  tags?: string;
}
