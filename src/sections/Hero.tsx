import { useEffect, useRef, useState } from "react"

const clamp = (n: number) => Math.max(0, Math.min(1, n))

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = sectionRef.current
        if (!el) return
        const travel = Math.max(1, el.offsetHeight - window.innerHeight)
        setProgress(clamp(-el.getBoundingClientRect().top / travel))
      })
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const panel1 = clamp(1 - Math.max(0, progress - .12) / .18)
  const panel2 = clamp((progress - .18) / .17) * clamp(1 - Math.max(0, progress - .58) / .16)
  const panel3 = clamp((progress - .66) / .18)

  return (
    <section className="axis-film" id="top" ref={sectionRef} aria-label="Third Axis Creative introduction">
      <div className="axis-film-sticky">
        <div className="axis-film-grid" aria-hidden="true" />
        <div className="axis-film-topline"><span>THIRD AXIS CREATIVE <b>//</b></span><span>INDEPENDENT CREATIVE STUDIO · UK</span></div>
        <div className="axis-film-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>

        <div className="axis-film-panel axis-film-panel-one" style={{ opacity: panel1, pointerEvents: panel1 > .6 ? "auto" : "none", transform: `translateY(${-progress * 65}px)` }}>
          <div className="axis-film-kicker"><span className="axis-film-dot" /> IDEAS MADE REAL. </div>
          <h1>CREATIVE THINKING.<br /><em>TECHNICAL EXECUTION.</em></h1>
          <p>Commercial photography, creative production, 3D and intelligent systems. Real-world studio experience, built for what's next.</p>
          <div className="axis-film-actions"><a href="#work">EXPLORE THE WORK <span>↗</span></a><a href="#contact">START A PROJECT <span>↗</span></a></div>
        </div>

        <div className="axis-film-panel axis-film-panel-two" style={{ opacity: panel2, pointerEvents: panel2 > .6 ? "auto" : "none", transform: `translateY(${(1-panel2)*45}px)` }}>
          <span className="axis-film-kicker">01 / CREATIVE PRODUCTION</span>
          <h2>BUILT FOR<br /><em>THE REAL WORLD.</em></h2>
          <p>From concept and set to capture and delivery. Creative thinking that understands how production actually works.</p>
          <a className="axis-film-textlink" href="#work">VIEW SELECTED PROJECTS ↗</a>
        </div>

        <div className="axis-film-panel axis-film-panel-three" style={{ opacity: panel3, pointerEvents: panel3 > .6 ? "auto" : "none", transform: `translateY(${(1-panel3)*45}px)` }}>
          <span className="axis-film-kicker">02 / OUR IMAGING VENTURE</span>
          <img src="/shootless-family.svg" alt="Shootless Studio" className="axis-film-shootless" />
          <h2>THE NEXT WAY<br /><em>TO MAKE IMAGES.</em></h2>
          <p>Production-led AI fashion and ecommerce imagery. The same studio standards, a completely different workflow.</p>
          <a className="axis-film-textlink" href="https://www.shootless.co.uk" target="_blank" rel="noopener noreferrer">DISCOVER SHOOTLESS ↗</a>
        </div>
        <div className="axis-film-bottom"><span>THINK / MAKE / EVOLVE</span><span>SCROLL TO EXPLORE ↓</span><span>0{Math.min(3,Math.floor(progress*3)+1)} / 03</span></div>
      </div>
    </section>
  )
}
