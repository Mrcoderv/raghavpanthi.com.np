"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "JavaFX Ball Shot Game",
    description:
      "Developed an interactive 2D Ball Shooting Game using JavaFX. Implemented game mechanics, physics, and UI elements to create an engaging experience.",
    image: "/projects/game.jpg",
    github: "https://github.com/Mrcoderv/GameOn.java",
    live: null,
    color: "border-blue-500/30",
  },
  {
    title: "Python Data Analysis",
    description:
      "Data analysis project using Python, Pandas, and Jupyter Notebook to analyze and visualize trends in a large dataset, with interactive dashboards.",
    image: "/projects/python-data.jpg",
    github: "https://github.com/Mrcoderv/python-data-analysis",
    live: null,
    color: "border-purple-500/30",
  },
  {
    title: "Guess Game (IntelliJ)",
    description:
      "Built a number guessing game (1-100) in JavaFX using IntelliJ, incorporating logic for random number generation and user interaction.",
    image: "/projects/guess-game.jpg",
    github: "https://github.com/Mrcoderv/Guess-Game",
    live: null,
    color: "border-blue-500/30",
  },
  {
    title: "Tourist Management System",
    description:
      "Developed a command-line application using C to manage tourist data, demonstrating understanding of data structures, algorithms, and functional programming.",
    image: "/projects/tourist.jpg",
    github: "https://github.com/Mrcoderv/touristmanagementsystem",
    live: null,
    color: "border-purple-500/30",
  },
  {
    title: "Time Displaying Website",
    description:
      "Created a front-end web application using HTML, CSS, and JavaScript to display the current time dynamically. Showcases interactive web development skills.",
    image: "/projects/time.jpg",
    github: "https://github.com/Mrcoderv/displaytime",
    live: "https://mrcoderv.github.io/displaytime/",
    color: "border-blue-500/30",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`mb-12 bg-card rounded-lg overflow-hidden shadow-lg border ${project.color} ${index % 2 === 0 ? "" : "md:flex-row-reverse"} flex flex-col md:flex-row`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={project.image || "/placeholder.svg?height=400&width=600"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:bg-gradient-to-r"></div>
              </div>

              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex gap-4 mt-auto">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

