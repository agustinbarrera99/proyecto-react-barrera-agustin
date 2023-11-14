import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../loader/loader';
import styles from './styles.module.css';
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/client"

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        let productsFiltered;

        if (categoryId) {
          productsFiltered = query(productsRef, where("categoryId", "==", categoryId));
        } else {
          productsFiltered = productsRef;
        }

        const snapshot = await getDocs(productsFiltered);

        setProducts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className={styles.container}>
      <h3>{categoryId ? categoryId : 'Todos los productos'}</h3>
      <div>
        <Loader loading={loading} />
        {products.length === 0 && !loading && (
          <div>
            <h3>parece que la categoria no existe</h3>
            <Link className='Link' to="/"> volver al inicio</Link>
          </div>

        )}
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;

