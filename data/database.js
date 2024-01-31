
import mongoose from "mongoose";

export const  connectDB = ()=>{
    
mongoose.connect('mongodb://localhost:27017', {
    dbName: 'projectwithauth',
  }).then(()=>{
      console.log('Connected to database');
  }).catch((err)=>{    
      console.log(err);
  })
}