import { Alert, Col, Container, Row, Card } from "react-bootstrap";

export function Contact() {
    return (
        <>
            <Container className="mt-5">
                <Alert variant="success">Contact Details</Alert>
                <Container className="mt-3">
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Ph.no.</Card.Title>
                                    <Card.Text>
                                        +91349858
                                        +917430570
                                    </Card.Text>

                                </Card.Body>
                            </Card></Col>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>@Email</Card.Title>
                                    <Card.Text>
                                    mineschool@gmail.com 
                                    </Card.Text>

                                </Card.Body>
                            </Card></Col>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Address</Card.Title>
                                    <Card.Text>
                                        37b/x building/chok/indore
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}