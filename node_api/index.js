import express from 'express';
import 'dotenv/config';
import { configureDb } from './src/configs/DbConfig.js';
import studentRouter from './src/routers/StudentRouter.js';
import cors from 'cors';
import adminRouter from './src/routers/AdminRouter.js';
const app=express();

configureDb();
app.use(express.json())
app.use(cors())
app.use(studentRouter);
app.use(adminRouter);
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server is running at ${process.env.SERVER_PORT}`);
});
