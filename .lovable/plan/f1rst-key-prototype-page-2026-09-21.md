# F1rst Key — prototype page

Rebuild the page exactly as the screenshots show: black, white and F1S yellow, heavy condensed uppercase headlines, mono-style small labels, hard rules instead of rounded cards. Front end only — sample answers, no logins, no live data.

## Page structure (single scrolling page)

**1. Fixed top bar**
- Black bar, left: FIRST IN SERVICE lockup. Next to it a yellow block with a key mark and "F1rst Key".
- Right: white "HOW IT WORKS" button, then a yellow initials chip with "Signed in with F11".

**2. Hero**
- Full-width photo (mountain lake with wooden boat bow), text sitting on the left.
- Small yellow "F1RST KEY" eyebrow with a rule under it.
- Headline: "ONE KEY." in white, "MANY DOORS." in yellow, huge and tight.
- Sub: "Ask the way you'd ask a colleague. One answer from everything in Partnerships on F11 and everything advisors are sharing in the channels."
- White ask field with a magnifier and a black "ASK →" block button.
- Under it, "Try" plus three translucent suggestion chips: Argentina, this week, Virgin Hotels.

**3. START HERE (off-white section)**
- Big black "START HERE" heading left; italic serif note right: "Ninety seconds on what to ask, where the answers come from, and what the labels mean."
- Video block: photo still, yellow "F1RST KEY" eyebrow, white "HOW IT WORKS" title, "1:32 · Five chapters · Captions on", large yellow round play button, and a black player bar with chapter ticks, times and a CC button.
- Below: five chapter columns with divider lines — 01 · 0:09 What you can ask, 02 · 0:23 How to ask, 03 · 0:39 What's on F11, 04 · 0:53 The advisor channels, 05 · 1:08 What the labels mean.
- Clicking a chapter jumps the player marker (visual only, placeholder still until the recording exists).

**4. TRY ONE OF THESE**
- Heading, then "Real questions advisors ask each other. Pick one and see what comes back." and the grey disclaimer: "Sample answers. The advisor messages are real. The F1S Preferred labels are examples until F1rst Key is connected to F11."
- Rule-separated question rows with circled arrows on the right; the selected row fills solid yellow with a black arrow. Rows: Westin Playa Conchal for a family, Argentina, new in Japan, this week, Virgin Hotels deal, Accor contact for the Mexico roadshow.

**5. YOUR ANSWER**
- Small "YOUR ANSWER" label, the question restated as a large headline, thick rule under it.
- Plain-language summary paragraph.
- Three square filter buttons: Preferred only / Just what advisors said / Just F11 — they hide or show the blocks below.
- "ON F11" header with a result count. Each result: bold name, mono breadcrumb "F11 ▪ Partnerships › Hotels", one-line description, "OPEN ON F11 →", and a yellow "F1S PREFERRED" label with key mark (or a plain outlined "NOT VETTED" label).
- "WHAT ADVISORS SAID" header with "3 messages · in full". Each message: square bullet on a vertical line, bold name, mono channel name, full quote. Mexico messages carry a translated note.
- Grey caveat: "Advisor tips aren't vetted by F1S. If it isn't on F11, book at your own risk."
- Footer of the answer: mono "Checked: Hotels ▪ The Originals ▪ Enhanced Commission List ▪ Global, Mexico and Europe channels" and an outlined "SOMETHING WRONG? FLAG IT" button that opens a short note box with a thank-you confirmation.
- Typing in the hero ask bar scrolls here and shows the closest sample answer, or an honest "nothing checked on this yet" state.

**6. Footer (black)**
- FIRST IN SERVICE lockup, left text: "F1rst Key is open to F1S VIC and VICE advisors, and reads only what F11 already lets you see. Entertainment pages stay with the Entertainment team."
- Right text: "Prototype for review, 12 September 2026. The advisor messages shown are real. The F1S Preferred labels are examples until F1rst Key is connected to F11."

## Technical notes

- Replaces the placeholder page at `/`; components split into TopBar, Hero, StartHere, QuestionList, AnswerView, Footer.
- Sample questions and answers in one local data file so wording is easy to edit; no backend.
- Tokens in `src/styles.css`: F1S yellow, near-black, off-white, plus condensed display / mono label type loaded in the page head. Hero and video stills generated to match the screenshots.
- Page title and description for F1rst Key; responsive down to mobile.

## Not in this build

Real F11 or WhatsApp data, actual search, sign-in, permissions, stored flags, and the real video file.
