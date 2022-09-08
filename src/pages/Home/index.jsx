import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { Container, User, Info, Projects } from './styles'

import Icon from '../../assets/images/profile-pic.png'
import Bikcraft from '../../assets/images/bikcraft.png'
import Advice from '../../assets/images/advice.png'
import Contacts from '../../assets/images/contacts.png'
import Link from '../../components/Link'
import Card from '../../components/Card'

function Home() {
    return (
        <Container>
            <User>
                <div>
                    <img src={Icon} alt="Minha foto" />
                </div>
                <h2>Sávio Rian</h2>
                <p>Desenvolvedor Front-End Júnior</p>
                <nav>
                    <a href="https://github.com/savioros" target="_blank"><AiFillGithub size={30} color="4F98CA"/></a>
                    <a href="https://www.linkedin.com/in/savio-rian/" target="_blank"><AiFillLinkedin size={30} color="4F98CA"/></a>
                    <a href="https://www.instagram.com/osaviorian/" target="_blank"><AiFillInstagram size={30} color="4F98CA"/></a>
                </nav>
            </User>

            <Info>
                <nav>
                    <Link path="https://savioros.github.io/">Portfólio</Link>
                    <Link path="Curriculo.pdf" type="application/pdf">Curriculo</Link>
                </nav>
            </Info>

            <Projects>
                <div>
                    <p>Principais projetos</p>
                    <a href="https://github.com/savioros?tab=repositories" target="_blank">Ver mais</a>
                </div>
                <ul>
                    <Card photo={Bikcraft} path="https://sbikcraft.netlify.app/"/>
                    <Card photo={Advice} path="https://bestadvice.netlify.app/"/>
                    <Card photo={Contacts} path="https://smycontactlist.netlify.app/"/>
                </ul>
            </Projects>
        </Container>
    )
}

export default Home