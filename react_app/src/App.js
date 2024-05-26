import { About } from "./components/About";
import { Home } from "./components/Home";
//import { StudentList } from "./components/StudentList";
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import './App.css';
import RagisterStudent, { StudentForm } from "./components/RagisterStudent";
import { StudentData } from "./components/StudentData";
import { UpdateStudent } from "./components/update";
import BasicExample from "./components/adminLogin";
import AdminSignUp from "./components/AdminSignUp";
import { ReactDataTable } from "./components/reactDataTable";



function App(){
  return(
    <>
    
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="ragister-student" element={<StudentForm></StudentForm>}></Route>
      <Route path="/all-student" element={<StudentData></StudentData>}></Route>
      <Route path="/student/update/:id" element={<StudentForm></StudentForm>}></Route>
      <Route path="/admin/login" element={<BasicExample></BasicExample>}></Route>
      <Route path="/admin/signup" element={<AdminSignUp></AdminSignUp>}></Route>
           
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;