import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BookstoreService } from './bookstore.service';

@Controller('bookstore')
export class BookstoreController {
  constructor(private readonly bookstoreService: BookstoreService) {}

  @Post()
  create(
    @Body(ValidationPipe) createBookstoreDto: Prisma.BookStoreCreateInput,
  ) {
    return this.bookstoreService.create(createBookstoreDto);
  }

  @Get()
  findAll() {
    return this.bookstoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookstoreService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateBookstoreDto: Prisma.BookStoreUpdateInput,
  ) {
    // Add Prisma.Bookstoreinput one
    return this.bookstoreService.update(+id, updateBookstoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookstoreService.remove(+id);
  }
}
