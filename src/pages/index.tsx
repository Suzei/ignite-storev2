import { HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import { GetStaticProps } from "next"
import Link from "next/link"
import Head from "next/head"
import { useShoppingCart } from 'use-shopping-cart'
import { Cart } from "@/components/CartButton"

interface ProductProps {
  products: {
    id: string,
    name: string,
    image: string,
    price: string,
    price_id: string,
  }[]
}

export default function Home({ products }: ProductProps) {
  const { addItem } = useShoppingCart();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,

    }
  })
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef}>
        {products?.map((product) => (
          <Link href={`product/${product.id}`} key={product.id} prefetch={false} >
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.image} alt="" width={520} height={480} />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <Cart variant="product" handleOnClick={() => addItem(product)} />
              </footer>
            </Product>
          </Link>
        ))}

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(item => {

    const price = item.default_price as Stripe.Price
    return {
      id: item.id,
      name: item.name,
      image: item.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100,),
      price_id: price.id

    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2,
  }
}