"use client";

import { motion } from "framer-motion";

const skills = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Python",
  "TensorFlow / Keras",
  "Neural Networks",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Skil<span className="text-accent-cyan">ls</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-cyan font-mono text-sm mb-12"
        >
          Technologies I work with
        </motion.p>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={item}
              className="px-5 py-2.5 rounded-lg bg-dark-700 border border-white/5 text-gray-300 hover:border-accent-cyan/30 hover:text-accent-cyan transition-colors font-medium"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
