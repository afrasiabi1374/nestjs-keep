import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CoreModule } from 'src/core/core.module';
import { UserService } from './user.service';
import { DatetimeService } from 'src/core/datetime/datetime.service';

@Module({
  controllers: [UserController],
  imports:[
    CoreModule,

  ],
  
  providers: [
    UserService,
    {
      provide: 'moment',
      useValue: DatetimeService
    }
  ]
})
export class UserModule {}
