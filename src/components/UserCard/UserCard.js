import styled from "styled-components";


export const Wrapper = styled.div`
    width: 408px;
    height: 651px;

    margin-inline: auto;
    position: relative;

    border-top: 24px;
    border-right: 15px;
    border-bottom: 25px;
    border-left: 16px;
    
    border-color: ${props => props.inputBorderColor || "#000000"};;
    border-style: solid;
    border-radius: 50px;

    background-color: #0E1218;

    overflow: hidden;
`

export const HeaderCard = styled.header`
    display: flex;
    align-items: center;
    gap: 20px;

    margin-top: 38px;
    margin-left: 34px;

    height: 55px;

    & > div{
        width: 36px;
        height: 36px;
        padding: 8px;

        border-radius: 50%;
        border:1px solid #fff;
    }

    & > div > img {
        width: 100%;
        height: 100%;
    }
`

export const Avatar = styled.div`
    margin-top: 32px;

    width:372px;
    height: 370px;

    border:10px solid ${props => props.inputBorderColor || "#000000"};;
    border-radius: 50%;


    transform: translateX(89px);

    & > img{
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
`

export const InfoUserCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    padding-inline: 20px;
    height: 194px;
    bottom: 96px;
    left: 21px;

    border-radius: 50px;

    background: linear-gradient(180deg, #000000 3.65%,
                                rgba(70, 69, 69, 0.72) 53.65%, 
                                rgba(62, 56, 56, 0.42) 100%);

    & > ul{
        list-style: none;
        padding: 0;
    }
    & > ul > li{
        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

    }                           
`

export const FooterCard = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 11px;
    
    position: absolute;
    right: 17px;
    bottom: 27px;

    width: 184px;
    height: 35px;

    font-size: 20px;

    & > img {
        height: 100%;
    }
`
