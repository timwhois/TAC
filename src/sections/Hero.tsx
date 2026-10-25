import { useEffect } from "react"

export function Hero() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const chapters = Array.from(document.querySelectorAll<HTMLElement>(".axis-film-panel-two, .axis-film-panel-three"))
    if (!("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("axis-chapter-visible")
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })
    chapters.forEach((chapter) => {
      chapter.classList.add("axis-chapter-animate")
      observer.observe(chapter)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="axis-film" id="top" aria-label="Third Axis Creative introduction">
      <div className="axis-film-sticky">
        <div className="axis-film-grid" aria-hidden="true" />
        <div className="axis-film-topline"><span>THIRD AXIS CREATIVE <b>//</b></span><span>INDEPENDENT CREATIVE STUDIO · UK</span></div>
        

        <div className="axis-film-panel axis-film-panel-one">
          <div className="axis-film-kicker"><span className="axis-film-dot" /> IDEAS MADE REAL. </div>
          <h1>CREATIVE THINKING.<br /><em>TECHNICAL EXECUTION.</em></h1>
          <p>Commercial photography, creative production, 3D and intelligent systems. Real-world studio experience, built for what's next.</p>
          <div className="axis-film-actions"><a href="#work">EXPLORE THE WORK <span>↗</span></a><a href="#contact">START A PROJECT <span>↗</span></a></div>
          <a className="axis-scroll-cue" href="#services" aria-label="Scroll to explore services"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a>
        </div>

        <div className="axis-film-panel axis-film-panel-two">
          <span className="axis-film-kicker">01 / CREATIVE PRODUCTION</span>
          <h2>BUILT FOR<br /><em>THE REAL WORLD.</em></h2>
          <p>From concept and set to capture and delivery. Creative thinking that understands how production actually works.</p>
          <a className="axis-film-textlink" href="#work">VIEW SELECTED PROJECTS ↗</a>
        </div>

        <div className="axis-film-panel axis-film-panel-three">
          <span className="axis-film-kicker">02 / OUR IMAGING VENTURE</span>
          <img src="/shootless-family.svg" alt="Shootless Studio" className="axis-film-shootless" />
          <h2>THE NEXT WAY<br /><em>TO MAKE IMAGES.</em></h2>
          <p>Production-led AI fashion and ecommerce imagery. The same studio standards, a completely different workflow.</p>
          <a className="axis-film-textlink" href="https://www.shootless.co.uk" target="_blank" rel="noopener noreferrer">DISCOVER SHOOTLESS ↗</a>
        </div>
        <div className="axis-film-bottom"><span>THINK / MAKE / EVOLVE</span><span>SCROLL TO EXPLORE ↓</span><span>01 / 03</span></div>
      </div>
    </section>
  )
}
