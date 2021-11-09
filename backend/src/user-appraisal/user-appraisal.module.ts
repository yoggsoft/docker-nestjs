import { Module } from '@nestjs/common';
import { UserAppraisalService } from './user-appraisal.service';
import { UserAppraisalController } from './user-appraisal.controller';
import { UserAppraisal } from './entities/user-appraisal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserAppraisal])],
  controllers: [UserAppraisalController],
  providers: [UserAppraisalService],
  exports: [UserAppraisalService]
})
export class UserAppraisalModule {}
