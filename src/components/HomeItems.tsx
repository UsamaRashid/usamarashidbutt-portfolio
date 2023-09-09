"use client";
import { Back, gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import SignatureTypewriter from "./SignatureTypewriter";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const HomeItems = () => {
  const cmsAnimation = useRef(null);
  const nameAnimation = useRef(null);

  useEffect(() => {
    gsap.fromTo(cmsAnimation.current, { x: -100 }, { opacity: 1, x: 0 });

    gsap.fromTo(
      nameAnimation.current,
      { opacity: 1, scale: 1 },
      {
        scrollTrigger: {
          trigger: nameAnimation.current,
          start: "0", // Adjust as needed
          end: "500", // Adjust as needed
          scrub: true,
        },
        opacity: 0,
        scale: 0.4,
      }
    );
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      {/* <HomeGrid /> */}
      <div className='flex'>
        <div
          ref={nameAnimation}
          className='UserName text-5xl h-52  md:h-[278.4px] lg:h-[348px]  w-full bg-black text-white  col-start-1 col-span-12 rounded-[4.5rem] text-center flex justify-center items-center'
        >
          {/* The Craftsmen */}
          <SignatureTypewriter />
        </div>
      </div>
      <div className='block lg:flex ml-3 '>
        <div
          //   ref={cmsAnimation}
          className='bg-new-purple m-2 h-96 md:h-[427.95px] lg:[548px]  w-[98%] lg:w-[48%] bg-newPurple col-start-1 col-span-12 rounded-[4.5rem] text-center flex justify-center items-center hover:scale-95 transition-all duration-500 ease-in-out'
        >
          Craft CMS
        </div>
        <div className='w-[100%] md:w-1/2 '>
          <div className='md:h-48 h-52 flex'>
            <div className='bg-slate-300 m-1  col-span-2 w-[49%] text-black rounded-[4.5rem] text-center flex justify-center items-center'>
              Work
            </div>
            <div className='bg-slate-700 m-1 text-black  w-[49%] rounded-[4.5rem] text-center flex justify-center items-center'>
              AboutUs
            </div>
          </div>
          <div className='bg-new-yellow m-2 h-40 md:h-48 text-black rounded-[4.5rem] text-center flex justify-center items-center'>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItems;
