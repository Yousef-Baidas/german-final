# BUILD SPEC — German B1.1 Exam Study Site

> Handoff doc for a fresh Claude Code session. Everything needed to build the site is here
> or in `content/`. The source textbook is in this folder (`momente_b1_1.pdf` + `.md`).

## What we're building

A **single-page static website** (hostable on **GitHub Pages**) to study for a German
**B1.1 written exam**. Two modes:

1. **📖 Lernen (Study)** — every grammar topic, vocab field, and writing phrase explained
   in an exam-style layout.
2. **✅ Quiz (Test)** — pulls **random** questions from a databank file in the repo,
   gives immediate feedback + explanations, tracks score.

### Context
- Student: written B1.1 exam (book: **Hueber _Momente B1.1_ Kursbuch**, ISBN 9783196217933).
- **Scope = Lektion 1–10** (exam scope, confirmed). L11–L12 are out of scope.
- A few grammar points carry over from **A2.2** — these are exactly the "Wiederholung"
  items already inside B1.1 (weil/denn/deshalb, basic Adjektivdeklination, Konjunktiv II
  wishes, trotzdem). Tag these with a small **"A2.2 review"** badge. Architect so a fuller
  A2.2 section could be added later.

## Tech decisions (already made — don't relitigate)

- **No backend, no build step.** Pure static: `index.html` + `questions.js` + `README.md`.
- **Databank is `questions.js`, NOT `questions.json`.** A `.js` file that defines
  `const QUIZ_BANK = [...]` loads with a plain `<script src="questions.js">` tag — works
  **both** locally (double-click `index.html`) **and** on GitHub Pages. A `.json` + `fetch()`
  breaks locally due to CORS. This was a deliberate choice.
- Self-contained `index.html` (embedded CSS + JS). Mobile-first (student studies on phone).

## Design / look

**Use the `/ui-ux-pro-max` skill AND `/frontend-design` skill** to make it look polished —
this was explicitly requested. Target style:
- Clean, modern **exam-study** aesthetic. Mobile-first.
- **Topic color-coding** (each grammar topic gets a consistent accent color / badge).
- Subtle **German-flag** accent (black / red / gold) — tasteful, not gaudy.
- Readable typography, generous spacing, good contrast. Works great on a phone.

## File structure

```
germangju/
├── index.html          ← the whole app (study + quiz), embedded CSS + JS
├── questions.js        ← const QUIZ_BANK = [ ...question objects... ]
├── README.md           ← one-liner: how to host on GitHub Pages
├── momente_b1_1.pdf    ← source textbook (for OCR'ing remaining vocab)
├── momente_b1_1.md     ← textbook converted to markdown (pymupdf4llm)
└── content/            ← all study content + quiz seed (see below)
    ├── grammar.md
    ├── vocab.md
    ├── redemittel.md
    └── quiz-seed.md
```

## Study mode — sections

Nav (sidebar on desktop, top tabs/accordion on mobile):

- **Grammatik** (see `content/grammar.md` for full rules + insights + examples):
  - Konnektoren (als/wenn, deshalb-group/trotzdem, weil/denn, obwohl, damit/um…zu,
    Infinitiv mit zu, bis/seit/bevor/während)
  - Adjektivdeklination (base "signal" principle, Nullartikel, Komparativ/Superlativ, Genitiv)
  - Konjunktiv II der Gegenwart
  - Genitiv-Präpositionen (wegen / trotz)
  - Wortbildung (-lich, -chen, Adjektive als Nomen, Komposita)
- **Wortschatz** (see `content/vocab.md`): the 10 Wortfelder, German + English, in tables.
- **Redemittel** (see `content/redemittel.md`): written-exam phrase bank, grouped by function.

Keep the explanations faithful to `content/grammar.md` — they're written in the voice that
worked for the student (rule → ★ insight → examples).

## Quiz mode — behaviour

- **Start screen:** "Start Quiz" button. Optional **topic filter** (checkboxes per topic).
- **Round = 10 random questions** (shuffle the bank with Fisher–Yates, take 10). A
  "new round" reshuffles. (Keep the round size easy to change — a `ROUND_SIZE` const.)
- **Question types:**
  - `mc` — multiple choice (e.g., als vs wenn, deshalb vs trotzdem; vocab: pick the right translation; pick the right article der/die/das).
  - `fill` — fill-in-the-blank (adjective endings, Konjunktiv II forms; vocab: English → German with article). Answer checking
    must be **umlaut-tolerant and forgiving**: trim, lowercase-compare, accept an `accept[]`
    array of alternates, and optionally treat `ae/oe/ue/ss` as `ä/ö/ü/ß`. Capitalization
    should NOT fail an answer.
- **Topic coverage (required):** the bank MUST include **Wortschatz (vocab)** questions, not
  just grammar — one `topic: "Wortschatz"` group per Lektion (German↔English + der/die/das
  article questions), drawn from `content/vocab.md` as each Wortfeld is OCR'd. Grammar topics
  and vocab should both be reachable via the topic filter and appear in random rounds.
- **Per question:** show immediate ✓/✗ + the `explanation` text.
- **End:** show score (e.g., 8/10) + which ones were wrong (with explanations) + "Try again".

### `questions.js` schema

```js
const QUIZ_BANK = [
  { id: 1, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "___ ich klein war, hatte ich einen Hund.",
    options: ["Als", "Wenn"], answer: "Als",
    explanation: "One finished past time → als." },

  { id: 2, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "ein ___ Kind (klug — nom, neuter)",
    answer: "kluges", accept: ["kluges"],
    explanation: "ein hides the gender → adjective grabs -es (das→-es)." },
];
```
- `level` is `"B1.1"` or `"A2.2"` (drives the review badge + lets you filter later).
- `topic` must match the study-section topics for the topic filter to line up.

## Starter databank

`content/quiz-seed.md` contains the questions we actually drilled tonight (with answers +
explanations), ready to convert into `QUIZ_BANK` objects. It includes a **Wortschatz** section
(Lektion 1 vocab questions) to seed the vocab requirement above — generate the remaining
lessons' vocab questions as each Wortfeld is OCR'd. Aim for **~50 questions** across all topics
(grammar **and** vocab) for v1. Expand later.

## TODO for the build session (in order)

1. `/ui-ux-pro-max` + `/frontend-design` → establish the visual system.
2. Build `index.html` shell with the Lernen/Quiz toggle + study-section nav.
3. Fill **study mode** content from `content/grammar.md`, `vocab.md`, `redemittel.md`.
4. **OCR the remaining Wortfelder** (vocab.md only has Lektion 1 done — page map + method
   are in `content/vocab.md`). Fill the rest into study mode.
5. Build **quiz engine** (shuffle, render mc/fill, umlaut-tolerant checking, score).
6. Convert `content/quiz-seed.md` → `questions.js` (`QUIZ_BANK`), expand to ~50.
7. `README.md` with GitHub Pages instructions. Test locally (double-click index.html).

## Out of scope (YAGNI)
- No accounts, no server, no persistence beyond the page. No spaced-repetition algorithm.
- No L11–L12 content. No audio.
