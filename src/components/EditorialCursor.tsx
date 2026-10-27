import { useEffect } from "react"

/** Shared editorial crosshair: colour is controlled by each site's CSS. */
export function EditorialCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!fine.matches) return

    const el = document.createElement("div")
    el.className = "editorial-crosshair"
    el.setAttribute("aria-hidden", "true")
    el.innerHTML = '<span class="ec-corners"><i></i><i></i><i></i><i></i><b></b></span><span class="ec-view">VIEW</span>'
    document.body.appendChild(el)

    let frame = 0
    let x = 0, y = 0, cx = 0, cy = 0
    let started = false
    const render = () => {
      if (reduced.matches) { cx = x; cy = y }
      else { cx += (x - cx) * 0.36; cy += (y - cy) * 0.36 }
      el.style.transform = `translate3d(${cx}px,${cy}px,0)`
      frame = requestAnimationFrame(render)
    }
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return
      x = event.clientX; y = event.clientY
      if (!started) {
        started = true; cx = x; cy = y
        document.documentElement.classList.add("editorial-cursor-active")
        frame = requestAnimationFrame(render)
      }
      el.classList.remove("ec-hidden")
      const target = event.target
      if (!(target instanceof Element)) return
      const isField = Boolean(target.closest('input,textarea,select,[contenteditable="true"],[role="textbox"]'))
      const isView = Boolean(target.closest('.selected-open,.selected-work-card,.project-card,.work-card,.showcase-media,.gallery-item,.portfolio-card')) || (target.matches("img") && !target.closest("nav,header,button,.wordmark"))
      const isLink = Boolean(target.closest('a,button,[role="button"],summary'))
      el.classList.toggle("ec-hidden", isField)
      el.classList.toggle("ec-viewing", !isField && isView)
      el.classList.toggle("ec-hovering", !isField && (isLink || isView))
    }
    const leave = (event: MouseEvent) => { if (!event.relatedTarget) el.classList.add("ec-hidden") }
    const blur = () => el.classList.add("ec-hidden")
    const onMatchChange = () => { if (!fine.matches) { document.documentElement.classList.remove("editorial-cursor-active"); el.classList.add("ec-hidden") } }
    document.addEventListener("pointermove", move, { passive: true })
    document.addEventListener("mouseout", leave)
    window.addEventListener("blur", blur)
    fine.addEventListener("change", onMatchChange)
    return () => {
      document.removeEventListener("pointermove", move)
      document.removeEventListener("mouseout", leave)
      window.removeEventListener("blur", blur)
      fine.removeEventListener("change", onMatchChange)
      cancelAnimationFrame(frame)
      document.documentElement.classList.remove("editorial-cursor-active")
      el.remove()
    }
  }, [])
  return null
}
