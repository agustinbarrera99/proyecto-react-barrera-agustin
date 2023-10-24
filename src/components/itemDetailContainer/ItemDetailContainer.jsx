import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from './styles.module.css';
import Spinner from '../customspinner/CustomSpinner';
import Contador from '../contador/Contador'

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(); 
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducto(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <div className={styles.card}>
                    <img className={styles.cardImagen} src={producto?.image} alt={producto?.title} />
                    <div className={styles.cardDetalles}>
                        <h2 className={styles.titulo}>{producto?.title}</h2>
                        <p className={styles.descripcion}>{producto?.description}</p>
                        <p className={styles.precio}>${producto?.price}</p>
                        <div className={styles.acciones}>
                            <button className={styles.boton}>Agregar al carrito</button>
                            <Contador />
                            <Link to="/" className={styles.boton}>Volver</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
