import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = new DocumentBuilder()
    .setTitle('Bookstore API')
    .setDescription(
      'API for managing books in the bookstore, including search, pagination, and more features coming soon.',
    )
    .setVersion('1.0.0')
    .addServer('http://localhost:3000', 'Local server')
    .addTag('Books', 'Endpoints related to books')
    .setContact(
      'VinayPartap Singh',
      'https://linkedin.com/in/vinaypartap-Singh',
      'developervsandhu@gmail.com',
    )
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
