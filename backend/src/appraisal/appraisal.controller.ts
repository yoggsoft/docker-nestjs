import { Controller, Get, Post } from '@nestjs/common';
import { AppraisalService } from './appraisal.service';
import { Appraisal } from './entities/appraisal.entity';

@Controller('appraisal')
export class AppraisalController {
  constructor(private readonly appraisalService: AppraisalService) {}

  @Get()
  findAll() {
    return this.appraisalService.findAll();
  }

  @Get()
  create (params: Appraisal) {
    console.log('HOLA');
    try {
      const {
        userId,
        driverAge,
        car,
        purchasePrice
      } = params;
      return this.appraisalService.create(userId, driverAge, car, purchasePrice);
    } catch (error) {
      throw error;
    }
  }
}
