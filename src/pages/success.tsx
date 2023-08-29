import { stripe } from "@/lib/stripe";
import { SucessContainer, ImageContainer } from "@/styles/pages/sucess";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";


interface SuccessProps {
    customerName: string;
    products: {
        name: string;
        id: string
        image: string;
    }[]
}

export default function Success({ customerName, products }: SuccessProps) {
    return (
        <>

            <Head>
                <title>Compra efetuada</title>
                <meta name="robots" content="noindex" />
            </Head>
            <SucessContainer>
                <h1>Compra efetuada</h1>
                <div>

                    {products.map((product) => (
                        <ImageContainer key={product.id}>
                            <Image alt='' src={product.image} width={130} height={130} />
                        </ImageContainer>

                    ))}
                </div>

                <p>
                    Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisas já está a caminho da sua casa.
                </p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SucessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id)


    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details?.name
    const products = session.line_items?.data.map((entry) => {
        const product = entry.price?.product as Stripe.Product

        return {
            id: product.id,
            name: product.name,
            image: product.images[0],
        }
    })




    sessionId
    return {
        props: {
            customerName,
            products
        }
    }

}