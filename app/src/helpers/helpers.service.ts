import { Injectable } from '@nestjs/common';
import { encode } from 'html-entities';
import mongoose from 'mongoose';

@Injectable()
export class HelpersService {
    safeString(str:string):string {
        try {
            return encode(str)
        } catch (e) {
            return ''
        }
    }
    toObjectId(str:string, toString:boolean = false) {
        try {
            if (mongoose.Types.ObjectId.isValid(str)) {
                return toString? new (mongoose.Types?.ObjectId)(str) + '' : new mongoose.Types.ObjectId(str)
            } else {
                return ''
            }
        } catch (e) {
            return ''
        }
    }
}
