import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import styles from "./styles.module.css";

const CartItem = ({ product }) => {
    const { removeFromCart, addToCart } = useContext(CartContext);

    return (
        <div key={product.id} className={styles.productContainer}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <div className={styles.productDetails}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>Precio unitario: ${product.price}</p>
                <p className={styles.productTotal}>Precio total: ${product.price * product.cantidad}</p>
                <p className={styles.productQuantity}>Cantidad: {product.cantidad}</p>
                <div className={styles.cartAcciones}>
                    <button onClick={() => removeFromCart(product.id)}>
                        -
                    </button>
                    <button onClick={() => addToCart(product)}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
