import * as mongoose from "mongoose";
export const UserSchema = new mongoose.Schema({
    first_name :{
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        require:true,
        unique: true
    },
    password: {
        type: String
    },
    status: {
        type: Number,
        default: 0,
        require:true
    },
    register_date_time : {
        type: Date,
        require: true
    },
    last_edit_date_time: {
        type: Date 
    }
})