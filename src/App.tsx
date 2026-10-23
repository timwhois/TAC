import { Nav } from "./components/Nav"
import { Capabilities } from "./sections/Capabilities"
import { Contact } from "./sections/Contact"
import { Hero } from "./sections/Hero"
import { SampleSystems } from "./sections/SampleSystems"
import { SelectedWork } from "./sections/SelectedWork"
import { Showcase } from "./sections/Showcase"
import SERVICES from "./services.json"

function App() {
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
            <a href="mailto:hello@thirdaxis.co.uk">CONTACT</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
