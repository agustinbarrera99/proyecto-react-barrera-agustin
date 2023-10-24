import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import Spinner from '../customspinner/CustomSpinner';
import styles from './styles.module.css'

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState('Productos');

  const fetchData = async () => {
    try {
      const url = `https://fakestoreapi.com/products`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      setProducts(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    setCategoria(categoryId ? categoryId : 'Todos los productos');
  }, [categoryId]);

  if (loading) return <Spinner />;

  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{categoryId ? categoryId : "Productos"}</h2>
      <div className={styles.containerItems}>
      {products.filter(producto => !categoryId || producto.category === categoryId).map((pr, index) => <Item producto={pr} key={index} />)}
      </div>

    </div>
  );
};

export default ItemListContainer;
