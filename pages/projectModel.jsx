'use client'

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const letter = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, ...transition },
  },
};

const ProjectModel = ({ project }) => {
  const imageDetails = {
    width: "100%",
    height: "100%",
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(400); // default value

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("overflow-y-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-y-hidden");
    }

    const width = window.innerWidth;
    setWindowWidth(width);
    setImageHeight(width > 1440 ? 800 : 400); // set image height based on window width
  }, [canScroll]);


  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="sm:px-60 px-9 sm:py-24 py-10"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex-grow relative">
        {/* Texts animation */}
        <div className="items-center justify-center">
          <div className="">
            {/* 1st text animation (small) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className=" uppercase text-sm"
            >
              <div className="sm:flex items-center justify-between">
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 cursor-pointer align-middle"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="">{project?.tech}</div>
              </div>
            </motion.div>

            {/* 2nd text animation (big) */}
            <div className="sm:text-9xl text-5xl pt-6 text-center">
              {/* // First Name */}
              <motion.span className="sm:mr-16 mr-4" variants={firstName}>
                {project &&
                  project?.title &&
                  project?.title.split("").map((char, index) => (
                    <motion.span key={index} variants={letter}>
                      {char}
                    </motion.span>
                  ))}
              </motion.span>
            </div>
          </div>
        </div>

        {/* Image animation */}
        <div className="justify-between items-start relative py-10 sm:py-28">
          <div className="">
            <motion.div className="relative">
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: imageHeight,
                  transition: { delay: 0.2, ...transition },
                }}
                className="overflow-hidden relative"
              >
                <motion.div
                  className="absolute w-full"
                  whileHover="hover"
                  transition={transition}
                >
                  <motion.img
                    layoutId={`project-image-${project?.id}`} // Add this
                    src={project?.image}
                    alt={project.title}
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y:
                        windowWidth > 1440
                          ? -1200
                          : windowWidth <= 768
                          ? -50
                          : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="justify-between items-start">
          <div className="space-y-4">
            <h2 className="sm:text-3xl text-2xl">{project?.description}</h2>
            <p>{project?.longerdescription}</p>
            <Link href={project?.link}>
              <p className="text-lg font-semibold underline cursor-pointer">
                Visit project
              </p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectModel;
