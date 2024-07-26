"use client";
import { motion, useMotionValue, useTransform, animate, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef, useState } from "react";


type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.001,
    },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  return (
    <span className={className}>{text}</span>
  );
};

export default AnimatedText;
