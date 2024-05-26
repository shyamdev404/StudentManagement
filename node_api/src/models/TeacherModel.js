import mongoose from "mongoose";

const teacherSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    salary:{type:Number,required:true},
    experience:{type:Number,required:true}
});

const TeacherModel=mongoose.model('teacher',teacherSchema);

export default TeacherModel;