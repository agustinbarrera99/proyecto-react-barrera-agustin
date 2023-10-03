import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/cartwidget';



const NavBar = () => {
return (
    <Navbar className={styles.navbar} fixed='top' expand="lg">
    <Container fluid>
        <Navbar.Brand href="#">TECH HUB</Navbar.Brand>
        < CartWidget />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0 nav-bg"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <NavDropdown title="productos" className='categoria' id="dropdown-basic">
            <NavDropdown.Item href="#Todos los productos">Todos los productos</NavDropdown.Item>
            <NavDropdown.Item href="#Notebooks">Notebooks</NavDropdown.Item>
            <NavDropdown.Item href="#Accesorios">Accesorios</NavDropdown.Item>
            <NavDropdown.Item href="#Celulares y tablets">Celulares y tablets</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="buscar productos..."
            className="me-1"
            aria-label="Search"
            />
            <Button variant="light">Buscar</Button>
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavBar;