import { UserService } from './user.service';
import { Body, Controller, Inject, Injectable, Logger } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { DatetimeService } from 'src/core/datetime/datetime.service';
@Injectable()
@Controller('user')
export class UserController {
    constructor(private readonly UserService:UserService){
        
    }
    @Post()
    register(@Body() body: any){
        console.log(this.UserService.logger());
        
        const {email, first_name, last_name, password} = body
        
    }

}
