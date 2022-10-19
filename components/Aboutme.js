import Image from 'next/image'
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Aboutme() {

  // animation for my photo
  const imageVariants = {
    visible: { opacity: 1, transition: {ease: "easeOut", duration: 1 }, x: 0, y: 0, rotate: 6 },
    hidden: { opacity: 0, x: 300, y: 250 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);


  return (
    <div id="about" className="p-40">
      <div className='flex place-content-evenly align-baseline'>
        <div>
            <p className="text-3xl pb-10">Thomas Haudiquer</p>
            <p className="text-3xl">I am a front-end developer based in Paris, France. I work on different projects to make the web a better place.</p>
        </div>
        <div className="ml-32">
          <p>My expertise is creativity, simplicity and sense for animations. My passion for web development started 2 years ago</p>
        </div>
      </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={imageVariants}
          className='text-center py-15'
        >
            <Image src="/polaroid-low-resolution.png" alt="Thomas Haudiquer" width="400" height="400"/>
        </motion.div>
    </div>
  )
}

export default Aboutme