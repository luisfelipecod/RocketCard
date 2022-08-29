import { useEffect, useState } from "react";
import { randomColorGenerator } from "../../features/generateRandomColor";

import {
    Container,
    MainContainer,
    SectionContainer,
    Title
} from "./Home";
import { UserCard } from "../../components/UserCard";
import { Button } from "../../components/Button";


export function Home() {
    const [borderColor, setBorderColor] = useState('');
    const [infosUserCard, setInfosUserCard] = useState({
        name:'',
        avatar:'',
        followers: 0,
        following: 0,
        publicRepos: 0,
        company: '',
        location: '',
    })

    function changeBorderColorCard() {
        const color = randomColorGenerator()

        setBorderColor(color)
    }

    useEffect(() => {
        async function getInfosUserCard() {
            const responseFetch = await fetch('https://api.github.com/users/luisfelipecod');
            const  { followers,following,name,public_repos,company,location,avatar_url } = await responseFetch.json();

            setInfosUserCard({
                name,
                avatar: avatar_url,
                followers,
                following,
                publicRepos: public_repos,
                company,
                location,
            })
        }

       getInfosUserCard()       
    }, []);

    return (
        <Container>
            <MainContainer>
                <Title>Compartilhe seu #RocketCard</Title>
                <UserCard infosUser={infosUserCard} randomBorderColor={borderColor} />
            </MainContainer>,
            <SectionContainer as="section">
                <Title>Customizar RocketCard</Title>
                <Button changeBorderColorCard={changeBorderColorCard}>Gerar Background</Button>
            </SectionContainer>
        </Container>
    )
}