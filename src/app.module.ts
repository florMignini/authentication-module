import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DepartmentModule } from './department/department.module';
@Module({
  imports: [ConfigModule.forRoot(), AuthModule, PrismaModule, DepartmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
