import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'
import { CartEntry } from 'use-shopping-cart/core'

interface Request {
    cartItems: CartEntry[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { cartItems } = req.body as Request

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed.' })
    }

    if (!cartItems) {
        return res.status(400).json({ error: 'Price not found.' })
    }

    const cartItemsFormatted = cartItems.map((product) => ({
        price: product.price_id,
        quantity: product.quantity,
    })) as []

    console.log(cartItemsFormatted)

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'subscription',
        line_items: cartItemsFormatted,
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}