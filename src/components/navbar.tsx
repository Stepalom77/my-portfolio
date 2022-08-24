import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar: React.FC = () => {
  return (
    <>
      <Navbar fixed='top' id='navbar' >
        <Container>
          <Navbar.Brand id='navName' href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link id='navName' href="/about">About Me</Nav.Link>
            <Nav.Link id='navName' href="/projects">My Projects</Nav.Link>
            <Nav.Link id='navName' href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;