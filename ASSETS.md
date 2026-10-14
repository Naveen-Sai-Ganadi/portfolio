# Asset provenance

`public/images/naveen.jpeg` is the original photograph supplied by the user.

`public/images/naveen-cutout.png` was prepared with the built-in image generation/editing tool (background extraction). The original has not been overwritten. Review the prepared portrait against the original before publication if exact pixel preservation is important.

Final edit prompt:

> Use case: background-extraction. Edit target: the supplied photograph of Naveen wearing a black blazer. Remove ONLY the entire tent/buildings/plants/background to genuine transparent alpha. Keep the exact original person's identity, face, hair, expression, body, pose, clothing, skin texture, lighting and colors. Do not beautify, stylize, redraw, relight, reconstruct, or change any facial features. Preserve the original crop at the lower torso, and retain all visible shoulders and arms with careful natural hair and jacket edges. Output a high-quality photographic transparent cutout for a personal portfolio hero. No text, no graphic effects, no artificial backdrop.

Project illustrations are authored in HTML/CSS/SVG in `src/visuals.js`. They are labeled conceptual visualizations and are based on the project descriptions supplied by the user. They contain no real client records or product screenshots.

The 39 experience scenes and 16 GitHub project scenes use authored procedural Three.js miniatures in `src/semantic-objects.js` and individual compositions in `src/semantic-scenes.js`, shared geometry and typography textures in `src/journey-worlds.js`, and the bundled Three.js RoomEnvironment for illumination. No stock models, downloaded game assets, or generated company screenshots were used. Current company website palettes inform experience colors; GitHub project colors are editorial choices, not official repository brand identities. The stylized camera-study busts are synthetic geometry, not extracted from the user’s photograph.
