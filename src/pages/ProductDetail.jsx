import React from "react";
import useFetch from "../hooks/useFetch";
import { Navigate, useParams } from "react-router-dom";

function ProductDetail() {

    const { slug } = useParams();
    const { data, loading, error } = useFetch(`/products/${slug}`)

    if (loading) return <p>Caricamento in corso...</p>
    if (error) {
        return (
            <div>
                <h1>Siamo spiacenti!</h1>
                <p>Non abbiamo trovato alcun prodotto associato al nome: <strong>{slug}</strong></p>
            </div>
        );
    }
    return (
        <><h1>dettagli prodotti</h1></>
    )
}

export default ProductDetail;