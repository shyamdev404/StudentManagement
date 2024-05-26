import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export function UpdateStudent() {
  const { id } = useParams();
  const [isUpdateSuccessful, setisUpdateSuccessful] = useState(false);
  const [user, setuser] = useState({
    roll: "",
    name: "",
    phone: "",
    marks: ""
  });

  useEffect(() => {
    fetchdata();
  }, []);

  const { roll, name, phone, marks } = user;

  const HandleonChange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/student/${id}`, user);
    setisUpdateSuccessful(true);
    setTimeout(() => {
      setisUpdateSuccessful(false);
    }, 2000);
  };

  const fetchdata = async () => {
    const response = await axios.get(`http://localhost:5000/student/${id}`);
    setuser(response.data);
    console.log(response);
  };

  return (
    <>
      <Container className="mt-4">
        <Alert variant="dark">Update Student</Alert>
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
                  value={roll}
                  onChange={HandleonChange}
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
                  value={name}
                  onChange={HandleonChange}
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
                  value={phone}
                  onChange={HandleonChange}
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
                  value={marks}
                  onChange={HandleonChange}
                  placeholder="Enter name"
                />
              </Form.Group>
            </Col>
          </Row>
          <input type="submit" value="Update" className="btn btn-secondary" />
        </Form>
        {isUpdateSuccessful ? (
          <Alert variant="success" className="mt-4">
            Student Updated
          </Alert>
        ) : null}
      </Container>
    </>
  );
}
