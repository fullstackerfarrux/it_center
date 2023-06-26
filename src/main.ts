import { NestFactory } from '@nestjs/core';
import { App } from './app';
import { ValidationPipe } from '@nestjs/common';

setImmediate(async () => {
  const app = await NestFactory.create(App);
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
      stopAtFirstError: true,
    }),
  );

  await app.listen(3000);
});
