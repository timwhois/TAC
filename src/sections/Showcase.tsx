import type { ReactNode } from "react"
import { Reveal } from "../components/Reveal"

export function Showcase({
  id,
  variant,
  index,
  labelColor,
  title,
  copy,
  ctaLabel,
  ctaHref,
  ctaClass,
  stats,
}: {
  id: string
  variant: "forest" | "navy"
  index: string
  labelColor: string
  title: ReactNode
  copy: string
  ctaLabel: string
  ctaHref: string
  ctaClass: string
  stats: { num: string; label: string }[]
}) {
  return (
    <section className={`showcase showcase-${variant}`} id={id}>
      <Reveal>
        <div className="showcase-label" style={{ color: labelColor }}>
          THIRD AXIS ORIGINALS / VENTURE — {index}
        </div>
        <div className="showcase-grid">
          <div className="showcase-copy">
            {id === "shootless" ? <h2 className="showcase-title showcase-brand-title"><img src="/shootless-family.svg" alt="Shootless Studio" loading="lazy" /></h2> : <h2 className="display showcase-title">{id === "rail" ? "// THE RAIL" : title}</h2>}
            {id === "shootless" ? <><p className="showcase-pitch">LAST-MINUTE PRODUCT?<br />NO MODEL BOOKED?<br />BUDGET TOO TIGHT?</p><p className="showcase-promise">SEND US THE PRODUCT SHOT.<br /><span>WE’LL DO THE REST.</span></p><p className="showcase-detail">Send us a suitable garment reference and brief. Shootless develops on-model ecommerce and campaign imagery with human creative direction and quality review — reducing repeat shoot bookings, delays and production overhead where appropriate.</p></> : <p>{copy}</p>}
            <div>
              <a className={`btn ${ctaClass}`} href={ctaHref} target="_blank" rel="noopener noreferrer">
                {ctaLabel} →
              </a>
            </div>
          </div>
          <div className="showcase-stats">
            {stats.map((s) => (
              <div className="showcase-stat" key={s.num}>
                <div className="showcase-stat-num display" style={{ color: labelColor }}>
                  {s.num}
                </div>
                {s.label && <div className="showcase-stat-label">{s.label}</div>}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
