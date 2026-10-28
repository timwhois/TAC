# Third Axis Creative service pages. British English.
# Only describes what Third Axis offers; no invented clients, stats or testimonials.

FIG_PROD = dict(src="/portfolio/third-axis-02.webp", w=1376, h=768, alt="Production crew setting up lights and camera on a working photographic studio set", caption="Concept visual // Fashion production on set — illustrative, not client work")
FIG_FLOW = dict(src="/portfolio/third-axis-14.webp", w=1376, h=768, alt="Studio desk moving from paper schedules and sticky notes to a connected production system on screen", caption="Concept visual // From paperwork to a connected workflow — illustrative, not client work")
FIG_PHOTO = dict(src="/portfolio/third-axis-08.webp", w=896, h=1200, alt="Model in a long grey wool coat photographed in a concrete architectural stairwell", caption="Concept visual // Fashion photography in an architectural location — illustrative, not client work")
FIG_RENDER = dict(src="/portfolio/third-axis-13.webp", w=1376, h=768, alt="Brushed-metal cylindrical product rendered on a dark studio floor with softbox lighting", caption="Concept visual // CGI product render in a studio setting — illustrative, not client work")
FIG_SET = dict(src="/set-design-concept-reality.jpg", w=1536, h=1024, alt="Studio set transitioning from physical build to dimensioned 3D blueprint", caption="Concept visual // Set design from physical build to 3D blueprint")
FIG_SAMPLE = dict(src="/portfolio/sample-system-concept-1200.webp", w=1200, h=800, alt="Sample management dashboard listing fashion samples with status, location and garment images", caption="Concept visual // Sample management interface — illustrative, not a client system")
FIG_DESK = dict(src="/portfolio/third-axis-10.webp", w=1678, h=937, alt="Studio coordinator using a sample tracking screen with rails of garments and a shoot in the background", caption="Concept visual // Sample tracking in a working studio — illustrative, not client work")

PAGES = [
dict(
slug="production-management",
nav="Production management",
accent="orange",
title="Fashion Production Management Company | Third Axis Creative",
desc="Fashion production company in Peterborough, UK: production management for fashion and retail shoots, from sourcing and casting to post-production handover.",
eyebrow="Fashion production · Peterborough, UK",
h1="Fashion production, end to end.",
lead="Production handled end to end: sourcing, scheduling, casting, crew, logistics and post-production handover — managed by people who have run fashion and retail production from the inside.",
intro=[
 "Every great shoot sits on top of a less glamorous project: samples sourced and tracked, studios and locations booked, crew aligned on the same date, call sheets written, deliveries chased and assets handed over on time. When that project is under-resourced, the creative suffers — days overrun, shots get dropped and teams spend their time chasing rather than directing.",
 "Third Axis Creative is a fashion production company providing production assistance and full production management for fashion, retail and brand content. We plug into your team for a single shoot or take ownership of an ongoing production calendar, bringing the structure, supplier network thinking and operational discipline that keeps content moving.",
],
figures=[
 FIG_PROD,
],
cards=[
 ("Pre-production", "Briefs, shot lists, schedules, budgets and call sheets, set up so the day runs to plan."),
 ("Sourcing & samples", "Garments, props and sets sourced, tracked and returned — nothing lost between departments."),
 ("Crew & casting", "Photographers, stylists, hair and make-up, model casting and studios booked and coordinated."),
 ("On-set & post-production", "Day-of management, selects, retouching and post-production handover, and delivery to every channel."),
],
deep_h="Why production is where content budgets leak",
deep=[
 "Most content overspend doesn't come from creative ambition; it comes from logistics. A sample that doesn't arrive, a stylist double-booked, a studio that runs over, a reshoot because a product was missed. Each problem is small, but together they decide whether a shoot delivers.",
 "Good production management makes those problems visible early and removes them before the shoot day. We work from how product actually moves through a business — from sampling through styling, shooting and delivery — and build the plan around it. Where samples are the weak point, we can build a [sample management system](/sample-management-system) around your process.",
 "Where it helps, we pair production with automation: the same team that manages your shoots can build the tools that remove [manual handoffs](/ai-workflow-automation), or move suitable work into [Shootless](https://www.shootless.co.uk/fashion-content-production) so physical production days are reserved for the shots that need them.",
],
extra=[
 dict(h="What a fashion production partner takes off your plate", p=[
  "Before the shoot: the brief turned into a shot list, a schedule and a budget; studio or location secured; photographer, stylist, hair and make-up and models cast and confirmed; samples called in, checked and tracked; and a call sheet everyone can work from.",
  "On the day and after it: the set run to time, selects agreed while the team is still together, retouching and post-production briefed, and final assets named, checked and delivered to every channel that needs them. If the shoot itself needs a photographer, we also provide [studio and location fashion photography](/fashion-photography).",
 ]),
],
uses=[
 ("In-house studios", "Extra production capacity for busy seasons without adding permanent headcount."),
 ("Brands without a studio team", "A production partner to plan and run shoots end to end."),
 ("Agencies", "Reliable production support behind your creative for fashion and retail clients."),
],
faq=[
 ("What does production management include?", "Planning, budgeting, scheduling, sourcing, casting, crew and supplier booking, on-set management, post-production handover and delivery. We can cover the whole process or support the parts your team needs help with."),
 ("Can you handle casting and post-production as well as the shoot?", "Yes. Model casting and coordination happen in pre-production, and we manage selects, retouching briefs and post-production handover after the shoot, so one team owns the whole job."),
 ("Do you only work on fashion shoots?", "Our background is fashion and retail content production, which is where we add the most value, but the same discipline applies to product, brand and campaign content."),
 ("Can you work alongside our in-house team?", "Yes. Many projects are a mix: we slot into existing processes, tools and suppliers rather than replacing them."),
 ("Where are you based?", "Third Axis Creative is based in Peterborough, UK, and works with brands across the UK."),
 ("How do we start?", "Email hello@thirdaxis.co.uk with what you are planning and when, and we will come back to you to talk it through."),
],
related=["sample-management-system","fashion-photography","ai-workflow-automation"],
),
dict(
slug="ai-workflow-automation",
nav="AI & workflow automation",
accent="mint",
title="AI & Workflow Automation for Studios | Third Axis Creative",
desc="AI and workflow automation for production, studio and retail teams: internal tools that remove manual handoffs so work moves without chasing.",
eyebrow="AI & workflow automation",
h1="AI & workflow automation.",
lead="Automate the boring parts. Internal tools that cut the manual handoffs between departments — so briefs, samples, assets and approvals move without someone chasing them.",
intro=[
 "In most creative and retail operations, a surprising amount of time goes on moving information between people: copying details from one spreadsheet to another, chasing approvals, renaming files, checking whether a sample has arrived, updating trackers that nobody trusts. It is necessary work, but it is not the work anyone was hired to do.",
 "Third Axis Creative builds internal tools and AI-driven automations that take those handoffs out of the process. We start from how your team actually works, find the steps where work stalls or gets re-keyed, and build systems that let it flow — for example a [sample management system](/sample-management-system) for a fashion studio.",
],
figures=[
 FIG_FLOW,
],
cards=[
 ("Workflow mapping", "We map how work moves between teams today and where it stalls."),
 ("Custom internal tools", "Lightweight apps and trackers built around your process, not a generic template."),
 ("AI where it earns its place", "Image, text and data automation applied to specific, repeatable tasks."),
 ("Integration", "Connect the spreadsheets, storage and systems you already use."),
],
deep_h="Built by people who have done the manual version",
deep=[
 "Automation projects fail when they are designed from the outside. We have worked inside production and studio operations, so we know which steps are genuinely repetitive, which need human judgement, and which only exist because two systems don't talk to each other.",
 "That experience is also how Shootless was built: an AI production workflow designed around the real steps of a fashion shoot rather than a generic image generator. The same thinking applies to internal tools — automate the repeatable parts, keep people in control of the decisions.",
],
uses=[
 ("Studio operations", "Sample, shot-list and asset tracking that updates itself."),
 ("Ecommerce teams", "Faster image processing, naming and upload preparation."),
 ("Retail head offices", "Fewer manual handoffs between buying, studio, marketing and ecommerce."),
],
faq=[
 ("What kind of tasks can be automated?", "Repetitive, rules-based steps are the best candidates: data entry between systems, file handling, status updates, notifications, image processing and report generation. We will tell you honestly where automation is and isn't worth it."),
 ("Do we need to replace our existing systems?", "Usually not. Most of our work connects and extends the tools you already use."),
 ("How does AI fit in?", "AI is used where it solves a specific problem — for example image generation and processing, text extraction or classification — rather than as a blanket solution."),
 ("Do you build custom software?", "Yes. We build bespoke internal tools, such as sample management systems, designed around your workflow."),
 ("How do projects start?", "With a conversation about how work currently moves through your team. Email hello@thirdaxis.co.uk to set one up."),
],
related=["sample-management-system","production-management","3d-product-rendering"],
),
dict(
slug="fashion-photography",
nav="Fashion & product photography",
accent="brass",
title="Fashion & Product Photography | Third Axis Creative",
desc="Studio and location fashion and product photography with styling and physical production, from a Peterborough production studio. Real sets, real light.",
eyebrow="Photography · Studio & location",
h1="Fashion & product photography.",
lead="Real sets. Real garments. Real light. Studio and location fashion and product photography with styling and physical production — for the shots that deserve a real set.",
intro=[
 "AI imagery has changed what needs a physical shoot, but it hasn't replaced it. Hero campaigns, texture-led product, collaborations and brand moments still benefit from a real set, a real garment and real light. When those shoots happen, they need to be planned and executed well.",
 "Third Axis Creative delivers studio and location photography together with the styling and physical production around it. Because we also run [production](/production-management) and build [Shootless](https://www.shootless.co.uk/ai-product-photography), we help you decide which images need a physical shoot and which can be produced faster another way.",
],
figures=[
 FIG_PHOTO,
],
cards=[
 ("Studio photography", "Ecommerce, product and on-model photography with consistent lighting and framing."),
 ("Location shoots", "Campaign and lifestyle photography planned around the right setting."),
 ("Styling", "Garment preparation and styling so product looks its best on camera."),
 ("Physical production", "Sets, props and logistics built and managed for the day."),
],
deep_h="Physical and AI production, used where each is strongest",
deep=[
 "The most efficient content plans now combine both. A physical shoot captures the hero images and the garment detail; Shootless extends that look across the range, into more settings and more channels, without additional shoot days.",
 "Planning both together means the physical shoot is designed to feed everything else — the right product angles for AI production, the right hero images for campaigns, and a consistent look across every placement.",
],
uses=[
 ("Fashion brands", "Campaign, lookbook and ecommerce photography."),
 ("Retailers", "Product and on-model imagery for seasonal ranges."),
 ("Product brands", "Studio product photography with styling and props."),
],
faq=[
 ("Do you shoot ecommerce as well as campaigns?", "Yes. We cover studio ecommerce and product photography as well as campaign and location shoots."),
 ("Can you combine photography with Shootless?", "Yes. A physical shoot can capture hero imagery and clean product assets, which Shootless then extends into further on-model and campaign imagery."),
 ("Do you provide styling and sets?", "Yes. Styling and physical production — sets, props and logistics — are part of what we deliver."),
 ("Where do you shoot?", "We are based in Peterborough, UK, and plan studio and location shoots to suit each project."),
 ("How do we book a shoot?", "Email hello@thirdaxis.co.uk with what you need to shoot, roughly how many products, and your timings."),
],
related=["production-management","3d-product-rendering","sample-management-system"],
),
dict(
slug="3d-product-rendering",
nav="3D & CGI product rendering",
accent="orange",
title="3D & CGI Product Rendering Services | Third Axis Creative",
desc="CGI product rendering and 3D product visualisation from a Peterborough studio: photographic product renders, 3D environments and set visualisation for brands.",
eyebrow="3D & CGI · Product visualisation",
h1="3D & CGI product rendering.",
lead="When a physical build isn't the answer. CGI product rendering and 3D environments for products, sets and campaigns that are impossible, impractical or too costly to build for real.",
intro=[
 "Some images are better made than shot. A product that isn't manufactured yet, a set too large or expensive to construct, an environment that doesn't exist, or a range of variations that would take weeks to photograph — these are the moments where 3D earns its place.",
 "Third Axis Creative provides 3D and CGI product rendering services as part of a wider production toolkit: product modelling, materials, lighting and camera work brought together into photographic product visualisation. Because we also run [physical shoots](/fashion-photography) and AI production, we use 3D where it is genuinely the best route rather than by default.",
],
figures=[
 FIG_RENDER,
 FIG_SET,
],
cards=[
 ("CGI product renders", "Clean, accurate CGI product visuals for ecommerce, marketing and launches, on white or in context."),
 ("3D environments", "Virtual sets and spaces for campaigns, presentations and digital experiences."),
 ("Set visualisation", "See a set or campaign concept in 3D, with real dimensions, before committing to build it."),
 ("Variations at scale", "Colourways, materials and angles without reshooting."),
],
deep_h="Choosing between physical, AI and 3D",
deep=[
 "Each route has strengths. Physical photography captures real texture and light. AI production with Shootless scales on-model imagery quickly from real garments. 3D gives total control over geometry, materials and environment — ideal for hard goods, prototypes and spaces.",
 "We help you choose the right mix for each brief, so budget goes where it has the most impact. For garments on models, [Shootless](https://www.shootless.co.uk/ai-fashion-photography) is usually the faster route; for hard goods, packaging, prototypes and environments, CGI product rendering usually is.",
],
extra=[
 dict(h="How a CGI product rendering project works", p=[
  "Every render starts with references: photography of the product or prototype, dimensions, material and finish details, and CAD files where they exist. From those we build the 3D product model, then develop the materials so metal, plastic, glass, fabric or print read correctly under light.",
  "Lighting and camera are approached the way a photographer would approach a product shoot — key light, reflections, depth of field, angle and crop — because the goal is a render that sits comfortably next to real photography. You review drafts, we refine, and final renders are delivered at the sizes and crops each channel needs. Once the model exists, new colourways, angles and settings come from the same file rather than a new shoot.",
 ]),
 dict(h="3D set design and environments", p=[
  "The same toolkit is used for spaces. A set can be modelled to real dimensions so a build is agreed before any materials are bought, and campaign or retail environments can be visualised for approval or used as finished CGI backgrounds. We work alongside experienced set builders when a concept moves from screen to studio, and our [production management](/production-management) team can take the build from there.",
 ]),
],
uses=[
 ("Product launches", "Visuals ready before samples or stock exist."),
 ("Set and retail design", "Visualise spaces and builds before committing to them."),
 ("Digital campaigns", "Environments for social, web and interactive content."),
],
faq=[
 ("What do you need to create a product render?", "Reference photography, dimensions and material details, or existing CAD files where available."),
 ("Can you work from CAD files?", "Yes. Existing CAD files are a good starting point for CGI product modelling; where none exist, we model from reference photography and dimensions."),
 ("How long does a CGI product render take?", "It depends on the product's complexity, how much modelling is needed and how many views and variations you need. We will give you a timeline once we have seen your references."),
 ("Can 3D renders look photographic?", "Yes. CGI can be produced to a photographic standard, or stylised to suit the brand."),
 ("Can you build 3D environments for websites?", "Yes. We create 3D environments for campaigns, presentations and interactive digital experiences."),
 ("When is 3D better than a photoshoot?", "When the product or set doesn't exist yet, when a build would be impractical, or when you need many controlled variations."),
 ("How do we start a 3D project?", "Email hello@thirdaxis.co.uk with references and what the visuals are for."),
],
related=["fashion-photography","production-management","ai-workflow-automation"],
),
dict(
slug="sample-management-system",
nav="Sample management systems",
accent="mint",
title="Fashion Sample Management Systems | Third Axis Creative",
desc="Bespoke fashion sample management and sample tracking systems for studios, brands and retail head offices, built around how your team moves samples.",
eyebrow="Bespoke systems · Fashion sample tracking",
h1="Fashion sample management.",
lead="Sample management systems, built to order. Every sample that goes missing costs more than the garment: it costs the shoot day. We build fashion sample tracking around how your team actually works.",
intro=[
 "Samples move constantly — from suppliers into the building, to the studio, to stylists, onto set, out to press, back to the sample room and on to the next team. Each move is a chance for something to go missing, and most businesses still track it with spreadsheets, labels and memory.",
 "Third Axis Creative builds bespoke sample management systems for fashion studios, brands and retail head offices. We consult on the workflow first, then build the system to match it — so it fits the way your people already work instead of forcing them into a generic template.",
],
figures=[
 FIG_SAMPLE,
 FIG_DESK,
],
cards=[
 ("Live status", "Know whether a sample is in the studio, with a stylist, in transit or returned."),
 ("Location tracking", "From studio rails to sample walls, every item has a known place."),
 ("Team handoffs", "Clear ownership as samples move between buying, studio, styling and marketing."),
 ("Shoot readiness", "See what's ready to shoot before the day, not on it."),
],
deep_h="Why generic tools rarely fit",
deep=[
 "Off-the-shelf inventory tools are built for warehouses and stock, not for samples that move between creative teams several times a week. They tend to track the wrong things, add steps nobody completes, and end up abandoned for a spreadsheet.",
 "We've worked inside this industry long enough to know how product actually moves, from sourcing and sampling through to styling, production and delivery. That is why our systems start with a workflow consultation: the tool is shaped around your process, your terminology and your team.",
],
extra=[
 dict(h="What a fashion sample management system tracks", p=[
  "At its core, each sample has a record: style and colour, size, supplier, the images that identify it, where it physically is, who has it, what it is booked for and when it is due back. Status changes as the sample moves — received, in the studio, with styling, on set, out to press, returned — so anyone can check before they go looking.",
  "Around that core, each system is shaped to the business: shoot schedules that show which samples are ready, sample walls and rails mapped to real locations, handoffs between buying, design, studio and marketing, and reporting on what is overdue. Where it helps, it connects to the [automation](/ai-workflow-automation) and [production planning](/production-management) we run for the same teams. The interface shown on this page is an illustrative concept of that approach.",
 ]),
],
uses=[
 ("Fashion studios", "Track samples across shoots, rails and stylists."),
 ("Retail head offices", "Share sample status between buying, design, studio and marketing."),
 ("PR and press teams", "Know which samples are out, with whom, and when they're due back."),
],
faq=[
 ("What is a sample management system?", "A tool that records where each sample is, who has it and what status it's in, so teams can find product quickly and plan shoots and press with confidence."),
 ("How is fashion sample management different from stock control?", "Stock control counts saleable units in a warehouse. Sample management follows individual pieces as they move between people and teams several times a week, so it tracks location, holder, purpose and due dates rather than quantities."),
 ("Is this an off-the-shelf product?", "No. Each system is built to order around your workflow, after a consultation on how samples move through your business."),
 ("Can it work with our existing systems?", "Yes. Systems can be designed to connect with the spreadsheets, product data and tools you already use."),
 ("Who is it for?", "Fashion studios, brands, retailers and PR teams that handle significant volumes of samples across multiple people."),
 ("How do we get started?", "Email hello@thirdaxis.co.uk to talk through your current sample workflow."),
],
related=["production-management","ai-workflow-automation","fashion-photography"],
),
]

# About page — studio-level only (no personal details).
ABOUT = dict(
slug="about",
kind="about",
nav="About",
accent="brass",
title="About Third Axis Creative | Peterborough Production Studio",
desc="Third Axis Creative is a Peterborough production studio for fashion and retail: production, automation, photography, 3D and bespoke systems. Home of Shootless.",
eyebrow="About · Peterborough, UK",
h1="Built from inside production.",
lead="Third Axis Creative is a production studio for fashion and retail brands. We started on set, and we build what we wished we'd had there.",
intro=[
 "Most of what slows content down isn't creative. It is samples that can't be found, shoots that wait on logistics, information re-keyed between departments and images that take weeks to reach the channels that need them. We know those problems because we have worked inside them — on studio floors, in sample rooms and across the handoffs between buying, studio, marketing and ecommerce.",
 "Third Axis Creative exists to remove that friction. We run production, shoot photography and build 3D when a physical shoot is the right answer, and we build software and AI tools when it isn't. The aim is the same either way: get great product content made, faster, without lowering the standard.",
],
cards_h="How we work",
cards=[
 ("Workflow first", "We start by understanding how work actually moves through your team before recommending a shoot, a system or a tool."),
 ("Right tool for the shot", "Physical photography, AI production, 3D or automation — chosen per brief, not by default."),
 ("Production discipline", "Plans, schedules and handoffs that hold up on the day, not just on paper."),
 ("Honest advice", "If something isn't worth automating or shooting, we'll say so."),
],
deep_h="One studio, three ways in",
deep=[
 "Third Axis Creative is the studio. It handles production management, photography, 3D, AI and workflow automation, and bespoke systems such as sample tracking for fashion and retail teams.",
 "Shootless is our AI production platform. It turns garment photography into fully modelled, campaign-ready imagery without booking a model, a studio or a day of physical production — built from the same production experience as the rest of the studio.",
 "The Rail is Third Axis Originals, our apparel line: the unofficial uniform for sets, production and everything in between.",
],
uses_h="Who we work with",
uses=[
 ("Fashion and retail brands", "Content, production and systems for teams that need more product imagery, faster."),
 ("In-house studios", "Extra production capacity, better tools and fewer manual handoffs."),
 ("Agencies and partners", "A production and technology partner behind your creative."),
],
faq=[
 ("What does Third Axis Creative do?", "We are a production studio offering production management, AI and workflow automation, fashion and product photography, 3D and CGI rendering, and bespoke systems such as sample management for fashion and retail brands."),
 ("Where are you based?", "Peterborough, UK. We work with brands across the UK."),
 ("How do Shootless and The Rail relate to Third Axis?", "Both are part of Third Axis Creative. Shootless is our AI fashion imagery platform and The Rail is our apparel line."),
 ("Do you work with small brands as well as large retailers?", "Yes. We scale the approach to the brief, from a single shoot or tool to ongoing production support."),
 ("How do we start working together?", "Email hello@thirdaxis.co.uk with what you're working on and we'll come back to you."),
],
related=["production-management","ai-workflow-automation","fashion-photography","3d-product-rendering","sample-management-system"],
)
