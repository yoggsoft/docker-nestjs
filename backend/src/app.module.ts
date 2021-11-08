import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppraisalModule } from './appraisal/appraisal.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AppraisalModule,
    UserModule,
    // MongooseModule.forRoot('mongodb://localhost/qoverdb')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
