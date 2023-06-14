import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ProfileModel } from '../../model/ProfileModel';

interface Props extends ProfileModel { }

const Navigation: React.FC<Props> = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/profile">{props.firstName} {props.lastName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/yourBooks">Your Books</Nav.Link>
            <Nav.Link href="/addBook">Add a Book</Nav.Link>
            {/* Will be using google books API to pull in book info */}
            <Nav.Link href="/browseBooks">Browse Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;