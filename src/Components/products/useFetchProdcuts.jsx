import React, { useState, useEffect } from 'react'
// import { apiFetchProducts } from './api';
export default function useFetchBoard() {
    // logics
    const [products, setProducts] = useState([])
    // end of logic
    async function apiFetchProducts() {
        let productsRes = await fetch('https://fakestoreapi.com/products')
        let products = await productsRes.json()
        setProducts(products);
        console.log("Products", products);
    }
    useEffect(() => {
        apiFetchProducts()

    }, [])

    // logics return
    return (
        [products, setProducts]
    );
    // end of views
}
