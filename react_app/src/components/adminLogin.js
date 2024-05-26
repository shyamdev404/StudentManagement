import axios from 'axios';
import { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const [admin, setadmin] = useState({})

  const HandleOnSubmit = async(e) => {
    e.preventDefault();
   const response =await axios.post('http://localhost:5000/admins/login',admin)
  console.log(response.data);
   localStorage.setItem('token',JSON.stringify(response.data))
   
  }

 const HandleOnChange=(e)=>{
    setadmin ({...admin,[e.target.name]:e.target.value})
    console.log(admin);
  }
  return (
    <>


      <div className="Login">
        <Container>
          <Alert variant='success' className='App' >SIGN IN</Alert>
        </Container>
        <Form onSubmit={HandleOnSubmit}>
          <Form.Group size="lg">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              name='phone'
              onChange={HandleOnChange}


            />
          </Form.Group>
          <Form.Group size="lg">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={HandleOnChange}
              name='password'
            />
          </Form.Group>
          <input type={'submit'} value='Ragister' className="btn btn-success" ></input>
        </Form>
      </div>


    </>

  );

}

export default BasicExample;