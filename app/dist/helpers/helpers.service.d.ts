import mongoose from 'mongoose';
export declare class HelpersService {
    safeString(str: string): string;
    toObjectId(str: string, toString?: boolean): string | mongoose.Types.ObjectId;
}
