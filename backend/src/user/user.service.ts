import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneOrFail(username);
  }

  findByUsername(username: string): Promise<User | undefined> {
    try {
      const user = this.usersRepository.findOne({ where: {username: username}})
      return user;
    } catch (error) {
      return null;
    }
  }

  create(username: string, password: string): Promise<User> {
    const newUser = this.usersRepository.create({ username, password });
    return this.usersRepository.save(newUser);
  }
}
