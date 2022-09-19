import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './pictures/logo.png'
import Button from 'react-bootstrap/Button';



function BasicExample() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Продукция</Nav.Link>
            <Nav.Link href="#link">О нас</Nav.Link>
            <Nav.Link href="#link">Контакты</Nav.Link>
          </Nav>
          <Button variant="outline-danger">Связаться с нами</Button>        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;