import { Inject, Injectable } from '@nestjs/common';
@Injectable()
export class DatetimeService {
    constructor(@Inject('MomentWrapper')  private moment){
        console.log("+++++++++++++++++"+moment);
        
    }
  getTimeStamp()
    {
        try{
             this.moment
        }
        catch(e){
            return 0;
        }
    }

    toString(format:string = 'YYYY-MM-DD HH:mm:ss'):string
    {
        try{
            return this.moment.tz('Asia/Iran').format(format);
        }
        catch(e){
            return '';
        }
    }

    toDateTime(dateTime:string = ''):string|null
    {
        try{
            return (dateTime === '') ?this.moment.tz('Asia/Iran') : this.moment.tz('Asia/Iran');
        }
        catch(e){
            return null;
        }
    }


    // toJalaali(str:string,format:string = 'jYYYY-jMM-jDD'):string
    // {
    //     try{
    //         return momentJalaali(str).format(format);
    //     }
    //     catch(e){
    //         return '';
    //     }
    // }

    // toGregorian(str:string,format:string = 'YYYY-MM-DD'):string
    // {
    //     try{
    //         return momentJalaali(str,'jYYYY-jMM-jDD').format(format);
    //     }
    //     catch(e){
    //         return '';
    //     }
    // }
}
