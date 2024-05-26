import axios from "axios";

export function getAllstudent (){
    return axios.get('http://localhost:5000/students')
}