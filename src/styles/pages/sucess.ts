import { styled } from "..";

export const SucessContainer = styled('main', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    height: '656',

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem'
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        color: '$green500',
        fontWeight: 'bold',
        fontSize: '$lg',
        textDecoration: 'none'
    },

    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    marginTop: '4rem',
    maxWidth: 180,
    height: 140,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

    padding: '0rem 0.307rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    marginLeft: '-20px',

    img: {
        objectFit: 'cover',
    }


})