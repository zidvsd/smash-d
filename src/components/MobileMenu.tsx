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
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 text-accent outline-none"
      >
        {isOpen ? (
          <X size={32} strokeWidth={3} />
        ) : (
          <Menu size={32} strokeWidth={3} />
        )}
      </button>

      {isOpen && (
        <div className="bg-near-black fixed top-20 right-0 left-0 z-50 w-full animate-in border-b border-foreground/10 shadow-2xl duration-300 fade-in slide-in-from-top-4">
          <nav className="flex flex-col items-stretch gap-2 p-6">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => {
                  setTab(item)
                  setIsOpen(false)
                }}
                className={`px-4 py-4 font-heading text-2xl font-black tracking-tight uppercase italic transition-all ${
                  currentTab === item
                    ? "bg-foreground/5 text-accent"
                    : "text-foreground"
                }`}
              >
                {item}
              </a>
            ))}
            <Button
              variant="accent"
              size="lg"
              className="mt-4 w-full py-8 text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
