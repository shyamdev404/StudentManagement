
import { Navbar,Nav,Container, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">MySchool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          <LinkContainer to={'/'}><NavLink>Home</NavLink></LinkContainer>
                          <LinkContainer to={'/about'}><NavLink>About</NavLink></LinkContainer>
                          <LinkContainer to={'/ragister-student'}><NavLink>Ragister Student</NavLink></LinkContainer>
                          <LinkContainer to={'/all-student'}><NavLink>View All Student</NavLink></LinkContainer>
                          <LinkContainer to={'/contact'}><NavLink>Contact Us</NavLink></LinkContainer>
                         
                         
                         <LinkContainer to={'/admin/login'}><NavLink>Admin Login</NavLink></LinkContainer>
                         <LinkContainer to={'/admin/signup'}><NavLink>Signup</NavLink></LinkContainer>
                         </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}