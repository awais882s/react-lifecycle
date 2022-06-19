import React, { useState } from 'react'
import useFetchBoard from "../products/useFetchProdcuts.jsx";
// import Instagram from 'react-content-loader';
import DataGrid from "@mui/material/LinearProgress";
export default function Products(params) {
    // logics
    const [products, loading] = useFetchBoard()
    // start of views / user views
    if (loading) {
        return (
            // <Instagram
            //     height={140}
            //     speed={1}
            //     backgroundColor={'#333'}
            //     foregroundColor={'#999'}
            //     viewBox="0 0 380 70"
            // />
            <>
                <DataGrid
                    loading
                    // {...data}
                />
            </>
        )
    }
    return (
        <div>


            <h1>Prodcuts Sale Here</h1>
            {
                products.map((product, index) => {
                    return <p>
                        Title:{product.title}
                        <p>
                            <img src={product.image} alt={product.category} style={{ width: 80 }} />
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
