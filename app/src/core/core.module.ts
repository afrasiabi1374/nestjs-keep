import { Module } from '@nestjs/common';
import { DatetimeService } from './datetime/datetime.service';
const moment = require('moment')
console.log('moment in module === '+ moment);

@Module({
  imports:[],
  providers: [
    DatetimeService,
    {
      provide: 'MomentWrapper',
      useValue: moment.tz('Asia/Tehran')
    }
  ],
  exports: [
    DatetimeService
  ]
})
export class CoreModule {}
