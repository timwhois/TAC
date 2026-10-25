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
    let timer: ReturnType<typeof setTimeout> | undefined
    let unlock: ReturnType<typeof setTimeout> | undefined
    let snapping = false

    const settle = () => {
      if (snapping) return
      const nav = document.querySelector<HTMLElement>("header.nav")?.getBoundingClientRect().height ?? 0
      const view = window.innerHeight - nav
      const y = window.scrollY
      const elements = Array.from(document.querySelectorAll<HTMLElement>(".axis-film-panel, main > section:not(.axis-film)"))
      const positions = elements.map((element, index) => {
        const rect = element.getBoundingClientRect()
        return { element, top: index === 0 ? 0 : Math.max(0, y + rect.top - nav), height: rect.height }
      })
      const active = [...positions].reverse().find(item => item.top <= y + 8)
      if (active && active.height > view + 100 && y > active.top + 40 && y < active.top + active.height - view - 40) return
      const nearest = positions.reduce<(typeof positions)[number] | null>((best, item) =>
        best === null || Math.abs(item.top - y) < Math.abs(best.top - y) ? item : best, null)
      if (!nearest || Math.abs(nearest.top - y) < 3) return
      // Pull to the closest section when the user stops, even if the
      // section's top is further than half a viewport away.
      snapping = true
      window.scrollTo({ top: nearest.top, behavior: "smooth" })
      unlock = setTimeout(() => { snapping = false;  }, 800)
    }
    const onScroll = () => {
      if (snapping) return
      lastY = window.scrollY
      if (timer) clearTimeout(timer)
      timer = setTimeout(settle, 210)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (timer) clearTimeout(timer)
      if (unlock) clearTimeout(unlock)
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
