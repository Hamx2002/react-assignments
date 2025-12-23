import React from "react";
import { motion } from "framer-motion";
import { Layers, Braces, Globe, Cpu } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-2xl bg-[#2a2f3c] hover:bg-[#323846] transition-colors border border-transparent hover:border-primary/20 group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Create User Interfaces from Components",
      description:
        "React lets you build user interfaces out of individual pieces called components. Create your own HelloComponent, use it in another component, and scale from there.",
      icon: Layers,
    },
    {
      title: "Write Components with Code and Markup",
      description:
        "React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Use Array map(). Learning React is learning programming.",
      icon: Braces,
    },
    {
      title: "Add Interactivity Wherever You Need It",
      description:
        "React components receive data and return what should appear on the screen. You can pass new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.",
      icon: Cpu,
    },
    {
      title: "Go Full-Stack with a Framework",
      description:
        "React is a library. It lets you put components together, but it doesn't prescribe how to do routing and data fetching. To build a whole app, we recommend a full-stack React framework like Next.js or Remix.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-24 bg-[#23272f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
