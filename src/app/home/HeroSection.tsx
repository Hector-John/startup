"use client";

import Button from "@/components/button";
import { Spotlight } from "@/components/ui/spotlight";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Corrected fadeIn
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="h-full lg:h-screen w-full relative overflow-hidden">
      {/* Spotlight */}
      <Spotlight
        className="absolute hidden md:flex md:left-80 opacity-100"
        fill="white"
      />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />

      {/* Animated container */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 lg:mt-12 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Pill */}
        <motion.div variants={fadeIn}>
          <span className="rounded-full inline-flex gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            <span className="text-yellow-400">✨</span> Currently accepting new
            projects
          </span>
        </motion.div>

        {/* Texts */}
        <div className="space-y-6">
          <motion.div variants={fadeIn}>
            <h1 className="font-heading text-gradient text-4xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-[1.25] overflow-visible">
              Websites That Perform <br className="hidden md:block" />
              Interfaces That Convert
            </h1>
          </motion.div>

          <motion.div variants={fadeIn}>
            <p className="text-gray-400 max-w-2xl mx-auto mt-2">
              We design, develop, and maintain high-performing digital products
              that are visually striking, user-focused, and built to deliver
              results. From strategy to execution, we create experiences that
              elevate brands and drive growth.
            </p>
          </motion.div>
        </div>

        {/* CTA & Trust */}
     <motion.div variants={fadeIn}>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
    <Link href="/contact" className="flex-shrink-0">
      <Button
        variant="primary"
        size="lg"
        className="rounded-md px-6 py-5 text-gray-300 shadow-lg hover:shadow-xl transition-shadow" 
      >
        Get Started Today
      </Button>
    </Link>

    {/* Trust Badge*/}
    <motion.div variants={fadeIn}>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
    <Link href="/contact" className="flex-shrink-0">
      <Button
        variant="primary"
        size="lg"
        className="rounded-md px-6 py-5 text-gray-300 shadow-lg hover:shadow-xl transition-shadow"
      >
        Get Started Today
      </Button>
    </Link>

    {/* Trust Badge */}
    <div className="flex items-center gap-3 bg-black/20 px-4 py-3 rounded-lg border border-gray-800 h-full">
      <div className="flex flex-col items-center justify-center gap-0.5">
        {/* Top row */}
        <div className="flex gap-1 text-yellow-400">
          {[...Array(3)].map((_, i) => (
            <FaStar key={`top-${i}`} className="w-3 h-3" />
          ))}
        </div>
        {/* Bottom row */}
        <div className="flex gap-1 text-yellow-400">
          {[...Array(2)].map((_, i) => (
            <FaStar key={`bottom-${i}`} className="w-3 h-3" />
          ))}
        </div>
      </div>
      <div className="text-left">
        <p className="text-gray-300 text-xs font-medium">Rated 5.0</p>
        <p className="text-gray-400 text-xs">149+ successful projects</p>
      </div>
    </div>
  </div>
</motion.div>
  </div>
</motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
