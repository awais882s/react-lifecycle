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
                        Title:{product.title}
                        <p>
                            <img src={product.image} alt={product.category} style={{ width: 50 }} />
                        </p>
                        No.#{index} <br />
                        Price {product.price}
                        <hr />
                    </p>
                })
            }
        </div>
    );
    // end of views
}
