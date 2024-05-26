import { Component } from "react";
import { Alert, Container,Table } from "react-bootstrap";
import axios from "axios";

export class StudentList extends Component{
    constructor(){
        super()
        this.state={
            students:[],
            studentdelete:false
        }
    } 
    
    async FetchAllStudent(){
  const response=await axios.get('http://localhost:5000/students')
  console.log(response);
  this.setState({students:response.data})
}
    deletestudent= async (studentId)=>{
      const response=await axios.delete('http://localhost:5000/student/'+studentId)
     console.log(response.status);

     this.FetchAllStudent()
     }
    
  componentDidMount(){
         this.FetchAllStudent()
    }
   

    render(){
        return(
            <>
            <Container className="mt-5">
                <Alert variant="success"> view all students</Alert>

            </Container>
            <Container>
            <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Marks</th>
          <th>options</th>
        </tr>
      </thead>
      <tbody>

          {
            this.state.students.map((s)=>{
              return(
                <tr>
                    <td>{s.roll}</td>
                    <td>{s.name}</td>
                    <td>{s.phone}</td>
                    <td>{s.marks}</td>
                    <td><input type={"button"} value='delete' className="btn btn-danger btn-sm"  onClick={()=>{this.deletestudent(s._id)}}></input>
                     <input type={'button'} value='update' className="btn btn-secondary btn-sm" onClick={this.updatestudent} ></input>
                      </td>
                </tr>
              )
            })
          }

      </tbody>
    </Table>
   

            </Container>
            
                      </>
        )
    }
}
