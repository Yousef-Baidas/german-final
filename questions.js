/*
 * questions.js — the quiz databank for the German B1.1 study site.
 *
 * IMPORTANT (do not "modernize" to fetch('questions.json')):
 * This file assigns a GLOBAL `QUIZ_BANK`, loaded via a plain <script src="questions.js">.
 * That works BOTH locally (double-click index.html, file://) AND on GitHub Pages.
 * A .json file loaded with fetch() fails locally under file:// because of CORS.
 *
 * Schema per question:
 *   { id, topic, level, type, prompt, options?, answer, accept?, explanation }
 *   - type "mc"   -> options[] are shown as buttons; `answer` is the correct option.
 *   - type "fill" -> free-text input; checked case-insensitively + umlaut-tolerantly
 *                    (ae/oe/ue/ss <-> ä/ö/ü/ß). `accept[]` lists extra valid answers.
 *   - level is "B1.1" or "A2.2" (A2.2 = Wiederholung items that carry over). Drives the badge.
 *   - topic must match a study-section topic so the topic filter lines up.
 *
 * Seeded from content/quiz-seed.md (the items drilled in the session). Expand per Lektion
 * as each Wortfeld is OCR'd into content/vocab.md.
 */
const QUIZ_BANK = [
  /* -- Konnektoren -------------------------------------------------------- */
  { id: 1, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "___ ich klein war, hatte ich einen Hund.",
    options: ["Als", "Wenn"], answer: "Als",
    explanation: "One finished period in the past -> als." },

  { id: 2, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "___ ich gestern nach Hause kam, war niemand da.",
    options: ["Als", "Wenn"], answer: "Als",
    explanation: "'gestern' = one moment in the past -> als." },

  { id: 3, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "___ ich Kind war, haben wir jeden Tag Fußball gespielt.",
    options: ["Als", "Wenn"], answer: "Als",
    explanation: "Childhood is one past block; the football repeating doesn't change the clause -> als." },

  { id: 4, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "(Immer) ___ das Telefon klingelte, wurde ich nervös.",
    options: ["Als", "Wenn"], answer: "Wenn",
    explanation: "Repeated trigger ('every time', note the 'immer') -> wenn." },

  { id: 5, topic: "Konnektoren", level: "A2.2", type: "mc",
    prompt: "Es regnet. ___ nehme ich einen Regenschirm.",
    options: ["Deshalb", "Trotzdem"], answer: "Deshalb",
    explanation: "Cause -> result (you take it because it rains). trotzdem would mean the opposite (contrast)." },

  { id: 6, topic: "Konnektoren", level: "A2.2", type: "mc",
    prompt: "Ich war sehr müde. ___ bin ich noch joggen gegangen.",
    options: ["Deshalb", "Trotzdem"], answer: "Trotzdem",
    explanation: "Contrast: tired, but went anyway -> trotzdem." },

  { id: 7, topic: "Konnektoren", level: "A2.2", type: "fill",
    prompt: "Ich lerne viel Deutsch, ___ ich die Prüfung bestehen will.",
    answer: "weil", accept: ["weil"],
    explanation: "Reason; weil is subordinating -> verb to the end (...bestehen will)." },

  { id: 8, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "___ es kalt war, sind wir schwimmen gegangen.",
    options: ["Obwohl", "Trotzdem"], answer: "Obwohl",
    explanation: "Subordinating concession -> verb to the end (...kalt war). trotzdem would keep the verb in position 2." },

  { id: 9, topic: "Konnektoren", level: "B1.1", type: "fill",
    prompt: "Ich gehe zum Supermarkt, ___ Brot zu kaufen.",
    answer: "um", accept: ["um"],
    explanation: "Same subject (ich ... ich) -> um ... zu + Infinitiv." },

  { id: 10, topic: "Konnektoren", level: "B1.1", type: "fill",
    prompt: "Ich spreche laut, ___ du mich besser verstehst.",
    answer: "damit", accept: ["damit"],
    explanation: "Different subjects (ich / du) -> damit." },

  { id: 11, topic: "Konnektoren", level: "B1.1", type: "fill",
    prompt: "Ich habe vor, am Wochenende ___. (fernsehen)",
    answer: "fernzusehen", accept: ["fernzusehen"],
    explanation: "Separable verb: zu goes in the seam -> fern-zu-sehen." },

  { id: 12, topic: "Konnektoren", level: "B1.1", type: "fill",
    prompt: "Vergiss nicht, mich später ___! (anrufen)",
    answer: "anzurufen", accept: ["anzurufen"],
    explanation: "Separable verb: an-zu-rufen." },

  { id: 13, topic: "Konnektoren", level: "B1.1", type: "fill",
    prompt: "Es ist wichtig, viel Wasser ___. (trinken)",
    answer: "zu trinken", accept: ["zu trinken", "trinken"],
    explanation: "Normal (non-separable) verb -> zu stays in front: zu trinken." },

  { id: 14, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "___ ich dusche, singe ich laut.",
    options: ["Während", "Bevor", "Bis", "Seit"], answer: "Während",
    explanation: "Two things at the same time -> während." },

  { id: 15, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "Bleib bitte hier, ___ ich zurückkomme.",
    options: ["Während", "Bevor", "Bis", "Seit"], answer: "Bis",
    explanation: "Up to an end point -> bis." },

  { id: 16, topic: "Konnektoren", level: "B1.1", type: "mc",
    prompt: "___ ich in Deutschland wohne, esse ich viel Brot.",
    options: ["Während", "Bevor", "Bis", "Seit"], answer: "Seit",
    explanation: "Started then, still true now -> seit (and note: present tense in German)." },

  /* -- Adjektivdeklination ------------------------------------------------ */
  { id: 17, topic: "Adjektivdeklination", level: "A2.2", type: "fill",
    prompt: "das ___ Haus  (groß — Nom., neutral)",
    answer: "große", accept: ["große", "grosse"],
    explanation: "das already shows neuter -> the adjective relaxes to -e." },

  { id: 18, topic: "Adjektivdeklination", level: "A2.2", type: "fill",
    prompt: "ein ___ Kind  (klug — Nom., neutral)",
    answer: "kluges", accept: ["kluges"],
    explanation: "ein hides the gender -> the adjective grabs the signal -es (das -> -es)." },

  { id: 19, topic: "Adjektivdeklination", level: "A2.2", type: "fill",
    prompt: "Ich kaufe einen ___ Tisch.  (klein — Akk., maskulin)",
    answer: "kleinen", accept: ["kleinen"],
    explanation: "Masculine accusative -> -en." },

  { id: 20, topic: "Adjektivdeklination", level: "A2.2", type: "fill",
    prompt: "mit dem ___ Auto  (rot — Dat., neutral)",
    answer: "roten", accept: ["roten"],
    explanation: "Any dative -> -en." },

  { id: 21, topic: "Adjektivdeklination", level: "A2.2", type: "fill",
    prompt: "der ___ Hund  (klein — Nom., maskulin)",
    answer: "kleine", accept: ["kleine"],
    explanation: "der shows the gender -> adjective relaxes to -e." },

  { id: 22, topic: "Adjektivdeklination", level: "A2.2", type: "fill",
    prompt: "ein ___ Hund  (klein — Nom., maskulin)",
    answer: "kleiner", accept: ["kleiner"],
    explanation: "ein gives no signal -> the adjective grabs -er (der -> -er)." },

  { id: 23, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "___ Kaffee schmeckt gut.  (heiß — Nullartikel, mask. Nom.)",
    answer: "heißer", accept: ["heißer", "heisser"],
    explanation: "No article -> the adjective carries the full signal: der -> -er." },

  { id: 24, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "Ich esse gern ___ Brot.  (frisch — Nullartikel, neut. Akk.)",
    answer: "frisches", accept: ["frisches"],
    explanation: "No article -> das -> -es." },

  { id: 25, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "Ich koche mit ___ Öl.  (gut — Nullartikel, neut. Dat.)",
    answer: "gutem", accept: ["gutem"],
    explanation: "No article -> dem -> -em." },

  { id: 26, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "Komparativ:  schnell -> ___",
    answer: "schneller", accept: ["schneller"],
    explanation: "Komparativ = adjective + -er." },

  { id: 27, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "Superlativ:  gut -> am ___",
    answer: "besten", accept: ["besten"],
    explanation: "Irregular: gut -> besser -> am besten." },

  { id: 28, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "Superlativ:  alt -> am ___",
    answer: "ältesten", accept: ["ältesten", "aeltesten"],
    explanation: "Umlaut on short a/o/u: alt -> älter -> am ältesten." },

  { id: 29, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "der ___ Zug  ('the faster train' — schnell)",
    answer: "schnellere", accept: ["schnellere"],
    explanation: "Build the comparative (schneller), then add the normal der-ending -e." },

  { id: 30, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "ein ___ Auto  ('a bigger car' — groß, neut. Nom.)",
    answer: "größeres", accept: ["größeres", "groesseres", "grösseres"],
    explanation: "größer + ein-neuter signal -es. Don't slip into the superlative 'größte'!" },

  { id: 31, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "ein ___ Mann  (alt — mask. Nom.)",
    answer: "älterer", accept: ["älterer", "aelterer"],
    explanation: "älter + ein-masculine signal -er -> the double -er is correct." },

  { id: 32, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "die ___ Frau  (jung — fem. Nom.)",
    answer: "jüngere", accept: ["jüngere", "juengere"],
    explanation: "jünger (umlaut) + die-ending -e." },

  { id: 33, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "Genitiv:  trotz ___  (der Regen — maskulin)",
    answer: "des Regens", accept: ["des Regens"],
    explanation: "Masculine genitive -> des + the noun adds -s." },

  { id: 34, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "Genitiv:  wegen ___  (das schlechte Wetter — neutral)",
    answer: "des schlechten Wetters", accept: ["des schlechten Wetters"],
    explanation: "des + adjective always -en + noun -s." },

  { id: 35, topic: "Adjektivdeklination", level: "B1.1", type: "fill",
    prompt: "Genitiv:  trotz ___  (eine lange Reise — feminin)",
    answer: "einer langen Reise", accept: ["einer langen Reise"],
    explanation: "einer + adjective -en; the feminine noun itself doesn't change." },

  /* -- Konjunktiv II ------------------------------------------------------ */
  { id: 36, topic: "Konjunktiv II", level: "A2.2", type: "fill",
    prompt: "Wenn ich mehr Zeit ___, würde ich Sport machen.  (haben)",
    answer: "hätte", accept: ["hätte", "haette"],
    explanation: "haben has its own Konjunktiv-II form -> hätte (not 'würde haben')." },

  { id: 37, topic: "Konjunktiv II", level: "A2.2", type: "fill",
    prompt: "Wenn ich du ___, würde ich das nicht machen.  (sein)",
    answer: "wäre", accept: ["wäre", "waere"],
    explanation: "sein -> wäre (not 'würde sein')." },

  { id: 38, topic: "Konjunktiv II", level: "B1.1", type: "fill",
    prompt: "___ Sie mir bitte das Salz geben?  (können — höflich)",
    answer: "Könnten", accept: ["könnten", "koennten"],
    explanation: "Polite request -> könnten." },

  { id: 39, topic: "Konjunktiv II", level: "B1.1", type: "mc",
    prompt: "Wenn das Wetter schön wäre, ___ ich spazieren gehen.",
    options: ["würde", "werde"], answer: "würde",
    explanation: "Hypothetical -> würde + Infinitiv (werde is the real future, not the conditional)." },

  /* -- Wortbildung -------------------------------------------------------- */
  { id: 40, topic: "Wortbildung", level: "B1.1", type: "fill",
    prompt: "die Person  ->  Adjektiv mit -lich:  ___",
    answer: "persönlich", accept: ["persönlich", "persoenlich"],
    explanation: "-lich turns the noun into an adjective, often + umlaut -> persönlich." },

  { id: 41, topic: "Wortbildung", level: "B1.1", type: "fill",
    prompt: "das Brot  ->  Verkleinerung mit -chen:  ___",
    answer: "Brötchen", accept: ["das Brötchen", "Brötchen", "broetchen", "das broetchen"],
    explanation: "-chen -> always das + umlaut: das Brötchen." },

  { id: 42, topic: "Wortbildung", level: "B1.1", type: "fill",
    prompt: "Ich habe nichts ___ gehört.  (neu)",
    answer: "Neues", accept: ["Neues", "neues"],
    explanation: "After etwas/nichts -> capitalised adjective + -es: nichts Neues." },

  { id: 43, topic: "Wortbildung", level: "B1.1", type: "fill",
    prompt: "'der Tag' + 'die Zeit' = das Kompositum:  ___",
    answer: "die Tageszeit", accept: ["die Tageszeit", "Tageszeit"],
    explanation: "Linking -s-; the gender comes from the LAST noun (die Zeit) -> die Tageszeit." },

  /* -- Wortschatz — Lektion 1: Lebensphasen ------------------------------ */
  { id: 44, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Vergangenheit = ?",
    options: ["the present", "the past", "the future"], answer: "the past",
    explanation: "die Vergangenheit = the past (it also names the past tense)." },

  { id: 45, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Geburt = ?",
    options: ["birth", "youth", "old age"], answer: "birth",
    explanation: "die Geburt = birth." },

  { id: 46, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "der/die Erwachsene = ?",
    options: ["child", "adult", "teenager"], answer: "adult",
    explanation: "Adjektiv als Nomen: ein Erwachsener, die Erwachsenen = adult." },

  { id: 47, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "the future -> ___",
    answer: "die Zukunft", accept: ["die Zukunft", "Zukunft"],
    explanation: "die Zukunft = the future." },

  { id: 48, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "childhood -> ___",
    answer: "die Kindheit", accept: ["die Kindheit", "Kindheit"],
    explanation: "die Kindheit = childhood." },

  { id: 49, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "old age -> ___",
    answer: "das Alter", accept: ["das Alter", "Alter"],
    explanation: "Gender trap: das Alter, not 'die'." },

  { id: 50, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "Welcher Artikel?  ___ Alter",
    options: ["der", "die", "das"], answer: "das",
    explanation: "das Alter — the odd one out in a field that's otherwise all 'die'." },

  { id: 51, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "Welcher Artikel?  ___ Jugend",
    options: ["der", "die", "das"], answer: "die",
    explanation: "die Jugend = youth / adolescence." },

  { id: 52, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "youth -> ___",
    answer: "die Jugend", accept: ["die Jugend", "Jugend"],
    explanation: "die Jugend = youth / adolescence." },

  { id: 53, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Schulzeit = ?",
    options: ["retirement", "school years", "birth"], answer: "school years",
    explanation: "die Schulzeit = the school years." },

  /* -- Wortschatz — Lektion 2-10 (OCR'd from the Bildlexikon) ------------ */
  { id: 54, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "der Freundeskreis = ?",
    options: ["circle of friends", "best friend", "clique"], answer: "circle of friends",
    explanation: "der Freundeskreis = the wider circle of friends (die Clique = a tight group)." },

  { id: 55, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "friendship -> ___",
    answer: "die Freundschaft", accept: ["die Freundschaft", "Freundschaft"],
    explanation: "die Freundschaft (-schaft nouns are feminine)." },

  { id: 56, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "der/die Bekannte = ?",
    options: ["close friend", "acquaintance", "colleague"], answer: "acquaintance",
    explanation: "Adjektiv als Nomen: ein Bekannter / eine Bekannte = acquaintance." },

  { id: 57, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "zuverlässig = ?",
    options: ["reliable", "creative", "punctual"], answer: "reliable",
    explanation: "zuverlässig = reliable / dependable." },

  { id: 58, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "fleißig = ?",
    options: ["lazy", "hard-working", "attentive"], answer: "hard-working",
    explanation: "fleißig = diligent / hard-working." },

  { id: 59, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "punctual -> ___ (Adjektiv)",
    answer: "pünktlich", accept: ["pünktlich", "puenktlich"],
    explanation: "pünktlich (der Punkt + -lich)." },

  { id: 60, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "sich an etwas gewöhnen = ?",
    options: ["to get used to something", "to change something", "to repeat something"], answer: "to get used to something",
    explanation: "sich an etwas (Akk.) gewöhnen = to get used to something." },

  { id: 61, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Gewohnheit = ?",
    options: ["a habit", "a resolution", "stamina"], answer: "a habit",
    explanation: "die Gewohnheit = a habit (der Vorsatz = a resolution, die Ausdauer = stamina)." },

  { id: 62, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "to make an effort / exert oneself -> sich ___ (Verb)",
    answer: "anstrengen", accept: ["anstrengen", "sich anstrengen"],
    explanation: "sich anstrengen — reflexive, keep the sich." },

  { id: 63, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "Welcher Artikel?  ___ Werkstatt",
    options: ["der", "die", "das"], answer: "die",
    explanation: "die Werkstatt — from die Statt, not die Stadt." },

  { id: 64, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "library -> ___",
    answer: "die Bibliothek", accept: ["die Bibliothek", "Bibliothek"],
    explanation: "die Bibliothek = library." },

  { id: 65, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Waschküche = ?",
    options: ["laundry room", "communal kitchen", "workshop"], answer: "laundry room",
    explanation: "die Waschküche = laundry room (die Gemeinschaftsküche = communal kitchen)." },

  { id: 66, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "einen Traum verwirklichen = ?",
    options: ["to make a dream come true", "to plan a project", "to take a risk"], answer: "to make a dream come true",
    explanation: "einen Traum verwirklichen = to make a dream come true." },

  { id: 67, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "fest angestellt sein = ?",
    options: ["to be permanently employed", "to work freelance", "to gain experience"], answer: "to be permanently employed",
    explanation: "fest angestellt sein, the opposite of freiberuflich arbeiten (freelance)." },

  { id: 68, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "to gain / collect experience -> Erfahrungen ___ (Verb)",
    answer: "sammeln", accept: ["sammeln"],
    explanation: "Erfahrungen sammeln = to gain experience." },

  { id: 69, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "Welcher Artikel?  ___ Abenteuer",
    options: ["der", "die", "das"], answer: "das",
    explanation: "das Abenteuer — ends in -er but is neuter (a gender trap)." },

  { id: 70, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "accommodation / lodging -> ___",
    answer: "die Unterkunft", accept: ["die Unterkunft", "Unterkunft"],
    explanation: "die Unterkunft (Pl. Unterkünfte)." },

  { id: 71, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Sehenswürdigkeit = ?",
    options: ["sight / tourist attraction", "souvenir", "overnight stay"], answer: "sight / tourist attraction",
    explanation: "die Sehenswürdigkeit = a sight / tourist attraction." },

  { id: 72, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "Welcher Artikel?  ___ Gesetz",
    options: ["der", "die", "das"], answer: "das",
    explanation: "das Gesetz — neuter, not masculine." },

  { id: 73, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Pflicht = ?",
    options: ["the duty", "the law", "the state"], answer: "the duty",
    explanation: "die Pflicht = duty / obligation (das Gesetz = law, der Staat = state)." },

  { id: 74, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "society -> ___",
    answer: "die Gesellschaft", accept: ["die Gesellschaft", "Gesellschaft"],
    explanation: "die Gesellschaft (-schaft → feminine)." },

  { id: 75, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Vorlesung = ?",
    options: ["the lecture", "the seminar", "the certificate"], answer: "the lecture",
    explanation: "die Vorlesung = a (large) lecture; das Seminar = a small, interactive class." },

  { id: 76, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "Welcher Artikel?  ___ Abschluss",
    options: ["der", "die", "das"], answer: "der",
    explanation: "der Abschluss — masculine (the degree you finish with)." },

  { id: 77, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "the exam / test -> ___",
    answer: "die Prüfung", accept: ["die Prüfung", "Prüfung", "pruefung", "die pruefung"],
    explanation: "die Prüfung (-ung → feminine)." },

  { id: 78, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "die Kündigung = ?",
    options: ["dismissal / resignation", "promotion", "income"], answer: "dismissal / resignation",
    explanation: "die Kündigung covers both dismissal (by employer) and resignation (by employee)." },

  { id: 79, topic: "Wortschatz", level: "B1.1", type: "mc",
    prompt: "Welcher Artikel?  ___ Einkommen",
    options: ["der", "die", "das"], answer: "das",
    explanation: "das Einkommen — one of only two neuter words in this field (with das Feedback)." },

  { id: 80, topic: "Wortschatz", level: "B1.1", type: "fill",
    prompt: "the challenge -> ___",
    answer: "die Herausforderung", accept: ["die Herausforderung", "Herausforderung"],
    explanation: "die Herausforderung (-ung → feminine)." },
];

/* Expose for the <script src> load (and tolerate module contexts). */
if (typeof window !== "undefined") { window.QUIZ_BANK = QUIZ_BANK; }
