import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true, type: String, name: 'email' })
  @IsEmail()
  email: string;
  @ApiProperty({ required: true, type: String, name: 'password' })
  @IsString()
  password: string;
}
