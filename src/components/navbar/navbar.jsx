import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/cartwidget';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data);
    } catch (error) {
        console.error('Error al obtener categorías', error);
    }

    };

    useEffect(() => {
    fetchCategories();
    }, []);

    return (
    <div>
        <Navbar className={styles.navbar} fixed="top" expand="lg">
        <Container fluid>
            <Link to="/" className="navbar-brand">
            TECH HUB
        </Link>
        <CartWidget />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 nav-bg" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="productos" className="categoria" id="dropdown-basic">
                <NavDropdown.Item as={NavLink} to="/">Todos los productos</NavDropdown.Item>
                {categories.map((cat, index) => (
                <NavDropdown.Item key={index} as={NavLink} to={`/category/${cat}`}>{cat}</NavDropdown.Item>
                ))}
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
    </div>
    );
};

export default NavBar;
