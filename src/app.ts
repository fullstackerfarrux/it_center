import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from './config';
import { LoginModule } from './model';

@Module({
  imports: [
    LoginModule,
    ConfigModule.forRoot({
      load: [dbConfig],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class App {}
