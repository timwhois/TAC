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
    const preference = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 700px)")
    if (preference.matches) return
    let idle: ReturnType<typeof setTimeout> | undefined
    let settling = false
    let release: ReturnType<typeof setTimeout> | undefined

    const snap = () => {
      if (settling || window.location.hash) return
      const navHeight = document.querySelector<HTMLElement>("header.nav")?.getBoundingClientRect().height ?? 0
      const viewport = window.innerHeight
      const current = window.scrollY
      const sections = Array.from(document.querySelectorAll<HTMLElement>(".axis-film-panel, main > section:not(.axis-film)"))
      const anchors = sections.map((element, index) => ({
        index,
        element,
        top: index === 0 ? 0 : Math.max(0, element.getBoundingClientRect().top + current - navHeight),
        height: element.getBoundingClientRect().height
      }))
      const active = anchors.findLast(anchor => anchor.top <= current + viewport * .3)
      if (active && active.height > viewport + 100 && current > active.top + 70 && current < active.top + active.height - viewport - 70) return
      const nearest = anchors.reduce<typeof anchors[number] | null>((best, anchor) =>
        !best || Math.abs(anchor.top - current) < Math.abs(best.top - current) ? anchor : best, null)
      if (!nearest) return
      const difference = Math.abs(nearest.top - current)
      if (difference < 5 || difference > viewport * .48) return
      settling = true
      window.scrollTo({ top: nearest.top, behavior: "smooth" })
      release = setTimeout(() => { settling = false }, 650)
    }
    const onScroll = () => {
      if (settling) return
      if (idle) clearTimeout(idle)
      idle = setTimeout(snap, 140)
    }
    window.addEventListener("scroll", onScroll, { passive:true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (idle) clearTimeout(idle)
      if (release) clearTimeout(release)
    }
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
