"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-radial from-accent-cyan/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent-cyan font-mono text-sm mb-4"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Ahmed Abdullah{" "}
          <span className="text-gradient">Ibrahim</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-400 mb-2"
        >
          AI Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 text-sm mb-10 max-w-xl mx-auto"
        >
          Machine Learning · Deep Learning · NLP · Computer Vision
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent-cyan text-dark-900 font-semibold hover:bg-accent-cyan/90 transition-all glow-cyan"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-lg border border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 transition-colors font-medium"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 hover:text-accent-cyan transition-colors"
        >
          <span className="text-xs mb-2">Scroll</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
