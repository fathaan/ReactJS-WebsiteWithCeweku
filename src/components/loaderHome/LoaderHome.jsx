import React from 'react'
import {motion} from 'framer-motion'
import './loaderHome.css'

const LoaderHome = () => {
  return (
    <motion.section 
        initial={{y:0, opacity: 1}}
        animate={{
            y:-1000,
            transition: {
                duration: 1,
                delay : 5.5
            },
        }}
        exit={{y:window.innerWidth}}
    className='loaderTextHome'>
        <div className="containerLoaderHome">
           <motion.span 
                initial={{opacity:0}}
                animate={{
                opacity: 1,
                transition: {delay: 1},
                transitionEnd: {
                    display: 'none'}
                }}
           className="LoaderText"
>Welcome
           </motion.span>
           <motion.span 
                initial={{opacity:0}}
                animate={{
                opacity: 1,
                transition: {delay: 1.5},
                transitionEnd: {
                    display: 'none'}
                }}
           className="LoaderText"
>To
           </motion.span>
           <motion.span 
                initial={{opacity:0}}
                animate={{
                opacity: 1,
                transition: {delay: 2},
                transitionEnd: {
                    display: 'none'}
                }}
           className="LoaderText"
>Website
           </motion.span>
           <motion.span 
                initial={{opacity:0}}
                animate={{
                opacity: 1,
                transition: {
                    duration:1,
                    delay: 2.5
                },
                transitionEnd: {
                    display:'none'   
                }
                }}
           className="LoaderText fathan"
>Muhammad Al Fathan
           </motion.span>
           <motion.span 
                initial={{opacity:0}}
                animate={{
                opacity: 1,
                transition: {
                    delay: 3.5
                },
                transitionEnd: {
                    display: 'none'}
                }}
           className="LoaderText"
>dan
           </motion.span>
           <motion.span 
                initial={{opacity:0}}
                animate={{
                opacity: 1,
                transition: {
                    duration:1,
                    delay: 4
                },
                transitionEnd: {
                    display:'none'}
                }}
           className="LoaderText finkan"
>Finkan Agustina
           </motion.span>
        </div>
    </motion.section>
  )
}

export default LoaderHome