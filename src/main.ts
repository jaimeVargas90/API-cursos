import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(json({ limit: '60mb' }));

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Documentacion API cursos')
    .setDescription(
      `
      API de Gestión Educativa
      =======================
      
      Esta API proporciona endpoints para la gestión de cursos, videos y recursos educativos.
      Incluye funcionalidades para:
      - Gestión de cursos y módulos
      - Administración de contenido multimedia
      - Control de acceso y autenticación
      
      Versión: 1.0.0
      Autor: [Tu nombre]
      Contacto: [Tu email]
    `,
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
