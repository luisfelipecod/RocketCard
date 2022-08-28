import { ButtonStyle } from './Button'

export function Button({children,changeBorderColorCard}){
    return (
        <>
            <ButtonStyle onClick={changeBorderColorCard}>{children}</ButtonStyle>
        </>
    )
}