import AppError from "./appError.js"

const handleValidationErrorDB = err => {
    const errors = Object.values(err.errors).map(el => el.message)
    const message =`Invalid input:${errors.join(' ')}`
    return new AppError(message, 400)
}
const handleDuplicateFieldsDB = err => {
    const value = err.keyValue.title
    const message =`Duplicate field value:${value}. Please use another value!`
    return new AppError(message, 400)
}
const handleCastErrorDB = err => {
   
    const message = `Invalid ${err.path}: ${err.value}`
    return new AppError(message, 400)
}


const sendErrorForDev = (err,res) => { 

    res.status(err.statusCode).json({
        status: err.status,
        error:err,
        message:err.message,
        stack:err.stack
    })
}
const sendErrorForProd = (err,res) => {
    if (err.isOperational){
        res.status(err.statusCode).json({
            status: err.status,
            message:err.message
        })
    //programming error and other Unkown error: We don't want to leak error details
    }else{
        //1) Log error
        console.error("ERROR***", err)
        //2) Send generic message
        res.status(500).json({
            status:'error',
            message:'Somethng went very wrong!'

        })
    }
  }

export const  globalErrorHandling = (err,req,res,next) => { 
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'
   
    const environment = process.env.NODE_ENV
        console.log(environment)
    if(environment ==='development'){
        console.log(environment)
        sendErrorForDev(err, res)
    }
    
    else if(environment ==='production'){
        console.log(environment)
        let error = err
         if(err.name=== 'CastError') error = handleCastErrorDB(error)
         if(err.code === 11000) error = handleDuplicateFieldsDB(error)
         if(err.name === 'ValidationError') error = handleValidationErrorDB(error)
          
        sendErrorForProd(error,res) 
    }
}