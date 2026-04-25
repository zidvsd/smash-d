import { motion } from "motion/react"

interface StaggerWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function StaggerWrapper({
  children,
  className,
}: StaggerWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
