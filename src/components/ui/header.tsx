"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface HeroHeadingProps {
  bgImage: string;
  title: ReactNode;
  subtitle?: ReactNode;
}

const Heading = ({ bgImage, title, subtitle }: HeroHeadingProps) => {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  const zoomIn: Variants = {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween" as const,
        ease: "easeOut" as const,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Background Image with Zoom Effect */}
      <motion.div className="absolute inset-0 z-0" variants={zoomIn}>
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/80 via-black/90 to-black/100" />

      {/* Content Container */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 lg:px-16"
        variants={containerVariants}
      >
        {/* Title */}
        <motion.div variants={fadeUp}>
          <h1 className="font-heading text-gradient max-w-4xl text-5xl md:text-6xl lg:text-6xl font-bold leading-tight md:leading-[1.25] mx-auto overflow-visible">
            {title}
          </h1>
        </motion.div>

        {/* Subtitle */}
        {subtitle && (
          <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
              {subtitle}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Heading;
