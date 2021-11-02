import { Test, TestingModule } from '@nestjs/testing';
import { AppraisalController } from './appraisal.controller';
import { AppraisalService } from './appraisal.service';

describe('AppraisalController', () => {
  let controller: AppraisalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppraisalController],
      providers: [AppraisalService],
    }).compile();

    controller = module.get<AppraisalController>(AppraisalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});