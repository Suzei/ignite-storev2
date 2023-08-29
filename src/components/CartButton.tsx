import { ButtonContainer, CartContainer, CartCount, PutOnCart } from "@/styles/pages/cartButton";
import { Handbag } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from 'use-shopping-cart'
import { CartBox } from "./CartBox";
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
                <Dialog.Root>
                    <Dialog.Trigger>
                        <CartContainer>
                            <ButtonContainer onClick={handleOnClick}>
                                <Handbag size={24} weight="bold" />
                                <CartCount>{cartCount}</CartCount>
                            </ButtonContainer>
                        </CartContainer>
                    </Dialog.Trigger>
                    <CartBox />
                </Dialog.Root>
            ) : (
                <PutOnCart onClick={handleOnClick}>
                    <Handbag size={24} weight="bold" />
                </PutOnCart>
            )}

        </>

    )
}