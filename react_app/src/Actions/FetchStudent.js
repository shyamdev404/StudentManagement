import { getAllstudent } from "../services/StudentService"
import { GET_All_STUDENTS } from "./type";

export const FetchAllstudent=()=> async (dispatch)=>{ 

 try {
    const response= await getAllstudent()
    dispatchEvent({
        type:GET_All_STUDENTS,
        payload:response.data,
    })
 } catch (error) {
    console.log(error);
 }


 }