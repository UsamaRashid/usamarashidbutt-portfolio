"use client";

import { Logo } from "@/icons";
import { useScroll, useTransform, motion } from "framer-motion";
import SignatureTypewriter from "../SignatureTypewriter";
import Typewriter from "typewriter-effect";
import localFont from "next/font/local";

const Gluten = localFont({
  src: "../../../public/fonts/winter-song-font/WinterSong-owRGB.ttf",
  // /conquest-font/Conquest-8MxyM.ttf",
  // /alex-brush/AlexBrush-Regular.ttf",
  // Gluten-SemiBold.ttf",
});

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
      className="h-[32vh] md:h-[40vh] lg:h-[40vh] grid"
    >
      <div className="m-auto w-fit flex flex-col items-center justify-center">
        {/* <Logo /> */}
        <div
          // className="text-5xl"
          className={Gluten.className}
        >
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(80).deleteAll().start();
              }}
              options={{
                strings: [
                  "Usama Rashid Butt",
                  "Software Engineer",
                  // "Blockchain Enthusiast",
                  "Usama Rashid Butt",
                ],
                autoStart: true,
                loop: true,
                // cursor:
                //  "",
                // ">",
              }}
            />
          </div>
        </div>
        <div className="sm:text-xl"></div>
      </div>
    </motion.nav>
  );
};

export default Nav;
