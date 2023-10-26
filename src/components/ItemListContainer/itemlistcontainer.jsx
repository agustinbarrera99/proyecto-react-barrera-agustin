import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import Loader from '../loader/loader';
import styles from './styles.module.css'

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState('Productos');

  const fetchData = async () => {
    try {
      const url = `https://fakestoreapi.com/products`;
      const response = await fetch(url);

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
    setCategoria(categoryId);
  }, [categoryId]);

  if (loading) return <Loader />;

  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{categoryId ? categoryId : "todos los productos"}</h2>
      <div className={styles.containerItems}>
      {products.filter(producto => !categoryId || producto.category === categoryId).map((pr, index) => <Item producto={pr} key={index} />)}
      </div>

    </div>
  );
};

export default ItemListContainer;
