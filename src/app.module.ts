import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './Usuario/usuario.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'sasa',
    database: 'biblioteca',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    ssl : true,
  }),
    TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
