import { Alert, Col, Container, Row,Card } from "react-bootstrap";

export function About() {
    return (
        <>
            <Container className="mt-5">
                <Alert variant="success">This is about page</Alert>
                <Container className="mt-3">
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>About Us</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>

                                </Card.Body>
                            </Card></Col>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Our Mission</Card.Title>
                                    <Card.Text>
                                   lassical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                                    </Card.Text>

                                </Card.Body>
                            </Card></Col>
                        <Col lg={4}>
                        <Card>
                                <Card.Body>
                                    <Card.Title>Our vision</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
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