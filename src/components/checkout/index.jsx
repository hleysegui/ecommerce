"use client"

import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import PropTypes from 'prop-types';

const SubscribeComponent = ({priceId, price, description}) => {

    const handleSubmit = async () => {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

        if(!stripe) {
            return
        }

        try {
            const response = await axios.post('http://localhost:8888/ecommerce/backend/wp-json/wc/store/checkout', {
                priceId: priceId
            })

            const data = response.data
            if(!data) throw new Error('something wrong')

            await stripe.redirectToCheckout({
                sessionId: data.result.id
            })
        }   catch (error) { console.log(error) }
    }

    return (
        <div>
Click Below button to get {description}
            <button onClick={handleSubmit}>
                Upgrade in {price}
            </button>
        </div>
    )
}

SubscribeComponent.PropTypes = {
    priceId: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
}

export default SubscribeComponent