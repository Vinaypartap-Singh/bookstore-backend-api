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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BookstoreService } from './bookstore.service';
import { CreateBookDto } from './dto/create-book-dto';
import { UpdateBookstoreDto } from './dto/update/update-book-dto';

@ApiTags('Bookstore')
@Controller('bookstore')
export class BookstoreController {
  constructor(private readonly bookstoreService: BookstoreService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new book entry' })
  @ApiBody({ type: CreateBookDto })
  @ApiResponse({ status: 201, description: 'Book created successfully' })
  @ApiResponse({
    status: 409,
    description: 'Book with this name already exists',
  })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
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
  @ApiOperation({ summary: 'Get all books with pagination' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiResponse({ status: 200, description: 'Books retrieved successfully' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    try {
      const pageNumber = page || 1;
      const limitNumber = limit || 10;
      const books = this.bookstoreService.findAll(pageNumber, limitNumber);
      return books;
    } catch (error) {
      throw new InternalServerErrorException('An Unexpected Error');
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a book by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Book found' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  findOne(@Param('id') id: string) {
    try {
      const book = this.bookstoreService.findOne(id);
      return book;
    } catch (error) {
      throw new InternalServerErrorException('An Unexpected Error');
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a book by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateBookstoreDto })
  @ApiResponse({ status: 200, description: 'Book updated successfully' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
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
  @ApiOperation({ summary: 'Delete a book by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Book deleted successfully' })
  @ApiResponse({ status: 500, description: 'Unexpected server error' })
  remove(@Param('id') id: string) {
    try {
      const book = this.bookstoreService.remove(id);
      return book;
    } catch (error) {
      throw new InternalServerErrorException('An Unexpected Error');
    }
  }
}
