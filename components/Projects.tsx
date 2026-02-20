"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  image?: string;
  featured: boolean;
  link: string;
};

const projects: Project[] = [
  {
    id: "smartanpr",
    title: "SmartANPR",
    subtitle: "Automatic Number Plate Recognition",
    description:
      "Developed a computer vision system for real-time vehicle and license plate detection using deep learning object detection models. The system detects vehicles, localizes license plates, and prepares them for OCR recognition in traffic environments.",
    technologies: [
      "Python",
      "OpenCV",
      "YOLO",
      "Deep Learning",
      "Computer Vision",
    ],
    image: "/images/smartanpr.jpg",
    featured: true,
    link: "#",
  },
  {
    id: "nlp-comments",
    title: "NLP-Based User Comment Prediction",
    description:
      "Built NLP model to predict user sentiment and intent from comments.",
    technologies: ["Python", "NLP", "Machine Learning"],
    featured: false,
    link: "#",
  },
  {
    id: "image-classification",
    title: "Image Classification Using Deep Learning",
    description: "CNN model to recognize objects in images.",
    technologies: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    featured: false,
    link: "#",
  },
];

export default function Projects() {
  const [smartAnprImageError, setSmartAnprImageError] = useState(false);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Proj<span className="text-accent-cyan">ects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-cyan font-mono text-sm mb-12"
        >
          What I&apos;ve built
        </motion.p>

        <div className="space-y-16">
          {/* Featured */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden bg-dark-800 border border-white/5 hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[280px] bg-dark-700">
                    {project.image && !smartAnprImageError ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={() => setSmartAnprImageError(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/15 to-accent-blue/10 flex items-center justify-center">
                        <span className="text-accent-cyan/70 font-mono text-sm text-center px-4">
                          Image not available
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan text-xs font-mono">
                      Featured
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="text-gray-400 text-sm mb-4">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-dark-600 text-gray-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

          {/* Other Projects */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-xl bg-dark-800 border border-white/5 overflow-hidden hover:border-accent-cyan/25 hover:shadow-lg hover:shadow-accent-cyan/5 transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/10 group-hover:text-accent-cyan/20 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-dark-600 text-gray-500 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}