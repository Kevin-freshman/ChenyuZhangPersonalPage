# Field Notes — implementation brief

## A. Profile
Chenyu “Kevin” Zhang; HKUST CSE undergraduate with AI Extended Major; Hong Kong. Robotics, embodied AI, dexterous manipulation, human–robot interaction. Python, C++, Java, MuJoCo, Arduino, IMU sensing, OpenCV, Git, Linux. Existing projects: IMU hand teleoperation, turn-taking, RoboMaster, Polymarket/Blockspace quantitative analysis. Public links and email are held in `site/src/data/profile.ts`. Berkeley is only additional Summer Session coursework, CS 188 / CS 61BL. No publications or new accomplishments are inferred. Missing: portrait, CV PDF, real experiment imagery, latest research-direction details. These are not rendered as empty slots.

## B. Positioning and approved direction
Robotics undergraduate with practical sensing and simulation experience. Audience: robotics faculty and researchers assessing undergraduate research candidates. User approved candidate D (Field Notes) from four generated previews and asked to reduce Berkeley prominence and include quant under projects.

Design hypothesis: the two research areas read as entries in a personal field notebook. Hero composition: serif name left, two landscape concept studies right, navigation underneath. Layout: asymmetrical diptych with rules and project numbering. Type: Newsreader Variable, DM Sans Variable, system monospace metadata. Palette: paper #f7f5f0, ink #252622, terracotta #a64323. Materials: limestone, fabric, pale ceramic. Motion: small entrance translation and image hover scale. No particle canvas, fake dashboards, generated body text or marketing slogans. The page retains candidate D's layout instead of the previous sans-serif portrait-card hero.

## C. Modules
| Module | Goal / evidence | Pattern / visuals |
|---|---|---|
| Hero | Name, HKUST identity, robotics focus | Editorial diptych / two approved concept images |
| Hand teleoperation | 11 IMUs, Arduino acquisition, 16-DOF MuJoCo, latency/synchronization questions | Research notes and concept illustration |
| Turn-taking | Existing HKUST research interest, conversational timing | Question-led notes and concept illustration; no invented specific contributions |
| Projects | Polymarket analysis and RoboMaster vision | Text-based numbered index, public quant repository link |
| Background | HKUST, toolkit, brief Berkeley coursework | Education notes; text only |
| Contact | Email / GitHub / LinkedIn | Typographic close |

Primary sections have overflow-safe viewport minimum heights, responsive stacking, semantic headings, visible focus and mobile navigation. No forced scroll snapping. Reduced-motion setting disables movement. PDF output uses browser printing and dedicated page styles.

## D. Assets
Prompts and manifest: `site/src/data/imagePrompts.ts` and `generatedAssets.ts`. Files: `public/generated/teleoperation.png`, `public/generated/interaction.png`. The same images appear in the first viewport and research entries; no extra decorative images are needed. Both have user-approved concept status, explicit captions and descriptive alt text. The supplied skill brand SVG is copied unchanged. Identity is typographic CZ, with no portrait image slot until user supplies a portrait. Quant has no fabricated chart or screenshot.

## E. Motion
One restrained Hero entry movement through Framer Motion; image-hover scaling through CSS; reduced-motion fallback; no Canvas or PixiJS. All information is semantic HTML. Offscreen images lazy-load; first viewport images load eagerly.

## F. Preview decision
Exactly four image-model previews were generated before implementation. User selected D. Approximate visual review scores: A 4.5, B 4.6, C 4.3, D 4.5 / 5. D controls composition, but the user's Robotics emphasis and removal of prominent Berkeley references take precedence.

## G. Copy review
Headline: Robotics & embodied AI. Summary: I work on hand teleoperation and human–robot interaction. I’m interested in how robots sense human movement and act on it. CTAs: Explore research / Get in touch. Other final copy lives in React data and components.

Generic significance, promotional language, negative parallelisms, abstract triples, template sentences and unsupported claims removed: yes. Concrete project details present: yes. Interview plausibility and human editor pass: pass. Unconfirmed grades/awards/dates and specific turn-taking contributions are omitted. No services offered or results invented.

## H. Implementation
React 18 / TypeScript / Vite / Tailwind / Framer Motion / Lucide. Source at `site/`, assets at `public/`, verified production output copied to repository root to preserve existing GitHub Pages configuration. Build validates assets. Self-hosted fonts and base-aware URLs. No external API keys or backend required.

## I. Validation boundary
Run TypeScript plus production build, verify generated files and local references, inspect semantic output and deployed responses. Browser visual/interaction testing is not claimed unless separately performed. PDF opens the browser print dialog. Generated image originals retain provenance; captions distinguish concepts from evidence.
