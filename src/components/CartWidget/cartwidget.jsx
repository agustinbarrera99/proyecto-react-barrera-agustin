import styles from './styles.module.css'
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
    <Button className={styles.botonCarrito} variant="transparent">
    <i className="bi bi-bag-fill icono-carrito"></i>
    <span className={styles.numerito}>0</span>
    </Button>
);
}

export default CartWidget;