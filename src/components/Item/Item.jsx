import Contador from '../contador/Contador';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className={styles.container}>
      <div key={producto.id} className={styles.card}>
        <div className={styles.imagenContainer}>
          <img
            src={producto.image}
            alt={producto.titulo}
            className={styles.cardImagen}
          />
        </div>
        <div className={styles.cardBody}>
          <h2 className={styles.titulo}>{producto.title}</h2>
          <p className={styles.precio}>${producto.price}</p>
          <Contador />
          <Link to={`/item/${producto.id}`} className={styles.botones}>
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;