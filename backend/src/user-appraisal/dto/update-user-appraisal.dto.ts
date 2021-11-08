import { PartialType } from '@nestjs/swagger';
import { CreateUserAppraisalDto } from './create-user-appraisal.dto';

export class UpdateUserAppraisalDto extends PartialType(CreateUserAppraisalDto) {}
