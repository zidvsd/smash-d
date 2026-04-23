interface BadgeProps {
  tag: string | null
}

const TagBadge = ({ tag }: BadgeProps) => {
  if (!tag) return null

  // Normalize the tag to handle casing
  const normalizedTag = tag.toLowerCase()

  const getStyles = () => {
    switch (normalizedTag) {
      case "spicy af":
        return "bg-red-600 text-white border-black border-2 -rotate-5"
      case "best seller":
        return "bg-red-800 text-white border-black border-2 -rotate-10"
      case "premium":
        return "bg-muted-foreground border-2 border-black  text-white rotate-5"
      default:
        return "bg-gray-800 text-white border-gray-600"
    }
  }

  return (
    <span
      className={`absolute bottom-0 left-4 z-20 border-l-4 px-4 py-1 text-xs font-black tracking-tighter uppercase italic shadow-md ${getStyles()} `}
    >
      {tag}
    </span>
  )
}

export default TagBadge
