import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './createUser.dto';
import { GetUserDto } from './getUser.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    let result = await this.userRepository.create(createUserDto);
    return result.id;
  }

  async FindAll(getUserDto: GetUserDto) {
    let user: UserEntity[] = await this.userRepository.Find(getUserDto);
    return user;
  }

  async FindById(id: number) {
    let user: UserEntity = await this.userRepository.FindById(id);
    return user;
  }
}
