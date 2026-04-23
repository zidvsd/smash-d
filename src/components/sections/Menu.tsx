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

  return (
    <section id="menu" className="py-8">
      <div className="custom-container flex flex-col">
        <div className="mx-auto mb-6 w-full">
          <div className="flex w-full flex-col items-center">
            <h2 className="section-text-header">Browse The Menu</h2>
          </div>
        </div>

        <div className="mb-10 flex items-center justify-center gap-4">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`border-2 border-black px-8 py-6 font-heading text-xl font-bold uppercase transition-all ${
                tab === currentTab
                  ? "translate-y-1 bg-primary text-black shadow-none"
                  : "bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none"
              } `}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bestseller-card p-4">
              {" "}
              <div className="bestseller-card-image-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="aspect-video w-full object-cover"
                />
                <TagBadge tag={item.tag} />
              </div>
              <div className="mb-2 flex items-start justify-between pt-4">
                <h3 className="bestseller-card-title">{item.name}</h3>
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
