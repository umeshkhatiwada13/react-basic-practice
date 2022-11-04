import React from 'react';
import { useParams } from "react-router-dom";

function Product() {
    const params = useParams();
    return (
        <div>{params.id}</div>
    )
}

function ProductMap({ value }) {
    return (<div>
        <h2>{value}</h2>
    </div>)
}

export default Product;
export { ProductMap };