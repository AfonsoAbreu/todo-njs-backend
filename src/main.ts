import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ValidatorPipeOptions } from './options/validatorPipeOptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  app.useGlobalPipes(new ValidationPipe(new ValidatorPipeOptions()));
  await app.listen(3000);
}
bootstrap();
