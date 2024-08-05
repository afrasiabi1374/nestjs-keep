import * as mongoose from "mongoose";
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    register_date_time?: Date;
    last_edit_date_time?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    status: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    register_date_time?: Date;
    last_edit_date_time?: Date;
}>> & mongoose.FlatRecord<{
    status: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
    register_date_time?: Date;
    last_edit_date_time?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
