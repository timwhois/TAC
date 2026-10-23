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
      <div className="hero-copy">\n        <div className="family-overline"><span>THIRD AXIS / 001</span><span>CREATIVE PRODUCTION + TECHNOLOGY</span></div>
        <div className="eyebrow hero-kicker"><span className="hero-kicker-rule" /> INDEPENDENT CREATIVE STUDIO <span className="hero-kicker-cross">//</span> PETERBOROUGH, UK</div>
        <h1 className="display hero-title">
          CREATIVE{" "}
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
        <div className="hero-family-links"><span>ONE CREATIVE THINKING PROCESS. MULTIPLE WAYS TO MAKE IT REAL.</span><a href="https://www.shootless.co.uk" target="_blank" rel="noopener noreferrer">MEET SHOOTLESS <b>↗</b></a></div>
      </div>

      <aside className="hero-sidecard" aria-label="Shootless Studio">
          <span className="hero-sidecard-index">FROM THE THIRD AXIS STUDIO / 01</span>
          <img src="/shootless-family.svg" alt="Shootless Studio" />
          <p>Production-led AI imagery for ecommerce, fashion and campaigns.</p>
          <a href="https://www.shootless.co.uk" target="_blank" rel="noopener noreferrer">EXPLORE SHOOTLESS <span>↗</span></a>
        </aside>
      </section>
  )
}
