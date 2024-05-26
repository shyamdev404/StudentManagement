import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    roll:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    phone:{type:String,required:true},
    marks:{type:Number,required:true}
});

const StudentModel=mongoose.model("student",studentSchema);

export default StudentModel;