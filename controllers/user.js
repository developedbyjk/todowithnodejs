import {User} from '../models/user.js'


export const  getAllUsers = async (req,res)=>{
    const users = await User.find({})
    
    console.log(req.query)
    
    
    //if key value par are same the we can write jsut key 
    
        res.json({
        success:true,
         users,
    })
    
    }


export const register = async(req,res)=>{

    const {name, email, password} = req.body;

    await User.create({
       name,
       email,
       password
    })

    // res.json({
    //     success:true,
    //     message: "successfully created a new user"
    // })

    res.status(201).cookie('temp','lol').json({
    success:true,
    message:'success'
    })

}

export const getUserDetails = async (req,res)=>{

    const {id} = req.query;
    console.log(req.params)

    // const user = await User.findById(id)

    res.json({
        success:true,
        message: "successfully created a new user",
        user : {}

    })
 


}


//we will create function to update user
//we will create function to delete user
//we will create function to get user details