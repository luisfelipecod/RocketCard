import { useState } from "react";
import { randomColorGenerator } from "../../features/generateRandomColor";

import { 
    Container,
    MainContainer,
    SectionContainer,
    Title
} from "./Home";
import { UserCard } from "../../components/UserCard";
import { Button } from "../../components/Button";


export function Home(){
    const [borderColor,setBorderColor] = useState('');

    function changeBorderColorCard(){
        const color = randomColorGenerator()

        setBorderColor(color)
    }

    return (
            <Container>
                <MainContainer>
                    <Title>Compartilhe seu #RocketCard</Title>
                    <UserCard randomBorderColor={borderColor}/>
                </MainContainer>,
                <SectionContainer as="section">
                <Title>Customizar RocketCard</Title>
                    <Button changeBorderColorCard={changeBorderColorCard}>Gerar Background</Button>
                </SectionContainer>
            </Container>
    )
}