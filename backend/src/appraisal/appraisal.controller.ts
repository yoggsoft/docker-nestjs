import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AppraisalService } from './appraisal.service';
import { Appraisal } from './entities/appraisal.entity';

@Controller('appraisal')
export class AppraisalController {
  constructor(private readonly appraisalService: AppraisalService) {}

  @Get()
  findAll() {
    return this.appraisalService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() params: Appraisal) {
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

  @UseGuards(JwtAuthGuard)
  @Get('users/:id')
  findAllByUser(@Body() userid: number) {
    console.log({ userid });
    return this.appraisalService.findAllByUserId(userid);
  }
}
