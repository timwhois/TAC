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
            {id === "shootless" ? <h2 className="showcase-title showcase-brand-title"><img src="/shootless-family.svg" alt="Shootless Studio" loading="lazy" /></h2> : <h2 className="display showcase-title">{title}</h2>}
            {id === "shootless" ? <><h3 className="shootless-unified-headline">THE NEXT WAY <span>TO MAKE IMAGES.</span></h3><p className="showcase-detail">Production-led AI fashion and ecommerce imagery, created with human direction and studio-level quality review. From everyday product launches and consistent ecommerce collections to campaign concepts, seasonal updates and urgent production gaps.</p><p className="shootless-unified-problems">NEW COLLECTION? CAMPAIGN TO CREATE? MORE IMAGES NEEDED? <span>NO MODEL BOOKED?</span></p><p className="showcase-detail">Start with suitable garment photography and a creative brief. We develop on-model and campaign imagery around your brand, helping extend content production without arranging a full shoot for every variation.</p></> : <p>{copy}</p>}
            <div>
              <a className={`btn ${ctaClass}`} href={ctaHref} target="_blank" rel="noopener noreferrer">
                {ctaLabel} →
              </a>
            </div>
          </div>
          {(id === "offset" || id === "shootless") && (
            <figure className="venture-editorial">
              {id === "offset" ? (
                <img src="/portfolio/the-rail-editorial.webp" alt="OFF SET original graphic clothing hanging on a studio garment rail" loading="lazy" decoding="async" />
              ) : (
                <img src="https://www.shootless.co.uk/images/shootless-hero-red-dress.webp" alt="Shootless AI-assisted fashion campaign featuring a model in a red dress" loading="lazy" decoding="async" />
              )}
            </figure>
          )}
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
