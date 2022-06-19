import React, { useState, useEffect } from 'react'
export default function useFetchBoard() {
    // logics
    const [products, setProducts] = useState([
        {
            Productname: "car ",
            price: "$ 1234"
        },
        {
            Productname: "bike",
            price: "$ 1237"
        },
        {
            Productname: "i phone 13 pro max ",
            price: "$ 1934"
        }
    ])
    // end of logic
    useEffect(() => {
        console.log("products");
    }, [])

    // logics return
    return (
        [products, setProducts]
    );
    // end of views
}
