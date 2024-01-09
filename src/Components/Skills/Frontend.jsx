import React from 'react'
import './Skills.css'
import {motion} from 'framer-motion'

const Frontend = () => {

    const transition = {duration :1 , type : 'spring'};
  return (
    <motion.div 
    
    initial={{left:"85%"}}
    whileInView={{left:"0%"}}
    transition={transition}

    
    className="skills-content frontend">
    <h3 className='skills-title'>Web Development</h3>

    <div className='detail'>Expertise in HTML, CSS, Bootstrap with working knowledge of JavaScript,   
     React.js & backend with Node.js, Express including MongoDB and MySql</div>
    
    <div className="skills-box">
        <div className="skills-group">

            <div className="skills-data ">
            <i class='bx bxs-badge-check bx-tada bx-flip-horizontal' ></i>

            <div>
                <h3 className='skills-name'>Html, Css</h3>
                <span className='skills-level'>Experienced</span>
            </div>
            </div>

            <div className="skills-data">
            <i class='bx bxs-badge-check bx-tada bx-flip-horizontal' ></i>

            <div>
                <h3 className='skills-name'>Bootstrap</h3>
                <span className='skills-level'>Experienced</span>
            </div>
            </div>

            <div className="skills-data">
            <i class='bx bxs-badge-check bx-tada bx-flip-horizontal' ></i>

            <div>
                <h3 className='skills-name'>Javascript</h3>
                <span className='skills-level'>Intermediate</span>
            </div>
            </div>

            <div className="skills-data">
            <i class='bx bxs-badge-check bx-tada bx-flip-horizontal' ></i>
            <div>
                <h3 className='skills-name'>Node JS</h3>
                <span className='skills-level'>Intermediate</span>
            </div>
            </div>


            <div className="skills-data">
            <i class='bx bxs-badge-check bx-tada bx-flip-horizontal' ></i>

            <div>
                <h3 className='skills-name'>React</h3>
                <span className='skills-level'>Intermediate</span>
            </div>
            </div>

            <div className="skills-data">
            <i class='bx bxs-badge-check bx-tada bx-flip-horizontal' ></i>

            <div>
                <h3 className='skills-name'>Mongo DB</h3>
                <span className='skills-level'>Intermediate</span>
            </div>
            </div>

        </div>
    </div>
    </motion.div>
  )
}

export default Frontend



