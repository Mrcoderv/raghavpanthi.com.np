import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import GithubStats from "@/components/github-stats"

export const metadata: Metadata = {
  title: "Raghav Vian Panthi | Portfolio",
  description: "Professional portfolio of Raghav Vian Panthi, a BCA student and aspiring developer",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Diagonal section for About */}
      <div className="bg-diagonal-section">
        <About />
      </div>

      <Skills />

      {/* GitHub Stats */}
      <GithubStats />

      {/* Diagonal section for Projects */}
      <div className="bg-diagonal-section">
        <Projects />
      </div>

      <Contact />
      <Footer />
    </main>
  )
}

