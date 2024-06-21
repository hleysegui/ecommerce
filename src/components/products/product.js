"use client"

import { isEmpty } from "lodash"
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Product.module.css"
import { useEffect, useState } from "react"
import AddItem from "../cart/addItem"

const Product = ({product}) => {

    if(isEmpty(product)) {
        return null
    }

    const img = product?.images?.[0] ?? {}
    const productType = product?.type ?? ''

    return (
        <div key={product?.id} className="col-lg-3 col-md-6">
            <Link legacyBehavior href={`/product/${product.slug}`}>
                <a>
                    <Image src={ img?.src ?? '' } 
                        alt={ img?.alt }
                        title={ product?.name ?? '' }
                        width="200"
                        height="180"
                        priority="true"
                        fetchPriority="high"
                        objectFit="fill"
                        
                    />
                    <div className={styles.Price}>
                        <h3>{ product?.name ?? ''}</h3>
                        <div>{product?.price}<span>€</span></div>
                    </div>
                </a>
            </Link>
            <AddItem product={product} />
            
        </div>
    )
}

export default Product