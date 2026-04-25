import { memo } from "react"
import { MapPin, Clock } from "lucide-react"
import InView from "./animations/InView"
interface InfoCardProps {
  title: string
  icon: React.ElementType
  colorClass: string
  iconColorClass: string
  shadowClass: string
  children: React.ReactNode
}

const InfoCard = memo<InfoCardProps>(
  ({
    title,
    icon: Icon,
    colorClass,
    iconColorClass,
    shadowClass,
    children,
  }) => (
    <div
      className={`bg-card p-8 ${shadowClass} group transition-transform hover:-translate-y-1`}
    >
      <h4 className="mb-4 flex items-center gap-3 text-3xl font-semibold text-foreground uppercase">
        <Icon className={`size-8 ${iconColorClass}`} strokeWidth={3} />
        {title}
      </h4>
      <div className={`h-1 w-20 ${colorClass} mb-4`} />
      {children}
    </div>
  )
)

InfoCard.displayName = "InfoCard"

const ContactMap = memo(() => {
  return (
    <div className="w-full lg:col-span-3">
      <div className="relative h-87.5 w-full overflow-hidden md:h-125">
        <img
          className="h-full w-full object-cover contrast-[1.1] saturate-[1.5]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgDocH_yss4XcYzpD00x1fmjIO7hJrKIz8TenAdtogIHHkWfunhBtLyilJ-a_tCWGLX0nDfxPMczXEo7Tl0lhIhbrgRJGvTETdJDY5Fxdozvk6y8LWGUK3p7hxPNXfcxJZ12U9tVrfR2bAD_rvQQekk8PQsd5EJOIWf0DFsIGiFKKbu7TtATIcKc4AT3D3dmBN_shkX7K56Eotr1dxuH_YW8EBxquz1OSMb6SoN93DeT-K5U8FhgQ9pplmmFBMlbvDUMATazZCuzrB"
          alt="Austin Map"
        />
        <div className="absolute top-4 left-4 -rotate-2 border-4 border-black bg-primary px-4 py-2 font-black text-black uppercase">
          Downtown HQ
        </div>
      </div>
      <InView>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <InfoCard
            iconColorClass="text-secondary"
            title="Address"
            icon={MapPin}
            colorClass="bg-secondary"
            shadowClass="shadow-info-card-secondary"
          >
            <p className="font-lg text-xl leading-tight font-black text-foreground">
              123 GRIDDLE LANE,
              <br />
              AUSTIN, TX 78701
            </p>
            <button className="mt-6 text-sm font-black text-secondary uppercase underline decoration-4 underline-offset-4">
              Get Directions
            </button>
          </InfoCard>

          <InfoCard
            iconColorClass="text-primary"
            title="Hours"
            icon={Clock}
            colorClass="bg-primary"
            shadowClass="shadow-info-card-primary"
          >
            <ul className="space-y-3 font-bold text-foreground">
              <li className="flex justify-between border-b border-b-zinc-300 pb-2 uppercase">
                <span>Mon-Thu:</span>
                <span className="font-black">11am - 10pm</span>
              </li>
              <li className="flex justify-between border-b-4 border-primary pb-1 uppercase italic">
                <span>Fri-Sat:</span>
                <span className="font-black">11am - 12am</span>
              </li>
              <li className="flex justify-between uppercase">
                <span>Sunday:</span>
                <span className="font-black">12pm - 9pm</span>
              </li>
            </ul>
          </InfoCard>
        </div>
      </InView>
    </div>
  )
})

ContactMap.displayName = "ContactMap"

export { ContactMap }
