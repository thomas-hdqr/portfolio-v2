import Image  from 'next/image';
import arrow  from '/public/right-arrow-svgrepo-com.svg'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion";


export default function Hero() {


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
        <section className="h-screen">
                    <Navbar />
                    <motion.div 
                    variants={textAnimation}
                    initial="hidden"
                    animate="show"
                    className="pb-2 pl-16 pt-40 relative"
                    >
                        <div className="">
                            <h1 className="text-7xl font-medium">
                                <motion.div
                                  variants={text}
                                >
                                  Hey i’m <span>Thomas, </span>
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
                            <div className="flex flex-row justify-start">
                              <Image className="" src={arrow} alt="" with="28" height="28"  />
                                <div 
                                onMouseOver={handleMouseOver} 
                                onMouseOut={handleMouseOut} 
                                className="cursor-pointer text-2xl" 
                                onClick={() =>  navigator.clipboard.writeText('thomashaudiquer@gmail.com')}>
                                    {isHovering ? 'Copy email?' : 'Contact me'}
                                </div>
                            </div>
                </motion.div>
            </section>
    )
}