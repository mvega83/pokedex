import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api/v2');// se agrega prefijo
  
  await app.listen(process.env.PORT ?? 3021);


}
bootstrap();
