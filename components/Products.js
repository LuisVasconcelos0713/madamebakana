"use client"

import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get("/api/products")
            setProducts(response.data)
        }

        getProducts()
    },[])

    return(
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <h2>{product.price}</h2>
                    <h3>{product.discount}</h3>
                    <h4>{product.image}</h4>
                </div>
            ))}
        </div>
    )
}

export default Products;