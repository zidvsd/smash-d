import { Share2, MapPin } from "lucide-react"
import { Button } from "./ui/button"
export const ContactForm = () => {
  return (
    <div className="space-y-8 lg:col-span-2">
      <div className="comic-card border-4 border-black bg-accent p-8 text-black">
        <h2 className="mb-6 font-heading text-2xl font-black uppercase md:text-3xl">
          Say Hello!
        </h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-1 block text-xs font-black uppercase">
              Your Name
            </label>
            <input
              autoComplete={"off"}
              className="w-full border-2 border-black bg-black p-3 text-white transition-all outline-none focus:border-accent dark:placeholder:text-zinc-400"
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
              className="w-full border-2 border-black bg-black p-3 text-white transition-all outline-none focus:border-accent dark:placeholder:text-zinc-400"
              placeholder="ME@SMASHD.COM"
              type="email"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-black uppercase">
              Message
            </label>
            <textarea
              className="h-32 w-full border-2 border-black bg-black p-3 text-white transition-all outline-none focus:border-accent dark:placeholder:text-zinc-400"
              placeholder="HOW CAN WE HELP?"
            ></textarea>
          </div>
          <Button className="w-full bg-black py-6 text-white" variant={"ghost"}>
            Send Message
          </Button>
        </form>
      </div>

      {/* Social/Action Buttons */}
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className="flex flex-1 items-center justify-center border-4 border-black bg-zinc-800 py-8 text-white transition-colors hover:border-transparent hover:bg-accent active:translate-x-1 active:translate-y-1"
        >
          <Share2 className="size-6" />
        </Button>
        <Button
          variant={"ghost"}
          className="flex flex-1 items-center justify-center border-4 border-black bg-zinc-800 py-8 text-white transition-colors hover:border-transparent hover:bg-accent active:translate-x-1 active:translate-y-1"
        >
          <MapPin className="size-6" />
        </Button>
      </div>
    </div>
  )
}
