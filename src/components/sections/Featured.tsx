import menuData from "@/data/menu.json"
import { Button } from "../ui/button"
const Featured = () => {
  const item = menuData.featured?.[0]

  return (
    <section className="border-b-4 border-b-accent bg-foreground" id="featured">
      <div className="mx-auto grid px-0 md:max-w-360 md:grid-cols-2 xl:px-6">
        {/* Image Panel */}
        <div className="group relative overflow-hidden bg-foreground">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover brightness-75"
          />
        </div>
        {/* Content Panel */}
        <div className="flex flex-col justify-center gap-6 bg-foreground p-8 text-background md:p-12">
          <div className="space-y-4">
            <h2 className="section-text-header">{item.name}</h2>
            <div className="h-1 w-16 bg-secondary"></div>
          </div>
          <p className="font-body-lg text-lg font-bold text-background md:text-2xl">
            {item.description}
          </p>
          <Button
            variant={"accent"}
            className="mt-4 w-fit px-12 py-6 font-heading text-xl font-black uppercase italic lg:px-16 lg:py-8 lg:text-3xl"
          >
            I WANT THIS
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Featured
