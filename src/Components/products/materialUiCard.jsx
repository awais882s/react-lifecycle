import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { TableCell } from '@mui/material';

import useFetchBoard from "../products/useFetchProdcuts.jsx";
import DataGrid from "@mui/material/LinearProgress";


export default function Cards() {
    const [products, loading] = useFetchBoard()
    if (loading) {
        return (
            <DataGrid
                loading
            // {...data}
            />
        )
    }
    return (
        <>
            {
                products.map((product) => {
                    return (
                        <>
                            <Card>
                                <CardActionArea>
                                    <img src={product.image} alt="Image" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {product.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Typography>
                                    <Button size="small" color="primary">
                                        {product.price}$
                                    </Button>
                                </Typography>
                            </Card>

                        </>
                    )
                }
                )
            }
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} >
                <Pagination count={10} color="primary" />

            </div>

        </>
    )
}