import HeroImg from "/images/cta-bg.png"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden border-b-4 border-b-accent"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HeroImg}
          alt="Smash Burger Background"
          className="h-full w-full object-cover brightness-[0.4] grayscale"
        />
      </div>

      {/* Dynamic Padding using 'vw' (Viewport Width)
        This ensures the height scales perfectly with the width of the screen,
        keeping the burger fully visible as shown in your screenshot.
      */}
      <div className="mx-auto w-full max-w-360 px-6 py-[15vw] text-center md:py-[12vw] lg:py-[10vw]">
        <h1 className="mb-4 font-heading text-4xl font-bold text-primary uppercase drop-shadow-[2px_2px_0px_rgba(201,3,24,1)] sm:text-5xl md:text-6xl lg:text-7xl">
          Join The Revolution. <br />
          Smash a Burger Today.
        </h1>

        <p className="mx-auto max-w-3xl font-heading font-bold tracking-[0.2em] text-white uppercase sm:text-lg md:text-xl">
          The crispiest edges, the juiciest center. No fluff.{" "}
          <br className="hidden md:block" />
          No filler. Just the smash.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            className="h-12 px-10 text-lg font-black tracking-wider uppercase italic shadow-lg"
            variant={"accent"}
          >
            Order Now
          </Button>
          <Button className="h-12 bg-white px-10 text-lg font-black tracking-wider text-black uppercase italic hover:bg-gray-200">
            View Menu
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
