import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    phone:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    email:{type:String,required:true}
});

const AdminModel=mongoose.model('admin',adminSchema);
export default AdminModel;