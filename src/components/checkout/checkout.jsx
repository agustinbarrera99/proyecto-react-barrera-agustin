import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { CartContext } from '../../context/cartContext';

const Checkout = () => {
    const { cart, precioTotal, emptyCart, createOrder } = useContext(CartContext);
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        confirmarEmail: '',
    });
    const [validationErrors, setValidationErrors] = useState({});
    const [orderInfo, setOrderInfo] = useState(null);
    const [orderAttempted, setOrderAttempted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { nombre, telefono, email, confirmarEmail } = formData;
        const errors = {};

        if (nombre.length < 6 || /\d/.test(nombre)) {
            errors.nombre = 'El nombre debe tener al menos 6 caracteres y no debe contener números.';
        }

        if (telefono.length < 7 || /\D/.test(telefono)) {
            errors.telefono = 'El teléfono debe tener al menos 7 dígitos y no debe contener letras.';
        }

        if (email !== confirmarEmail) {
            errors.email = 'Los correos electrónicos no coinciden.';
            errors.confirmarEmail = 'Los correos electrónicos no coinciden.';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setOrderAttempted(true);

        if (!validateForm()) {
            console.error('Error en la validación del formulario.');
            return;
        }

        try {
            const { nombre, telefono, email } = formData;
            const orderId = await createOrder({ nombre, telefono, email }, cart);
            setOrderInfo({ orderId });
            emptyCart();
        } catch (error) {
            console.error('Error al procesar la orden:', error);
        }
    };

    const renderOrderInfo = () => {
        if (!orderInfo) {
            return null;
        }
        return (
            <div>
                <h3>Orden generada con éxito, el ID de su orden es: {orderInfo.orderId}</h3>
                <Link to="/" className="Link">
                    Volver al Inicio
                </Link>
            </div>
        );
    };

    return (
        <div className={styles.checkoutContainer}>
            <h2 className={styles.checkoutTitle}>Checkout</h2>
            {orderInfo ? (
                renderOrderInfo()
            ) : (
                <div>
                    <div className={styles.orderSummary}>
                        <h3>Resumen de la Orden</h3>
                        <ul>
                            {cart.map((product) => (
                                <li key={product.id}>
                                    {product.title} - Cantidad: {product.cantidad}
                                </li>
                            ))}
                        </ul>
                        <p>Total: ${precioTotal()}</p>
                    </div>
                    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                        <label>
                            Nombre:
                            <input placeholder='Ingrese su nombre' type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                            {orderAttempted && validationErrors.nombre && (
                                <span className={styles.error}>{validationErrors.nombre}</span>
                            )}
                        </label>
                        <label>
                            Teléfono:
                            <input placeholder='Ingrese su teléfono' type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                            {orderAttempted && validationErrors.telefono && (
                                <span className={styles.error}>{validationErrors.telefono}</span>
                            )}
                        </label>
                        <label>
                            Email:
                            <input placeholder='Ingrese su email' type="email" name="email" value={formData.email} onChange={handleChange} required />
                            {orderAttempted && validationErrors.email && (
                                <span className={styles.error}>{validationErrors.email}</span>
                            )}
                        </label>
                        <label>
                            Confirmar Email:
                            <input placeholder='Confirme su email' type="email" name="confirmarEmail" value={formData.confirmarEmail} onChange={handleChange} required />
                            {orderAttempted && validationErrors.confirmarEmail && (
                                <span className={styles.error}>{validationErrors.confirmarEmail}</span>
                            )}
                        </label>
                        <button type="submit">Realizar Pedido</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Checkout;
