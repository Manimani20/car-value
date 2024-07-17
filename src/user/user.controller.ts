import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './createUser.dto';
import { UserService } from './user.service';
import { GetUserDto } from './getUser.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { GetUserResponseDto } from './getUserResponse.dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    let result = this.userService.createUser(body);
    return result;
  }

  @Get()
  @Serialize(GetUserResponseDto)
  getUser(@Query() getUseDto: GetUserDto) {
    let result = this.userService.FindAll(getUseDto);
    return result;
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    let result = this.userService.FindById(id);
    return result;
  }
}
