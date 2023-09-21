import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database/database-config';
import { UsersModule } from './modules/user/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), UsersModule],
})
export class AppModule {}
