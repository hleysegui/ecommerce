import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/store/cart"
})

export default async function GET(req, res) {
 
    const responseData = {
        success: false,
        products: [],
    }
    try {
        const { data } = await api.get(
            'items',
        )
        
        responseData.success = true
        responseData.products = data

        res.json(responseData)

    } catch(error) {
        responseData.error = error.message
    }
} 