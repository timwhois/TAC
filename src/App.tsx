import { Nav } from "./components/Nav"
import { Capabilities } from "./sections/Capabilities"
import { Contact } from "./sections/Contact"
import { Hero } from "./sections/Hero"
import { SampleSystems } from "./sections/SampleSystems"
import { Showcase } from "./sections/Showcase"

function App() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Capabilities />

        <Showcase
          id="shootless"
          variant="forest"
          index="01"
          labelColor="var(--orange)"
          title="SHOOTLESS."
          copy="Shootless turns garment photography into fully modelled, campaign-ready imagery — without booking a model, a studio, or a single day of physical production. Built by Third Axis Creative for brands who need content faster than a shoot allows."
          ctaLabel="Visit Shootless.co.uk"
          ctaHref="https://www.shootless.co.uk"
          ctaClass="btn-outline-cream"
          stats={[
            { num: "HRS", label: "Not Weeks" },
            { num: "0", label: "Studio Bookings" },
            { num: "1→∞", label: "Placements Per Shoot" },
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
        <span>© 2026 THIRD AXIS CREATIVE</span>
        <div className="footer-links">
          <a href="https://www.shootless.co.uk" target="_blank" rel="noopener noreferrer">
            SHOOTLESS
          </a>
          <a href="https://shop.thirdaxis.co.uk" target="_blank" rel="noopener noreferrer">
            THE RAIL
          </a>
          <a href="mailto:hello@thirdaxis.co.uk">CONTACT</a>
        </div>
      </footer>
    </>
  )
}

export default App
