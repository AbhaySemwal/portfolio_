import React, { useRef } from 'react'
import './services.scss'
import {motion,useInView } from 'framer-motion'

const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}

const Services = () => {
  const ref=useRef();
  const isinView= useInView(ref,{margin:"-100px"})
  return (
    <motion.div className='services' ref={ref} variants={variants} initial="initial" whileInView="animate">
      <motion.div className='textContainer'>
        <p>I focus on helping your brand grow and <br/> move forward</p>
        <hr/>
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp'></img>
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div className='box' whileHover={{backgroundColor:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor ligula, dictum fermentum massa vel, gravida efficitur lectus. In aliquam euismod laoreet. Nullam placerat pharetra urna, et aliquet sem aliquam non. Etiam gravida massa sed enim aliquet.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className='box' whileHover={{backgroundColor:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor ligula, dictum fermentum massa vel, gravida efficitur lectus. In aliquam euismod laoreet. Nullam placerat pharetra urna, et aliquet sem aliquam non. Etiam gravida massa sed enim aliquet.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor ligula, dictum fermentum massa vel, gravida efficitur lectus. In aliquam euismod laoreet. Nullam placerat pharetra urna, et aliquet sem aliquam non. Etiam gravida massa sed enim aliquet.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor ligula, dictum fermentum massa vel, gravida efficitur lectus. In aliquam euismod laoreet. Nullam placerat pharetra urna, et aliquet sem aliquam non. Etiam gravida massa sed enim aliquet.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services