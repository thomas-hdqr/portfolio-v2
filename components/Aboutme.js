import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {


    // animation
    // for my photo
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
        <section id="about">
            <div className="about">
                <div className="about-text-1">
                    <p>Thomas Haudiquer</p>
                    <p>I am a staff designer based in New York, by way of Berlin and originally from New Zealand. Currently at Linktree where I help define the future of the web.</p>
                </div>
                <div className="about-text-2">
                    <p>With a background in design, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and collaborating on product teams and leading engineering efforts.</p>
                </div>
            </div>
            <motion.div 
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={imageVariants}
            className="me-image"
            >
                <Image src='/public/polaroid-low-resolution.png' alt='' height="50" width="50" />
            </motion.div>
        </section>
    )
}