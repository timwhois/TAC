import { useEffect, useState } from "react"

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/dictionary.html", label: "Dictionary" },
  { href: "/#shootless", label: "Shootless" },
  { href: "/#rail", label: "The Rail" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="/" className="wordmark" onClick={() => setOpen(false)}>
          <img src="/third-axis-creative-white.svg" alt="Third Axis Creative" className="brand-logo" />
        </a>
        <nav className="nav-links-desktop">
          {LINKS.map((l) => (
            <a className="nav-link" href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="/#contact" className="nav-contact-cta" onClick={() => setOpen(false)}>
          LET'S TALK <span aria-hidden="true">↗</span>
        </a>
        <button
          className={`nav-burger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`nav-overlay ${open ? "open" : ""}`}>
        {LINKS.map((l, i) => (
          <a
            className="nav-overlay-link"
            href={l.href}
            key={l.href}
            style={{ transitionDelay: `${i * 0.05}s` }}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a className="nav-overlay-link" href="/#contact" onClick={() => setOpen(false)}>LET'S TALK ↗</a>
      </div>
    </>
  )
}
