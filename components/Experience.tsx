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
      "Worked on real-world AI solutions simulating production-level deployment.",
    ],
  },
  {
    title: "Machine Learning Training",
    org: "Faculty of Artificial Intelligence",
    year: "2025",
    points: [
      "Hands-on machine learning training.",
      "Worked on practical ML projects and model implementation.",
    ],
  },
  {
    title: "Digital Egypt Pioneers Program (DEPI)",
    org: "Ministry of Communications and Information Technology (MCIT)",
    year: "Nov 2025 - Jul 2026",
    points: [
      "Completed the AI & Data Science – Microsoft Machine Learning Engineer track.",
      "Gained practical experience in Artificial Intelligence, Data Science, and Machine Learning.",
      "Strengthened knowledge of the Machine Learning lifecycle, including data preparation, model development, and evaluation.",
      "Applied AI techniques to solve real-world problems and improve analytical decision-making.",
    ],
  },
];

const certificates = [
  {
    name: "Machine Learning",
    link: "#",
  },
  {
    name: "Python",
    link: "#",
  },
  {
    name: "Robotics Programming",
    link: "#",
  },
  {
    name: "NLP",
    link: "#",
  },
  {
    name: "Deep Learning",
    link: "#",
  },
  {
    name: "Programming Fundamentals",
    link: "#",
  },

  // Coursera Certificate
  {
    name: "Improving Deep Neural Networks",
    link: "https://www.coursera.org/account/accomplishments/verify/6OFE5JB0GVB2",
  },
];

const featuredCertificates = [
  {
    name: "Digital Egypt Pioneers Program (DEPI)",
    title: "AI & Data Science – Microsoft Machine Learning Engineer",
    organization: "Ministry of Communications and Information Technology (MCIT)",
    date: "November 2025 - July 2026",
    image: "/images/depi-certificate.png",
  },
  {
    name: "Machine Learning Summer Training",
    title: "Machine Learning Training Program",
    organization: "National Telecommunication Institute (NTI) · ITIDA",
    date: "26 July - 20 August 2026 · 120 Hours · Score: 87.5%",
    image: "/images/nti-certificate.png",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
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

          {/* ========================= */}
          {/* Internships */}
          {/* ========================= */}

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
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <p className="text-white font-semibold">
                      {exp.title}
                    </p>

                    <span className="text-accent-cyan text-sm font-mono whitespace-nowrap">
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

          {/* ========================= */}
          {/* Certificates */}
          {/* ========================= */}

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Certificates
            </h3>

            {/* Featured Certificates */}
            <div className="space-y-6 mb-8">
              {featuredCertificates.map((cert, i) => (
                <motion.a
                  key={cert.name}
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group block rounded-xl bg-dark-800 border border-white/5 overflow-hidden hover:border-accent-cyan/40 transition-all duration-300"
                >
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden bg-dark-700">
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      className="w-full h-48 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-lg bg-black/70 text-white text-sm font-medium">
                        View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Certificate Information */}
                  <div className="p-5">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-white font-semibold">
                        {cert.name}
                      </h4>

                      <span className="text-accent-cyan text-xs font-mono whitespace-nowrap">
                        Certificate
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-2">
                      {cert.title}
                    </p>

                    <p className="text-gray-500 text-xs mb-1">
                      {cert.organization}
                    </p>

                    <p className="text-accent-cyan/80 text-xs font-mono">
                      {cert.date}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Other Certificates */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {certificates.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-dark-700 border border-white/5 text-gray-400 text-sm hover:border-accent-cyan/20 hover:text-accent-cyan transition-colors"
                >
                  {cert.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
