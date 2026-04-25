import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Bestsellers from "./components/sections/Bestsellers"
import Featured from "./components/sections/Featured"
import { Menu } from "./components/sections/Menu"
import OurStory from "./components/sections/OurStory"
import FindUs from "./components/sections/FindUs"
import { useSmoothScroll } from "./components/hooks/useSmoothScroll"
import SectionWrapper from "./components/animations/SectionWrapper"
import InView from "./components/animations/InView"
import ThemeToggle from "./components/ThemeToggle"
export function App() {
  useSmoothScroll()

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />

      <main className="relative flex-1">
        {/* Hero usually shouldn't wait for scroll/InView, it should load immediately */}
        <SectionWrapper>
          <Hero />

          <Bestsellers />

          <InView>
            <Featured />
          </InView>

          <InView>
            <div className="custom-container flex flex-col px-6 py-8">
              <Menu />
            </div>
          </InView>

          <InView>
            <OurStory />
          </InView>

          <InView>
            <div className="custom-container flex flex-col px-6 py-8">
              <FindUs />
            </div>
          </InView>
        </SectionWrapper>
      </main>
      <Footer />
      <div className="fixed top-1/2 right-0 z-100 -translate-y-1/2">
        <div className="rounded-l-xl border-t border-b border-l border-neutral-300 bg-background p-1 shadow-xl sm:p-2 dark:border-zinc-700">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
