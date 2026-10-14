# Naveen Ganadi — cinematic personal portfolio

A complete static portfolio built with Vite, GSAP, and Three.js. The editorial opening uses Naveen’s supplied portrait. The experience journey contains **39 scenes across six roles**, one for every paragraph of the supplied career history. A second journey contains **16 scenes across eight public GitHub projects**, followed by links to **all 19 public repositories** found on October 13, 2026. The “Always building” project index, skills, education, contact links, and downloadable résumé remain included.

## Run and build

Use Node.js 20.19+ or 22.12+ (Node 24 is supported).

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. To build and preview:

```sh
npm run build
npm run preview
```

The included `dist/` is ready to serve through a web server. Double-clicking its HTML file is not supported.

## Deploy to a custom domain

Upload **the contents of `dist/`**, including `assets/` and `images/`, to your domain’s web root. Source files and `node_modules` are not needed on the server.

- **Netlify:** deploy `dist/`, or connect the source with build command `npm run build` and publish directory `dist`. Add the domain in Domain management.
- **Cloudflare Pages:** use build command `npm run build`, output directory `dist`, and the Custom domains setup.
- **Vercel:** import the repository, select Vite, and use `npm run build` with output directory `dist`. Add the domain in Settings → Domains.
- **Shared hosting/cPanel:** upload the contents of `dist/` into the domain’s document root, often `public_html`.
- **GitHub Pages:** publish the contents of `dist/` and configure the custom domain in Pages settings. Relative asset paths also support subdirectory hosting.

Use the DNS records supplied by the chosen host and enable HTTPS. No hosting account, deployment, or DNS settings were changed during this task.

## The journeys

Scroll to assemble each scene, advance its explanation, and move the camera through the environment. Scrolling backward reverses the sequence. Company-inspired colors blend with the subject of each point: evidence, security, anomaly detection, deployment, and other topics each influence the environment, fog, floor, and lighting.

The point selector and previous/next buttons jump directly to a point. Chapter links move between companies or repositories. **Read this point** opens the full supplied experience paragraph; GitHub scenes have direct repository links. **Skip journey** moves to the ordinary readable records. The public repository list is a static snapshot; it requires no API token or runtime GitHub request.

The 55 scenes use individually composed, recognizable 3D objects and actions: invoice sorting trays, a document archive, tenant safes, a receptionist calendar, model-tuning controls, trading radar, telecom antenna towers, a debate table, and other objects tied to the work. Shared props are reused only where their meaning fits. The Morgan Stanley chapter is explicitly labeled as a client engagement through Workmate Inc. They are conceptual explanations, not recordings of the products or actual client records. Detailed coverage and source mapping are in `SCENE-COVERAGE.md`.

## Editing

| File | Purpose |
|---|---|
| `src/content.json` | Supplied résumé history, project descriptions, skills, education |
| `src/experience-beats.js` | 39 point titles, captions, scene types, and metrics, ordered to match the résumé |
| `src/experiences.js` | Company context, colors, source mapping, and readable experience records |
| `src/github-projects.js` | Eight researched GitHub projects and their sixteen scenes |
| `src/github-index.json` | All nineteen public repository links and metadata |
| `src/github-section.js` | GitHub records and repository catalog |
| `src/film-layout.js` | Shared semantic journey layout and chapter timing |
| `src/semantic-objects.js` | Procedural models: calendars, phones, safes, tools, servers, cameras, towers, and other recognizable objects |
| `src/semantic-scenes.js` | Fifty-five individually composed scenes and subject-specific scroll actions |
| `src/story-scenes.js` | Scene ownership, transitions, room architecture, and scene cache |
| `src/journey-worlds.js` | Shared materials, geometry, and typography textures |
| `src/journey.js` | Camera, environments, scroll controls, renderer, lifecycle, and fallbacks |
| `src/journey.css` | Scene overlays, controls, responsive layout, and readable records |
| `src/main.js` | Main page, contact links, and native detail dialogs |
| `src/motion.js` | Hero and page choreography and global motion preference |
| `src/style.css`, `src/visuals.js` | Main visual system and original conceptual project illustrations |
| `public/resume.md`, `public/resume.txt` | Original and readable downloadable résumé |

When adding an experience paragraph, add its corresponding scene at the same index in `experience-beats.js`. Update source content and the downloadable résumé together when changing dates or claims. No personal achievement or public project link was fabricated. GitHub claims come from public documentation and inspected source; the project software itself was not run or audited.

## Motion, accessibility, and rendering

Both journeys work on desktop and portrait mobile. Short viewports (580px high or less) use readable records. The global motion control and operating system’s reduced-motion setting remove camera tracks and scroll pinning. With reduced motion enabled before loading, no journey WebGL canvas is created. WebGL creation failures and lost contexts also reveal the readable records.

All narrative text is semantic HTML. Point selectors, chapter links, disclosure records, and native dialogs work with a keyboard. Dialogs close with Escape and restore focus. A skip link and visible focus styles are included. The entire portfolio remains readable with animation disabled.

Each journey creates its renderer only when approached. Only the current and transition-neighbor rooms render; point scenes are built on demand and pruned from a bounded cache. Rendering sleeps when settled, outside the viewport, or when the document is hidden. Pixel ratio is capped at 1.5 desktop / 1.25 mobile. Mobile omits bloom and shadows. Scene resources are released on final page exit.

Fonts are Manrope and DM Sans from Google Fonts with system fallbacks. GSAP and Three.js r180 are bundled locally. Procedural geometry, a locally generated studio environment, physical materials, fog, and restrained desktop bloom require no downloaded models or API keys. No analytics, backend, recording, or contact-form service is included.

## Sources and verification

- `COMPANY-RESEARCH.md`: company context, palette inspiration, primary sources, and boundaries.
- `GITHUB-RESEARCH.md`: selected repositories, inspected files, and public-source interpretation.
- `SCENE-COVERAGE.md`: every experience paragraph and GitHub scene mapped to its visualization.
- `ASSETS.md`: original portrait and prepared cutout provenance.
- `VERIFICATION.md`: build and isolated-browser checks and their limits.

The source résumé is dated October 2026. Its employment and achievement claims have not been independently audited. The original supplied portrait is preserved; its prepared transparent cutout is used in the hero.
