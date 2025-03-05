"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+977 9866421276",
    link: "tel:+9779866421276",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "Raghavap.339@gmail.com",
    link: "mailto:Raghavap.339@gmail.com",
    color: "bg-purple-500/10 text-purple-500",
  },
]

const socialLinks = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    link: "https://linkedin.com/in/raghav-vian-panthi",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    link: "https://github.com/Mrcoderv",
    color: "bg-gray-800 hover:bg-gray-900",
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    link: "https://www.instagram.com/raghavavian/",
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "Twitter",
    link: "https://x.com/MrRaghavpanthi",
    color: "bg-blue-400 hover:bg-blue-500",
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    label: "YouTube",
    link: "https://www.youtube.com/channel/UC47t8yKttT05rZ8wo5QMNTQ",
    color: "bg-red-500 hover:bg-red-600",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-600/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-64 h-64 rounded-full bg-purple-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-purple-500/20 shadow-lg shadow-purple-500/5">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {contactInfo.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`${item.color} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </Link>
              ))}
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    href={social.link}
                    key={index}
                    target="_blank"
                    className={`${social.color} p-3 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

