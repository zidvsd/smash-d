import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { motion } from "motion/react"
type ViewImageProps = {
  src: string
  alt?: string
  className?: string
  children?: React.ReactNode // Made optional just in case
}

const ViewImage = ({
  src,
  alt = "image",
  className,
  children,
}: ViewImageProps) => {
  return (
    <Dialog>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-100"
      >
        {/* If 'children' exists, use it as the trigger (e.g., the whole Card).
          If not, default back to the clickable image.
      */}
        <DialogTrigger asChild>
          {children ? (
            children
          ) : (
            <img
              src={src}
              alt={alt}
              className={`cursor-pointer transition-opacity hover:opacity-90 ${className}`}
            />
          )}
        </DialogTrigger>

        <DialogContent className="flex max-h-[90vh] max-w-[95vw] items-center justify-center border-none bg-transparent p-0 shadow-none focus:outline-none">
          {/* Screen Reader Essentials */}
          <DialogTitle className="sr-only">View {alt}</DialogTitle>
          <DialogDescription className="sr-only">
            Full size preview of {alt}
          </DialogDescription>

          <div className="relative">
            <img
              src={src}
              alt={alt}
              className="h-auto w-full object-contain saturate-[1.2]"
            />
          </div>
        </DialogContent>
      </motion.div>
    </Dialog>
  )
}

export default ViewImage
