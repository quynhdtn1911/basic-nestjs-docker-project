import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DepartmentsModule } from './departments/departments.module';
import { RoleModule } from './role/role.module';
import 'reflect-metadata'

@Module({
  imports: [UsersModule, DepartmentsModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
