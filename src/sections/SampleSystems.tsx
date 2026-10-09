import { Reveal } from "../components/Reveal"

const ROWS = [
  { id: "TA-0231", style: "Oversized Hoodie — Navy", status: "IN STUDIO", statusClass: "mint", location: "Studio B — Rail 2" },
  { id: "TA-0198", style: "Cargo Pant — Olive", status: "WITH STYLIST", statusClass: "orange", location: "Sarah K." },
  { id: "TA-0227", style: "Crew Tee — Cream", status: "IN TRANSIT", statusClass: "brass", location: "Courier → Studio" },
  { id: "TA-0184", style: "Shell Jacket — Black", status: "RETURNED", statusClass: "muted", location: "Sample Wall — A4" },
]

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
            </div>
          </div>

          <div className="mockup-window" aria-hidden="true">
            <div className="mockup-titlebar">
              <span className="mockup-dot" style={{ background: "#f26421" }} />
              <span className="mockup-dot" style={{ background: "#b08d57" }} />
              <span className="mockup-dot" style={{ background: "#5eedc7" }} />
              <span className="mockup-titletext">SAMPLE TRACKER · THIRD AXIS SYSTEMS</span>
            </div>
            <table className="mockup-table">
              <thead>
                <tr>
                  <th>SAMPLE</th>
                  <th>STYLE</th>
                  <th>STATUS</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.style}</td>
                    <td>
                      <span className={`status-pill status-${r.statusClass}`}>{r.status}</span>
                    </td>
                    <td>{r.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
