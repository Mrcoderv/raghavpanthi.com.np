"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"

// This data should be replaced with actual GitHub API data
// You can fetch this from GitHub API: https://api.github.com/users/Mrcoderv/repos
// And then calculate language percentages
const languageStats = [
  { name: "Java", percentage: 45, color: "bg-blue-500" },
  { name: "C", percentage: 25, color: "bg-purple-500" },
  { name: "HTML", percentage: 15, color: "bg-blue-400" },
  { name: "CSS", percentage: 10, color: "bg-purple-400" },
  { name: "JavaScript", percentage: 5, color: "bg-blue-300" },
]

export default function LanguageStats() {
  return (
    <section id="language-stats" className="py-20 bg-diagonal-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gradient mb-4">Programming Languages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on my GitHub repositories, here's a breakdown of the programming languages I use most frequently.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-blue-500/20 shadow-lg shadow-blue-500/5">
            {languageStats.map((lang, index) => (
              <motion.div
                key={index}
                className="mb-6 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.percentage}%</span>
                </div>
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${lang.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="https://github.com/Mrcoderv"
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Github size={18} />
                <span>View my GitHub profile</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

