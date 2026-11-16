import { Nav } from "./components/Nav"
import { EditorialCursor } from "./components/EditorialCursor"
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
      <EditorialCursor />

      <main>
        <Hero />
        <div className="eyebrow" style={{padding:"22px clamp(20px,5vw,80px) 0",background:"var(--forest, #10271f)"}}>THIRD AXIS ORIGINALS // VENTURES</div>
        <Showcase
          id="shootless"
          variant="forest"
          index="01"
          labelColor="var(--orange)"
          title="SHOOTLESS."
          copy="Human-directed AI fashion imagery for everyday ecommerce, collections, campaigns and creative variations."
          ctaLabel="Explore Shootless Studio ↗"
          ctaHref="https://www.shootless.co.uk"
          ctaClass="btn-outline-cream"
          stats={[
            { num: "ECOMMERCE", label: "On-model imagery" },
            { num: "CAMPAIGNS", label: "Creative concepts" },
            { num: "FLEXIBILITY", label: "More content options" },
          ]}
        />
        <Capabilities />
        <SelectedWork />

        <SampleSystems />

        <Showcase
          id="offset"
          variant="navy"
          index="02"
          labelColor="#4169FF"
          title={<>OFF SET&nbsp;<span style={{color:"#4169FF"}}>≠</span></>}
          copy="DIFFERENT BY DESIGN. OFF SET is our independent apparel and graphic streetwear label — original pieces made for people who see things differently. Not made to match."
          ctaLabel="Explore OFF SET ↗"
          ctaHref="https://shop.thirdaxis.co.uk"
          ctaClass="btn-outline-navy"
          stats={[
            { num: "HOODIES", label: "" },
            { num: "TEES", label: "" },
            { num: "ACCESSORIES", label: "" },
          ]}
        />

        <section className="section" id="cooperative" style={{background:"#082821",color:"#f2f0eb",paddingTop:"6rem",paddingBottom:"6rem"}}>
          <div className="eyebrow" style={{color:"#74d9a5"}}>THIRD AXIS CREATIVE // COLLABORATION</div>
          <h2 className="display" style={{fontSize:"clamp(4rem,10vw,10rem)",margin:"1.5rem 0"}}>BETTER WORK.<br/><span style={{color:"#74d9a5"}}>TOGETHER.</span></h2>
          <p style={{fontSize:"clamp(1rem,2vw,1.35rem)",lineHeight:1.6,maxWidth:750}}>Introducing The Creative Co-operative — a growing network of independent creatives and specialists. More skills, more possibilities, one shared ambition to make great work.</p>
          <a href="/creative-cooperative" style={{display:"inline-block",marginTop:24,padding:"16px 24px",background:"#74d9a5",color:"#082821",fontWeight:700,fontSize:13,letterSpacing:".08em"}}>EXPLORE THE CO-OPERATIVE ↗</a>
        </section>
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
              OFF SET <span style={{color:"#4169FF"}}>≠</span>
            </a>
            <a href="https://www.instagram.com/thisisthirdaxis/" target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
            <a href="https://www.linkedin.com/company/third-axis-creative/" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
            <a href="/dictionary.html">DICTIONARY</a>\n            <a href="/creative-cooperative">THE CO-OPERATIVE</a>
            <a href="/about">ABOUT</a>
            <a href="/#contact">GET IN TOUCH</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
