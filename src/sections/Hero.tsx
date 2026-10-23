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
        <div className="eyebrow">PETERBOROUGH, UK · CREATIVE PRODUCTION + TECHNOLOGY</div>
        <h1 className="display hero-title">
          CREATIVE{" "
          <span className={`glitch ${play ? "play" : ""}`} data-text="THINKING.">
            THINKING.
          </span>
          <br />
          TECHNICAL EXECUTION.
        </h1>
        <p className="hero-sub">Independent creative production with real studio experience behind it. <span className="highlight">Commercial photography, freelance production, AI imaging, 3D and bespoke systems.</span> Whether you need an extra pair of hands on set or a smarter way to run production, we make ideas work in the real world.</p>
        <div className="hero-cta-row">
          <a className="btn btn-primary" href="#work">
            Explore Selected Work
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
