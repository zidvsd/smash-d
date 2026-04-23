import menuData from "@/data/menu.json"
import TagBadge from "../TagBadge"
const Bestsellers = () => {
  const { bestsellers } = menuData
  return (
    <section id="best-sellers" className="bg-muted py-12">
      <div className="custom-container flex flex-col">
        <div className="mx-auto w-full">
          <div className="flex w-full flex-col items-start">
            <h2 className="section-text-header italic">Fan Favorites</h2>
            <div className="mt-2 h-1 w-24 bg-destructive" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {bestsellers.map((item) => (
            <div key={item.id} className="bestseller-card">
              <div className="bestseller-card-image-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="aspect-video w-full object-cover"
                />
                <TagBadge tag={item.tag} />
              </div>

              <div className="p-6">
                <h3 className="bestseller-card-title">{item.name}</h3>
                <p className="bestseller-card-description">
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
