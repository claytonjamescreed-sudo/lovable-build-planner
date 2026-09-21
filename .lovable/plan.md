# F1rst Key — prototype page (front end only)

A single, clickable prototype of the advisor-facing "one place to ask" page. No accounts, no live data — all answers come from hand-written sample content so the team can react to the experience and the wording.

## What the page contains

1. **Ask bar (the hero)**
   - One large plain-language question field: "Ask it the way you'd ask a colleague."
   - A few starter questions as tappable chips: "What do we have in Argentina?", "Has anyone stayed here?", "Who do I call at Accor?", "What's happening this week?"
   - One short explainer video slot (placeholder thumbnail until the recording exists) and nothing else that teaches.

2. **Answer view**
   - Typing a starter question (or anything matching a keyword) shows a prepared answer built from two clearly separated pools:
     - **From F11 Partnerships** — supplier cards: air, hotels, DMCs, cruise, ground, insurance, rep firms, tour operators, The Originals, enhanced commission, webinars, contacts.
     - **What advisors said** — conversation cards quoting the Global / Mexico / Europe channels, full quote rather than summary, with who said it, which channel, and when. Mexico entries show a "translated from Spanish" note.
   - Every card carries a source line and a date — trust is visible on every item.
   - Status labels on suppliers: **F1S Preferred** and **Not vetted** (styled as provisional, since the label names aren't confirmed).
   - Each answer has "Narrow this" controls: preferred hotels only / advisor conversations only, and a "Flag this answer" action that opens a short note box (front-end only confirmation).
   - Entertainment content is visibly held separate, shown as a locked note rather than results.

3. **Empty / unknown question state**
   - An honest "nothing checked on this yet" response instead of an invented answer, with a prompt to ask in the channel.

4. **Open decisions panel**
   - A short, clearly marked section listing what is still undecided (label wording, Entertainment access, how flags are reviewed) so reviewers know what to comment on.

## Design direction

Advisor-facing travel trade tool: calm, editorial, confident. One key visual motif (the key / one door), restrained palette, strong typography, generous whitespace — no generic SaaS gradients. I'll show you three visual directions to pick from before building.

## Technical notes

- Single TanStack Start route at `/` replacing the placeholder page, with the ask bar, answer view, and label system as components.
- Sample answers live in a local TypeScript data file keyed by topic so content is easy to edit; no backend, no database.
- Semantic design tokens in `src/styles.css` for the palette, label colours, and card treatments.
- Page-level title/description metadata for F1rst Key.

## Not in this build

Real F11 or WhatsApp data, search intelligence, logins, permissions enforcement, flag storage. Those need Lovable Cloud and a data feed; this prototype is for reviewing the experience.
