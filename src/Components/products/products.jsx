import React, { useState } from 'react'
import useFetchProducts from "../products/useFetchProdcuts.jsx"
export default function Products(params) {
    // logics
    const [products] = useFetchProducts()
    // start of views / user views
    return (
        <div>
            <h1>Prodcuts Sale Here</h1>
            {
                products.map((product, index) => {
                    return <p>
                        No.#{index} - Product Name:{product.title}<br />
                        Price {product.price}
                        <p>
                            <img src={product.image} alt={product.name} style={{ width: 50 }} />
                        </p>
                        <hr />
                    </p>
                })
            }
        </div>
    );
    // end of views
}
