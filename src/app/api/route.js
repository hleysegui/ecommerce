import axios from "axios"

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/store/cart"
})

/*export async function GET(request) {

    const res = await api.get(
        'items',
    )

    return Response.json(res)
}
 */
export async function GET() {

    const res = await axios.get("http://localhost:8888/ecommerce/backend/wp-json/wc/store/v1/cart/items?consumer_key=ck_8f82ce6fecfb223de801628ee2208552d1f50a33&consumer_secret=cs_f30b874e3809f70044ecc336b49517adc69042d9")
    console.log(res)
    const data = await res.json()

    return Response.json({ data })

}