import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function verifyToken(request,response,next) {
    const authHeader=request.get('Authorization');
    console.log(authHeader);
    if (authHeader) {
        const token=authHeader.replace("Bearer ","");
        jwt.verify(token,process.env.PRIVATE_KEY,(error,payload)=>{
            if (error) {
                return response.status(StatusCodes.UNAUTHORIZED).json({message:'Invalid Token'});
            } else {
                next();
            }
        })
       
    } else {
       return response.status(StatusCodes.UNAUTHORIZED).json({message:'Access Denied, Please login first'}); 
    }
    

}