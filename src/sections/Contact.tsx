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
  const [status,setStatus] = useState("")
  const [sending,setSending] = useState(false)
  async function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setStatus("")
    try {
      const response = await fetch("/api/contact", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({site:"thirdaxis",name,email,subject,message,website:""})})
      if (!response.ok) throw new Error("Delivery unavailable")
      setStatus("Thanks — your enquiry has been sent. We'll be in touch.")
      setName("");setEmail("");setMessage("")
    } catch {
      setStatus("We couldn't send that just yet. Please email hello@thirdaxis.co.uk directly.")
    } finally { setSending(false) }
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
        <button type="submit" disabled={sending} className="btn btn-primary">{sending ? "SENDING…" : "SEND ENQUIRY ↗"}</button>
        {status && <p className="contact-form-note" role="status">{status}</p>}
      </form>
      <aside className="contact-aside"><span className="eyebrow">DIRECT CONTACT</span><a className="display contact-email" href="mailto:hello@thirdaxis.co.uk">HELLO@THIRDAXIS.CO.UK ↗</a><p>Prefer an email? That's absolutely fine. Based in Peterborough, working with creative teams and brands across the UK.</p><span className="contact-coords">52.6326° N &nbsp; 0.2864° W · PETERBOROUGH, UK</span></aside>
    </div>
  </section>
}
