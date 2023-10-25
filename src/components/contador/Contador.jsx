import styles from './styles.module.css';
import { createContext, useState } from 'react';


const Contador = () => {

    const [contador, setContador] = useState(1);

    const incrementarContador = () => {
        setContador(contador + 1);
    }

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <button className={styles.botonesContador} onClick={disminuirContador}>-</button>
            <span className={styles.valorContador}>{contador}</span>
            <button className={styles.botonesContador} onClick={incrementarContador}>+</button>
        </div>
    )

}

export default Contador