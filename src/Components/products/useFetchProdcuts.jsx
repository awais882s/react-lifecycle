import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { apiFetchProducts } from './api';
export default function useFetchBoard() {
    // logics
    const [products, setProducts] = useState([])
    // end of logic

    // using fetch built js network handler
    // async function apiFetchProducts() {
    //     let productsRes = await fetch('https://fakestoreapi.com/products')
    //     let products = await productsRes.json()
    //     setProducts(products);
    //     console.log("Products", products);
    // }

    useEffect(() => {
        apiFetchProducts()
    }, [])


    // using fetch built js network handler
    async function apiFetchProducts() {
        try {
            let products = await axios.get('/https://fakestoreapi.com/products')
            setProducts(products);
        }
        catch (error) {
            console.log("Erros:", error);

        }
        // console.log("Products", products);
    }

    // logics return
    return (
        [products, setProducts]
    );
    // end of views
}
