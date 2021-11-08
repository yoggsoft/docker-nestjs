import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    // @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  // async create(createUserDto: CreateUserDto): Promise<User> {
    // return new this.userModel(createUserDto).save();
  // }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
