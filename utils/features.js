import jwt  from "jsonwebtoken";


//sending values from params 
export const sendCookie = (user,res, message,statusCode=200)=>{
     
    const token  = jwt.sign({_id : user._id},"hghdddrdsdrtdfy");


    res.status(statusCode).cookie('token',token,{
        httpOnly:true,
        maxAge : 1000 * 60 * 15,
        //lax is default
        //none 
        //strict means we can only access cookie in https
        //if same site is none then cookie must be seruce
        sameSite :  process.env.NODE_ENV === 'Development' ? 'lax' : 'none',
        secure : process.env.NODE_ENV === 'Development' ? false : true,
    }).json({
        success:true,
        message,
    })
}