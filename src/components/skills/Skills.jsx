import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section_title">Habilidades</h2>
        <span className='section_subtitle grid'></span>

        <div className="skill_container container grid">
            <Frontend></Frontend>
            <Backend></Backend>
        </div>
    </section>
  )
}

export default Skills