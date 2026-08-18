"use client"
import { useState } from "react"
import {sendProduct} from "../../actions/SendProduct"
import Products from "../../components/Products"

const Page = () => {
    const [products, setProducts] = useState([])

    
    return(
        <div>
            <form action={sendProduct}>
                <input type="text" name="name" placeholder="Product name" className="px-5 py-4"></input>
                <input type="text" name="price" placeholder="Product price" className="px-5 py-4"></input>
                <input type="text"name="discount" placeholder="Product discount" className="px-5 py-4"></input>
                <input type="text" name="imageLink" placeholder="ImageLink" className="px-5 py-4"></input>
                <button type="submit" className="i">Enviar dados</button>
            </form>
            <h1>Teste</h1>
            <Products></Products>
        </div>    
    )
}

export default Page;