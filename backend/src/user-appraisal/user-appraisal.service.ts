import { Body, Injectable, Post, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAppraisal } from './entities/user-appraisal.entity';

@Injectable()
export class UserAppraisalService {
  constructor(
    @InjectRepository(UserAppraisal) private userAppraisalRepository: Repository<UserAppraisal>
  ) {}

  create(
    userId: number,
    appraisalId: number
  ): Promise<UserAppraisal> {
    const newUserAppraisalRecord = this.userAppraisalRepository.create({ userId, appraisalId });
    return this.userAppraisalRepository.save(newUserAppraisalRecord);
  }
}
