import { Share2, MapPin } from "lucide-react"
import { memo } from "react"
import { Button } from "./ui/button"

const ContactForm = memo(() => {
  const inputClasses =
    "w-full border-2 border-foreground bg-foreground p-3 text-background transition-all outline-none focus:border-secondary"

  return (
    <div className="space-y-8 lg:col-span-2">
      <div className="bg-primary p-8 text-foreground">
        <h2 className="mb-6 font-heading text-2xl font-black uppercase md:text-3xl">
          Say Hello!
        </h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-1 block text-xs font-black uppercase">
              Your Name
            </label>
            <input
              autoComplete="off"
              className={inputClasses}
              placeholder="BURGER LOVER"
              type="text"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-black uppercase">
              Email
            </label>
            <input
              autoComplete="off"
              className={inputClasses}
              placeholder="ME@SMASHD.COM"
              type="email"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-black uppercase">
              Message
            </label>
            <textarea
              className={`${inputClasses} h-32`}
              placeholder="HOW CAN WE HELP?"
            />
          </div>
          <Button
            className="w-full bg-foreground py-6 text-background"
            variant="ghost"
          >
            Send Message
          </Button>
        </form>
      </div>

      <div className="flex gap-4">
        <Button
          variant="ghost"
          className="flex flex-1 items-center justify-center bg-muted py-8 text-foreground transition-colors hover:bg-secondary active:translate-x-1 active:translate-y-1"
        >
          <Share2 className="size-6" />
        </Button>
        <Button
          variant="ghost"
          className="flex flex-1 items-center justify-center bg-muted py-8 text-foreground transition-colors hover:bg-secondary active:translate-x-1 active:translate-y-1"
        >
          <MapPin className="size-6" />
        </Button>
      </div>
    </div>
  )
})

ContactForm.displayName = "ContactForm"

export { ContactForm }
