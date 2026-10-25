import { useEffect } from "react"
import { Nav } from "./components/Nav"
import { Capabilities } from "./sections/Capabilities"
import { Contact } from "./sections/Contact"
import { Hero } from "./sections/Hero"
import { SampleSystems } from "./sections/SampleSystems"
import { SelectedWork } from "./sections/SelectedWork"
import { Showcase } from "./sections/Showcase"
import SERVICES from "./services.json"

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 700px)").matches) return
    let lockedUntil = 0
    let accumulated = 0
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.altKey || event.shiftKey || Math.abs(event.deltaY) < 2) return
      if ((event.target as Element)?.closest("dialog, [role=dialog], textarea, select, [data-no-snap]")) return
      const now = performance.now()
      if (now < lockedUntil) { event.preventDefault(); return }
      const sections = Array.from(document.querySelectorAll<HTMLElement>(".axis-film-panel, main > section:not(.axis-film)"))
      const nav = document.querySelector<HTMLElement>("header.nav")?.getBoundingClientRect().height ?? 0
      const viewport = window.innerHeight
      const direction = Math.sign(event.deltaY)
      const index = sections.findIndex(section => {
        const rect = section.getBoundingClientRect()
        return rect.top <= nav + viewport * .3 && rect.bottom > nav + viewport * .3
      })
      if (index < 0) return
      const rect = sections[index].getBoundingClientRect()
      if (rect.height > viewport + 90) {
        if ((direction > 0 && rect.bottom > viewport + 8) || (direction < 0 && rect.top < nav - 8)) {
          accumulated = 0
          return
        }
      }
      const next = index + direction
      if (next < 0 || next >= sections.length) return
      const destination = next === 0 ? 0 : Math.max(0, sections[next].getBoundingClientRect().top + window.scrollY - nav)
      if (Math.abs(destination - window.scrollY) < 8) return
      accumulated += event.deltaY
      if (Math.abs(accumulated) < 18) return
      accumulated = 0
      event.preventDefault()
      lockedUntil = now + 900
      window.scrollTo({ top: destination, behavior: "smooth" })
    }
    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [])
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Capabilities />
        <SelectedWork />

        <Showcase
          id="shootless"
          variant="forest"
          index="01"
          labelColor="var(--orange)"
          title="SHOOTLESS."
          copy="A Third Axis Creative imaging venture. Shootless explores a more controlled way to produce AI fashion and ecommerce imagery — combining studio experience, structured garment references and production-led creative direction."
          ctaLabel="Explore Shootless Studio ↗"
          ctaHref="https://www.shootless.co.uk"
          ctaClass="btn-outline-cream"
          stats={[
            { num: "AI", label: "Imaging workflows" },
            { num: "PDP", label: "Product imagery" },
            { num: "CAMPAIGN", label: "Creative concepts" },
          ]}
        />

        <SampleSystems />

        <Showcase
          id="rail"
          variant="navy"
          index="02"
          labelColor="var(--mint)"
          title={<>THE RAIL&nbsp;//</>}
          copy="Third Axis Originals — the apparel line built for the crew. The unofficial uniform for sets, production and everything in between."
          ctaLabel="Shop The Rail"
          ctaHref="https://shop.thirdaxis.co.uk"
          ctaClass="btn-outline-navy"
          stats={[
            { num: "HOODIES", label: "" },
            { num: "TEES", label: "" },
            { num: "ACCESSORIES", label: "" },
          ]}
        />

        <Contact />
      </main>

      <footer className="footer">
        <nav className="footer-services" aria-label="Services">
          {SERVICES.map((svc) => (
            <a href={`/${svc.slug}`} key={svc.slug}>
              {svc.nav}
            </a>
          ))}
        </nav>
        <div className="footer-row">
          <span>© 2026 THIRD AXIS CREATIVE · PETERBOROUGH, UK · INDEPENDENT CREATIVE PRODUCTION & TECHNOLOGY</span>
          <div className="footer-links">
            <a href="https://www.shootless.co.uk" target="_blank" rel="noopener noreferrer">
              SHOOTLESS
            </a>
            <a href="https://shop.thirdaxis.co.uk" target="_blank" rel="noopener noreferrer">
              THE RAIL
            </a>
            <a href="https://www.instagram.com/thisisthirdaxis/" target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
            <a href="https://www.linkedin.com/company/third-axis-creative/" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
            <a href="/about">ABOUT</a>
            <a href="/#contact">GET IN TOUCH</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
