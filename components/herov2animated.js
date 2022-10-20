import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import AnimatedText from '../components/AnimatedText'


function Hero() {

  // For the "contact me" hover effect
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };


  // animated text title
  const placeholderText = [
    { type: "heading1", text: "Hey i'm Thomas, a web developer based in Paris, France" },
  ];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };


  return (
    <div className="px-20 pt-10 h-screen relative">
      <div>
        <Navbar />
      </div>

      {/* blurry background */}
      <div className="relative w-full max-w-lg">
        <div className="absolute top-20 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>


      <div>
        <motion.div className="py-40 mr-40"
          initial="hidden"
          animate="visible"
          variants={container}
        >
            <div className="text-7xl text-bold">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} className='' />;
              })}
            </div>
        </motion.div>
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
      </div>
    </div>
  )
}

export default Hero
