import {Task} from '../models/task.js';
import ErrorHandler from '../middlewares/error.js';

export const newTask = async(req,res,next)=>{

    try {
            const {title,description} = req.body;

            await Task.create({
                title,description,user:req.user,
            })

            res.status(201).json({
                success:true,
                message:'Task created successfully',
            })
    } catch (error) {
        next(error)
    }
}

export const getMyTask = async(req,res,next)=>{
    try {
        const userid = req.user._id;

        const tasks = await Task.find({user:userid})
    
        res.status(200).json({
            success:true,
            data:tasks,
        })
    
        next();
    } catch (error) {
        next(error)
    }
}

export const upadateTask = async(req,res,next)=>{
    try {
        console.log("step 0")
    // const {id} = req.params;
    // console.log(id)


    const tasks = await Task.findById(req.params.id)
    if(!tasks) return next( new ErrorHandler('Task not found',404));



    console.log(tasks)
    tasks.isCompleted = !tasks.isCompleted;

    await tasks.save();
  

    res.status(200).json({
        success:true,
       message:'Task updated successfully',
    })

    } catch (error) {
        next(error)
    }
   
   
}

export const deleteTask = async(req,res,next)=>{
    
   try {
    const tasks = await Task.findById(req.params.id)

    console.log(tasks)

    // if (!tasks)
    // return res.status(404).json({
    //     success:false,
    //     message:'Task not found',
    // })
   if(!tasks) return next( new ErrorHandler("Task not found",404));

   await tasks.deleteOne();

    res.status(200).json({
        success:true,
     message:'Task deleted successfully',
    })

   } catch (error) {
        next(error)
   }
}