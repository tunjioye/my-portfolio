"use client";
import { type AnimationProps, motion } from "motion/react";
import type React from "react";

export const MotionDiv = (
  props: AnimationProps & { children?: React.ReactNode }
) => {
  return <motion.div {...props} />;
};
