import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppraisalModule } from './appraisal/appraisal.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAppraisalModule } from './user-appraisal/user-appraisal.module';
import ORMConfig from '../ormcofig';

@Module({
  imports: [
    AppraisalModule,
    UserModule,
    TypeOrmModule.forRoot(ORMConfig),
    UserAppraisalModule
    // MongooseModule.forRoot('mongodb://localhost/qoverdb')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
