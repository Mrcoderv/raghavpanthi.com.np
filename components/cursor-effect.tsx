"use client"

import { useEffect, useState } from "react"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Check if hovering over a clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")

      setIsHovering(!!isClickable)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updateCursorPosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  if (typeof window === "undefined") return null

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-300 mix-blend-difference ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`rounded-full ${isClicking ? "bg-purple-500 scale-75" : isHovering ? "bg-purple-500 scale-150" : "bg-blue-500"}`}
        style={{
          width: "20px",
          height: "20px",
          transition: "all 0.2s ease-out",
        }}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${isHovering ? "border-purple-500 scale-150" : "border-blue-500"}`}
        style={{
          width: "40px",
          height: "40px",
          opacity: 0.5,
          transition: "all 0.3s ease-out",
        }}
      />
    </div>
  )
}

