import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';
import { clienteController } from './controllers/cliente.controller';
import { ClienteService } from './services/cliente.service';
import { UbigeoEntity } from './entities/ubigeo.entity';
import { UbigeoController } from './controllers/ubigeo.controller';
import { UbigeoService } from './services/ubigeo.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "oracle",
      "host": "localhost",
      "port": 1521,
      "username": "ADMIN22",
      "password": "abc123",
      "sid": "xe",
      "entities": [__dirname + "/**/**.entity{.ts,.js}"],
      "synchronize": false,
      "logging": true
    }),
    TypeOrmModule.forFeature([ClienteEntity])
  ],
  controllers: [AppController, clienteController],
  providers: [AppService, ClienteService]
})
export class AppModule {
}