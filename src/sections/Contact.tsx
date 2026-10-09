import { Reveal } from "../components/Reveal"

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="sr-only">Contact Third Axis Creative</h2>
      <div className="eyebrow" style={{ color: "var(--brass)" }}>
        READY TO REMOVE THE PRODUCTION CEILING?
      </div>
      <Reveal>
        <a className="display contact-email" href="mailto:hello@thirdaxis.co.uk">
          hello@thirdaxis.co.uk
        </a>
      </Reveal>
      <div className="contact-coords">52.6326° N&nbsp;&nbsp;&nbsp;0.2864° W · PETERBOROUGH, UK</div>
    </section>
  )
}
