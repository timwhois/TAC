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
    copy: "CGI product renders and 3D environments when a physical build isn't the answer.",
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
              <div className="capability-index">{item.index}</div>
              <h3 className="capability-label">{item.label}</h3>
              <p>{item.copy}</p>
              <a className="capability-link" href={item.href}>
                {item.linkText} →
              </a>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
