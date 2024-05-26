import { Alert } from 'bootstrap'
import React from 'react'
import { Container, Form } from 'react-bootstrap'

const AdminSignUp = () => {
  return (
   <> 
    <div>
        <Container>
          <Alert variant='success' className='App' >SIGN IN</Alert>
        </Container>
        <Form>
          <Form.Group size="lg">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              name='phone'
          


            />
          </Form.Group>
          <Form.Group size="lg">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
             
              name='password'
            />
          </Form.Group>
          <input type={'submit'} value='Ragister' className="btn btn-success" ></input>
        </Form>
      </div>
   
   </>
  )
}

export default AdminSignUp