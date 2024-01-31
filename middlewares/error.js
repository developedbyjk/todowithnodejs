class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}


export const errorMiddleware = ()=>{
    (err,req,res,next)=>{

        //if error message exist then it will be shown else internal server error
        err.message = err.message || 'Internal Server Error';
        err.statusCode = err.statusCode || 500;

        return res.status(err.statusCode).json({
           success:false,
           message:err.message,
        })
        
     }
}

export default ErrorHandler;