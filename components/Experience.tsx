"use client";

import { motion } from "framer-motion";

const internships = [
  {
    title: "Machine Learning Intern",
    org: "Instant Software Solutions · Cairo, Egypt (Hybrid)",
    year: "Nov 2025 - Present",
    points: [
      "Completed a comprehensive AI Diploma covering Machine Learning, Deep Learning, Computer Vision, and NLP.",
      "Built and trained ML models using Python, Pandas, NumPy, and Scikit-learn.",
      "Developed deep learning models using TensorFlow and PyTorch.",
      "Implemented projects in image classification, text analysis, and predictive modeling.",
      "Applied data preprocessing, feature engineering, and model evaluation techniques.",
      "Worked on real-world AI solutions simulating production-level deployment."
    ],
  },
  {
    title: "Machine Learning Training",
    org: "Faculty of Artificial Intelligence",
    year: "2025",
    points: [
      "Hands-on machine learning training.",
      "Worked on practical ML projects and model implementation."
    ],
  },
  {
    title: "AI Data Science",
    org: "Digital Egypt Pioneers (DEPI)",
    year: "—",
    points: [
      "Applied data science techniques in national AI initiatives.",
      "Worked on real-world AI and analytics use cases."
    ],
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
          {/* Internships */}
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
                  className="rounded-xl bg-dark-800 border border-white/5 p-6 hover:border-accent-cyan/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-white font-semibold">
                      {exp.title}
                    </p>
                    <span className="text-accent-cyan text-sm font-mono">
                      {exp.year}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">
                    {exp.org}
                  </p>

                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {exp.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates */}
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