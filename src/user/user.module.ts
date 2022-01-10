import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './application/CreateUser/CreateUserUseCase';
import { UserController } from './controller/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
