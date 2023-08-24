"use client"

import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Logo from '../assets/Logo.svg'
import { Container, Header } from '@/styles/pages/app';
import Image from 'next/image';
import Link from 'next/link';
import { CartProvider } from 'use-shopping-cart';
import { Cart } from '@/components/cart';
import { useShoppingCart } from 'use-shopping-cart'
globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartProvider shouldPersist cartMode='checkout-session' currency='BRL' stripe={String(process.env.STRIPE_PUBLIC_KEY)} >
      <Container>
        <Header>
          <Link href="/">
            <Image alt='Logo da página' src={Logo} />
          </Link>

          <Cart variant='header' />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
