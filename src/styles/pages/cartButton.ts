import { styled, css } from ".."

export const CartContainer = styled('button', {
    background: '$gray800',
    border: 'none',
    padding: '1rem',
    borderRadius: 6,
    svg: {
        color: '$gray300'
    }
})

export const CartCount = styled('span', {
    background: '$green500',
    color: '$white',
    position: 'absolute',
    boxShadow: '-1px 2px #121214',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    bottom: 25,
    left: 25,
    width: 24,
    height: 24,
    borderRadius: 999,
})

export const ButtonContainer = styled('div', {
    position: 'relative',
})

export const PutOnCart = styled('button', {
    background: '$green500',
    padding: '1rem',
    borderRadius: 6,
    border: 'none',

    svg: {
        color: '$white'
    }
})