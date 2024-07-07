import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './createUser.dto';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUserDto } from './getUser.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    let user: UserEntity = await this.repo.create({ ...createUserDto });
    return await this.repo.save(user);
  }

  async Find(getUserDto: GetUserDto) {
    let user: UserEntity[] = await this.repo.find({ where: { ...getUserDto } });
    return user;
  }

  async FindById(id: number) {
    let user: UserEntity = await this.repo.findOneBy({ id });
    return user;
  }
}
