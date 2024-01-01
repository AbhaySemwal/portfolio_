import React, { useRef } from 'react'
import './portfolio.scss';
import { motion,useScroll,useSpring, useTransform } from 'framer-motion';

const items=[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/15031666/pexels-photo-15031666/free-photo-of-portrait-of-a-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Aliqua ipsum cupidatat tempor culpa id ut enim cillum anim laboris."
    },
    {
        id:2,
        title:"Nextjs Blog",
        img:"https://images.pexels.com/photos/12915136/pexels-photo-12915136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Aliqua ipsum cupidatat tempor culpa id ut enim cillum anim laboris."
    },
    {
        id:3,
        title:"Vanilla JS Commerce",
        img:"https://images.pexels.com/photos/19177885/pexels-photo-19177885/free-photo-of-cable-car-in-old-town.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Aliqua ipsum cupidatat tempor culpa id ut enim cillum anim laboris."
    },
    {
        id:4,
        title:"Microblogging Site",
        img:"https://images.pexels.com/photos/19380634/pexels-photo-19380634/free-photo-of-tabby-cat-yawning.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Aliqua ipsum cupidatat tempor culpa id ut enim cillum anim laboris."
    },
]

const Single=({item})=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,
        // offset:["start start","end start"]
    });
    const y=useTransform(scrollYProgress,[0,1],[-300,300]);
    return(
        <section>
            <div className='container'>
                <div className='wrapper'>
                    <div className='imageContainer' ref={ref}>
                        <img src={item.img} alt=''></img>
                    </div>
                    <motion.div className='textContainer' style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,
        {stiffness:100,
        damping:30,});
  return (
    <div className='portfolio' ref={ref}>
        <div className='progress'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className='progressBar'></motion.div>
        </div>
        {
            items.map(item=>(
                <Single item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Portfolio