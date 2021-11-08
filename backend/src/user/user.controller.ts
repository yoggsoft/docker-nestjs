import { Controller, Get, Post, Param } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // async createUserDemo(): Promise<User> {
  //   console.log('QUICKLY CREATE USER FOR DEMO')
  //   return await this.userService.create('Qover', 'ninja')
  // }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(+id);
  }
}
