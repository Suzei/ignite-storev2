import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const Content = styled(Dialog.Content, {
    minWidth: '30rem',
    borderRadius: 6,
    padding: '3rem 3rem',
    paddingTop: '5rem',
    background: '$gray800',
    height: '100%',
    minHeight: '100vh',
    zIndex: 10000,
    position: 'absolute',
    right: 0,
    bottom: 0,
    overflow: 'hidden',



})

export const Close = styled(Dialog.Close, {
    border: 'none',
    textDecoration: 'none',
    background: 'none',
    position: 'absolute',
    top: 25,
    right: 25,
    cursor: 'pointer'
})

export const CartItems = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
})

export const CartItem = styled('div', {
    display: 'flex',
    alignItems: 'center',


    div: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,

        h4: {
            fontSize: '$sm',
            fontWeight: '400'
        },

        strong: {
            fontSize: '1.125rem',
            fontWeight: '700',
            marginTop: '0.12rem'
        },

        button: {
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '$green500',
            fontWeight: 'bold',
            textAlign: 'left',
            fontSize: '1rem',
            marginTop: '0.5rem'
        }
    }

})

export const ImageContainer = styled("div", {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    padding: '0 0.25rem',

})

export const CartWrapper = styled('div', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    justifyContent: 'space-between',


    footer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '3rem 0',

        div: {
            display: 'flex',
            justifyContent: 'space-between',

            strong: {
                fontSize: '1.5rem'
            }
        }
    }
})

export const EndPurchase = styled('button', {
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    width: '100%',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:hover': {
        backgroundColor: '$green300'
    }
})