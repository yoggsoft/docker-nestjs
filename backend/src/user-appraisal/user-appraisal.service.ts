import { Injectable } from '@nestjs/common';
import { CreateUserAppraisalDto } from './dto/create-user-appraisal.dto';
import { UpdateUserAppraisalDto } from './dto/update-user-appraisal.dto';

@Injectable()
export class UserAppraisalService {
  create(createUserAppraisalDto: CreateUserAppraisalDto) {
    return 'This action adds a new userAppraisal';
  }

  findAll() {
    return `This action returns all userAppraisal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAppraisal`;
  }

  update(id: number, updateUserAppraisalDto: UpdateUserAppraisalDto) {
    return `This action updates a #${id} userAppraisal`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAppraisal`;
  }
}
