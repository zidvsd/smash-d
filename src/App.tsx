import { Button } from "@/components/ui/button"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"

// Import your sections here
// import Hero from "./sections/Hero"
// import Menu from "./sections/Menu"
// import Bestsellers from "./sections/Bestsellers"
// import OurStory from "./sections/OurStory"
// import FindUs from "./sections/FindUs"
// import ContactForm from "./sections/ContactForm"

export function App() {
  return (
    <div className="bg-near-black flex min-h-svh flex-col">
      {/* Navbar stays full width */}
      <Navbar />

      {/* Main Content: Centered with max-width 1440px */}
      <main className="mx-auto w-full max-w-360 flex-1 px-6">
        <div className="flex flex-col gap-12 py-8">
          {/* <Hero />
          <Menu />
          <Bestsellers />
          <OurStory />
          <FindUs />
          <ContactForm /> */}
        </div>
      </main>

      {/* Footer stays full width */}
      <Footer />
    </div>
  )
}

export default App
