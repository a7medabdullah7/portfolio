"use client";

import { motion } from "framer-motion";

const internships = [
  {
    title: "Machine Learning Training",
    org: "Faculty of Artificial Intelligence",
    year: "2025",
    desc: "Hands-on ML training and project work.",
  },
  {
    title: "AI Data Science",
    org: "Digital Egypt Pioneers (DEPI)",
    year: "—",
    desc: "Data science and AI practices in a national initiative.",
  },
];

const certificates = [
  "Machine Learning",
  "Python",
  "Robotics Programming",
  "NLP",
  "Deep Learning",
  "Programming Fundamentals",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Experien<span className="text-accent-cyan">ce</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-cyan font-mono text-sm mb-12"
        >
          Internships & Certificates
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Internships
            </h3>
            <div className="space-y-6">
              {internships.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-dark-800 border border-white/5 p-5 hover:border-accent-cyan/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-semibold">{exp.title}</p>
                    <span className="text-accent-cyan text-sm font-mono">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-1">{exp.org}</p>
                  <p className="text-gray-500 text-sm">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Certificates
            </h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {certificates.map((cert) => (
                <li
                  key={cert}
                  className="px-3 py-2 rounded-lg bg-dark-700 border border-white/5 text-gray-400 text-sm hover:border-accent-cyan/20 hover:text-accent-cyan transition-colors"
                >
                  {cert}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
