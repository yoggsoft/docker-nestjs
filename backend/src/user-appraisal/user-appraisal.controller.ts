import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAppraisalService } from './user-appraisal.service';
import { CreateUserAppraisalDto } from './dto/create-user-appraisal.dto';
import { UpdateUserAppraisalDto } from './dto/update-user-appraisal.dto';

@Controller('user-appraisal')
export class UserAppraisalController {
  constructor(private readonly userAppraisalService: UserAppraisalService) {}

  @Post()
  create(@Body() createUserAppraisalDto: CreateUserAppraisalDto) {
    return this.userAppraisalService.create(createUserAppraisalDto);
  }

  @Get()
  findAll() {
    return this.userAppraisalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAppraisalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAppraisalDto: UpdateUserAppraisalDto) {
    return this.userAppraisalService.update(+id, updateUserAppraisalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAppraisalService.remove(+id);
  }
}
