import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import './Skills.css'
import {themeContext} from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'


const Skills = () => {

  const transition = {duration :2 , type : 'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    
   
    <section className="skills section" id='skills' style={{background:darkMode? '#191919': ''}} >
   
   <h2 className='section-title'  >--SKILLS--</h2>
   {/* <span className='section-subtitle'>My Technical Level</span> */}
    <div className='skills-container container grid'>
    <Frontend/>
       <Backend/>
    </div>
       
    </section>

    
    
  )
}

export default Skills