"use client"

import { motion } from "framer-motion"
import { Code, Globe, Database, GitBranch, BarChart, Cpu, FileCode2, Book } from "lucide-react"

const skills = [
  {
    title: "Programming Languages",
    description: "Proficient in Java, C, Python, and JavaScript for building robust applications",
    icon: <Code className="w-10 h-10 text-blue-500" />,
    color: "border-blue-500/30 shadow-blue-500/10",
  },
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript, and WordPress for creating responsive websites",
    icon: <Globe className="w-10 h-10 text-purple-500" />,
    color: "border-purple-500/30 shadow-purple-500/10",
  },
  {
    title: "Data Analysis",
    description: "Experience with Pandas, NumPy, Matplotlib, and Globplot for data visualization",
    icon: <BarChart className="w-10 h-10 text-blue-500" />,
    color: "border-blue-500/30 shadow-blue-500/10",
  },
  {
    title: "Database Management",
    description: "Familiar with database concepts and management systems",
    icon: <Database className="w-10 h-10 text-purple-500" />,
    color: "border-purple-500/30 shadow-purple-500/10",
  },
  {
    title: "Python Ecosystem",
    description: "Proficient with Python libraries for data science, web development, and automation",
    icon: <FileCode2 className="w-10 h-10 text-blue-500" />,
    color: "border-blue-500/30 shadow-blue-500/10",
  },
  {
    title: "Jupyter Notebook",
    description: "Creating interactive data analysis and visualization reports using Jupyter",
    icon: <Book className="w-10 h-10 text-purple-500" />,
    color: "border-purple-500/30 shadow-purple-500/10",
  },
  {
    title: "Version Control",
    description: "Proficient in Git & GitHub for collaborative development",
    icon: <GitBranch className="w-10 h-10 text-blue-500" />,
    color: "border-blue-500/30 shadow-blue-500/10",
  },
  {
    title: "Project Management",
    description: "Planning, developing, and deploying software projects efficiently",
    icon: <Cpu className="w-10 h-10 text-purple-500" />,
    color: "border-purple-500/30 shadow-purple-500/10",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`bg-card rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border ${skill.color} shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 bg-muted p-4 rounded-lg inline-block">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

