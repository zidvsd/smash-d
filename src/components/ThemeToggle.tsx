"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    const shouldBeDark = saved === "dark" || (!saved && prefersDark)

    document.documentElement.classList.toggle("dark", shouldBeDark)
    setIsDark(shouldBeDark)
  }, [])

  const toggleTheme = async () => {
    const newTheme = !isDark

    // ✅ Use View Transition if supported
    const doc = document as any

    if ("startViewTransition" in doc) {
      await doc.startViewTransition(() => {
        document.documentElement.classList.toggle("dark", newTheme)
      }).ready

      document.documentElement.animate(
        { opacity: [0, 1] },
        {
          duration: 200,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    } else {
      document.documentElement.classList.toggle("dark", newTheme)
    }

    localStorage.setItem("theme", newTheme ? "dark" : "light")
    setIsDark(newTheme)
  }

  return (
    <>
      <Button
        size="icon"
        onClick={toggleTheme}
        className="rounded-full bg-transparent text-primary"
      >
        {isDark ? (
          <Sun className="z-50 size-8" />
        ) : (
          <Moon className="z-50 size-8" />
        )}
      </Button>

      {/* 🔥 Required override for fade animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            ::view-transition-old(root),
            ::view-transition-new(root) {
              animation: none;
              mix-blend-mode: normal;
            }
          `,
        }}
      />
    </>
  )
}
