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
    <div className={`text-8xl ${pacifico2.className}`}>
      <Typewriter
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
          strings: [
            "Usama Rashid Butt",
            "Software Engineer",
            "Blockchain Engineer",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default SignatureTypewriter;
