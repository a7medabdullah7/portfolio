"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 bg-dark-900/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm text-center sm:text-left"
        >
          © {year} Ahmed Abdullah Ibrahim. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-6"
        >
          {/* GitHub */}
          <a
            href="https://github.com/a7medabdullah7"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-dark-800 border border-white/5 hover:border-accent-cyan/50 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-accent-cyan transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ahmed-abdullah-291154341/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-dark-800 border border-white/5 hover:border-accent-cyan/50 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-accent-cyan transition-colors" />
          </a>

          {/* Email */}
          <a
            href="mailto:ahmedabdullah272737@gmail.com"
            className="group p-2 rounded-full bg-dark-800 border border-white/5 hover:border-accent-cyan/50 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-accent-cyan transition-colors" />
          </a>

        </motion.div>
      </div>
    </footer>
  );
}
