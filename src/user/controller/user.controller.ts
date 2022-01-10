import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../application/CreateUser/CreateUserUseCase';
import {
  createUserDto,
  createUserResponse,
} from '../application/CreateUser/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(
    @Body() createUserDto: createUserDto,
  ): Promise<createUserResponse> {
    //Response type 정의 필요
    //생성자에서 Repository 연결 후
    //중복되는 email 검사 후
    //데이터 저장 후 리턴
    return this.createUserUseCase.execute(createUserDto);
  }

  //이곳에 엔드포인트 작성
}
