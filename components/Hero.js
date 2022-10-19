import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'



function Hero() {

  // For the "contact me" hover effect
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };


  // animation for the text
  const textAnimation = {
    show: { opacity: 1, 
    transition: {staggerChildren: 0.2,}, 
    x: 0, y: 0,},
    hidden: { opacity: 0}
  };
  
  const text = {
    hidden: { opacity: 0, x: 0, y: 50,},
    show: { opacity: 1, x: 0, y: 0, transition: {type: "spring", stiffness: 100, damping: 15}}
  }


  return (
    <div className="px-20 pt-10 h-screen">
      <div>
        <Navbar />
      </div>
      <motion.div
        variants={textAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="py-40">
          <h1 className="text-7xl font-semibold">
            <motion.div
              variants={text}
            >
              Hey i&apos;m Thomas,
            </motion.div>
            <motion.div
              variants={text}
            >
              a web developer
            </motion.div>
            <motion.div
              variants={text}
            >
              based in Paris, France
            </motion.div>
          </h1>
        </div>
        <div className="flex flex-row content-start space-x-5">
          <Image src="/right-arrow-svgrepo-com.svg" alt="" width="30" height="30"/>
          <div 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            className="cursor-pointer text-3xl" 
            onClick={() =>  navigator.clipboard.writeText('thomashaudiquer@gmail.com')}>
                    {isHovering ? 'Copy email?' : 'Contact me'}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero