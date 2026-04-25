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
        return "bg-secondary text-white border-black border-2 -rotate-5"
      case "best seller":
        return "bg-destructive text-white border-black border-2 -rotate-10"
      case "premium":
        return "bg-zinc-700 border-2 border-black  text-white rotate-5"
      default:
        return "bg-muted text-white border-foreground border-2"
    }
  }

  return (
    <span
      className={`absolute top-0 -left-4 z-20 border-l-4 px-4 py-1 text-xs font-black tracking-tighter uppercase italic shadow-md ${getStyles()} `}
    >
      {tag}
    </span>
  )
}

export default TagBadge
