import { Reveal } from "../components/Reveal"

const projects = [
  { id: "01", type: "AI IMAGING / SHOOTLESS", title: "ONE GARMENT. MORE POSSIBILITIES.", description: "Product-led AI fashion imagery and campaign development through Shootless Studio.", image: "/portfolio/shootless.jpg", link: "https://www.shootless.co.uk", action: "Explore Shootless", theme: "forest", wide: true },
  { id: "02", type: "PHOTOGRAPHY / FREELANCE", title: "ON SET. ON BRIEF.", description: "Commercial photography, lighting and practical studio production. Freelance availability for shoots and projects.", image: "/portfolio/photography.jpg", link: "mailto:hello@thirdaxis.co.uk?subject=Photography%20enquiry", action: "Enquire about production", theme: "black", wide: false },
  { id: "03", type: "3D / CGI", title: "BUILD THE WORLD.", description: "3D environments, product visualisation and technical creative concepts.", image: "/portfolio/cgi.jpg", link: "mailto:hello@thirdaxis.co.uk?subject=3D%20and%20CGI%20enquiry", action: "Discuss a 3D project", theme: "orange", wide: false },
  { id: "04", type: "BESPOKE SYSTEMS", title: "LESS FRICTION. BETTER FLOW.", description: "Production workflow design, custom studio tools and practical automation, built around real operational needs.", image: "/portfolio/systems.jpg", link: "mailto:hello@thirdaxis.co.uk?subject=Bespoke%20systems%20enquiry", action: "Discuss a workflow", theme: "navy", wide: true },
]

export function SelectedWork() {
  return (
    <section className="selected-work section" id="work">
      <Reveal>
        <div className="selected-heading">
          <div><span className="eyebrow">01 / SELECTED WORK + CAPABILITIES</span><h2 className="display">DIFFERENT DISCIPLINES.<br />ONE CREATIVE APPROACH.</h2></div>
          <p>Real-world production thinking meets emerging technology. We're building a growing collection of original projects — the visual slots below will be replaced with approved work.</p>
        </div>
      </Reveal>
      <div className="selected-grid">
        {projects.map((p) => (
          <Reveal key={p.id}>
            <article className={`selected-card selected-${p.theme} ${p.wide ? "selected-wide" : ""}`}>
              <div className="selected-media">
                <img src={p.image} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none" }} />
                <div className="selected-placeholder" aria-label="Image placeholder">
                  <span>THIRD AXIS CREATIVE // VISUAL SLOT {p.id}</span>
                  <strong className="display">{p.title}</strong>
                  <small>ORIGINAL PROJECT IMAGE TO FOLLOW</small>
                </div>
              </div>
              <div className="selected-info">
                <span className="selected-kicker">{p.id} / {p.type}</span>
                <h3 className="display">{p.title}</h3>
                <p>{p.description}</p>
                <a href={p.link}>{p.action} ↗</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
