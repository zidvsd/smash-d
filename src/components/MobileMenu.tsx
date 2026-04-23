import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  navLinks: string[]
  currentTab: string
  setTab: (tab: string) => void
}

const MobileMenu = ({ navLinks, currentTab, setTab }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full  ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-accent p-2 outline-none flex items-center justify-center"
      >
        {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
      </button>

      {isOpen && (
        <div className="fixed top-20 left-0 right-0 w-full bg-near-black border-b border-foreground/10 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col items-stretch p-6 gap-2">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  setTab(item)
                  setIsOpen(false)
                }}
                className={`font-heading text-2xl font-black uppercase italic tracking-tight px-4 py-4 transition-all ${
                  currentTab === item ? "text-accent bg-white/5" : "text-foreground"
                }`}
              >
                {item}
              </a>
            ))}
            <Button variant="accent" size="lg" className="mt-4 w-full py-8 text-xl font-bold" onClick={() => setIsOpen(false)}>
              Order Now
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu