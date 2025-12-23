import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="mx-auto w-24 h-24 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <svg
                viewBox="-11.5 -10.23174 23 20.46348"
                className="w-full h-full text-primary fill-none"
              >
                <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1" opacity="0.8">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          The library for <br />
          <span className="text-primary">web and native</span> user interfaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Build user interfaces out of individual pieces called components
          written in JavaScript.
          <br />
          <span className="text-white/80 font-medium block mt-4">
            Free and Open Source.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-400 text-gray-900 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            Learn React
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
            <Code2 className="h-5 w-5" />
            API Reference
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
