import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
import {themeContext} from '../../Context'
import { useContext } from 'react'


const Footer = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='footer'>
        
        
        <div className="f-content">
       
      
            <span  className='name'>prajapatibrijesh282@gmail.com
           </span>
           <span className='name'>Create and Maintaining by 'Brijesh Prajapati'
           </span>


        </div>

    </div>
  )
}

export default Footer