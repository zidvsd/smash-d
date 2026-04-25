import { motion } from "motion/react"
import type { ReactNode } from "react"

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      // No key needed since we aren't switching routes
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Smooth professional entrance
        delay: 0.1, // Slight delay so it doesn't clip with the browser paint
      }}
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  )
}
