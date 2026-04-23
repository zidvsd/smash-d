import { useEffect } from "react"

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault()
        const targetElement = document.querySelector(anchor.hash)

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])
}
