import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'


export function CartBox() {
    return (
        <Dialog.Portal>
            <Content>
                <Dialog.Title />
                <Dialog.Description />
                <Dialog.Close />
            </Content>
        </Dialog.Portal>
    )
}

export const Content = styled(Dialog.Content, {
    minWidth: '30rem',
    borderRadius: 6,
    padding: '2.5rem 3rem',
    background: '$gray800',
    height: '100%',
    zIndex: 10000,
    position: 'absolute',
    right: 0,
    bottom: 0,
})