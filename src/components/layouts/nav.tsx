"use client";

import { Logo } from "@/icons";
import { useScroll, useTransform, motion } from "framer-motion";
import SignatureTypewriter from "../SignatureTypewriter";
import Typewriter from "typewriter-effect";

const Nav = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, -3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  return (
    <motion.nav
      style={{
        opacity,
        scale,
      }}
      className='h-[32vh] md:h-[40vh] lg:h-[40vh] grid'
    >
      <div className='m-auto w-fit flex flex-col items-center justify-center'>
        {/* <Logo /> */}
        <div className='text-2xl sm:text-6xl '>Usama Rashid Butt</div>
        {/* <div className='text-4xl '>Software Engineer</div> */}
        <div className='sm:text-xl'>
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                // .typeString("Hello World!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(40)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
            options={{
              strings: ["Software Engineer", "Blockchain Enthusiast"],
              autoStart: true,
              loop: true,
            }}
          /> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
