import React from 'react'
import Project from '../Project/Project'
import './Projectlist.css'
import { Projects } from '../../Data'
import {themeContext} from '../../Context'
import { useContext } from 'react'


const Projectlist = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="pl " style={{background:darkMode? '#191919': ''}} id='Projects'>
      
    <div className="pl-text">
      <h1 className='pl-title'>--PROJECTS--</h1>
      <p className='pl-des'>"Successfully designed and implemented diverse projects, ranging from dynamic e-commerce platforms to efficient backend systems using Node.js and MongoDB"</p>
    </div>

    <div className="pl-list">
      {Projects.map((item)=>(
        <Project key={item.id} img={item.img} name={item.name}/>
      ))}
      
    </div>


    </div>
  )
}

export default Projectlist