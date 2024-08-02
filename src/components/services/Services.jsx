import React, { useState } from 'react'
import "./services.css"

const Services = () => {


    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }


  return (
    <section className='services section' id='services'>
        <h2 className="section_title">Services</h2>
        <span className='section_subtitle grid'>What i offerset</span>
   
   
        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className='uil uil-html5  services_icon'></i>
                    <h3 className='services_title'>
                    Produção <br /> Web Designer
                    </h3>
                </div>

                <span className='services_button' onClick={() => toggleTab(1)}>View More
                    <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className='services_modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

                        <h3 className='services_modal-title'>Produção Web Designer</h3>
                        <p className='services_modal-description'>
                        Utilizo HTML5 para estruturar conteúdo, WordPress para gerenciamento eficiente e React para criar interfaces dinâmicas. Meu objetivo é garantir um design moderno e responsivo, adaptando os sites a diferentes dispositivos e tamanhos de tela.
                        </p>

                        <ul className='sercices_modal-services grid'>
                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    Desenvolvo a interface do usuário
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    Crio e otimizo interfaces web
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                Conceito e implemento soluções de front-end
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                Transformo ideias em experiências digitais
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                Desenvolvo sites modernos e responsivos
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    
                    <i className='uil uil-database services_icon'></i>
                    <h3 className='services_title'>
                    Produção <br /> Backend
                    </h3>
                </div>

                <span className='services_button' onClick={() => toggleTab(2)}>View More
                    <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className='services_modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

                        <h3 className='services_modal-title'>Product Designer</h3>
                        <p className='services_modal-description'>
                        Utilizo Node.js e PHP para desenvolver a lógica de backend e criar APIs. Para gerenciamento de dados, trabalho com PostgreSQL e MongoDB, combinando um banco de dados relacional robusto com um banco de dados NoSQL flexível. Essas tecnologias garantem soluções backend eficientes e escaláveis.
                        </p>

                        <ul className='sercices_modal-services grid'>
                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                Desenvolvo a lógica de backend com Node.js e PHP
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                Crio e gerencio bancos de dados
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                Implemento soluções de backend robustas com Node.js e PHP
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                Estruturo e otimizo dados com PostgreSQL e MongoDB
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                Construo APIs e gerencio dados
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        

       
        </div>
    </section>

    
  )
}

export default Services