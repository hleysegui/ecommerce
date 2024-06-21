"use server"

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
})

/**
 * Get Products.
 *
 * @return {Promise<void>}
 */
export const getProductsData = async ( perPage = 50 ) => {
	const res = await api.get(
		'products',
		{
			per_page: perPage || 50,
		},
	)
	
	return res
}

/**
 * Get Single Product By Slug.
 *
 * @return {Promise<void>}
 */
export const getProductBySlug = async ( productSlug = '' ) => {
	return await api.get(
		'products',
		{
			slug: productSlug,
		},
	)
}