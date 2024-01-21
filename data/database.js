
import mongoose from "mongoose";

export const  connectDB = ()=>{
    
mongoose.connect(process.env.MONGO_URI, {
    dbName: 'apitest',
  }).then(()=>{
      console.log('Connected to database');
  }).catch((err)=>{    
      console.log(err);
  })
}