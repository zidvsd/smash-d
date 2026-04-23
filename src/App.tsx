import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Bestsellers from "./components/sections/Bestsellers"
import { useSmoothScroll } from "./components/hooks/useSmoothScroll"
import Menu from "./components/sections/Menu"
// Import your sections here
// import Menu from "./sections/Menu"
// import Bestsellers from "./sections/Bestsellers"
// import OurStory from "./sections/OurStory"
// import FindUs from "./sections/FindUs"
// import ContactForm from "./sections/ContactForm"
export function App() {
  useSmoothScroll()
  return (
    <div className="bg-near-black flex min-h-svh flex-col">
      <Navbar />

      {/* Main no longer has max-width or padding */}
      <main className="flex-1">
        {/* Hero stays full width naturally */}
        <Hero />
        <Bestsellers />

        {/* Other sections wrapped in a container */}
        <div className="mx-auto flex w-full max-w-360 flex-col gap-12 px-6 py-8">
          <Menu />
          {/* <OurStory />
          <FindUs />
          <ContactForm /> */}
        </div>
      </main>

      <Footer />
    </div>
  )
}
