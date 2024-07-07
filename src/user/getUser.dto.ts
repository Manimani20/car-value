import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class GetUserDto {
  @ApiPropertyOptional({ required: false, type: Number, name: 'id' })
  @IsOptional()
  id: number;
  @ApiPropertyOptional({ required: false, type: String, name: 'email' })
  @IsOptional()
  @IsEmail()
  email: string;
  @ApiPropertyOptional({ required: false, type: String, name: 'password' })
  @IsOptional()
  @IsString()
  password: string;
}
