import React from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';




import me5 from '../../img/me5.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glasses.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import cv from '../../img/CV_brijesh_prajapati.pdf'


const Intro = () => {

  const transition = {duration :2 , type : 'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    
    <div className="intro" style={{background:darkMode? '#191919': ''}}>

    <div className="i-left">
    <div className="i-name">
        <span style={{color: darkMode? 'white': ''}}>Hey! I Am</span>
        <span>Brijesh prajapati</span>
        <span>A computer science student <br />with ongoing experience in web designing and development. </span>

    </div>
    
   <a href={cv} download="CV_brijesh_prajapati">
    <button  className='i-button button' > Download CV</button>    
     </a>
      
      <div className="i-icons">

     
    <div className='icon-1 ' ><a href="https://t.me/brijeshprajapati_53"><box-icon name='telegram' type='logo' animation='tada' ></box-icon></a>
 </div>
      
    <div className="icon-2">      <a href="https://www.linkedin.com/in/brijesh-prajapati-84997b223/"><box-icon name='linkedin-square' type='logo' animation='tada' ></box-icon></a> 
     </div>
       
    <div className="icon-3">    <a href="https://github.com/brijeshprajapati53"><box-icon name='github' type='logo' animation='tada' ></box-icon></a>     </div>
     
    </div>
      

    </div>
    <div className="i-right">
    
         <img src={Vector1} alt="" />
         <img src={Vector2} alt="" />
         <img src={me5} alt="" />

         <motion.img 
         initial={{left:"-15%"}}
         whileInView={{left:"0%"}}
         transition={transition}
         src={glassesimoji} 
         alt="" />

         <motion.div 
         
         initial={{ top:"8%", left:"83%"}}
         whileInView={{left:"74%"}}
         transition={transition}
         className='floating-div-1'
         style={{top:'6%', left:'74%'}}
          
         >

       <FloatingDiv  image={Crown} txt1='web'
            txt2='Developer'/>
         </motion.div>

         <motion.div 
         
         initial={{ top:"80%", left:"-18%"}}
         whileInView={{left:"-4%"}}
         transition={transition}
         
         style={{top:'75%', left:'-4%'}}
         className='floating-div-2'
         >
            <FloatingDiv  image={thumbup} />
         </motion.div>

        


          <div className='blur' style={{background:"rgb(238 210 255)"}}></div>

      <div className="blur"
      style={{
        background:'#C1F5FF',
        top:'340px',
        width:'21rem',
        height:'11rem',
        left:'-896px'
      }}></div>



    </div>


    </div>
  )
}

export default Intro