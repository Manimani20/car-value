import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GetUserResponseDto {
  @ApiProperty({ required: true, type: Number, name: 'id' })
  @Expose()
  id: number;
  @ApiProperty({ required: true, type: String, name: 'email' })
  @Expose()
  email: string;
}
