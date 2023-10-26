import React from "react";
import styles from "./styles.module.css";
import Contador from "../contador/Contador";
import { Link } from "react-router-dom";

const ItemDetail = ({producto, loading}) => {
    
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
}

export default ItemDetail