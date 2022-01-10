import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  readonly nickname: string;

  @IsString()
  readonly name: string;
}

export class createUserResponse {
  id: number;
  email: string;
}
