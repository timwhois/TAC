import { Reveal } from "../components/Reveal"

const ITEMS = [
  {
    index: "01",
    label: "PRODUCTION",
    copy: "Production assistance and management. Sourcing, scheduling, crew and logistics, handled end to end.",
  },
  {
    index: "02",
    label: "AI & WORKFLOW AUTOMATION",
    copy: "Internal tools that cut the manual handoffs between departments, so work moves without someone chasing it.",
  },
  {
    index: "03",
    label: "PHOTOGRAPHY",
    copy: "Studio and location photography, styling and physical production. Real sets, real garments, real light.",
  },
  {
    index: "04",
    label: "3D",
    copy: "CGI product renders and 3D environments when a physical build isn't the answer.",
  },
]

export function Capabilities() {
  return (
    <section className="section" id="work">
      <h2 className="sr-only">What Third Axis Creative Does</h2>
      <Reveal>
        <div className="capabilities">
          {ITEMS.map((item) => (
            <div className="capability" key={item.index}>
              <div className="capability-index">{item.index}</div>
              <h3 className="capability-label">{item.label}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
