import menuData from "@/data/menu.json"
import TagBadge from "../TagBadge"
import ViewImage from "../ViewImage"
const Bestsellers = () => {
  const { bestsellers } = menuData
  return (
    <section
      id="best-sellers"
      className="border-b-4 border-b-accent bg-muted py-12"
    >
      <div className="custom-container flex flex-col">
        <div className="mx-auto w-full">
          <div className="flex w-full items-center gap-2">
            <svg
              className="size-8 text-destructive md:size-10"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
            </svg>
            <h2 className="section-text-header mt-2 leading-none italic">
              Best Sellers
            </h2>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {bestsellers.map((item) => (
            <ViewImage key={item.id} src={item.imageUrl} alt={item.name}>
              <div className="bestseller-card group cursor-pointer shadow-xl transition-all duration-300">
                {/* 1. Relative parent for the badge positioning */}
                <div className="bestseller-card-image-wrapper relative">
                  {/* 2. Inner wrapper ONLY for the image zoom clipping */}
                  <div className="overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="aspect-video w-full object-cover saturate-[1.2] transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* 3. Badge stays OUTSIDE the overflow-hidden div but INSIDE the relative div */}
                  <TagBadge tag={item.tag} />
                </div>

                <div className="p-6">
                  <h3 className="bestseller-card-title">{item.name}</h3>
                  <p className="bestseller-card-description line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-4 text-xs font-black text-destructive uppercase italic">
                    Click to enlarge +
                  </div>
                </div>
              </div>
            </ViewImage>
          ))}{" "}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
