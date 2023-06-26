import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginController } from './login.controller';

@Module({
  providers: [LoginService, PrismaService],
  controllers: [LoginController],
})
export class LoginModule {}
