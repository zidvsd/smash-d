import menuData from "@/data/menu.json"
import TagBadge from "../TagBadge"
const Bestsellers = () => {
  const { bestsellers } = menuData
  return (
    <section
      id="best-sellers"
      className="border-b-4 border-b-accent bg-muted py-16"
    >
      <div className="custom-container flex flex-col">
        <div className="mx-auto w-full">
          <div className="flex w-full flex-col items-start">
            <h2 className="section-text-header">Fan Favorites</h2>
            <div className="mt-2 h-1 w-24 bg-destructive" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {bestsellers.map((item) => (
            <div
              key={item.id}
              className="border-2 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300"
            >
              <div className="relative border border-b-2">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="aspect-video w-full object-cover"
                />
                <TagBadge tag={item.tag} />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground uppercase">
                  {item.name}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
