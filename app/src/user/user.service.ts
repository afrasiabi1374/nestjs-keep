import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(@Inject('moment') private moment ){

    }
    async logger(){
        return 'dashagh =>> '+ this.moment
    }
}
