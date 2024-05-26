import { StatusCodes } from "http-status-codes";
import AdminModel from "../models/AdminModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export async function saveAdmin(request,response){
    try {
        const   hashedPassword=bcrypt.hashSync(request.body.password,10)
        request.body['password']=hashedPassword;
        const admin=new AdminModel(request.body);
        const savedAdmin=await admin.save();
        response.status(StatusCodes.CREATED).json(savedAdmin);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went wrong...'});
    }
}

export async function login(request,response){
    try {
        const user = await AdminModel.findOne({phone:request.body.phone});
        if (user) {
            if(bcrypt.compareSync(request.body.password,user.password)){
                const token=jwt.sign({userId:user._id},process.env.PRIVATE_KEY);
                response.status(StatusCodes.OK).json({token});
            }
            else{
                response.status(StatusCodes.BAD_REQUEST).json({message:'Invalid password' });
            }
        } else {
            response.status(StatusCodes.BAD_REQUEST).json({message:'Invalid phone'});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went wrong...'});
    }
}