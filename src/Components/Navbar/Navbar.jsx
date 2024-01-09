import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {themeContext} from '../../Context'
import { useContext } from 'react'
import {Link} from 'react-scroll'




function Navbar() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  
  return (
    <div className="n-wrapper"  style={{background:darkMode? '#191919': ''}}  id='Navbar'>
 
    <div className="n-left">
               <div className="n-name">#Brijesh</div>
              <Toggle/>
    </div>

    <div className="n-right">
               <div className="n-list">
                <ul>

     <Link  spy={true} to="Navbar" smooth={true} activeClass="activeClass"><li>Home</li></Link>

     <Link  spy={true} to="skills" smooth={true} activeClass="activeClass"><li>Skills</li></Link>

     <Link  spy={true} to="Projects" smooth={true} activeClass="activeClass"><li>Projects</li></Link>
    
                    
                    
                </ul>
               </div>


  
  <Link  spy={true} to="Contact" smooth={true} activeClass="activeClass"><button className='button n-button'  >Contact</button></Link>
    
              
               

              
    </div>

    </div>
  )
}

export default Navbar