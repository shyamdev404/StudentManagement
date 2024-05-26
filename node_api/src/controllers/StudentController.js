import {StatusCodes} from 'http-status-codes';
import StudentModel from '../models/StudentModel.js';

export async function saveStudent(request,response){
    try {
        const student=new StudentModel(request.body);
        const savedStudent=await student.save();
        response.status(StatusCodes.CREATED).json(savedStudent);
    } catch (error) {
        if(error.code=11000){
            response.status(StatusCodes.CONFLICT).json({message:'Roll number already exists !'});
        }
        else{
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went wrong'});
        }
        
    }
}

export async function getAllStudents(request,response){
    try {
       const students=await StudentModel.find(); 
       response.status(StatusCodes.OK).json(students);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went wrong'});
    }
}

export async function getStudentById(request,response){
    try {
        const student=await StudentModel.findById(request.params.id);
        if (student) {
            response.status(StatusCodes.OK).json(student);
        } else {
            response.status(StatusCodes.NOT_FOUND).json({message:'Student not found'});
        }
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went wrong'});
    }
}

export async function getStudentByRoll(request,response){
    try {
        const student=await StudentModel.findOne({roll:request.params.roll});
        if (student) {
            response.status(StatusCodes.OK).json(student);
        } else {
            response.status(StatusCodes.NOT_FOUND).json({message:'Student not found'});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went wrong'});
    }
}

export async function deleteStudentById(request,response){
    try {
        await StudentModel.findByIdAndDelete(request.params.id);
        response.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went wrong'});
    }
}

export async function updateStudent(request,response){
    try {
        await StudentModel.findByIdAndUpdate(request.params.id,request.body);
        response.status(StatusCodes.OK).json({message:'Data Updated !'});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something went wrong'});
    }
}