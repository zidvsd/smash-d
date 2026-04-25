"use client"

import { motion } from "motion/react"

export function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}
