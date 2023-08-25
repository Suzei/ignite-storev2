import { ButtonContainer, CartContainer, CartCount, PutOnCart } from "@/styles/pages/cartButton";
import { Handbag } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from 'use-shopping-cart'
import { Content } from "./CartBox";
import Image from "next/image";
interface CartProps {
    cartLenght?: number;
    variant: 'header' | 'product'
    handleOnClick?: () => void;
}

export function Cart({ handleOnClick, variant }: CartProps) {
    const { cartCount, cartDetails, formattedTotalPrice, removeItem } = useShoppingCart()
    const cartDetailsArray = Object.values(cartDetails)
    console.log(formattedTotalPrice)
    return (
        <>
            {variant === 'header' ? (
                <Dialog.Root>
                    <Dialog.Trigger>
                        <CartContainer>
                            <ButtonContainer onClick={handleOnClick}>
                                <Handbag size={24} weight="bold" />
                                <CartCount>{cartCount}</CartCount>
                            </ButtonContainer>
                        </CartContainer>
                    </Dialog.Trigger>
                    <Content>
                        <h3>Sacola de compras</h3>
                        {cartCount}


                        {cartDetailsArray.map(item => (
                            <div key={item.id}>
                                <Image alt="" src={item.image} width={100} height={100} />
                                {item.name}
                                {item.price}
                                {item.quantity}
                                <button onClick={() => removeItem(item.id)} >Remove item</button>
                            </div>
                        ))}

                    </Content>


                </Dialog.Root>
            ) : (
                <PutOnCart onClick={handleOnClick}>
                    <Handbag size={24} weight="bold" />
                </PutOnCart>
            )}

        </>

    )
}