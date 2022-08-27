import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8%;
    
    min-height: 100vh;
`

export const Title = styled.h1`
    font-size: 20px;
    line-height: 30.24px;
`

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 90vh;
`

export const SectionContainer = styled(MainContainer)`
`//SectionContainer irá herdar os estilos do Maincontainer