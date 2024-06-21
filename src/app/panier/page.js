
import ProductsBasket from "@/components/panier"
import { getCartData } from "@/utils/wc-get-cart"

export default async function PanierPage({products}) {

    products = await getCartData()

    console.log(products)

    return (
        <>
            <h1>Mon panier</h1>
            <ProductsBasket products={products}/>
        </>
    )
}