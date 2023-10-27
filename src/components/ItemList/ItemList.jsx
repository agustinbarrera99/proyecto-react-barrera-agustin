import React from 'react';
import Item from '../Item/Item';
import styles from './styles.module.css'

const ItemList = ({ productos }) => {
    return (
        <div className={styles.gridContainer}>
        {productos.length > 0 ? (
            productos.map((producto) => (
            <Item key={producto.id} producto={producto} />
        ))
        ) : (
            <p>No se encontraron productos.</p>
        )}
        </div>
    );
};

export default ItemList;