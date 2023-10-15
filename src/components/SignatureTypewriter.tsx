"use client";
import Typewriter from "typewriter-effect";

import React from "react";
import { Dancing_Script, Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic"],
});
const pacifico2 = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

const SignatureTypewriter = () => {
  return (
    <div className={`text-3xl  `}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
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
      />
    </div>
  );
};

export default SignatureTypewriter;
