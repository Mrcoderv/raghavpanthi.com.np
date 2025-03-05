"use client"

import { motion } from "framer-motion"
import { Github, Code, Star, GitFork } from "lucide-react"
import Link from "next/link"

// Updated GitHub data including Python and Jupyter Notebook
const mockGithubStats = {
  username: "Mrcoderv",
  repos: 15,
  stars: 12,
  forks: 5,
  languages: [
    { name: "Java", percentage: 30, color: "#3498db" },
    { name: "Python", percentage: 25, color: "#2ecc71" },
    { name: "C", percentage: 15, color: "#9b59b6" },
    { name: "HTML", percentage: 10, color: "#2980b9" },
    { name: "CSS", percentage: 8, color: "#8e44ad" },
    { name: "JavaScript", percentage: 7, color: "#1abc9c" },
    { name: "Jupyter", percentage: 5, color: "#f39c12" },
  ],
}

export default function GithubStats() {
  return (
    <section id="github-stats" className="py-20 bg-diagonal-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gradient mb-4">GitHub Statistics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual representation of my GitHub profile and programming language distribution.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 shadow-lg shadow-purple-500/5">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Pie chart visualization */}
              <motion.div
                className="relative w-64 h-64"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Create pie chart segments */}
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      {mockGithubStats.languages.map((lang, i) => {
                        // Calculate the start and end positions for each segment
                        let startPos = 0
                        for (let j = 0; j < i; j++) {
                          startPos += mockGithubStats.languages[j].percentage
                        }
                        const endPos = startPos + lang.percentage

                        // Convert percentages to coordinates on the circle
                        const startAngle = (startPos / 100) * 360
                        const endAngle = (endPos / 100) * 360

                        // Calculate the SVG arc path
                        const startX = 50 + 40 * Math.cos((startAngle * Math.PI) / 180)
                        const startY = 50 + 40 * Math.sin((startAngle * Math.PI) / 180)
                        const endX = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
                        const endY = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)

                        // Determine if the arc should be drawn the long way around
                        const largeArcFlag = endPos - startPos > 50 ? 1 : 0

                        return (
                          <motion.path
                            key={i}
                            d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                            fill={lang.color}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                          />
                        )
                      })}
                      <circle cx="50" cy="50" r="25" fill="#1e1e2e" />
                      <foreignObject x="25" y="25" width="50" height="50">
                        <div className="w-full h-full flex items-center justify-center">
                          <Github className="w-8 h-8 text-white" />
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                </div>

                {/* Language labels */}
                <div className="mt-8 grid grid-cols-2 gap-2">
                  {mockGithubStats.languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="text-xs">{lang.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats and language bars */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* GitHub stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <Code className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                    <div className="text-2xl font-bold">{mockGithubStats.repos}</div>
                    <div className="text-xs text-muted-foreground">Repositories</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <Star className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                    <div className="text-2xl font-bold">{mockGithubStats.stars}</div>
                    <div className="text-xs text-muted-foreground">Stars</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <GitFork className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                    <div className="text-2xl font-bold">{mockGithubStats.forks}</div>
                    <div className="text-xs text-muted-foreground">Forks</div>
                  </div>
                </div>

                {/* Language bars */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Language Distribution</h3>
                  {mockGithubStats.languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      className="mb-4 last:mb-0"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-muted-foreground">{lang.percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full"
                          style={{ backgroundColor: lang.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <Link
                    href="https://github.com/Mrcoderv"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-blue-purple-gradient text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <Github size={18} />
                    <span>View GitHub Profile</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

