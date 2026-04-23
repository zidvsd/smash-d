import { useState } from "react"
import navs from "@/data/nav.json"

const Navbar = () => {
  const [tab, setTab] = useState("Menu")

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background">

      <div className="mx-auto flex flex-col items-center justify-center p-4 md:h-24 md:flex-row md:justify-between md:px-6 max-w-360">
        
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="cursor-pointer font-heading text-3xl font-bold italic tracking-tighter text-accent uppercase md:text-4xl">
            Smash'd
          </h1>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-8">
          {navs.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setTab(item)}
              className={`text-[11px] font-black tracking-widest uppercase transition-all hover:text-accent sm:text-sm ${
                tab === item
                  ? "text-accent border-b-2 border-accent pb-1"
                  : "text-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Navbar