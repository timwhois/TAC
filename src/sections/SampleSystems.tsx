import { Reveal } from "../components/Reveal"

export function SampleSystems() {
  return (
    <section className="section" id="systems">
      <Reveal>
        <div className="systems-grid">
          <div className="systems-copy">
            <div className="eyebrow" style={{ color: "var(--brass)" }}>
              BESPOKE SYSTEMS
            </div>
            <h2 className="display systems-title">
              SAMPLE MANAGEMENT,
              <br />
              BUILT TO ORDER.
            </h2>
            <p>
              Every sample that goes missing costs more than the garment: it costs the shoot day.
              We've worked inside this industry long enough to know how product actually moves,
              from sourcing and sampling through to styling, production and delivery. So when we
              build a tracking system, it's built around <span className="highlight">how your
              team actually works</span>, not a generic template. We consult on the workflow,
              then build the system to match it.
            </p>
            <div>
              <a className="btn btn-outline" href="#contact">
                Talk To Us About Your Workflow →
              </a>
              <a className="capability-link systems-more" href="/sample-management-system">
                How our sample management systems work →
              </a>
            </div>
          </div>

          <figure className="sample-concept-figure">
            <div className="sample-concept-frame">
              <img src="https://cdn.shopify.com/s/files/1/1009/5824/1142/files/third-axis-sample-management-concept.png?v=1792755509" alt="Concept dashboard for sample logistics showing line-by-line sample statuses, locations, production progress and an imagery drawer" loading="lazy" />
            </div>
            <figcaption>CONCEPT // SAMPLE LOGISTICS &amp; PRODUCTION SYSTEM</figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  )
}
