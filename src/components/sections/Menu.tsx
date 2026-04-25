import { useState } from "react"
import menuData from "@/data/menu.json"
import TagBadge from "../TagBadge"
import { Button } from "../ui/button"

export const Menu = () => {
  const { menuItems } = menuData
  const tabs: string[] = ["Burgers", "Sides", "Drinks"]
  const [currentTab, setCurrentTab] = useState(tabs[0])

  // 1. Logic: Filter items based on the active tab
  const filteredItems = menuItems.filter(
    (item) => item.category.toLowerCase() === currentTab.toLowerCase()
  )
  const getGridCols = (count: number) => {
    if (count === 1) return "lg:grid-cols-1 max-w-md mx-auto"
    if (count === 2) return "lg:grid-cols-2 max-w-4xl mx-auto"
    if (count === 3) return "lg:grid-cols-3 max-w-6xl mx-auto"
    return "lg:grid-cols-4" // Default for 4+ items
  }
  return (
    <section id="menu" className="py-8">
      <div className="flex flex-col">
        <div className="mx-auto mb-6 w-full">
          <div className="flex w-full flex-col items-center">
            <h2 className="section-text-header text-center text-foreground dark:text-primary">
              Browse The Menu
            </h2>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-3 gap-2 md:flex md:justify-center md:gap-4">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`border-2 border-black px-2 py-4 font-heading text-sm font-bold uppercase transition-all md:px-8 md:py-6 md:text-xl ${
                tab === currentTab
                  ? "translate-y-1 bg-primary text-black shadow-none"
                  : "bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
              } `}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${getGridCols(filteredItems.length)}`}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bestseller-card w-full max-w-[320px] place-self-center p-4"
            >
              {" "}
              <div className="bestseller-card-image-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="aspect-video w-full object-cover lg:aspect-square"
                />
                <TagBadge tag={item.tag} />
              </div>
              <div className="mb-2 flex items-start justify-between pt-4">
                <h3 className="bestseller-card-title text-wrap">{item.name}</h3>
                <span className="font-mono font-bold text-destructive">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="bestseller-card-description line-clamp-2">
                {item.description}
              </p>
              <div className="mt-4 h-0 border-t-2 border-dashed border-muted-foreground/30"></div>{" "}
              <Button className="mt-4 w-full bg-black text-xs font-black text-white uppercase italic hover:bg-zinc-800">
                Add to Bag
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
