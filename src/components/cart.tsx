import { ButtonContainer, CartContainer, CartCount, PutOnCart } from "@/styles/pages/cart";
import { Handbag } from '@phosphor-icons/react'
import { useShoppingCart } from 'use-shopping-cart'

interface CartProps {
    cartLenght?: number;
    variant: 'header' | 'product'
    handleOnClick?: () => void;
}

export function Cart({ handleOnClick, variant }: CartProps) {
    const { cartCount } = useShoppingCart()
    return (
        <>
            {variant === 'header' ? (
                <CartContainer>
                    <ButtonContainer onClick={handleOnClick}>
                        <Handbag size={24} weight="bold" />
                        <CartCount>{cartCount}</CartCount>
                    </ButtonContainer>
                </CartContainer>
            ) : (
                <PutOnCart onClick={handleOnClick}>
                    <Handbag size={24} weight="bold" />
                </PutOnCart>
            )}

        </>

    )
}