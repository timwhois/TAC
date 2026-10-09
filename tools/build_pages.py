"""Generate Third Axis Creative service pages into public/.

Run from the repo root:  python3 tools/build_pages.py
"""
import html, json, os, sys, datetime
from urllib.parse import quote
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from content import PAGES, ABOUT

ROOT = os.path.dirname(HERE)
PUB = os.path.join(ROOT, "public")
SITE = "https://www.thirdaxis.co.uk"
TODAY = datetime.date.today().isoformat()
e = html.escape
EXT = 'target="_blank" rel="noopener"'
BY = {p["slug"]: p for p in PAGES}
ACCENT = {"orange": "#f26421", "mint": "#5eedc7", "brass": "#b08d57"}

SOCIAL = [
    ("Instagram", "https://www.instagram.com/thisisthirdaxis/"),
    ("LinkedIn", "https://www.linkedin.com/company/third-axis-creative/"),
]
FAMILY = [
    ("Shootless", "https://www.shootless.co.uk/"),
    ("The Rail", "https://shop.thirdaxis.co.uk/"),
]

ORG = {
    "@context": "https://schema.org", "@type": "Organization", "@id": f"{SITE}/#organization",
    "name": "Third Axis Creative", "url": f"{SITE}/", "logo": f"{SITE}/favicon.svg",
    "email": "hello@thirdaxis.co.uk",
    "address": {"@type": "PostalAddress", "addressLocality": "Peterborough", "addressCountry": "GB"},
    "sameAs": [u for _, u in SOCIAL],
    "subOrganization": [{"@type": "Organization", "name": "Shootless Studio", "url": "https://www.shootless.co.uk/"}],
}


def cap(s):
    return s[0].upper() + s[1:]


def footer(current=None):
    svc = "\n".join(
        f'<li><a href="/{p["slug"]}"{" aria-current=\"page\"" if p["slug"]==current else ""}>{e(cap(p["nav"]))}</a></li>'
        for p in PAGES)
    fam = " ".join(f'<a href="{u}" {EXT}>{n}</a>' for n, u in FAMILY)
    soc = " ".join(f'<a href="{u}" {EXT}>{n}</a>' for n, u in SOCIAL)
    return f'''<footer class="sfoot">
  <div class="wrap fgrid">
    <div><a href="/" class="wm"><span>THIRD AXIS</span><span>CREATIVE&nbsp;<b>//</b></span></a>
      <p class="muted">Production studio · Peterborough, UK<br><a href="/about">About the studio</a><br><a href="mailto:hello@thirdaxis.co.uk">hello@thirdaxis.co.uk</a></p></div>
    <nav aria-label="Services"><h2 class="fh">Services</h2><ul>{svc}</ul></nav>
    <div><h2 class="fh">Studio family</h2><p class="fl">{fam}</p><h2 class="fh">Follow</h2><p class="fl">{soc}</p></div>
  </div>
  <p class="wrap copy">© {datetime.date.today().year} Third Axis Creative</p>
</footer>'''


ABOUT_BLOCK = '''<section class="wrap block about">
  <div><p class="eyebrow">Third Axis Creative</p><h2>The production studio behind Shootless and The Rail.</h2></div>
  <p class="muted big">We handle production management, build the internal tools that automate the boring parts, shoot the photography and model the 3D — plus bespoke systems like sample tracking in between. Whatever moves your product from concept to campaign, we can build it, shoot it, or automate it. Based in Peterborough, working with brands across the UK.</p>
</section>'''


def page(p):
    url = f'{SITE}/{p["slug"]}'
    acc = ACCENT[p["accent"]]
    is_about = p.get("kind") == "about"
    if is_about:
        svc_ld = {"@context": "https://schema.org", "@type": "AboutPage", "name": p["title"], "description": p["desc"],
                  "url": url, "about": {"@id": f"{SITE}/#organization"}}
    else:
        svc_ld = {"@context": "https://schema.org", "@type": "Service", "name": cap(p["nav"]),
                  "description": p["desc"], "url": url, "areaServed": {"@type": "Country", "name": "United Kingdom"},
                  "provider": {"@id": f"{SITE}/#organization"}}
    bc_ld = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Third Axis Creative", "item": f"{SITE}/"},
        {"@type": "ListItem", "position": 2, "name": cap(p["nav"]), "item": url}]}
    faq_ld = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in p["faq"]]}
    ld = "\n".join(f'<script type="application/ld+json">{json.dumps(x, ensure_ascii=False)}</script>' for x in (ORG, svc_ld, bc_ld, faq_ld))
    intro = "\n".join(f"<p>{e(x)}</p>" for x in p["intro"])
    deep = "\n".join(f"<p>{e(x)}</p>" for x in p["deep"])
    cards = "\n".join(f'<article class="card"><span class="ix">{i:02d}</span><h3>{e(t)}</h3><p>{e(d)}</p></article>' for i, (t, d) in enumerate(p["cards"], 1))
    uses = "\n".join(f'<article class="use"><h3>{e(t)}</h3><p>{e(d)}</p></article>' for t, d in p["uses"])
    faq = "\n".join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q, a in p["faq"])
    rel = "\n".join(f'<a class="rel" href="/{r}"><span class="ix">→</span><strong>{e(cap(BY[r]["nav"]))}</strong><small>{e(BY[r]["h1"])}</small></a>' for r in p["related"])
    return f'''<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(p["title"])}</title>
<meta name="description" content="{e(p["desc"])}">
<link rel="canonical" href="{url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#0a0a0c">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Third Axis Creative">
<meta property="og:title" content="{e(p["title"])}">
<meta property="og:description" content="{e(p["desc"])}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}/og-image.png">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/services.css">
<style>:root{{--acc:{acc}}}</style>
{ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="snav"><div class="wrap navin">
  <a href="/" class="wm"><span>THIRD AXIS</span><span>CREATIVE&nbsp;<b>//</b></span></a>
  <nav aria-label="Main"><a href="/#work">Work</a><a href="/about">About</a><a href="https://www.shootless.co.uk/" {EXT}>Shootless</a><a href="/#contact" class="pill">Get in touch</a></nav>
</div></header>
<main id="main">
<nav class="wrap crumbs" aria-label="Breadcrumb"><a href="/">Third Axis Creative</a> / <span aria-current="page">{e(cap(p["nav"]))}</span></nav>
<section class="wrap hero">
  <p class="eyebrow">{e(p["eyebrow"])}</p>
  <h1>{e(p["h1"])}</h1>
  <p class="lead">{e(p["lead"])}</p>
  <p class="ctas"><a class="btn" href="mailto:hello@thirdaxis.co.uk?subject={quote("Enquiry" if is_about else cap(p["nav"]) + " enquiry")}">Start a conversation</a><a class="btn ghost" href="#what">{"How we work" if is_about else "What we do"}</a></p>
</section>
<section class="wrap prose">{intro}</section>
<section class="wrap block" id="what"><h2>{e(p.get("cards_h", "What's included"))}</h2><div class="grid4">{cards}</div></section>
<section class="wrap block prose"><h2>{e(p["deep_h"])}</h2>{deep}</section>
<section class="wrap block"><h2>{e(p.get("uses_h", "Who it's for"))}</h2><div class="grid3">{uses}</div></section>
{"" if is_about else ABOUT_BLOCK}
<section class="wrap block faq"><h2>Questions</h2>{faq}</section>
<section class="wrap block"><h2>{"What we do" if is_about else "Related services"}</h2><div class="grid3">{rel}</div></section>
<section class="cta"><div class="wrap">
  <p class="eyebrow dark">Ready to remove the production ceiling?</p>
  <a class="mail" href="mailto:hello@thirdaxis.co.uk">hello@thirdaxis.co.uk</a>
</div></section>
</main>
{footer(p["slug"])}
</body>
</html>
'''


CSS = r''':root{--cream:#f2f0eb;--black:#0a0a0c;--muted:rgba(242,240,235,.62);--line:rgba(242,240,235,.12);--panel:#121216;--acc:#f26421;--brass:#b08d57}
*{box-sizing:border-box}html{scroll-behavior:smooth}figure{margin:0}
body{margin:0;background:var(--black);color:var(--cream);font:400 17px/1.65 Inter,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased}
a{color:inherit}a:hover{color:var(--acc)}
.wrap{max-width:1180px;margin:0 auto;padding:0 clamp(16px,5vw,40px)}
.skip{position:absolute;left:-9999px}.skip:focus{left:16px;top:16px;background:var(--acc);color:#000;padding:8px 12px;z-index:9}
h1,h2,.wm,.mail{font-family:"Bebas Neue","Arial Narrow",sans-serif;font-weight:400;letter-spacing:.02em;line-height:.92}
h1{font-size:clamp(48px,9vw,128px);margin:.12em 0 .25em;max-width:12ch;overflow-wrap:break-word}
h2{font-size:clamp(36px,5vw,64px);margin:0 0 .45em}
h3{font-size:18px;font-weight:600;margin:0 0 .4em}
.eyebrow{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--acc);font-weight:500;margin:0 0 8px}
.lead{font-size:clamp(18px,2vw,22px);color:var(--muted);max-width:680px}
.muted{color:var(--muted)}.big{font-size:18px}
.snav{position:sticky;top:0;z-index:5;background:rgba(10,10,12,.88);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.navin{display:flex;justify-content:space-between;align-items:center;height:70px}
.wm{display:flex;flex-direction:column;text-decoration:none;font-size:22px;line-height:.9;letter-spacing:.06em}.wm b{color:var(--acc);font-weight:400}
.snav nav{display:flex;gap:24px;align-items:center}
.snav nav a{text-decoration:none;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.snav nav a:hover{color:var(--cream)}
.pill{border:1px solid var(--acc);color:var(--cream)!important;padding:9px 16px;border-radius:999px}
.btn{display:inline-block;background:var(--acc);color:#0a0a0c!important;text-decoration:none;font-weight:600;font-size:14px;letter-spacing:.06em;text-transform:uppercase;padding:15px 24px;border-radius:999px}
.btn.ghost{background:transparent;border:1px solid var(--line);color:var(--cream)!important}
.ctas{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
.crumbs{font-size:12px;color:var(--muted);padding-top:22px}.crumbs a{color:var(--muted)}
.hero{padding-top:36px;padding-bottom:40px;border-bottom:1px solid var(--line)}
.prose{max-width:860px;margin-top:48px}.prose p{font-size:18px;color:var(--muted)}
.block{padding-top:80px}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.card,.use,.rel{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:26px}
.card p,.use p{color:var(--muted);margin:0;font-size:15.5px}
.ix{display:block;font-family:"Bebas Neue",sans-serif;font-size:30px;color:var(--acc);margin-bottom:6px}
.about{display:grid;grid-template-columns:1fr 1fr;gap:48px;border-top:1px solid var(--line);margin-top:80px;padding-top:56px}
.faq details{border-bottom:1px solid var(--line);padding:18px 0}
.faq summary{cursor:pointer;font-weight:600;font-size:18px;list-style:none;display:flex;justify-content:space-between;gap:16px}
.faq summary::after{content:"+";color:var(--acc);font-size:22px;line-height:1}.faq details[open] summary::after{content:"–"}
.faq summary::-webkit-details-marker{display:none}.faq details p{color:var(--muted);margin:12px 0 0;max-width:820px}
.rel{text-decoration:none;display:block}.rel strong{display:block}.rel small{display:block;color:var(--muted);margin-top:4px}
.rel:hover{border-color:var(--acc)}
.cta{margin-top:100px;background:var(--acc);color:#0a0a0c;padding:72px 0}
.eyebrow.dark{color:#0a0a0c}
.mail{display:inline-block;max-width:100%;overflow-wrap:anywhere;font-size:clamp(30px,8vw,104px);text-decoration:none;color:#0a0a0c}.mail:hover{color:#0a0a0c;opacity:.8}
.sfoot{padding:56px 0 32px;border-top:1px solid var(--line);font-size:14px}
.fgrid{display:grid;grid-template-columns:1.2fr 1.4fr 1fr;gap:40px}
.fh{font-family:Inter,sans-serif;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);font-weight:500;margin:0 0 12px}
.sfoot ul{list-style:none;padding:0;margin:0;display:grid;gap:8px}
.sfoot a{color:var(--muted);text-decoration:none}.sfoot a:hover,.sfoot a[aria-current]{color:var(--acc)}
.fl{display:flex;gap:16px;flex-wrap:wrap;margin:0 0 22px}
.copy{color:var(--muted);font-size:12px;margin-top:36px}
@media (max-width:960px){.grid4{grid-template-columns:repeat(2,1fr)}}
@media (max-width:760px){body{font-size:16px}.grid4,.grid3,.about,.fgrid{grid-template-columns:1fr}.snav nav a:not(.pill){display:none}.block{padding-top:60px}.about{gap:8px}}
'''

os.makedirs(os.path.join(PUB, "css"), exist_ok=True)
open(os.path.join(PUB, "css", "services.css"), "w").write(CSS)
for p in PAGES + [ABOUT]:
    open(os.path.join(PUB, p["slug"] + ".html"), "w").write(page(p))
    # standalone footer snippet is not needed; homepage links are in React

sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      f"  <url><loc>{SITE}/</loc><lastmod>{TODAY}</lastmod></url>"]
sm += [f"  <url><loc>{SITE}/{p['slug']}</loc><lastmod>{TODAY}</lastmod></url>" for p in PAGES + [ABOUT]]
sm.append("</urlset>")
open(os.path.join(PUB, "sitemap.xml"), "w").write("\n".join(sm) + "\n")
open(os.path.join(PUB, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")
json.dump([{"slug": p["slug"], "nav": cap(p["nav"])} for p in PAGES], open(os.path.join(ROOT, "src", "services.json"), "w"), indent=1)
print("built", len(PAGES))
