
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return res.status(401).json({
            success:false,
            message:"LOGIIN FIRST",
        })
    }

    const decoded = jwt.verify(token,"hghdddrdsdrtdfy");
    req.user  = await User.findById(decoded._id);

    next();
}