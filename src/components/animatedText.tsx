"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedTextProps = {
  text: string;
  className: string;
};

function AnimatedText({ text, className }: AnimatedTextProps) {
  const count = useMotionValue(0);
  const ref = useRef(null)
  const isInView = useInView(ref)

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (isInView) {
      return;
    }
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 0.5,
      ease: "linear",
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });
    return controls.stop;
  }, []);

  return (
    <p ref={ref} className={animationCompleted ? `${className} inline animation-completed` : `${className} inline`}>
      <motion.span>{displayText}</motion.span>
    </p>
  );
}
export default AnimatedText;
