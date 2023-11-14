import React from 'react';
import Item from '../Item/Item';
import styles from './styles.module.css'

const ItemList = ({ products }) => {
    return (
        <div className={styles.gridContainer}>
            {Array.isArray(products) && products.length > 0 && (
                products.map((product) => (
                    <Item key={product.id} producto={product} />
                ))
            )}
        </div>
    );
};

export default ItemList;