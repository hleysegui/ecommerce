"use client"

import { getProductBySlug } from "@/app/product/[slug]/page"
import { isEmpty } from "lodash"
import { useEffect, useState } from "react"

const ProductDetails = () => {

    const [ product, setProduct ] = useState("")

    /* useEffect(() => {
        async function fetchData() {
            const res = await getProductBySlug( slug )
            setProduct(res)
        }
        fetchData()
        
    },[product]) */


    if(isEmpty(product)) {
        return null
    }

    return (
        <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.slug}</p>
        </div>
    )
}

export default ProductDetails