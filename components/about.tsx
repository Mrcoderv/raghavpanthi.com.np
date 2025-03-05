"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-purple-500 rounded-lg transform -rotate-3"></div>
            <div className="relative w-full h-full overflow-hidden rounded-lg border-4 border-white/10">
              <Image src="/profile.jpg" alt="Raghav Vian Panthi" fill className="object-cover" unoptimized />
            </div>
          </motion.div>

          <motion.div
            className="md:flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card p-6 rounded-lg border border-purple-500/20 shadow-lg shadow-purple-500/5">
              <h3 className="text-2xl font-bold mb-4 text-blue-500">Raghav Vian Panthi</h3>
              <p className="text-lg mb-4">
                I'm a highly motivated Bachelor of Computer Applications (BCA) student with a strong foundation in
                computer science and programming. Currently in my 3rd semester, I'm passionate about software
                development, AI, and data analysis.
              </p>
              <p className="text-lg">
                I'm proficient in Java, C, Python, HTML, CSS, and JavaScript, with experience in data analysis using
                Jupyter Notebook and Python libraries. I have developed command-line applications, web-based projects,
                and data visualization solutions. I'm eager to apply my technical skills to real-world projects and
                continue growing as a developer.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>BCA Student</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Pokhara University</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>3rd Semester</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>2023-2027</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

