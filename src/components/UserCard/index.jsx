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

export function UserCard({randomBorderColor,infosUser}){
    const {name, followers, following, publicRepos, company, location, avatar } = infosUser;

    return (
        <Wrapper inputBorderColor={randomBorderColor}>
            <HeaderCard>
                <div>
                    <img src={logo} alt="Um desenhos de um foguete(que é o logo da Rocketseat)" />
                </div>
                {name}
            </HeaderCard>

            <Avatar inputBorderColor={randomBorderColor}>
                <img src={avatar} alt="Uma imagem de perfil" />
            </Avatar>
            <InfoUserCard>
                <ul>
                    <li>
                        <img src={followersIcon} alt="Icone de Seguidores" />
                        {followers} Seguidores 
                    </li>

                    <li>
                        <img src={followingIcon} alt="Icone de Seguindo Pessoas" />
                        {following} Seguindo
                    </li>

                    <li>
                        <img src={repositoryIcon} alt="Icone de Repositório" />
                        {publicRepos} Repositórios
                    </li>

                    <li>
                        <img src={companyIcon} alt="Icone de uma Empresa" />
                        {company ?? "Não Informado"}
                    </li>

                    <li>
                        <img src={locationIcon} alt="Icone de um ponto de localização de GPS" />
                        {location ?? "Não Informado"}
                    </li>
                </ul>
            </InfoUserCard>
            <FooterCard>
                <img src={logo} alt="Um desenhos de um foguete(que é o logo da Rocketseat)" />
                ROCKETCARD
            </FooterCard>
        </Wrapper>
    )
}