import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppraisalModule } from './appraisal/appraisal.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAppraisalModule } from './user-appraisal/user-appraisal.module';
import { AuthModule } from './auth/auth.module';
import config from '../ormcofig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AppraisalModule,
    UserModule,
    UserAppraisalModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
