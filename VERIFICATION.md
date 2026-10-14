# Verification — October 13, 2026

## Build and content

- Production build completed successfully with Vite 7.3.7.
- Automated mapping check confirmed 39 scene definitions for 39 experience paragraphs, preserving order and full source text.
- Eight GitHub projects have sixteen scenes. All nineteen catalog links match the public repository snapshot.
- The production JavaScript bundle is about 738 kB minified / 214 kB gzip. Vite reports its standard >500 kB chunk-size warning. This is a build warning, not a failed build.

## Isolated Chromium checks

- At 1440×1000, every one of the 39 experience scenes and sixteen GitHub scenes selected the expected company/project, point, and scene type. No JavaScript errors or browser warnings were recorded in that scene sweep.
- At 390×844, representative scenes from all six companies and all eight GitHub projects rendered without horizontal page overflow.
- Every scene title, caption, and highlight was measured against control placement at 390×844, 360×640, 1366×768, and 1024×768. A mobile highlight spacing issue was corrected; the repeated layout check found no overlap under those checks.
- Point selection, next/previous across company boundaries, chapter navigation, and GitHub next-point navigation reached the expected targets.
- The experience detail dialog showed the original source paragraph, closed with Escape, and restored its opener. Existing native dialog focus behavior is retained.
- Forward/reverse movement selected different point scenes and backgrounds. Settled rendering generated zero additional frames over a 1.5-second idle observation.
- Manual motion-off exposed six experience and eight project records. Initial OS reduced motion created no journey WebGL canvases and kept all fourteen records available without horizontal overflow.
- Simulated WebGL creation failure exposed readable records for both journeys. Short landscape (844×390) showed readable records with no horizontal overflow.
- Final built-site checks at port 4173 verified an experience scene and a GitHub scene, including the correct direct repository URL. No runtime errors or failed HTTP resource responses were recorded.
- A short walkthrough was recorded, and a frame was extracted and inspected to confirm the recording contains the updated scene content.

## Limits

Checks used isolated Chromium on this Mac. They do not establish Safari/Firefox compatibility, assistive-technology certification, a hardware-independent frame-rate guarantee, or subjective design acceptance. The visualizations are conceptual. Personal résumé claims and third-party repository software have not been independently audited or executed.

## Object-specific scene revision

The repeated node/card diagram builder was replaced by 55 individually composed scenes using recognizable procedural miniatures. All 39 experience scenes and sixteen GitHub scenes rendered in isolated Chromium at 1440×1000 without console warnings or JavaScript errors. Every scene was captured and reviewed in visual contact sheets. Fourteen representative mobile scenes covered all six experiences and eight GitHub projects, with no horizontal page overflow. Navigation, original-text dialogs, reverse scrolling, idle-frame suspension, manual motion-off, reduced-motion initialization, WebGL failure, and short-landscape fallback checks passed again.

The subsequent refinements to line-evidence tracing, invoice sorting, variance auditing, and the synthetic vision bust were checked in the production build. Morgan Stanley is now the visible client chapter and the website destination, with Workmate Inc explicitly credited as the engagement employer in the scene, records, and detail dialogs. The Morgan Stanley chapter and attribution were checked on desktop and mobile. Original résumé text remains unchanged.

A mobile chapter-link check found that native hash positioning could land at the end of a point. Chapter anchors now account for the sticky viewport and target the same readable point position as the navigation controls; the production deep-link check confirms the expected progress.

The three legacy featured-project sections (SpendRule, Company Brain, and Voice at the edge) were removed along with their navigation link and animation timelines. The built page contains no legacy case sections; Always building follows the GitHub section and retains its four project dialogs. Build and browser checks passed without runtime warnings or errors.
