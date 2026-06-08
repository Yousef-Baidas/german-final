# Wortschatz — Momente B1.1, Lektion 1–10

The vocab lives in the textbook's **Bildlexikon** (picture-dictionary band along the bottom of
each lesson's opener pages). These are **images**, so `pymupdf4llm` dropped them — they must be
**OCR'd from the PDF**. All 10 Wortfelder are now transcribed below (L2–L10 OCR'd via
the Read-tool vision method; every lesson's printed page number was checked to confirm the +2 offset).

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

## Lektion 2 — Wortfeld: Beziehungen / Freundschaften ✅ (PDF p.16)

| Deutsch | English |
|---|---|
| die Freundin / der Freund | (female / male) friend |
| die Bekannte / der Bekannte | acquaintance |
| die Clique | clique / friend group |
| der Freundeskreis | circle of friends |
| die Freundschaft | friendship |

★ **die/der Bekannte** is an *Adjektiv als Nomen* (ein Bekannter / eine Bekannte). **die Clique**
(tight friend group) vs **der Freundeskreis** (wider circle) — a common pairing trap.

---

## Lektion 3 — Wortfeld: Persönliche Stärken ✅ (PDF p.20–21)

All **adjectives** (character strengths) — base form, no articles.

| Deutsch | English |
|---|---|
| teamfähig | good team player |
| gut organisiert | well-organized |
| kommunikativ | communicative |
| pünktlich | punctual |
| zuverlässig | reliable / dependable |
| hilfsbereit | helpful |
| offen | open / open-minded |
| gründlich | thorough |
| fleißig | diligent / hard-working |
| aufmerksam | attentive |
| geduldig | patient |
| kreativ | creative |

★ Ties to the **-lich** Wortbildung point: der Punkt → **pünktlich**, der Freund → **freundlich**.

---

## Lektion 4 — Wortfeld: Veränderungen / Mobilität ✅ (PDF p.28–29)

Mostly **verb phrases / collocations**.

| Deutsch | English |
|---|---|
| einen Vorsatz haben | to have a resolution |
| eine Gewohnheit haben | to have a habit |
| sich an etwas gewöhnen | to get used to something (an + Akk.) |
| etwas wiederholen | to repeat something |
| das Verhalten ändern | to change one's behaviour |
| sich bewegen | to move / get exercise |
| sich anstrengen | to make an effort |
| Ausdauer haben | to have stamina / perseverance |

★ Three **reflexive** verbs (sich gewöhnen, sich bewegen, sich anstrengen) — keep the *sich*.
Embedded noun genders: **der** Vorsatz, **die** Gewohnheit, **die** Ausdauer, **das** Verhalten.

---

## Lektion 5 — Wortfeld: Gebäude & Einrichtungen / Wohnen ✅ (PDF p.32–33)

| Deutsch | English |
|---|---|
| die Bibliothek | library |
| der Dorfladen | village shop |
| die Gemeinschaftsküche | communal kitchen |
| die Kantine | canteen / cafeteria |
| die Landwirtschaft | agriculture / farming |
| der Schlafsaal | dormitory |
| der Versammlungsraum | assembly / meeting room |
| der Waldkindergarten | forest kindergarten |
| die Waschküche | laundry room |
| die Werkstatt | workshop |
| der Zeltplatz | campsite |

★ Gender trap: **die Werkstatt** (from *die Statt*, not *die Stadt*). Compounds take the article
of the **last** noun: der Dorf**laden**, die Wasch**küche**, der Versammlungs**raum**.

---

## Lektion 6 — Wortfeld: Berufliche Neuorientierung ✅ (PDF p.34–35)

**Verb phrases** about changing career.

| Deutsch | English |
|---|---|
| freiberuflich arbeiten | to work freelance |
| fest angestellt sein | to be permanently employed |
| ein Risiko eingehen | to take a risk |
| etwas Neues wagen | to dare something new |
| Erfahrungen sammeln | to gain experience |
| eine Idee umsetzen | to put an idea into practice |
| einen Traum verwirklichen | to make a dream come true |
| ein Projekt planen | to plan a project |
| einen Auftrag bekommen | to get an order / commission |

★ Deliberate opposites: **fest angestellt sein** ↔ **freiberuflich arbeiten**.
**etwas Neues** — capital N (Adjektiv als Nomen after *etwas*). **der Auftrag** (commission)
≠ **die Aufgabe** (task).

---

## Lektion 7 — Wortfeld: Rund ums Reisen ✅ (PDF p.42–43)

| Deutsch | English |
|---|---|
| die Sehenswürdigkeit | sight / tourist attraction |
| die Übernachtung | overnight stay |
| die Unterkunft | accommodation |
| der Reiseführer | travel guide(book) |
| das Souvenir | souvenir |
| die Touristin / der Tourist | tourist (f. / m.) |
| die Erholung | rest / relaxation |
| das Abenteuer | adventure |
| die Reisebegleitung | travel companion |

★ Gender trap: **das Abenteuer** (ends in -er but is neuter). **die Unterkunft** → Pl. *Unterkünfte*.
The -ung / -keit / -kunft suffixes are reliably feminine.

---

## Lektion 8 — Wortfeld: Politik & Gesellschaft ✅ (PDF p.48–49)

| Deutsch | English |
|---|---|
| die Bürgerin / der Bürger | citizen (f. / m.) |
| das Gesetz | law |
| die Politik | politics / policy |
| der Staat | state |
| die Gesellschaft | society |
| die Aktivistin / der Aktivist | activist (f. / m.) |
| die Pflicht | duty / obligation |
| freiwillig | voluntary |
| sozial | social |
| ökologisch | ecological |

★ Gender trap: **das Gesetz** (neuter, not masculine). Last three (freiwillig, sozial, ökologisch)
are adjectives. -schaft → **die** Gesellschaft.

---

## Lektion 9 — Wortfeld: Rund ums Studium ✅ (PDF p.52–53)

| Deutsch | English |
|---|---|
| der Abschluss | degree / graduation |
| der Bericht | report |
| das Fach | (academic) subject |
| die Prüfung | exam / test |
| das Semester | semester / term |
| das Seminar | seminar |
| die Studiengebühren | tuition fees (Pl.) |
| die Vorlesung | lecture |
| das Zertifikat | certificate |

★ **die Studiengebühren** is plural-only. **das Seminar** (small, interactive) vs **die Vorlesung**
(large lecture). Gender clusters: das Fach/Semester/Seminar/Zertifikat · die Prüfung/Vorlesung · der Abschluss/Bericht.

---

## Lektion 10 — Wortfeld: Rund um die Arbeit ✅ (PDF p.60–61)

| Deutsch | English |
|---|---|
| die (Arbeits-)Stelle | (work) position / job |
| das Einkommen | income |
| die Karriere | career |
| die Berufserfahrung | professional experience |
| die Kündigung | dismissal / resignation |
| die Verantwortung | responsibility |
| die Weiterbildung | further training |
| die Herausforderung | challenge |
| die Mitbestimmung | (employee) co-determination |
| die Kritik | criticism |
| das Feedback | feedback |

★ Gender trap: only **das Einkommen** and **das Feedback** are neuter — all the rest are *die*.
The -ung nominalizations (Kündigung, Verantwortung, Weiterbildung, Herausforderung, Mitbestimmung)
are all feminine. **die Kündigung** = both dismissal (by employer) and resignation (by employee).
