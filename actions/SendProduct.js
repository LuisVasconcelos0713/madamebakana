"use server"
import prisma from "../lib/prisma"

export async function sendProduct(formData) {
    
    const productName = formData.get("name")
    const productPrice = formData.get("price")
    const productDiscount = formData.get("discount")
    const productImageLink = formData.get("imageLink")
    
    const product = await prisma.product.create({
        data:{
            name: productName,
            price: Number(productPrice),
            discount:productDiscount ?  
            Number(productDiscount) :
            null,
            image: productImageLink
        }
    })

    return {message: "ok"}
}

