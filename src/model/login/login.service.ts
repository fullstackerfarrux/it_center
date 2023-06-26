import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginRequest } from './interfaces';
import { sign } from 'src/helpers';

@Injectable()
export class LoginService {
  private readonly prisma: PrismaService;

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  async login(payload: LoginRequest) {
    const findOne = await this.prisma.admin.findFirst({
      where: {
        admin_name: payload.username,
      },
    });

    if (findOne !== null) {
      return {
        message: 'Admin Logined!',
        accessToken: sign({ username: payload.username }),
      };
    }

    return {
      findOne,
    };
  }
}
