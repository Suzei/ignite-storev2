import { CartItem, CartItems, CartWrapper, Close, Content, EndPurchase, ImageContainer } from '@/styles/pages/cart';
import { X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart'

export function CartBox() {
    const { removeItem, cartCount, cartDetails, clearCart, formattedTotalPrice } = useShoppingCart()
    const cartItems = Object.values(cartDetails ?? {})
    console.log(cartDetails)
    console.log(formattedTotalPrice)
    async function handleBuyButton() {
        try {

            const response = await axios.post('/api/checkout', {
                cartItems,
            })

            clearCart()


            const { checkoutUrl } = response.data;
            window.location.href = checkoutUrl;
        } catch (err) {
            alert('Falha ao redirecionar ao checkout!')
        }
    }

    return (
        <Dialog.Portal>
            <Content>
                <h2>Sacola de compras</h2>
                <Close>
                    <X size={25} color="#8D8D99" />
                </Close>
                <CartWrapper>
                    <CartItems>
                        {cartItems.map(product => (
                            <CartItem key={product.id}>
                                <ImageContainer>
                                    <Image alt="" src={product.image} width={94} height={94} />
                                </ImageContainer>
                                <div>
                                    <h4>{product.name}</h4>
                                    <strong>{new Intl.NumberFormat('pt-BR', {
                                        currency: 'BRL',
                                        style: 'currency'
                                    }).format(product.price / 100)}</strong>
                                    <button onClick={() => removeItem(product.id)}>Remover</button>
                                </div>
                            </CartItem>
                        ))}
                    </CartItems>

                    <footer>
                        <div>
                            <span>Quantidade</span>
                            <span>{cartCount} itens</span>
                        </div>

                        <div>
                            <strong>Valor total</strong>
                            <strong>{formattedTotalPrice}</strong>
                        </div>


                        <EndPurchase onClick={handleBuyButton}>Finalizar Compra</EndPurchase>
                    </footer>
                </CartWrapper>
            </Content>
        </Dialog.Portal>
    )
}

