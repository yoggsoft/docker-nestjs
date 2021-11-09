import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UserAppraisalService } from './user-appraisal.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user-appraisal')
export class UserAppraisalController {
  constructor(private readonly userAppraisalService: UserAppraisalService) {}

  @UseGuards(JwtAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Post('create')
  create(@Body() params) {
    try {
      const {
        userId,
        appraisalId
      } = params;
      return this.userAppraisalService.create(userId, appraisalId);
    } catch (error) {
      throw error;
    }
  }
}
