import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    try {
      const user = this.usersRepository.findOneOrFail(id);
      return user;
    } catch (error) {
      return null;
    }
  }

  create(username: string, password: string): Promise<User> {
    const newUser = this.usersRepository.create({ username, password });
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, username: string): Promise<User> {
    const user = await this.findOne(id);
    user.username = username;
    return this.usersRepository.save(user);
  }
}
