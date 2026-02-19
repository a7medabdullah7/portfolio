"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          About <span className="text-accent-cyan">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-cyan font-mono text-sm mb-12"
        >
          Who I am
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-400 leading-relaxed"
          >
            <p>
              AI Engineer with strong expertise in <span className="text-white">Python</span>,{" "}
              <span className="text-white">Machine Learning</span>,{" "}
              <span className="text-white">Deep Learning</span>, and{" "}
              <span className="text-white">NLP</span>. Experienced in building
              end-to-end AI pipelines from data preprocessing to deployment.
            </p>
            <p>
              Passionate about scalable intelligent systems and{" "}
              <span className="text-accent-cyan">computer vision</span>. I focus
              on turning research into production-ready solutions that solve
              real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-dark-800 border border-white/5 p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
            <div className="space-y-2">
              <p className="text-white font-medium">
                Bachelor of Artificial Intelligence
              </p>
              <p className="text-gray-400 text-sm">
                Kafrelsheikh University
              </p>
              <p className="text-accent-cyan text-sm font-medium">
                Grade: Very Good
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
