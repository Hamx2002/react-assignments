import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#23272f]">
      <div className="absolute inset-0 bg-[#23272f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Get started with React
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-10"
        >
          React is the community-driven library for web and native user
          interfaces.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className="bg-primary text-[#23272f] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-xl shadow-primary/20">
            Read the Docs
          </button>
          <p className="mt-4 text-sm text-gray-500">
            React is free and open source.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
