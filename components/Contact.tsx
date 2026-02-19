"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    label: "Email",
    value: "ahmedabdullah272737@gmail.com",
    href: "mailto:ahmedabdullah272737@gmail.com",
  },
  {
    label: "Phone",
    value: "+20 1006338123",
    href: "tel:+201006338123",
  },
  {
    label: "Location",
    value: "Kafr El Sheikh, Egypt",
    href: "https://maps.google.com/?q=Kafr+El+Sheikh+Egypt",
  },
  {
    label: "LinkedIn",
    value: "ahmed-abdullah-291154341",
    href: "https://www.linkedin.com/in/ahmed-abdullah-291154341",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Contac<span className="text-accent-cyan">t</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent-cyan font-mono text-sm mb-12"
        >
          Get in touch
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400">
              Have a project in mind or want to collaborate? Reach out via email,
              phone, or the form.
            </p>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span className="text-gray-500 text-sm block mb-1">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-accent-cyan hover:underline"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-dark-800 border border-white/5 p-6"
          >
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-accent-cyan font-medium mb-2">
                  Message sent successfully.
                </p>
                <p className="text-gray-500 text-sm">
                  I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-accent-cyan hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/5 text-white placeholder-gray-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/5 text-white placeholder-gray-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/5 text-white placeholder-gray-500 focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-accent-cyan text-dark-900 font-semibold hover:bg-accent-cyan/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
