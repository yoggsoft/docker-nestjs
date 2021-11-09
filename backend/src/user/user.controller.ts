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

  // POST /login
  // @Post('login')
  // login(@Param('username') username: string, @Param('password') password: string): Promise<User> {
  //   return this.userService.findByUsername(username);
  // }
}
