import {User} from '../models/user.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendCookie } from '../utils/features.js';
import ErrorHandler from '../middlewares/error.js';


export const  getAllUsers = async (req,res)=>{
    res.json({
        success:true,
        message:"worked succcessfully ",
    })

    // res.send("this is working");
}

export const login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email}).select("+password");
    
        if(!user) return next(new ErrorHandler('Invalid Email or Password', 400))
        
        const isMatch = await bcrypt.compare(password,user.password);
    
        if(!isMatch) return next(new ErrorHandler('Invalid Email or Password', 400))
    
        sendCookie(user,res,`welcome back ${user.name}`,200)
    }catch(error){
        next(error);
    }
}


export const register = async(req,res)=>{
  try{
    const {name,email,password} = req.body;


    //finding the user
    let  user = await User.findOne({email});
    if( user) return next(new ErrorHandler('User already exists', 400))
    
 
     //hashing the password
     const hashedPassword = await bcrypt.hash(password,10);
     
     //creating the user
     user = await User.create({
         name,
         email,
         password: hashedPassword, // Use the hashed password
       });
 
     
      sendCookie(user,res,'registerd successfully',201)
  }catch(error){
    next(error);
  }

}

export const getMyProfile =  (req,res)=>{
 
    const id = "myid";
    res.status(200).json({
        success:true,
        user: req.user,
    })

        // res.status(200).json({
        // success:true,
        // })

}


export const logout = (req,res)=>{
    res.status(200).cookie("token"," ",{
        expire : new Date(Date.now()),
        sameSite :  process.env.NODE_ENV === 'Development' ? 'lax' : 'none',
        secure : process.env.NODE_ENV === 'Development' ? false : true,
    }).json({
        success:true,
        message:"logged out successfully",
    })
}
    
        // if(!isMatch){
        //     return res.status(404).json({
        //         success:false,
        //         message:"invaild email or password",
        //     })
        // }
    
        
    

   //checking if user already exists
//    if(user){
//     res.status(400).json({
//         success:false,
//         message:"User already exists",
//     })
//    }