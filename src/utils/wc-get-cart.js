import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/store/v1"
})

/**
 * Get Cart.
 *
 * @return {Promise<void>}
 */
export const getCartData = async ( perPage = 50 ) => {
	return await api.get(
		'cart/items',
		{
			per_page: perPage || 50,
		},
	)
}