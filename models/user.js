import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name:{
        type:String,
       },
       email:{
        type:String,
        required:true,
        unique:true
       },
       password:{
        type:String,
        reuired:true,
        select:false
       },
       createadAt:{
        type:Date,
        default:Date.now
       }
})

export const  User = new mongoose.model('User',schema);