import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dtos';

@Controller('/auth/')
export class LoginController {
  private readonly service: LoginService;

  constructor(service: LoginService) {
    this.service = service;
  }

  @Post('login')
  @ApiTags('/login')
  async login(@Body() payload: LoginDto) {
    return this.service.login(payload);
  }
}
