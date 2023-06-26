import { IsNotEmpty, IsString, isString } from 'class-validator';
import { LoginRequest } from '../interfaces/login.interface';

export class LoginDto implements LoginRequest {
  @IsString()
  @IsNotEmpty()
  username?: string;

  @IsString()
  @IsNotEmpty()
  password?: string;
}
