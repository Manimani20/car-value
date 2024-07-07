import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './createUser.dto';
import { UserService } from './user.service';
import { GetUserDto } from './getUser.dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    let result = this.userService.createUser(body);
    return result;
  }

  @Get()
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
