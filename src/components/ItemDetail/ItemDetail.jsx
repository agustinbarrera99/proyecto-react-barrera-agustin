import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ product }) => {
    const [cantidad, setCantidad] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product, cantidad);

    };

    return (
        <div>
            {product && (
                <div className={styles.card}>
                    <img className={styles.cardImagen} src={product.image} alt={product.title} />
                    <div className={styles.cardDetalles}>
                        <h3>{product.title}</h3>
                        <p className={styles.descripcion}>{product.description}</p>
                        <p>stock: {product.stock}</p>
                        <p className={styles.precio}>${product.price}</p>
                        <ItemCount
                            contador={cantidad}
                            setContador={setCantidad}
                            stock={product.stock} 
                        />
                        <div className={styles.acciones}>
                        <button onClick={handleAddToCart}>
                            Agregar al carrito
                        </button>
                        <Link to="/" className="Link">
                            Volver
                        </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetail;