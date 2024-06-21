import { isArray, isEmpty } from "lodash"
import styles from '@/styles/Product.module.css'
import Product from "./product"

const Products = ({ products }) => {

    if(isEmpty(products) || isArray(products)) {
        return null
    }

    return (
        <div className="container">
            {
                <div className={styles.Item}>
                { products.data.length ? products.data.map(product => {
                        return (
                            <Product key={product?.id} product={product}/>
                        )
                    }) : null
                }
            </div>
            }
        </div>
    )
}

export default Products