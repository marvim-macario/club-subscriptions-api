import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DtoValidationPipe } from './validations/dto/dto-validation.pipe';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
