import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.notFoundTitle}>¡Oops! Página no encontrada</h1>
            <p className={styles.notFoundMessage}>La página que estás buscando no existe o ha sido movida.</p>
            <Link to="/" className={styles.buttonStyle}>Volver al inicio</Link>
        </div>
    )
}

export default NotFoundComponent;