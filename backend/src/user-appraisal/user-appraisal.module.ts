import { Module } from '@nestjs/common';
import { UserAppraisalService } from './user-appraisal.service';
import { UserAppraisalController } from './user-appraisal.controller';

@Module({
  controllers: [UserAppraisalController],
  providers: [UserAppraisalService]
})
export class UserAppraisalModule {}
