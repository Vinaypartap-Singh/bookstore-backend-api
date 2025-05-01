import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BookstoreService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createBookstoreDto: Prisma.BookStoreCreateInput) {
    try {
      return this.databaseService.bookStore.create({
        data: createBookstoreDto,
      });
    } catch (error) {
      throw new InternalServerErrorException(
        'An unexpected error occurred while adding this book.',
      );
    }
  }

  findAll() {
    return this.databaseService.bookStore.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} bookstore`;
  }

  update(id: number, updateBookstoreDto: Prisma.BookStoreUpdateInput) {
    // Add Prisma DTO Laters
    return `This action updates a #${id} bookstore`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookstore`;
  }
}
