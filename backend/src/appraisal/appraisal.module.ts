import { Module } from '@nestjs/common';
import { AppraisalService } from './appraisal.service';
import { AppraisalController } from './appraisal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appraisal } from './entities/appraisal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appraisal])],
  controllers: [AppraisalController],
  providers: [AppraisalService]
})
export class AppraisalModule {}
