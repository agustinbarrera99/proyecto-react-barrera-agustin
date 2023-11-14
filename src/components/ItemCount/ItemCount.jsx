import styles from './styles.module.css';

const ItemCount = ({ contador, setContador, stock }) => {
    const incrementarContador = () => {
        contador < stock && setContador(contador + 1);
    }

    const disminuirContador = () => {
        contador > 1 && setContador(contador - 1);
    }

    return (
        <div>
            <button onClick={disminuirContador}>-</button>
            <span className={styles.valorContador}>{contador}</span>
            <button onClick={incrementarContador}>+</button>
        </div>
    )
}

export default ItemCount;

