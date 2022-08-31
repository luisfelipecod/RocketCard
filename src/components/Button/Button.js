import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 230px;
    height: 50px;
    padding-inline: 5px;
    border-radius: 15px;
    
    font-family: 'Prompt', sans-serif;

    background-color:#000000;
    color: #F1F1F1;
    transition: box-shadow 500ms;
    border: none;

    cursor: pointer;

    &:hover{
        box-shadow: rgba(206, 206, 206, 0.16) 0px 3px 4px,
                    rgba(206, 206, 206, 0.23) 0px 3px 4px;
    }
`