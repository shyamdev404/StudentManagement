import { GET_All_STUDENTS } from "../Actions/type";

export const StudentReducer=(state=[],action)=>{
    switch (action.type) {
        case GET_All_STUDENTS:return action.payload
            
        
    
        default: return state;
            
    }
}