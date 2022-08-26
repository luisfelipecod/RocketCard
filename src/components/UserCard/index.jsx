import {
    Wrapper,
    HeaderCard,
    Avatar,
    InfoUserCard,
    FooterCard
} from "./UserCard";

import companyIcon from "../../assets/company.svg"
import followersIcon from "../../assets/followers.svg"
import followingIcon from "../../assets/following.svg"
import locationIcon from "../../assets/location.svg"
import repositoryIcon from "../../assets/repository.svg"
import logo from "../../assets/logo.svg"

export function UserCard(){
    return (
        <Wrapper>
            <HeaderCard>
                <div>
                    <img src={logo} alt="Um desenhos de um foguete(que é logo da Rocketseat)" />
                </div>
                Birobiro
            </HeaderCard>

            <Avatar>
                <img src="https://source.unsplash.com/random" alt="Uma imagem de perfil" />
            </Avatar>
            <InfoUserCard>
                <ul>
                    <li>
                        <img src={followersIcon} alt="Icone de Seguidores" />
                        716 Seguidores 
                    </li>

                    <li>
                        <img src={followingIcon} alt="Icone de Seguindo Pessoas" />
                        193 Seguindo
                    </li>

                    <li>
                        <img src={repositoryIcon} alt="Icone de Repositório" />
                        38 Repositórios
                    </li>

                    <li>
                        <img src={companyIcon} alt="Icone de uma Empresa" />
                        @Rocketseat
                    </li>

                    <li>
                        <img src={locationIcon} alt="Icone de um ponto de localização de GPS" />
                        Bebedouro
                    </li>
                </ul>
            </InfoUserCard>
            <FooterCard>ROCKETCARD</FooterCard>
        </Wrapper>
    )
}