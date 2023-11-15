import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/cartItem";

const Cart = () => {
    const { cart, precioTotal, emptyCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        emptyCart();
    };

    return (
        <div className={styles.container}>
            <h3>Carrito</h3>
            <div className={styles.productList}>
                {cart.map((prod) => (
                    <CartItem key={prod.id} product={prod} />
                ))}
            </div>
            {cart.length > 0 ? (
                <div className={styles.cartSummary}>
                    <h2 className={styles.total}>Total: ${precioTotal()}</h2>
                    <button onClick={handleEmptyCart}>
                        Vaciar carrito
                    </button>
                    <Link to="/checkout" className="Link">
                        Finalizar compra
                    </Link>
                </div>
            ) : (
                <div className={styles.container}><h3>No hay productos en el carrito</h3>
                <Link className="Link" to="/">volver al inicio</Link></div>

            )}
        </div>
    );
};

export default Cart;



