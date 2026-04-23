import { SendHorizonal, UtensilsCrossed, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const links = [
    { full: "Privacy Policy", short: "Privacy", href: "/privacy" },
    { full: "Terms of Service", short: "Terms", href: "/terms" },
    { full: "Careers", short: "Careers", href: "/careers" },
    { full: "Contact", short: "Contact", href: "/contact" },
  ]

  return (
    <footer className="w-full bg-near-black ">
      {/* Top Border Line */}
      <div className="h-0.5 sm:block hidden w-full bg-red-500" />
      
      <div className="mx-auto flex max-w-360 flex-col items-center px-6 py-8 space-y-6">
        
        {/* LOGO: Switches color based on screen size */}
        <h1 className="cursor-pointer font-heading text-3xl font-bold italic tracking-tighter uppercase transition-colors sm:text-4xl text-red-500">
          Smash'd
        </h1>

        {/* MOBILE LINKS & ICONS */}
        <nav className=" flex flex-col items-center gap-6  sm:hidden">
          {/* ROW 1: TEXT LINKS */}
          <div className="flex items-center justify-center gap-8">
            {links.slice(0, 3).map((link) => (
              <a
                key={link.short}
                href={link.href}
                className="font-mono text-sm font-semibold uppercase tracking-tight text-foreground transition-colors hover:text-accent"
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
        <nav className=" hidden sm:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.full}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.full}
            </a>
          ))}
        </nav>

        {/* COPYRIGHT */}
        <div className="flex w-full flex-col items-center text-center">
          <p className="font-mono text-xs uppercase font-bold tracking-wide text-muted-foreground/50">
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