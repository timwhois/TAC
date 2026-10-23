import { useEffect, useState } from "react"
import { Reveal } from "../components/Reveal"

type Project = {
  id: string; type: string; title: string; description: string; image: string;
  theme: string; wide: boolean; overview: string; approach: string; deliverables: string[];
  cta: string; href: string; concept?: boolean
}
const projects: Project[] = [
  { id:"01", type:"AI IMAGING / SHOOTLESS", title:"ONE GARMENT. MORE POSSIBILITIES.", description:"Product-led AI fashion imagery and campaign development through Shootless Studio.", image:"/portfolio/shootless.jpg", theme:"forest", wide:true, overview:"Shootless is a structured approach to AI fashion imagery, designed to make reference-led production more repeatable and useful to creative teams.", approach:"A production interface brings product, model, location and creative direction references into one workflow, rather than relying on a one-off text prompt.", deliverables:["Reference-led AI imagery","Product and campaign creative direction","A dedicated Shootless production workflow"], cta:"Explore Shootless", href:"https://www.shootless.co.uk" },
  { id:"02", type:"PHOTOGRAPHY / FREELANCE", title:"ON SET. ON BRIEF.", description:"Commercial photography, lighting and practical studio production. Freelance availability for shoots and projects.", image:"/portfolio/photography.jpg", theme:"black", wide:false, overview:"Commercial fashion and product photography informed by hands-on studio experience, from technical lighting to practical production requirements.", approach:"Plan the brief, choose the right lighting and set approach, and produce imagery with consistency and the intended final use in mind.", deliverables:["Commercial photography and lighting","Studio and location production support","E-commerce and campaign imagery"], cta:"Enquire about photography", href:"#contact" },
  { id:"03", type:"3D / CGI", title:"BUILD THE WORLD.", description:"3D environments, product visualisation and technical creative concepts.", image:"/portfolio/cgi.jpg", theme:"orange", wide:false, overview:"3D and CGI can extend what is practical to build or photograph, from product visualisation to environments for creative concepts.", approach:"Combine scene construction, materials, lighting and camera decisions with the visual language of commercial photography.", deliverables:["3D environments and sets","Product visualisation","Look development and technical concepts"], cta:"Discuss a 3D project", href:"#contact" },
  { id:"04", type:"BESPOKE SYSTEMS", title:"LESS FRICTION. BETTER FLOW.", description:"Production workflow design, custom studio tools and practical automation, built around real operational needs.", image:"/portfolio/sample-system-concept.png", theme:"navy", wide:true, overview:"An illustrative sample-management concept: a single view of sample locations, production status and supporting imagery for fashion studio teams.", approach:"Start by understanding the real movement of products, samples and approvals. Then design a bespoke workflow around the team's responsibilities and bottlenecks.", deliverables:["Workflow discovery and process mapping","Bespoke tracking and approval interfaces","Practical automation opportunities"], cta:"Discuss a bespoke system", href:"#contact", concept:true }
]

export function SelectedWork() {
  const [active, setActive] = useState<Project | null>(null)
  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null) }
    document.addEventListener("keydown", onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = previous }
  }, [active])
  return (
    <section className="selected-work section" id="work">
      <Reveal><div className="selected-heading"><div><span className="eyebrow">01 / SELECTED WORK + CAPABILITIES</span><h2 className="display">DIFFERENT DISCIPLINES.<br />ONE CREATIVE APPROACH.</h2></div><p>Real-world production thinking meets emerging technology. Explore each discipline to see our approach and what we can create together.</p></div></Reveal>
      <div className="selected-grid">
        {projects.map(p => <Reveal key={p.id}><article className={`selected-card selected-${p.theme} ${p.wide ? "selected-wide" : ""}`}>
          <button type="button" className="selected-media selected-open" onClick={() => setActive(p)} aria-label={`Explore ${p.type}`}>
            <img src={p.image} alt="" loading="lazy" onError={event => { event.currentTarget.style.display="none" }} />
            <div className="selected-placeholder"><span>THIRD AXIS CREATIVE // {p.type}</span><strong className="display">{p.title}</strong><small>EXPLORE THE APPROACH ↗</small></div>
          </button>
          <div className="selected-info"><span className="selected-kicker">{p.id} / {p.type}</span><h3 className="display">{p.title}</h3><p>{p.description}</p><button type="button" className="selected-detail-link" onClick={() => setActive(p)}>Explore project ↗</button></div>
        </article></Reveal>)}
      </div>
      {active && <div className="project-backdrop" role="presentation" onMouseDown={event => { if(event.target === event.currentTarget) setActive(null) }}>
        <div className="project-dialog" role="dialog" aria-modal="true" aria-label={active.type}>
          <button type="button" className="project-close" onClick={() => setActive(null)} aria-label="Close project details">×</button>
          <div className="eyebrow">{active.id} / {active.type}</div>
          <h2 className="display">{active.title}</h2>
          {active.concept && <p className="project-concept">CONCEPT // ILLUSTRATIVE DESIGN, NOT A LIVE CLIENT SYSTEM</p>}
          <div className="project-dialog-grid">
            <div className="project-dialog-media"><img src={active.image} alt={active.concept ? "Illustrative sample logistics dashboard concept" : active.type} onError={event => {event.currentTarget.style.display="none"}} /></div>
            <div className="project-dialog-copy"><h3>THE IDEA</h3><p>{active.overview}</p><h3>THE APPROACH</h3><p>{active.approach}</p><h3>WHAT WE CAN DELIVER</h3><ul>{active.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
              <a className="btn btn-primary" href={active.href === "#contact" ? `mailto:hello@thirdaxis.co.uk?subject=${encodeURIComponent(active.type + " enquiry")}` : active.href}>{active.cta} ↗</a>
            </div>
          </div>
        </div>
      </div>}
    </section>
  )
}
