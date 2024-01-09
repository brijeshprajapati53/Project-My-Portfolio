import React from 'react'
import './Project.css'

const Project = ({img,link}) => {
  return (
    <div className='p'  >
    
    <div className="p-browser">
      <div className="p-circle"></div>
      <div className="p-circle"></div>
      <div className="p-circle"></div>
       <div className='name'></div>
    </div>
    <a href={link} target='blank' rel='noreferrer'>
    <img src={img} alt="" className='p-img' />
    </a>

 <div className=' i-visits'>
  
   <div className='visit-1 ' ><a href=" "><box-icon name='linkedin-square' type='logo' className='logo' ></box-icon></a>
 </div>
      
    <div className="visit-2">      <a href="https://www.linkedin.com/in/brijesh-prajapati-84997b223/"><box-icon name='window-open'></box-icon></a> 
     </div>
       
    <div className="visit-3">    <a href="https://github.com/brijeshprajapati53"><box-icon name='github' type='logo'  ></box-icon></a>     </div>
    
    </div>
    
    
    </div>
  )
}

export default Project