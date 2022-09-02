import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 438px;
    height: 693px;

    background-color: ${props => props.inputBorderColor || "#000000"};;
    border-radius: 50px;

    @media (max-width:1400px){
        width: 307px;
        height: 485px;
    }
`

export const ContentCard = styled.div`
    width: 407px;
    height: 644px;

    position: relative;

    border-radius: 50px;
    background-color: #0E1218;

    overflow: hidden;

    @media (max-width:1400px){
        width: 286px;
        height: 456px;
    }
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

    @media (max-width:1400px){
        margin-top: 27px;
        margin-left: 24px;

        height: 39px;

        & > div{
        width: 25px;
        height: 25px;
    }
}
`

export const Avatar = styled.div`
    margin-top: 32px;

    width:372px;
    height: 370px;

    border:10px solid #000000;
    border-radius: 50%;


    transform: translateX(89px);

    & > img{
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }

    @media (max-width:1400px){
        margin-top: 22px;

        width:260px;
        height: 269px;

        transform: translateX(53px);
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
    
    @media (max-width:1400px){
        height: 136px;
        bottom: 67px;
        left: 15px;

        font-size: 16px;
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

    @media (max-width:1400px){
        right: 12px;
        bottom: 19px;

        width: 129px;
        height: 25px;
    }
`
