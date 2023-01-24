import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import IPayload from "../interface/user/IPayload";

export function tokenAutentication(req:Request,res:Response,next:NextFunction){ 

  const authToken = req.headers.authorization;
  if(!authToken) res.status(401).json({"message": "Token not found"});
  const [,token] = authToken.split(" ");
  
 try{
  const{sub} = verify(
    token,
    process.env.JWT_SECRET) as IPayload;
    
    req.user_id = sub;

    return next();

    
 }catch(error){
  return res.status(401).end();
 }

  
  next();
  
} 