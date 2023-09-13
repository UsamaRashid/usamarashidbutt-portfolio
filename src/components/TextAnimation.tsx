"use client";

import { Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TextAnimation = ({
  text,
  fontSize,
  fontWeight,
  onHover,
}: {
  text: string;
  fontSize: string;
  fontWeight?: string;
  onHover?: boolean;
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);
  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [textRef]);
  const variants: Variants = {
    visible: {
      x: [textWidth, -textWidth!],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay: -20,
      },
    },
  };
  return (
    <div
      className={`text-animation flex absolute left-0 top-1/2 -translate-y-1/2 z-10 whitespace-nowrap ${
        !onHover
          ? "group-hover:opacity-0 group-hover:translate-x-4"
          : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
      } transition-all`}
      style={{
        fontSize,
        fontWeight: fontWeight || 600,
      }}
    >
      <motion.div ref={textRef} variants={variants} animate='visible'>
        {text}&nbsp;
      </motion.div>
      <motion.div
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: -10,
        }}
        animate={{
          x: [0, -textWidth! * 2],
        }}
      >
        {text}&nbsp;
      </motion.div>
    </div>
  );
};
