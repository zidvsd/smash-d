import { SendHorizonal, UtensilsCrossed, MapPin } from "lucide-react"
import logo from "/images/logo.png"
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = [
    { full: "Privacy Policy", short: "Privacy", href: "/privacy" },
    { full: "Terms of Service", short: "Terms", href: "/terms" },
    { full: "Careers", short: "Careers", href: "/careers" },
    { full: "Contact", short: "Contact", href: "find-us" },
  ]

  return (
    <footer className="bg-near-black w-full">
      {/* Top Border Line */}
      <div className="block h-1 w-full bg-red-500 sm:block" />

      <div className="mx-auto flex max-w-360 flex-col items-center space-y-6 px-6 py-8">
        {/* LOGO: Switches color based on screen size */}
        <a href="#hero" className="flex items-center gap-2">
          <h1 className="cursor-pointer font-heading text-3xl font-bold tracking-tighter text-red-500 uppercase italic drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-colors sm:text-4xl dark:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
            Smash'd
          </h1>
          <img
            src={logo}
            alt="Smash'd Logo"
            className="size-10 object-contain md:size-12 xl:size-14"
          />
        </a>
        {/* MOBILE LINKS & ICONS */}
        <nav className="flex flex-col items-center gap-6 sm:hidden">
          {/* ROW 1: TEXT LINKS */}
          <div className="flex items-center justify-center gap-8">
            {links.slice(0, 3).map((link) => (
              <a
                key={link.short}
                href={`#${link.href}`}
                className="font-mono text-sm font-semibold tracking-tight text-foreground uppercase transition-colors hover:text-accent"
              >
                {link.short}
              </a>
            ))}
          </div>

          {/* ROW 2: INDEPENDENT ICONS */}
          <div className="flex items-center justify-center gap-6 text-foreground">
            <SendHorizonal size={24} strokeWidth={1.5} />
            <UtensilsCrossed size={24} strokeWidth={1.5} />
            <MapPin size={24} strokeWidth={1.5} />
          </div>
        </nav>

        {/* DESKTOP LINKS */}
        <nav className="hidden items-center gap-10 sm:flex">
          {links.map((link) => (
            <a
              key={link.full}
              href={`#${link.href}`}
              className="text-sm font-bold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {link.full}
            </a>
          ))}
        </nav>

        {/* COPYRIGHT */}
        <div className="flex w-full flex-col items-center text-center">
          <p className="font-mono text-xs font-bold tracking-wide text-muted-foreground/50 uppercase">
            &copy; {currentYear} Smash'd Burgers.
            <span className="sm:hidden"> Loud & Proud.</span>
            <span className="hidden sm:inline"> All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
