import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

const AiImageGenerator = () => {
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
      className="px-60 py-24"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex-grow relative w-auto h-full">
        {/* Texts animation */}
        <div className="flex items-center justify-center w-full">
          <div className="">
            {/* 1st text animation (small) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className="flex items-center justify-between uppercase"
            >
              <div className="ml-4">
                Web Development
              </div>
              <div className="uppercase">react, tailwindcss, firebase</div>
            </motion.div>

            {/* 2nd text animation (big) */}
            <div className="text-9xl">
            {/* // First Name */}
            <motion.span className="mr-16" variants={firstName}>
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
        <div className="justify-between items-start relative py-20">
          <div className="h-full w-full">
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
                      y: windowWidth > 1440 ? -1200 : -600,
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
            <h2 className="text-3xl">
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
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiImageGenerator;
