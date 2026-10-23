import { useState } from "react"
import { Reveal } from "../components/Reveal"

const subjects = [
  { value:"Photography / production", label:"Photography / production" },
  { value:"AI imaging / Shootless", label:"AI imaging / Shootless" },
  { value:"3D / CGI", label:"3D / CGI" },
  { value:"Bespoke systems / workflow", label:"Bespoke systems / workflow" },
  { value:"Something else", label:"Something else" }
]

export function Contact() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState(subjects[0].value)
  const [message,setMessage] = useState("")
  const [prepared,setPrepared] = useState(false)
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\nProject: ${subject}\n\n${message.trim()}`
    const url = `mailto:hello@thirdaxis.co.uk?subject=${encodeURIComponent("Third Axis enquiry // " + subject)}&body=${encodeURIComponent(body)}`
    setPrepared(true)
    window.location.href = url
  }
  return <section className="section contact" id="contact">
    <div className="eyebrow" style={{color:"var(--brass)"}}>LET'S MAKE SOMETHING WORK.</div>
    <Reveal><h2 className="display contact-heading">TELL US WHAT YOU'RE WORKING ON.</h2></Reveal>
    <p className="contact-intro">A shoot, a visual idea or a production bottleneck — tell us a little about it. We'll start with a conversation, not a sales pitch.</p>
    <div className="contact-layout">
      <form className="contact-form" onSubmit={prepare}>
        <div className="contact-field-row">
          <label>Your name<input required autoComplete="name" maxLength={120} value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" /></label>
          <label>Email address<input required type="email" autoComplete="email" maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.co.uk" /></label>
        </div>
        <label>What can we help with?<select value={subject} onChange={e=>setSubject(e.target.value)}>{subjects.map(item=><option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
        <label>Tell us about it<textarea required minLength={10} maxLength={4000} rows={5} value={message} onChange={e=>setMessage(e.target.value)} placeholder="A little about your project, timescales, or the problem you're trying to solve…" /></label>
        <button type="submit" className="btn btn-primary">OPEN EMAIL TO SEND ↗</button>
        <p className="contact-form-note">This opens your email app with your enquiry prepared. Please press Send there — nothing is submitted automatically.</p>
        {prepared && <p className="contact-form-note" role="status">Your email should be ready in your email app. If it didn't open, email us directly at <a href="mailto:hello@thirdaxis.co.uk">hello@thirdaxis.co.uk</a>.</p>}
      </form>
      <aside className="contact-aside"><span className="eyebrow">DIRECT CONTACT</span><a className="display contact-email" href="mailto:hello@thirdaxis.co.uk">HELLO@THIRDAXIS.CO.UK ↗</a><p>Prefer an email? That's absolutely fine. Based in Peterborough, working with creative teams and brands across the UK.</p><span className="contact-coords">52.6326° N &nbsp; 0.2864° W · PETERBOROUGH, UK</span></aside>
    </div>
  </section>
}
