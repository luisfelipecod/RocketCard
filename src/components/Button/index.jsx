import { ButtonStyle } from './Button'

export function Button({children}){
    return (
        <>
            <ButtonStyle>{children}</ButtonStyle>
        </>
    )
}