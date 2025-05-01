import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BookstoreController } from './bookstore.controller';
import { BookstoreService } from './bookstore.service';

@Module({
  controllers: [BookstoreController],
  providers: [BookstoreService],
  imports: [DatabaseModule],
})
export class BookstoreModule {}
