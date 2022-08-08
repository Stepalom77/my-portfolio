import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <Navbar id='navbar' >
        <Container>
          <Navbar.Brand id='navName' href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link id='navName' href="#home">About Me</Nav.Link>
            <Nav.Link id='navName' href="#features">My Projects</Nav.Link>
            <Nav.Link id='navName' href="#pricing">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;