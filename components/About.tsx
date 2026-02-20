"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
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
          Who I am & What I Do
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Profile Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-accent-cyan shadow-lg shadow-accent-cyan/20">
              <Image
                src="/images/profile.jpg"
                alt="Ahmed Abdullah"
                fill
                className="object-cover object-[center_35%]"
              />
            </div>

            {/* Bio */}
            <div className="text-gray-400 leading-relaxed space-y-4">
              <p>
                I'm an <span className="text-white font-semibold">AI Engineer</span>
                specializing in Machine Learning, Deep Learning, and Computer Vision.
                I build intelligent systems that transform data into real-world impact.
              </p>

              <p>
                My focus is on scalable AI solutions, model optimization,
                and deploying production-ready systems that solve complex problems.
              </p>
            </div>

            {/* Education Card */}
            <div className="rounded-xl bg-dark-800 border border-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Education
              </h3>

              <p className="text-white font-medium">
                Bachelor of Artificial Intelligence
              </p>

              <p className="text-gray-400 text-sm">
                Kafrelsheikh University
              </p>

              <p className="text-accent-cyan text-sm font-medium mt-2">
                Grade: Very Good
              </p>
            </div>

          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative border-l border-accent-cyan/30 pl-10 space-y-10"
          >

            {/* Experience 1 */}
            <div className="relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 bg-accent-cyan rounded-full shadow-md shadow-accent-cyan/40"></div>
              <h4 className="text-white font-semibold">
                AI Projects Developer
              </h4>
              <p className="text-accent-cyan text-sm mb-2">
                2024 - Present
              </p>
              <p className="text-gray-400 text-sm">
                Built computer vision and NLP systems including SmartANPR
                and RAG-based AI assistants.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 bg-accent-cyan rounded-full shadow-md shadow-accent-cyan/40"></div>
              <h4 className="text-white font-semibold">
                Machine Learning Enthusiast
              </h4>
              <p className="text-accent-cyan text-sm mb-2">
                2022 - 2024
              </p>
              <p className="text-gray-400 text-sm">
                Focused on deep learning models, optimization,
                and hands-on AI research projects.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
