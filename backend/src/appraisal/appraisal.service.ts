import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appraisal } from './entities/appraisal.entity';

@Injectable()
export class AppraisalService {
  constructor(
    @InjectRepository(Appraisal) private appraisalRepository: Repository<Appraisal>
  ) {}

  findAll(): Promise<Appraisal[]> {
    return this.appraisalRepository.find();
  }

  create(
    userId: number,
    driverAge: string,
    car: string,
    purchasePrice: string
  ): Promise<Appraisal> {
    const newAppraisal = this.appraisalRepository.create({ userId, driverAge, car, purchasePrice });
    return this.appraisalRepository.save(newAppraisal);
  }
}
