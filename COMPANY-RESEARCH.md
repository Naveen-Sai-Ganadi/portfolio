# Company research and experience animation direction

Reviewed October 13, 2026. Official public company pages supplied the business context and current visual inspiration. Employment dates, personal responsibilities, project descriptions and achievement figures continue to come from Naveen's supplied résumé. The scenes are conceptual explanations, not screenshots of company software. These are current website-inspired palettes, not a claim to reproduce historical or official brand guidelines.

| Experience | Public business context | Visual direction | Animation tied to the résumé | Primary source |
|---|---|---|---|---|
| SpendRule | Contract intelligence and line-level invoice enforcement for healthcare purchased services. | White, warm neutrals, and vivid orange, observed on the company homepage. | A contract becomes pricing, escalation and exception checks; evidence is attached for review. | [Product](https://spendrule.com/product), [Homepage](https://spendrule.com/) |
| Infillo AI | A healthcare front desk offering voice reception, scheduling, intake and related practice services. | Deep navy with cyan and magenta accents, observed on the company homepage. | A voice signal becomes intent, then an appointment in a scheduling illustration. | [Infillo](https://www.infillo.ai/) |
| RevScale AI | AI agents for sales, franchise networks and multi-location businesses. | Charcoal with muted green accents, observed on the current company homepage. | The four agents named in the résumé connect to a find/personalize/qualify pipeline. | [Revscale](https://revscale.com/) |
| Thirdi.co | Custom AI systems and business workflow automation. | Near-white, black and pale blue, observed on thirdi.co. | Text, speech and facial-expression signals combine into context for adaptive conversation. | [Thirdi.co](https://thirdi.co/) |
| Morgan Stanley — client engagement through Workmate Inc | Workmate provides technology consulting and services. Morgan Stanley operates in financial services, including wealth management, capital markets and trading. | Editorial navy, steel blue, and silver for the financial-services client engagement; not a reproduction of official brand guidelines. | An illustrative time series reveals anomalies, followed by preparation, evaluation and review. | [Workmate](https://www.workmateinc.com/about), [Morgan Stanley](https://www.morganstanley.com/about-us) |
| Capgemini | Business and technology transformation; its telecom practice includes network transformation, data, AI and automation. | Deep blue and cyan inspired by the observed company website and blue identity. | Telecom data sources connect into feature intelligence and optimization. | [Telecom practice](https://www.capgemini.com/industries/telecommunications/), [Homepage](https://www.capgemini.com/) |

## Research boundaries

- `thirdi.co` was used, matching the résumé. The separate `thirdi.ai` marketing platform was not substituted.
- Workmate remains the employer and Morgan Stanley remains the client engagement; the site does not recast this as direct employment at Morgan Stanley.
- Morgan Stanley's public text was accessible through web retrieval. Its pages did not load in the isolated visual browser (HTTP/2 error), so no visual identity claims were derived from an unseen screenshot. Following the user's clarification, the visible chapter centers Morgan Stanley and uses an editorial financial-services palette. Workmate Inc remains explicitly credited as the engagement employer.
- Current company-wide marketing figures, customer counts and client lists were not imported as Naveen's personal accomplishments.
- The calendar and financial chart contain illustrative data; no patient, prospect, client or trading records were used. No audio is recorded or played.

## Implementation

`src/experiences.js` retains the company metadata and source paragraphs. `src/experience-beats.js` maps each of the 39 supplied experience paragraphs to its own title, caption, metric, scene type, and environment mood. `src/semantic-objects.js` and `src/semantic-scenes.js` build recognizable objects and actions for each point; `src/story-scenes.js` owns the scenes and transitions; `src/journey.js` coordinates the scroll-linked camera, assembly, changing backgrounds, and lighting. `src/journey.css` contains the semantic overlays and responsive layouts.

The global motion setting, OS reduced-motion preference, and WebGL failure fallback reveal ordinary readable records. The full paragraph for every point is also available from its scene. `SCENE-COVERAGE.md` documents the complete mapping. No company marketing claims were converted into personal achievements.
