import React from 'react'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
        <h2 className="section_title">entre em contato</h2>
        <span className='section_subtitle grid'>Meus contatos</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Fale comigo</h3>

                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>

                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">mateusbeltrao2022@gmail.com</span>

                        <a href="mailto:mateusbeltrao2019@gmail.com" className="contact_button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt 
                            contact_button-icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>

                        <h3 className="contact_card-title">WhatsApp</h3>
                        <span className="contact_card-data">(91) 98507-2644</span>

                        <a href="https://wa.me/5581985072644?text=Olá%20Quero%20saber%20mais%20sobre%20o%20produto" className="contact_button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt 
                            contact_button-icon"></i>
                        </a>
                    </div>

                   
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title">write me your project</h3>
            </div>
        </div>
    </section>
  )
}

export default Contact