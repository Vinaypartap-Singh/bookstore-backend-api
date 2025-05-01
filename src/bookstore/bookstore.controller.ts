import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { BookstoreService } from './bookstore.service';
import { CreateBookDto } from './dto/create-book-dto';
import { UpdateBookstoreDto } from './dto/update/update-book-dto';

@Controller('bookstore')
export class BookstoreController {
  constructor(private readonly bookstoreService: BookstoreService) {}

  @Post()
  async create(@Body(ValidationPipe) createBookstoreDto: CreateBookDto) {
    try {
      const book = await this.bookstoreService.create(createBookstoreDto);
      return book;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Book with this name already exists.');
      }
      throw new InternalServerErrorException(
        'An unexpected error occurred while adding this book.',
      );
    }
  }

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    try {
      const pageNumber = page || 1;
      const limitNumber = limit || 1;
      const books = this.bookstoreService.findAll(pageNumber, limitNumber);
      return books;
    } catch (error) {
      throw new InternalServerErrorException('An Unexpected Error');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      const book = this.bookstoreService.findOne(id);
      return book;
    } catch (error) {
      throw new InternalServerErrorException('An Unexpected Error');
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateBookstoreDto: UpdateBookstoreDto,
  ) {
    try {
      const book = this.bookstoreService.update(id, updateBookstoreDto);
      return book;
    } catch (error) {
      throw new InternalServerErrorException('An Unexpected Error');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      const book = this.bookstoreService.remove(id);
      return book;
    } catch (error) {
      throw new InternalServerErrorException('An Unexpected Error');
    }
  }
}
