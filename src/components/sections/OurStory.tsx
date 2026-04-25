import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const OurStory = () => {
  return (
    <div>
      <section
        id="our-story"
        className="px-margin border-y-4 border-destructive bg-card-foreground py-12 text-zinc-950"
      >
        <div className="custom-container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-heading text-sm font-bold tracking-widest text-destructive uppercase">
              Est. 2021
            </span>
            <h3 className="section-text-header mt-4 mb-6 uppercase">
              <span className="text-background">
                BORN IN A<br />
              </span>
              <span className="text-destructive">BACK ALLEY.</span>
            </h3>
            <div className="mb-8 flex max-w-xl flex-col gap-6 font-mono text-lg font-extralight text-zinc-300 lg:mb-0 dark:text-zinc-900">
              <p>
                We didn't start with a fancy kitchen. We started with a heavy
                cast iron press and a dream to make the crustiest, juiciest
                burgers in the tri-state area. No fluff, no garnish, just raw
                fire and flavor.
              </p>
              <p>
                Every morning, we roll fresh, never-frozen beef into balls. We
                don't touch them until they hit that screaming-hot chrome
                griddle. Then? <strong>SMASH.</strong>
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Avatar className="size-16 border-2 border-background">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="grayscale"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start gap-2">
                <span className="text-lg font-extrabold text-background uppercase">
                  &quot;If it's not smashed, it's just a sandwich.&quot;
                </span>
                <span className="text-sm font-light text-background italic">
                  - Big Mike, Founder & Chief Smasher
                </span>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="block-shadow -rotate-2 border-4 border-foreground bg-card p-2">
            <img
              className="aspect-4/3 w-full object-cover contrast-125 grayscale"
              alt="Gritty black and white photo of a chef smashing a burger on a hot griddle with steam rising"
              src="/images/history.png"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
