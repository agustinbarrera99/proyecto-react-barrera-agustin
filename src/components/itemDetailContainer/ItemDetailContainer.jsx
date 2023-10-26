import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../loader/loader";
import ItemDetail from "../ItemDetail/ItemDetail"; 

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
        throw new Error("Network response was not ok");
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
    }, [id]);

    return (
        <div>
            {loading ? (
            <Loader loading={loading}/>
            ) : (
            <ItemDetail producto={producto}/>
        )}
        </div>
    );
};

export default ItemDetailContainer;
