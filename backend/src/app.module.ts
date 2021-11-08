import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppraisalModule } from './appraisal/appraisal.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAppraisalModule } from './user-appraisal/user-appraisal.module';
import config from '../ormcofig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AppraisalModule,
    UserModule,
    UserAppraisalModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
