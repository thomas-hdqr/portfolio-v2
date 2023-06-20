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

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
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

const projectModel = () => {
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
      className="sm:px-60 px-14 sm:py-24 py-10"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex-grow relative">
        {/* Texts animation */}
        <div className="flex items-center justify-center">
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
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 cursor-pointer mb-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <div className="flex items-center justify-between">
                <div className="sm:ml-4">Web Development</div>
                <div className="">react, tailwindcss, firebase</div>
              </div>
            </motion.div>

            {/* 2nd text animation (big) */}
            <div className="sm:text-9xl text-5xl pt-6">
              {/* // First Name */}
              <motion.span className="sm:mr-16 mr-4" variants={firstName}>
                {"Yasmeen".split("").map((char, index) => (
                  <motion.span key={index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>

              {/* // Last Name */}
              <motion.span className="" variants={lastName}>
                {"Tariq".split("").map((char, index) => (
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
                    src={"/dalle_clone.png"}
                    alt="an image"
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
            <h2 className="sm:text-3xl text-2xl">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              The Extremes of Good and Evil by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32.
            </p>
            <Link href="http://">
             <p className="text-lg font-semibold underline cursor-pointer">Visit project</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default projectModel;
