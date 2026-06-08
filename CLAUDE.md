# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **not-yet-built static website** for studying for a German **B1.1 written exam** (textbook:
Hueber *Momente B1.1* Kursbuch, ISBN 9783196217933). The folder currently holds the **build
spec**, the **study content**, and the **source textbook** — no site code exists yet.

**Read `BUILD-SPEC.md` first.** It is the authoritative design: file layout, the two modes
(Study + Quiz), quiz behaviour, the `questions.js` schema, the style direction, and an ordered
build TODO. This CLAUDE.md only orients; BUILD-SPEC.md decides.

## Architecture (planned)

Zero-dependency, **no build step, no backend** — pure static, GitHub-Pages-hostable:

- `index.html` — the whole app (embedded CSS + JS), two modes toggled in-page:
  **Lernen** (study/reference) and **Quiz** (random drilling).
- `questions.js` — the question databank: `const QUIZ_BANK = [ {…} ]`, loaded via a plain
  `<script src="questions.js">`.
- `content/` — authored study content, the source of truth for what goes on the page:
  `grammar.md`, `vocab.md`, `redemittel.md`, and `quiz-seed.md` (→ becomes `questions.js`).
- `momente_b1_1.pdf` / `momente_b1_1.md` — the source textbook (markdown via pymupdf4llm).

### Load-bearing decision: `questions.js`, not `questions.json`
The databank is a `.js` file (assigns a global), **not** JSON loaded with `fetch()`. `fetch()`
of a local file fails under `file://` (CORS) and only works once hosted; the `<script>` tag
works **both** locally (double-click `index.html`) **and** on GitHub Pages. Do not "modernize"
this to `fetch('questions.json')`.

### Content scope
Exam scope is **Lektion 1–10 only** (not 11–12). A small amount of **A2.2** grammar carries
over — these are exactly the "Wiederholung" items already inside B1.1 (weil/denn/deshalb, base
Adjektivdeklination, Konjunktiv II wishes, trotzdem). Mark `level: "A2.2"` and show an
"A2.2 review" badge; keep the structure open to a future fuller A2.2 section.

## Commands

No build / lint / test pipeline — it's vanilla HTML/CSS/JS.

- **Preview locally:** open `index.html` directly in a browser (works because of the
  `questions.js` choice), or `python -m http.server` then visit `http://localhost:8000`.
- **Deploy:** push to GitHub, enable Pages (serve from repo root or `/`). See `README.md` once written.
- **OCR remaining vocab** (the Bildlexikon bands are images; only Lektion 1 is transcribed in
  `content/vocab.md`). PDF page = **printed page + 2**; per-lesson page map is in `vocab.md`. Either:
  - use the **Read tool** on the PDF page range (vision), e.g. `Read(momente_b1_1.pdf, pages="15-18")`; or
  - `pdftoppm -png -r 200 -f 15 -l 18 momente_b1_1.pdf p && tesseract p-15.png stdout -l deu`
    (needs the `tesseract-data-deu` package).

## Git / publishing

- Remote `origin` → **https://github.com/yousef-baidas/german-final** (public). Push with
  `git push -u origin main` once there's something to ship.
- **The book stays local.** `momente_b1_1.pdf`, `momente_b1_1.md`, and
  `HOWTO-get-the-book-pdf.md` are git-ignored — they're copyrighted / sensitive and must never
  be committed or pushed to the public repo. They remain on disk for OCR + reference.
- Safe to publish: the site (`index.html`, `questions.js`, `README.md`) and the `content/*.md`
  study notes.

## Build approach

Per BUILD-SPEC.md: use the **`/ui-ux-pro-max`** and **`/frontend-design`** skills to establish
the visual system before/while building `index.html`. Target: clean mobile-first exam-study
look, topic color-coding, subtle German-flag accent. Quiz rounds = **10 random questions**,
mixed multiple-choice + fill-in, with **umlaut-tolerant, case-insensitive** answer checking.
