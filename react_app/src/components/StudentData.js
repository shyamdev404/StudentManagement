import axios from "axios";
import { useEffect, useState } from "react"
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import RagisterStudent from "./RagisterStudent";
//import { RagistrationForm } from "./RagistrationForm";


export function StudentData() {
  const [students,setstudents] = useState([])
  const [deleteid, setdeleteid] = useState([])
  const [DeleteSuccessful, setDeleteSuccessful] = useState(false)
  const [show, setShow] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    fetchdata()
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = (studentId) => {
    setShow(true);
    console.log(studentId);
    setdeleteid(studentId)
  }

  const fetchdata = async () => {
   
  

    
    const response = await  axios.get('http://localhost:5000/students');
    console.log(response);
    setstudents(response.data)
  }

  const deletestudent = async (studentId) => {
    console.log(studentId);
    const response = await axios.delete('http://localhost:5000/student/'+studentId)
    //console.log(response.status);
    if (response.status === 204) {
      setDeleteSuccessful(true)
      setTimeout(() => {
        setDeleteSuccessful(false)
      }, 2000);
      fetchdata()
    }
    setShow(false)
  }
  const navigateToEditPage = (studentId) => {
    navigate(`/student/update/${studentId}`);
  };
  
  return (
    <>
      <Container className="mt-5">
        <Alert variant="success"> view all students</Alert>
      </Container>
      <Container className="text-center">
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
              students.map((s) => {
                return (
                  <tr>
                    <td>{s.roll}</td>
                    <td>{s.name}</td>
                    <td>{s.phone}</td>
                    <td>{s.marks}</td>
                    <td><Button variant="danger" onClick={() => { handleShow(s._id) }}>
                      Delete
                    </Button>
                    &nbsp;  <Button
                      variant="primary"
                      onClick={() => {
                       navigate(`/student/update/${s._id}`);
                      }}
                    >
                      Edit
                    </Button>

                  
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        {DeleteSuccessful ? <Alert variant='danger' className='mt-4'>Student deleted</Alert> : null}
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>DELETE STUDENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ARE YOU SURE....?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            NO</Button>
          <Button variant="primary" onClick={()=>{ deletestudent(deleteid) }}>YES</Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}