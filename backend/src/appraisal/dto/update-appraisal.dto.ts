import { PartialType } from '@nestjs/swagger';
import { CreateAppraisalDto } from './create-appraisal.dto';

export class UpdateAppraisalDto extends PartialType(CreateAppraisalDto) {}
