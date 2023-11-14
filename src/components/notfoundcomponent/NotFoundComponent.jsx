import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const NotFoundComponent = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h3>¡Oops! Página no encontrada</h3>
            <Link to="/" className='Link'>Volver al inicio</Link>
        </div>
    )
}

export default NotFoundComponent;