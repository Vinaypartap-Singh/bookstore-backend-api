import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BookstoreModule } from './bookstore/bookstore.module';

@Module({
  imports: [DatabaseModule, BookstoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
