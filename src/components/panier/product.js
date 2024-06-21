import { isEmpty } from "lodash"
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/Product.module.css"
import SubscribeComponent from "../checkout"

const ProductInBasket = ( {product} ) => {

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
                        <div>
                            <p>quantity: {product?.quantity}</p>
                            <p>Prix unitaire: {product?.prices.price}<span>€</span></p>
                            <p>Prix total: {product?.totals.line_total}<span>€</span></p>
                        </div>

                    </div>
                </a>
            </Link>
            <SubscribeComponent price={product?.totals.line_total} description={product?.description}  />
        </div>
    )
}

export default ProductInBasket