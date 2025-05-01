import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateBookDto } from './dto/create-book-dto';
import { UpdateBookstoreDto } from './dto/update/update-book-dto';

@Injectable()
export class BookstoreService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createBookstoreDto: CreateBookDto) {
    try {
      return this.databaseService.bookStore.create({
        data: createBookstoreDto,
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Book with this name already exists.');
      }
      throw new InternalServerErrorException(
        'An unexpected error occurred while adding this book.',
      );
    }
  }

  findAll(page = 1, limit = 10) {
    try {
      const skip = (page - 1) * limit;
      const books = this.databaseService.bookStore.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      });
      return books;
    } catch (error) {
      throw new InternalServerErrorException('An Error Occured');
    }
  }

  findOne(id: string) {
    try {
      const book = this.databaseService.bookStore.findFirst({
        where: {
          id: id,
        },
      });

      if (!book) {
        throw new NotFoundException(
          'The book you are looking for is not available please check again later',
        );
      }

      return book;
    } catch (error) {
      throw new InternalServerErrorException('Book Not Found');
    }
  }

  update(id: string, updateBookstoreDto: UpdateBookstoreDto) {
    try {
      const updatedBook = this.databaseService.bookStore.update({
        where: {
          id: id,
        },
        data: updateBookstoreDto,
      });

      return updatedBook;
    } catch (error) {
      throw new InternalServerErrorException('Book Not Found');
    }
  }

  remove(id: string) {
    try {
      const deletedBook = this.databaseService.bookStore.delete({
        where: {
          id: id,
        },
      });

      return deletedBook;
    } catch (error) {
      throw new InternalServerErrorException('Book Not Found');
    }
  }
}
