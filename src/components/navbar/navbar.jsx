import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/cartwidget';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/client";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const productsRef = collection(db, 'products');
            const productsSnapshot = await getDocs(productsRef);

            const uniqueCategories = [];

            productsSnapshot.forEach((doc) => {
                const productData = doc.data();
                if (productData.categoryId && !uniqueCategories.includes(productData.categoryId)) {
                    uniqueCategories.push(productData.categoryId);
                }
            });

            setCategories(uniqueCategories);
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
