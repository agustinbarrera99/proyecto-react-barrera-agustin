import { useContext } from 'react';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/cartContext';

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext)

    return (
        <Link to="/Cart" className={styles.botonCarrito}>
            <Button variant="transparent">
                <i className="bi bi-bag-fill icono-carrito"></i>
                <span className={styles.numero}>{cantidadEnCarrito()}</span>
            </Button>
        </Link>
    );
}

export default CartWidget;
