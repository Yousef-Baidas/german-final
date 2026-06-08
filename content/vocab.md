# Wortschatz — Momente B1.1, Lektion 1–10

The vocab lives in the textbook's **Bildlexikon** (picture-dictionary band along the bottom of
each lesson's opener pages). These are **images**, so `pymupdf4llm` dropped them — they must be
**OCR'd from the PDF**. Lektion 1 is done below as a template; **L2–L10 are TODO**.

## How to OCR the remaining Wortfelder

`momente_b1_1.pdf` page numbers are offset: **PDF page = printed page + 2.**
The Bildlexikon band sits at the bottom of each lesson's opener spread.

| Lektion | Wortfeld | Printed pages | **PDF pages to read** |
|---|---|---|---|
| 1 | Lebensphasen | 9–12 | 11–14 ✅ done |
| 2 | Beziehungen / Freundschaften | 13–16 | 15–18 |
| 3 | Persönliche Stärken | 17–20 | 19–22 |
| 4 | Veränderungen / Mobilität | 25–28 | 27–30 |
| 5 | Gebäude & Einrichtungen / Wohnen | 29–32 | 31–34 |
| 6 | Berufliche Neuorientierung | 33–36 | 35–38 |
| 7 | Rund ums Reisen | 41–44 | 43–46 |
| 8 | Politik & Gesellschaft | 45–48 | 47–50 |
| 9 | Rund ums Studium | 49–52 | 51–54 |
| 10 | Rund um die Arbeit | 57–60 | 59–62 |

**Two ways to OCR:**
1. **Read tool** (vision): `Read(momente_b1_1.pdf, pages="12-13")` renders pages as images;
   read the Bildlexikon labels (look for the small word band at the page bottom). Cleanest.
2. **tesseract** (keeps images out of context): `pdftoppm -png -r 200 -f 12 -l 13 momente_b1_1.pdf p`
   then `tesseract p-12.png stdout -l deu`. Needs the `tesseract-data-deu` package.

For each word capture **article + noun** (or the verb), then add an English translation.

---

## Lektion 1 — Wortfeld: Lebensphasen ✅ (OCR'd from PDF p.12–13)

Laid out as a **FRÜHER → JETZT → SPÄTER** life timeline:

| Deutsch | English |
|---|---|
| die Vergangenheit | the past |
| die Gegenwart | the present |
| die Zukunft | the future |
| die Geburt | birth |
| die Kindheit | childhood |
| die Schulzeit | school years |
| die Jugend | youth / adolescence |
| der/die Erwachsene | adult |
| das Alter | old age |

★ Notes for the study card:
- **der/die Erwachsene** is an *Adjektiv als Nomen* (declines: ein Erwachsen**er**, die Erwachsen**en**).
- **Vergangenheit / Gegenwart / Zukunft** double as the grammar tense names.
- Gender trap: almost all **die**, but **das Alter** breaks the pattern.
- Related from L1 texts: die Erinnerung (memory), sich erinnern an (to remember),
  das Erlebnis (a single event), die Erfahrung (experience, accumulated).

---

## Lektion 2–10 — TODO

OCR each Wortfeld using the table + method above, then format like Lektion 1
(German w/ article | English, plus any useful ★ distinctions).
