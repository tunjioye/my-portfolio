"use client";

import type { HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";
import type React from "react";

export const MotionDiv = (
  props: HTMLMotionProps<"div"> & { children?: React.ReactNode }
) => {
  return <motion.div {...props} />;
};
