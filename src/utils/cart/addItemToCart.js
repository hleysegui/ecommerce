
"use server"

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"
import { isArray, isEmpty } from "lodash"
import { getSession, storeSession } from "../session"
import { auth } from "../../../auth"


const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/store",
	/* axiosConfig: {
        headers: {
			"X-WC-Store-API-Nonce": "9d74783cc0"
		 } 
	} */
}) 

export const AddItemToCart = (formData, session) => {

    const currentSession = getSession()
    const productId = formData.get("productId")
    
    api.post(`cart/add-item?id=${productId}&quantity=1&user=3`).then((res) => { 
        if(isEmpty(currentSession)) {
            storeSession('x-wc-session', res?.headers)
			console.log(res?.headers)
        } 

		
    }) 

}