import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

export const StudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formdata, setformdata] = useState({
    roll: '',
    name: '',
    phone: '',
    marks: '',
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      fetchData();
    }
  }, [isEditMode]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/student/${id}`);
      setformdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleOnChange = (event) => {
    setformdata((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const HandleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/student/${id}`, formdata);
      } else {
        await axios.post('http://localhost:5000/student', formdata);
      }
      setIsSubmitSuccessful(true);
      setTimeout(() => {
        setIsSubmitSuccessful(false);
        if (!isEditMode) {
          setformdata({
            roll: '',
            name: '',
            phone: '',
            marks: '',
          });
        }
        navigate('/all-student'); // Redirect to the students list page
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="mt-4">
        <Alert variant="dark">{isEditMode ? 'Update Student' : 'Register Student'}</Alert>
      </Container>
      <Container>
        <Form onSubmit={HandleOnSubmit}>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Roll</Form.Label>
                <Form.Control
                  type="text"
                  name="roll"
                  value={formdata.roll}
                  onChange={HandleOnChange}
                  placeholder="Enter Roll"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formdata.name}
                  onChange={HandleOnChange}
                  placeholder="Enter name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formdata.phone}
                  onChange={HandleOnChange}
                  placeholder="Enter phone"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>Marks</Form.Label>
                <Form.Control
                  type="text"
                  name="marks"
                  value={formdata.marks}
                  onChange={HandleOnChange}
                  placeholder="Enter name"
                />
              </Form.Group>
            </Col>
          </Row>
          <input type="submit" value={isEditMode ? 'Update' : 'Register'} className="btn btn-secondary" />
        </Form>
        {isSubmitSuccessful && (
          <Alert variant="success" className="mt-4">
            {isEditMode ? 'Update' : 'Registration'} Successful
          </Alert>
        )}
      </Container>
    </>
  );
};

//export default StudentForm;
