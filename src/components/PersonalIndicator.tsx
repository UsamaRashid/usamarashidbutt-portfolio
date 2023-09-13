"use client";

import { ArrowDown } from "@/icons";
import { useScroll, motion, useTransform } from "framer-motion";

const PersonalIndicator = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <div className='indicator absolute right-8 bottom-8'>
      <div className='wrapper relative'>
        <motion.div
          style={{
            rotate,
          }}
        ></motion.div>
        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <ArrowDown color='#a5a1ff' />
        </span>
      </div>
    </div>
  );
};

export default PersonalIndicator;
