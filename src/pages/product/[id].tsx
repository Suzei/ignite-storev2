import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useShoppingCart } from 'use-shopping-cart'
import Stripe from "stripe"

interface ProductProps {
    product: {
        id: string,
        name: string,
        image: string,
        price: string,
        description: string;
        price_id: string
    }
}


export default function Product({ product }: ProductProps) {
    const { addItem } = useShoppingCart()
    console.log(product.price_id)
    return (
        <>
            <Head>
                <title>{product.name} | Ignite</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.image} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{new Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        style: 'currency'
                    }).format(product.price / 100)}</span>
                    <p>{product.description}</p>
                    <button onClick={() => addItem(product)}>Adicionar ao carrinho</button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_OSrioXa0rt7oIl' } }
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    if (!params) {
        return {
            notFound: true
        }
    }

    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    console.log(product)

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                image: product.images[0],
                // price: new Intl.NumberFormat('pt-BR', {
                //     style: 'currency',
                //     currency: 'BRL',
                // }).format(price.unit_amount! / 100,),
                description: product.description,
                price_id: price.id,
                price: price.unit_amount
            }
        },
        revalidate: 60 * 60 * 1
    }
}

