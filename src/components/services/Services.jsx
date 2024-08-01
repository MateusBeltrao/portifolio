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
                    <i className='uil uil-web-grid services_icon'></i>
                    <h3 className='services_title'>
                        Product <br /> Designer
                    </h3>
                </div>

                <span className='services_button' onClick={() => toggleTab(1)}>View More
                    <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className='services_modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

                        <h3 className='services_modal-title'>Product Designer</h3>
                        <p className='services_modal-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum ducimus enim reiciendis eos ipsum suscipit sed voluptates itaque veniam illo, velit nulla odio alias incidunt animi quos nam dolore?
                        </p>

                        <ul className='sercices_modal-services grid'>
                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className='uil uil-web-grid services_icon'></i>
                    <h3 className='services_title'>
                        Product <br /> Designer
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum ducimus enim reiciendis eos ipsum suscipit sed voluptates itaque veniam illo, velit nulla odio alias incidunt animi quos nam dolore?
                        </p>

                        <ul className='sercices_modal-services grid'>
                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className='uil uil-web-grid services_icon'></i>
                    <h3 className='services_title'>
                        Product <br /> Designer
                    </h3>
                </div>

                <span className='services_button' onClick={() => toggleTab(3)}>View More
                    <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                    <div className='services_modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services_modal-close'></i>

                        <h3 className='services_modal-title'>Product Designer</h3>
                        <p className='services_modal-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum ducimus enim reiciendis eos ipsum suscipit sed voluptates itaque veniam illo, velit nulla odio alias incidunt animi quos nam dolore?
                        </p>

                        <ul className='sercices_modal-services grid'>
                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
                                </p>
                            </li>

                            <li className='services_modal-services'>
                                <i className='uil uil-check-circle services_modal-icon'></i>
                                <p className='services_modal-info'>
                                    I develop the user interface
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