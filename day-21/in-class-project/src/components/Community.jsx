import React from "react";
import { motion } from "framer-motion";
import { Users, Github, Heart } from "lucide-react";

const Community = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#23272f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Join a Global Community
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
            You're not alone. React has a massive community of developers,
            contributors, and educators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">2M+</h3>
            <p className="text-gray-400">
              Developers on StackOverflow helping each other.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <Github className="w-10 h-10 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">200k+</h3>
            <p className="text-gray-400">
              Stars on GitHub, making it one of the most loved libraries.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <Heart className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">Free</h3>
            <p className="text-gray-400">
              Open source and free to use for everyone, forever.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
