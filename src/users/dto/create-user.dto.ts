import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(['Admin', 'User'], {
    message: 'Please enter valid role',
  })
  role: 'Admin' | 'User';
}
