import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8%;

    min-height:100vh;

    @media (max-width:600px) {
        gap:30px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    line-height: 30.24px;
    margin-bottom: 12px;
`

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SectionContainer = styled(MainContainer)`
`