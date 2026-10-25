import { Reveal } from "../components/Reveal"

const ITEMS = [
  {
    index: "01",
    label: "FREELANCE + PRODUCTION",
    href: "/production-management",
    linkText: "Production management",
    copy: "Experienced on-set support, lighting, set builds, shoot planning and practical production management.",
  },
  {
    index: "02",
    label: "BESPOKE SYSTEMS",
    href: "/ai-workflow-automation",
    linkText: "AI & workflow automation",
    copy: "Studio tools, automation and connected workflows designed around how your team actually works.",
  },
  {
    index: "03",
    label: "PHOTOGRAPHY",
    href: "/fashion-photography",
    linkText: "Fashion & product photography",
    copy: "Commercial photography and lighting for product, fashion and creative production. Available for freelance bookings.",
  },
  {
    index: "04",
    label: "3D + CGI",
    href: "/3d-product-rendering",
    linkText: "3D & CGI rendering",
    copy: "3D visualisation, CGI and set design — from digital concepts to practical, production-ready environments.",
  },
]

export function Capabilities() {
  return (
    <section className="section" id="services">
      <h2 className="sr-only">What Third Axis Creative does: production, AI and workflow automation, photography and 3D</h2>
      <Reveal>
        <div className="capabilities">
          {ITEMS.map((item) => (
            <div className="capability" key={item.index}>
              <div className="capability-image"><img src={(["/portfolio/third-axis-02.webp", "/portfolio/third-axis-10.webp", "/portfolio/third-axis-08.webp", "/portfolio/third-axis-13.webp"])[Number(item.index)-1]} alt="" loading="lazy" /></div><div className="capability-index">{item.index}</div>
              <h3 className="capability-label">{item.label}</h3>
              <p>{item.copy}</p>
              <a className="capability-link" href={item.href}>
                {item.linkText} →
              </a>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <a className="concept-reality" href="/3d-product-rendering" aria-label="Explore 3D design and visualisation">
          <div className="concept-reality-media"><img src="/set-design-concept-reality.jpg" alt="Studio set transitioning from physical build to dimensioned 3D blueprint" loading="lazy" /></div>
          <div className="concept-reality-caption">
            <span>03 / SET DESIGN + 3D VISUALISATION</span>
            <h3>FROM CONCEPT<br /><em>TO REALITY.</em></h3>
            <p>From initial concepts and 3D visualisation to practical set design and physical builds. Working alongside experienced set builders, we turn creative ideas into production-ready environments.</p>
            <strong>EXPLORE SET DESIGN & 3D ↗</strong>
          </div>
        </a>
      </Reveal>
    </section>
  )
}
