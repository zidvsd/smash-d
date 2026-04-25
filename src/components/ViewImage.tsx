import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

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

      <DialogContent className="max-w-[95vw] border-none bg-transparent p-0 shadow-none focus:outline-none md:max-w-5xl">
        {/* Screen Reader Essentials */}
        <DialogTitle className="sr-only">View {alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Full size preview of {alt}
        </DialogDescription>

        {/* The Image Panel */}
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="h-auto w-full object-contain saturate-[1.2]"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewImage
