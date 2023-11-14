import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import Loader from "../loader/loader";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const docRef = doc(db, 'products', id);

        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setProduct({ ...resp.data(), id: resp.id });
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loader loading={loading} />;
    }
    return product ? <ItemDetail product={product} /> : 
    <div>
        <h3>Ups.. este producto no existe</h3>
        <Link className="Link" to="/">volver al inicio</Link>
    </div>
};

export default ItemDetailContainer; 