import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableSwagger = (app: INestApplication) => {
  const documentBuilder = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Nestjs user register')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('api', app, document);
};
