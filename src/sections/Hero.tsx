import { useEffect } from "react"

export function Hero() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const chapters: HTMLElement[] = []
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
        

        <div className="axis-film-panel axis-film-panel-one">
          <div className="axis-film-kicker"><span className="axis-film-dot" /> IDEAS MADE REAL. </div>
          <h1>CREATIVE THINKING.<br /><em>TECHNICAL EXECUTION.</em></h1>
          <p>We help brands, photography studios and creative teams create better content, streamline production and solve technical challenges. From commercial photography and production management to 3D, AI and bespoke studio systems — creative expertise grounded in real-world experience.</p>
          <div className="axis-film-actions"><a href="#services">EXPLORE OUR SERVICES <span>↗</span></a><a href="#contact">DISCUSS A PROJECT <span>↗</span></a></div>
          <a className="axis-scroll-cue" href="#services" aria-label="Scroll to explore services"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a>
        </div>

        <div className="axis-film-bottom"><span>THINK / MAKE / EVOLVE</span><span>SCROLL TO EXPLORE ↓</span><span>01 / 01</span></div>
      </div>
    </section>
  )
}
