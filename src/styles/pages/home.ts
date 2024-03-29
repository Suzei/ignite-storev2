import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
    overflow: 'hidden'
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    minWidth: 696,

    img: {
        objectFit: 'cover'
    },

    footer: {
        div: {
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9999
        },

        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',
        borderRadius: 6,

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(32, 32, 36, 0.90)',

        strong: {
            fontSize: '$lg',
            color: '$gray100'
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})