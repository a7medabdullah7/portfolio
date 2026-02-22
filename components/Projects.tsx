"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";

const projects = [
  {
    id: "smartanpr",
    title: "SmartANPR System",
    description:
      "Real-time Automatic Number Plate Recognition system using YOLO object detection and OCR pipeline. Detects vehicles, extracts license plates, and enables intelligent traffic monitoring.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Deep Learning", "OCR"],
    image: "/images/smartanpr.jpg",
    github:
      "https://github.com/a7medabdullah7/-From-Detection-to-Decision-SmartANPR-System",
  },
  {
    id: "rag-support",
    title: "Explainable RAG Support System",
    description:
      "Built an Explainable Retrieval-Augmented Generation (RAG) technical support system combining semantic vector search with LLM-powered response generation. Implemented FAISS indexing, LangChain orchestration, and explainability components for transparent and traceable AI assistance.",
    technologies: [
      "Python",
      "NLP",
      "RAG",
      "LLM",
      "LangChain",
      "FAISS",
      "Explainable AI",
    ],
    image: "/images/rag-support-system.jpg",
    github:
      "https://github.com/a7medabdullah7/Explainable-RAG-Technical-Support-System",
  },
  {
    id: "classification",
    title: "Image Classification",
    description:
      "Deep learning CNN model for image recognition using TensorFlow.",
    technologies: ["Python", "TensorFlow", "CNN"],
    image: "/images/classification.jpg",
    github: "#",
  },
];

export default function Projects() {
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
          Some of my featured work
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden bg-dark-800 transition-all duration-500 ${
                project.id === "rag-support"
                  ? "border border-accent-cyan/40 shadow-lg shadow-accent-cyan/20"
                  : "border border-white/5 hover:border-accent-cyan/40"
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">

                {project.id === "rag-support" && (
                  <span className="inline-block mb-3 px-3 py-1 text-xs font-mono rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                    ⭐ Featured Project
                  </span>
                )}

                <h3 className="text-lg font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-dark-600 text-gray-400 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      project.id === "rag-support"
                        ? "bg-accent-cyan text-black hover:scale-105"
                        : "bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan hover:text-black"
                    }`}
                  >
                    <Github size={16} />
                    View on GitHub
                  </a>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
