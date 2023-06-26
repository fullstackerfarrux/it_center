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

    if (findOne !== null && findOne.password == payload.password) {
      return {
        message: 'Success!',
        role: 'admin',
        accessToken: sign({ username: payload.username }),
      };
    } else if (findOne.password !== payload.password) {
      return {
        message: 'Wrong Password!',
      };
    } else {
      return {
        message: 'Admin NOT_FOUND',
      };
    }

    // return {
    //   findOne,
    // };
  }
}
