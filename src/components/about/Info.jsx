import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
        <div className='about_box'>
            <i className='bx bx-award about_icon'></i>
            <h3 className="about_title">Experiência</h3>
            <span className='about_subtitle'>2 Anos de trabalho</span>
        </div>

        <div className='about_box'>
            <i className='bx bx-briefcase-alt about_icon'></i>
            <h3 className="about_title">concluída</h3>
            <span className='about_subtitle'>10 Projetos</span>
        </div>

        <div className='about_box'>
            <i className='bx bx-support about_icon'></i>
            <h3 className="about_title">Suporte</h3>
            <span className='about_subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}

export default Info