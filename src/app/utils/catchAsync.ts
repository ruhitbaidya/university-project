import { NextFunction, Request, RequestHandler, Response } from "express"


export const catchAsyncFun = (fun:RequestHandler)=>{
    return (req: Request, res:Response, next : NextFunction)=>{
        Promise.resolve(fun(req, res, next)).catch((err)=> next(err))
    }
}