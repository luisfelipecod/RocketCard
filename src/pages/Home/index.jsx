import { 
    Container,
    MainContainer,
    SectionContainer,
    Title
} from "./Home";

import { UserCard } from "../../components/UserCard";
import { Button } from "../../components/Button";


export function Home(){
    return (
            <Container>
                <MainContainer>
                    <Title>Compartilhe seu #RocketCard</Title>
                    <UserCard />
                </MainContainer>,
                <SectionContainer as="section">
                <Title>Customizar RocketCard</Title>
                    <Button>Gerar Background</Button>
                </SectionContainer>
            </Container>
    )
}