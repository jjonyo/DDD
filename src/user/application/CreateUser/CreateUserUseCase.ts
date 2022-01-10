import { Injectable } from '@nestjs/common';
import { createUserDto, createUserResponse } from './dto/create-user.dto';

@Injectable()
export class CreateUserUseCase {
  async execute(createUserDto: createUserDto): Promise<createUserResponse> {
    //이부분에 해당 유스케이스의 실제적인 로직이 들어감
    const ret: createUserResponse = {
      id: 1,
      email: createUserDto.email,
    };
    return ret;
  }
}
