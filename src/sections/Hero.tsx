import { useEffect, useState } from "react"

export function Hero() {
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPlay(true), 350)
    const t2 = setTimeout(() => setPlay(false), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow">PETERBOROUGH, UK · PRODUCTION STUDIO</div>
        <h1 className="display hero-title">
          PRODUCTION.{" "}
          <span className={`glitch ${play ? "play" : ""}`} data-text="AUTOMATION.">
            AUTOMATION.
          </span>
          <br />
          PHOTOGRAPHY. 3D.
        </h1>
        <p className="hero-sub">
          Third Axis Creative is the production studio behind Shootless and The Rail. We handle
          production management, build the internal tools that automate the boring parts, shoot
          the photography and model the 3D, plus bespoke systems like{" "}
          <span className="highlight">sample tracking</span> in between. Whatever moves your
          product from concept to campaign, we can build it, shoot it, or{" "}
          <span className="highlight">automate it</span>.
        </p>
        <div className="hero-cta-row">
          <a className="btn btn-primary" href="#work">
            See The Work
          </a>
          <a className="btn btn-outline" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="axis-mark" aria-hidden="true">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          <line x1="30" y1="150" x2="190" y2="150" stroke="#b08d57" strokeWidth="1.5" />
          <line x1="60" y1="200" x2="60" y2="20" stroke="#b08d57" strokeWidth="1.5" />
          <line x1="60" y1="150" x2="170" y2="60" stroke="#b08d57" strokeWidth="1.5" />
          <circle cx="60" cy="150" r="5" fill="#b08d57" />
          <text x="192" y="155" fill="rgba(242,240,235,0.5)" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="1">
            X
          </text>
          <text x="52" y="15" fill="rgba(242,240,235,0.5)" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="1">
            Y
          </text>
          <text x="174" y="56" fill="rgba(242,240,235,0.5)" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="1">
            Z
          </text>
        </svg>
      </div>
    </section>
  )
}
