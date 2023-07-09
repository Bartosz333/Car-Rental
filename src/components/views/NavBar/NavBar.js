import { Container, Nav, NavItem, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar bg='secondary' variant='dark' expand='lg' className='rounded my-4'>
      <Container>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavItem>
              <Nav.Link as={NavLink} to='/passenger'>
                Passenger Cars
              </Nav.Link>
            </NavItem>
            <Nav.Item>
              <Nav.Link as={NavLink} to='/commercial'>
                Commercial Cars
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
