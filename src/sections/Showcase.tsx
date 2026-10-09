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
          CASE STUDY — {index}
        </div>
        <div className="showcase-grid">
          <div className="showcase-copy">
            <h2 className="display showcase-title">{title}</h2>
            <p>{copy}</p>
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
