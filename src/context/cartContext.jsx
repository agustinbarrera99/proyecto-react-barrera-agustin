import { createContext, useState } from "react"
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/client";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product, cantidad = 1) => {
        const productAgregado = { ...product, cantidad };

        const newCart = [...cart];
        const isInTheCart = newCart.find((product) => product.id === productAgregado.id);

        if (isInTheCart) {
            isInTheCart.cantidad += cantidad;
        } else {
            newCart.push(productAgregado);
        }

        setCart(newCart);
    };

    const quantityInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => {
            const subtotal = prod.price * prod.cantidad;
            if (!isNaN(subtotal) && typeof subtotal === 'number') {
                return acc + subtotal;
            }
            return acc;
        }, 0).toFixed(2);
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === productId) {
                    return { ...item, cantidad: item.cantidad - 1 };
                }
                return item;
            }).filter((item) => item.cantidad > 0)
        );
    };

    const createOrder = async (formData, cart) => {
        try {
            const { nombre, telefono, email } = formData;

            const orderData = {
                buyer: {
                    name: nombre,
                    phone: telefono,
                    email: email,
                },
                products: cart.map(product => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: product.cantidad,
                })),
                total: precioTotal(),
            };

            const ordersRef = collection(db, 'orders');
            const newOrderRef = await addDoc(ordersRef, orderData);

            return newOrderRef.id;
        } catch (error) {
            console.error('Error al crear la orden:', error);
            throw new Error('Error al crear la orden');
        }
    };

    return (
        <CartContext.Provider value={{ 
            cart,
            addToCart,
            quantityInCart,
            precioTotal,
            emptyCart,
            createOrder,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}



