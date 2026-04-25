import { MapPin, Clock } from "lucide-react"

interface InfoCardProps {
  title: string
  // Switching to Lucide icon components for consistency
  icon: React.ElementType
  colorClass: string
  iconColorClass: string
  shadowClass: string
  children: React.ReactNode
}
const InfoCard = ({
  title,
  icon: Icon,
  colorClass,
  iconColorClass,
  shadowClass,
  children,
}: InfoCardProps) => (
  <div
    className={`border-4 border-black bg-white p-8 ${shadowClass} group transition-transform hover:-translate-y-1`}
  >
    <h4 className="mb-4 flex items-center gap-3 text-3xl font-semibold text-black uppercase">
      {/* Apply the color class directly here */}
      <Icon className={`size-8 ${iconColorClass}`} strokeWidth={3} />
      {title}
    </h4>
    <div className={`h-1 w-20 ${colorClass} mb-4`}></div>
    {children}
  </div>
)
export const ContactMap = () => {
  return (
    <div className="w-full lg:col-span-3">
      {/* Map Container - Responsive Fix */}
      <div className="comic-card relative h-87.5 w-full overflow-hidden border-8 border-black md:h-125">
        <img
          className="h-full w-full object-cover contrast-[1.1] saturate-[1.5]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgDocH_yss4XcYzpD00x1fmjIO7hJrKIz8TenAdtogIHHkWfunhBtLyilJ-a_tCWGLX0nDfxPMczXEo7Tl0lhIhbrgRJGvTETdJDY5Fxdozvk6y8LWGUK3p7hxPNXfcxJZ12U9tVrfR2bAD_rvQQekk8PQsd5EJOIWf0DFsIGiFKKbu7TtATIcKc4AT3D3dmBN_shkX7K56Eotr1dxuH_YW8EBxquz1OSMb6SoN93DeT-K5U8FhgQ9pplmmFBMlbvDUMATazZCuzrB"
          alt="Austin Map"
        />
        <div className="absolute top-4 left-4 -rotate-2 border-4 border-black bg-accent px-4 py-2 font-black text-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Downtown HQ
        </div>
      </div>

      {/* Info Grid */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <InfoCard
          iconColorClass=" text-destructive"
          title="Address"
          icon={MapPin}
          colorClass="bg-destructive"
          shadowClass="shadow-[8px_8px_0px_0px_rgba(255,214,0,1)]"
        >
          <p className="font-lg text-xl leading-tight font-black text-black">
            123 GRIDDLE LANE,
            <br />
            AUSTIN, TX 78701
          </p>
          <button className="mt-6 text-sm font-black text-destructive uppercase underline decoration-4 underline-offset-4">
            Get Directions
          </button>
        </InfoCard>

        <InfoCard
          iconColorClass=" text-accent"
          title="Hours"
          icon={Clock}
          colorClass="bg-accent"
          shadowClass="shadow-[8px_8px_0px_0px_rgba(201,3,24,1)]"
        >
          <ul className="space-y-3 font-bold text-black">
            <li className="flex justify-between border-b border-b-zinc-300 pb-2 uppercase">
              <span>Mon-Thu:</span>
              <span className="font-black">11am - 10pm</span>
            </li>
            <li className="flex justify-between border-b-4 border-accent pb-1 uppercase italic">
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
    </div>
  )
}
