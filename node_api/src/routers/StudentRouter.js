import express from 'express';
import { deleteStudentById, getAllStudents, getStudentById, getStudentByRoll, saveStudent, updateStudent } from '../controllers/StudentController.js';
import { verifyToken } from '../middlewares/VerifyToken.js';

const studentRouter=express.Router();

studentRouter.post('/students',verifyToken,saveStudent);
studentRouter.get('/students',verifyToken,getAllStudents);
studentRouter.get('/students/:id',verifyToken,getStudentById);
studentRouter.get('/students/roll/:roll',verifyToken,getStudentByRoll);
studentRouter.delete('/students/:id',verifyToken,deleteStudentById);
studentRouter.put('/students/:id',verifyToken,updateStudent);

export default studentRouter;