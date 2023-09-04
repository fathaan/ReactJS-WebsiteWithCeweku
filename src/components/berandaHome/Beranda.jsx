import React from 'react'
import './beranda.css'
import profilepicture from '../../assets/profile.mp4'
import {motion, useScroll, useTransform} from "framer-motion"

const Beranda = () => {
  const {scrollYProgress} = useScroll()
  const right = useTransform(scrollYProgress, [0,1],[0,500])
  const left = useTransform(scrollYProgress, [0,1],[0,-500])
  return (
    <section className='beranda' id='home'>
      <div className='containerBeranda'>
        <div className="fathantext">
          <motion.h1 
          initial={{x:-1800}}
          animate={{
            x:0,
            transition:{
              duration: 0.8,
              delay:6
            }
          }}
          style={{x:right}}
          className='textFilled'
      >we are still here for the perfection we are still here for the perfection
          </motion.h1>
          <motion.h1 
          initial={{x:-1800}}
          animate={{
            x:0,
            transition:{
              duration: 0.8,
              delay:6
            }
          }}
          style={{x:right}}
          className='textOutline'
      >we are still here for the perfection we are still here for the perfection
          </motion.h1>
        </div>
        <div className="finkantext">
        <motion.h1 
          initial={{x:1800}}
          animate={{
            x:0,
            transition:{
              duration: 0.8,
              delay:6
            }
          }}
          style={{x:left}}
          className='textFilled'
      >  everything here is about both of us everything here is about both of us
          </motion.h1>
          <motion.h1 
          initial={{x:1800}}
          animate={{
            x:0,
            transition:{
              duration: 0.8,
              delay:6
            }
          }}
          style={{x:left}}
          className='textOutline'
      >  everything here is about both of us everything here is about both of us
          </motion.h1>
        </div>
      <div className="berandaImage">
        <motion.video
        initial={{y:2000,opacity:1}}
        animate={{
          y:0,
          transition: {
            duration:1,
            delay:5.5,
          }
        }}
         className="berandaPicture" src={profilepicture} alt="" autoPlay="true" loop="true" muted="false"/>
      </div>
      </div>
    </section>
  )
}

export default Beranda