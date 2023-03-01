import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'



function Hero() {

  // For the "contact me" hover effect
  const [isHovering, setIsHovering] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText('thomashaudiquer@gmail.com');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };


// animation for the text  
  let textAnimation = {}
  let text = {}
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
    if (!isMobile) {
      textAnimation = {
        show: { opacity: 1, 
          transition: {staggerChildren: 0.2,}, 
          x: 0, y: 0,},
          hidden: { opacity: 0}
      };
      text = {
        hidden: { opacity: 0, x: 0, y: 50,},
        show: { opacity: 1, x: 0, y: 0, transition: {type: "spring", stiffness: 100, damping: 15}}
    }
  } 
} 




  return (
    <div className="sm:px-20 sm:pt-10 sm:h-screen relative px-10">
      <div>
        <Navbar />
      </div>

      {/* blurry background */}
      <div className="relative w-full max-w-lg">
        <div className="absolute top-20 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>


      <motion.div
        variants={textAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="sm:py-40 py-20">
          <h1 className="text-7xl font-normal">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="font-white w-6 h-6 align-bottom mt-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="cursor-pointer text-3xl"
            onClick={handleCopyClick}
          >
            {isCopied ? 'Email copied to clipboard!' : isHovering ? 'Copy email?' : 'Contact me'}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero