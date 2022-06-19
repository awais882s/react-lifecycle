import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { apiFetchProducts } from './api';
export default function useFetchBoard() {
    // logics
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    // end of logic

    // using fetch built js network handler
    // async function apiFetchProducts() {
    //     let productsRes = await fetch('https://fakestoreapi.com/products')
    //     let products = await productsRes.json()
    //     setProducts(products);
    //     console.log("Products", products);
    // }


    // using fetch built js network handler
    async function apiFetchProducts() {
        try {
            setLoading(true)
            let products = await axios.get('https://fakestoreapi.com/products')
            console.log(products.data);
            setProducts(products.data);
        }
        catch (err) {
            console.log("Erros:", err);
            console.log("An Erros");
        }
        finally {
            setLoading(false);
        }
        // console.log("Products", products);
    }

    useEffect(() => {
        apiFetchProducts();
    }, [])

    // logics return
    return (
        [products , loading]
    );
    // end of views
}
