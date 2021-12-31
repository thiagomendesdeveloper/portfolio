import React from "react";
import './style.scss'
import banner from '../../assets/web-art.png'
import Menu from '../../components/Menu'
import Perfil from '../../assets/perfil.png'
import stacks from "../../utils/stacks";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import Button from "../../components/Button";
import Repositories from "../../components/Repositories";
import Footer from "../../components/Footer";
import Curriculo from '../../assets/Thiago Mendes da Silva.pdf'

export default function Home(){
    return(
        <>
            <Menu />
            <section id="Home" className="section">
                <div className="container">
                    <div className="grid-duo">
                        <div className="title-banner">
                            <hr />
                            <h1 className="title title-banner-h1">Desenvolvedor Fullstack</h1>
                            <p>Atuando do mundo do desenvolvimento tando no desenvolvimento 
                                frontend como no backend, Procuro sempre utilizar as melhores práticas 
                                e as tecnologias mais atuais do mercado.
                                </p>
                        </div>
                        <div className="img-banner">
                            <img src={banner} className="img-banner-tag"/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Sobre" className="section">
                <div className="container">
                    <div className="flex-sobre">
                        <div className="perfil">
                            <img src={Perfil} className="img-perfil"/>
                            <h1 className="title-sobre">Thiago</h1>
                            <Button link={Curriculo} name="Baixar Currículo" />
                        </div>
                        <div className="sobre">
                            <h1 className="title-sobre">Sobre</h1>
                            <p class="description-sobre">
                                Cursando graduação em análise e desenvolvimento de sistemas, Atuando no mundo da programação, 
                                trabalho em uma agência em Fortaleza. Apaixonado por tecnologia busco sempre que possivel alimentar minha mente
                                com conhecimento, acredito que atravês da educação pode transformar a vida das
                                pessoas. 
                            </p>
                            <h1 className="title-sobre" >Stacks</h1>
                            <div className="stacks">
                                {stacks.map(e => {
                                    return(
                                    <div key={e.id} class="card-stack">
                                        <img src={e.thumb} className="img-stack"/>
                                        <h3 class="title-stack">{e.linguagem}</h3>
                                    </div>
                                    )
                                })}
                            </div>
                            <h1 className="title-sobre">Contato</h1>
                            <div className="sobre-icons">
                                <a href="https://github.com/thiagomendesdeveloper" target="_blank" className="sobre-icon">
                                    <AiOutlineGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/thiago-mendes-developer" target="_blank" className="sobre-icon">
                                    <AiOutlineLinkedin />
                                </a>
                                <a href="mailto:thiagomendessilva77@gmail.com" target="_blank" className="sobre-icon">
                                    <AiOutlineMail />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Projects" className="section">
                <div className="container">
                    <h1 className="repositories-title">Projects</h1>
                    <Repositories />
                </div>
            </section>
            
            <Footer />
            
        </>
    )
}