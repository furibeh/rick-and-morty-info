import type { ReactNode } from "react"

function Background({ children } : { children: ReactNode }) {
  return (
    <div style={{ width: "100%", height: "100dvh", position: "fixed" }} className="z-[-1]">
      { children }
    </div>
  )
}

export default Background