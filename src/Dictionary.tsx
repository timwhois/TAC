import { useMemo, useState } from "react"
import { terms, briefExamples } from "./dictionaryData"
import { Nav } from "./components/Nav"
import { EditorialCursor } from "./components/EditorialCursor"
import "./dictionary.css"

export function Dictionary() {
  const [mode, setMode] = useState<"terms" | "decoder">("terms")
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const categories = useMemo(() => ["All", ...new Set(terms.map(term => term.category))], [])
  const visible = useMemo(() => terms.filter(term => (category === "All" || term.category === category) &&
    [term.term, term.definition, term.category].some(value => value.toLowerCase().includes(query.toLowerCase().trim()))), [query, category])
  return <>
    <Nav />
    <EditorialCursor />
    <main className="dictionary-page" id="top">
      <header className="dictionary-hero">
        <div className="dictionary-kicker">// THIRD AXIS CREATIVE &nbsp; / &nbsp; KNOWLEDGE SYSTEM 001</div>
        <h1>THE CREATIVE<br/><em>DICTIONARY.</em></h1>
        <div className="dictionary-intro"><span className="dictionary-index">[ 001 / THE LANGUAGE OF PRODUCTION ]</span><p>A common language for the people commissioning, managing and creating visual content. Less ambiguity. Better briefs. Stronger production.</p></div>
        <div className="dictionary-tabs" role="tablist" aria-label="Dictionary views">
          <button role="tab" aria-selected={mode==="terms"} onClick={()=>setMode("terms")}>01 // DICTIONARY</button>
          <button role="tab" aria-selected={mode==="decoder"} onClick={()=>setMode("decoder")}>02 // BRIEF DECODER</button>
        </div>
      </header>
      <section className="dictionary-content">
        {mode === "terms" ? <>
          <div className="dictionary-section-heading"><span>// 01 / REFERENCE LIBRARY</span><h2>FIND THE<br/>RIGHT WORDS.</h2><p>Search across creative disciplines. Practical terminology, explained without the jargon.</p></div>
          <label className="dictionary-search-label" htmlFor="dictionary-search">SEARCH THE LIBRARY ↘</label>
          <input id="dictionary-search" type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Try negative fill, hero image, UV mapping..." />
          <div className="dictionary-filters" aria-label="Disciplines">{categories.map(item=><button key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div>
          <p className="dictionary-count" aria-live="polite">// SHOWING {visible.length} / {terms.length} ENTRIES</p>
          <div className="dictionary-grid">{visible.map((item,i)=><article className="dictionary-entry" key={item.term}><div className="dictionary-entry-top"><span>{item.category}</span><span>{String(i+1).padStart(3,"0")}</span></div><h3>{item.term}</h3><p>{item.definition}</p></article>)}</div>
          {visible.length===0&&<p>No matching terms. Try another search or category.</p>}
        </> : <>
          <div className="dictionary-section-heading"><span>// 02 / TRANSLATION SYSTEM</span><h2>WHAT DO YOU<br/>ACTUALLY MEAN?</h2><p>Vague feedback rarely has one correct interpretation. Use these prompts to ask the right questions before work begins.</p></div>
          <div className="dictionary-grid dictionary-decoder-grid">{briefExamples.map(([phrase,meaning,question],i)=><article className="dictionary-entry" key={phrase}><div className="dictionary-entry-top"><span>THE REQUEST</span><span>{String(i+1).padStart(3,"0")}</span></div><h3>“{phrase}”</h3><span className="dictionary-detail-label">WHAT IT COULD MEAN</span><p>{meaning}</p><span className="dictionary-detail-label">ASK INSTEAD ↘</span><p className="dictionary-question">{question}</p></article>)}</div>
        </>}
      </section>
      <footer className="dictionary-footer"><span>THIRD AXIS CREATIVE // DESIGN BEYOND DIMENSIONS</span><a href="/">BACK TO STUDIO ↗</a><a href="mailto:hello@thirdaxis.co.uk">START A CONVERSATION ↗</a></footer>
    </main>
  </>
}
