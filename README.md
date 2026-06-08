# Momente B1.1 — Lern- & Quiz-Seite

A zero-dependency static website for studying for a German **B1.1 written exam**
(textbook: Hueber _Momente B1.1_, Lektion 1–10). Two modes:

- **📖 Lernen** — Grammatik, Wortschatz and Redemittel, explained exam-style.
- **✅ Quiz** — 10 random questions per round (multiple-choice + fill-in), with
  immediate feedback, umlaut-tolerant answer checking, and a score summary.

No backend, no build step. Just HTML, CSS and JS.

## Run it locally

**Double-click `index.html`** — it works straight from the filesystem.

> This is why the question bank is `questions.js` (it assigns a global `QUIZ_BANK`
> via a plain `<script>` tag), **not** `questions.json` loaded with `fetch()`. `fetch()`
> of a local file is blocked by CORS under `file://`. Don't switch it to JSON + fetch.

Optionally serve it (identical result, nicer for live-reload):

```bash
python -m http.server
# then open http://localhost:8000
```

## Host on GitHub Pages

1. Push this folder to a GitHub repo (e.g. `german-final`):
   ```bash
   git push -u origin main
   ```
2. Repo **Settings → Pages**.
3. **Source:** _Deploy from a branch_ → branch `main`, folder **/ (root)** → **Save**.
4. After a minute it's live at `https://<user>.github.io/<repo>/`.

No workflow or config needed — Pages serves the static files as-is.

## Files

| File | What |
|------|------|
| `index.html` | The whole app (embedded CSS + JS): Lernen + Quiz modes. |
| `questions.js` | The quiz databank — `const QUIZ_BANK = [ … ]`. Edit/extend here. |
| `content/` | Authored study notes (source of truth): `grammar.md`, `vocab.md`, `redemittel.md`, `quiz-seed.md`. |
| `BUILD-SPEC.md` | The design spec the site was built from. |

The source textbook (`momente_b1_1.pdf` / `.md`) is **git-ignored** and stays local.

## Adding questions

Append objects to `QUIZ_BANK` in `questions.js`:

```js
{ id: 54, topic: "Konnektoren", level: "B1.1", type: "mc",
  prompt: "___ ich klein war, …", options: ["Als","Wenn"], answer: "Als",
  explanation: "One finished period in the past → als." }
```

- `type: "mc"` → `options[]` shown as buttons; `answer` is the correct one.
- `type: "fill"` → free-text input; add `accept: [ … ]` for valid alternates.
  Checking is case-insensitive and umlaut-tolerant (`ae/oe/ue/ss` ↔ `ä/ö/ü/ß`).
- `topic` must match a study section so the topic filter lines up.
- `level` is `"B1.1"` or `"A2.2"` (A2.2 = Wiederholung items; shows a review badge).

Round length lives in one place: `const ROUND_SIZE = 10;` in `index.html`.

### Vocab roadmap
`content/vocab.md` has the per-lesson PDF page map for OCR'ing the remaining
Wortfelder (only Lektion 1 is transcribed so far). As each lesson is added to
`content/vocab.md`, add a matching `topic: "Wortschatz"` question group to `questions.js`.
