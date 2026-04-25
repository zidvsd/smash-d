import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Bestsellers from "./components/sections/Bestsellers"
import { useSmoothScroll } from "./components/hooks/useSmoothScroll"
import Menu from "./components/sections/Menu"
import OurStory from "./components/sections/OurStory"
import FindUs from "./components/sections/FindUs"
import Featured from "./components/sections/Featured"
export function App() {
  useSmoothScroll()
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Bestsellers />
        <Featured/ >

        <div className="custom-container flex flex-col px-6 py-8">
          <Menu />
        </div>
        <OurStory />
        <div className="custom-container flex flex-col px-6 py-8">
          <FindUs />
        </div>
      </main>

      <Footer />
    </div>
  )
}
