
import mongoose from "mongoose";

export const  connectDB = ()=>{
    
mongoose.connect(process.env.MONGO_URI, {
    dbName: 'projectwithauth',
  }).then(()=>{
      console.log('Connected to database');
  }).catch((err)=>{    
      console.log(err);
  })
}