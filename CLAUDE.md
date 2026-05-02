# CLAUDE.md — SecondWave Inbox Website

## Priority 0: Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code. Every session. No exceptions.
- **Check `brand_assets/` folder** first. Logo, brand guidelines, email screenshots, and client logos live here.

## Brand Identity
- Background: #0C1935 (deep navy, near-black). Always dark. Never light mode.
- CTA Accent: pull the icy electric blue from the wave curl on SecondWave_Logo_1.png — use that hex as the accent throughout
- Flow label accent: #00B4A6 (teal)
- Campaign label accent: match CTA electric blue
- Full Stack label accent: #F5A623 (amber/gold)
- Primary text: #FFFFFF
- Muted text: #A0AEC0
- Font: 'Helvetica Neue', Helvetica, Arial, sans-serif — all weights, no import needed (system font)
- Heading weight: 700-800, tracking -0.03em on display sizes
- Body: weight 300-400, 16px minimum, line-height 1.7
- Logo nav: SecondWave_Logo_1.png (wave mark + wordmark)
- Logo footer: SecondWave_Logo_2.png
- No email addresses exposed anywhere on the page
- All CTAs link to: https://calendly.com/eesawithsecondwave/sw-audit
- Do not use the word "retainer" anywhere — say "ongoing management"

## Asset Reference
- Email portfolio: Frame_3.png through Frame_10.png
- Pricing layout reference: Frame_1__30_.png (replicate this exactly)
- Case study dashboard: GoCleanBefore_After.png
- Client logos: logo_functional_patterns.png, logo_goclean.png, logo_alghani_traders.png, logo_hippie_skin.png
- Social content slides: slide_who_checks_gmail.png, slide_mom_grandma.png, slide_they_all_check_inbox.png
- Pricing and case study references: pricing_reference.png, case_study_reference.png

## Local Server
- Serve on localhost only — never screenshot a file:/// URL
- Start: `node serve.mjs` at http://localhost:3000
- Do not start a second instance if already running

## Screenshot Workflow
- Use Puppeteer for screenshot comparisons
- Save to ./temporary_screenshots/screenshot-N.png
- Minimum 2 comparison rounds per major section
- Delete temporary screenshots between major build phases
- Skip screenshot loop for animated or scroll-behavior elements

## Output Format
- Single index.html file. All styles inline. No separate CSS file.
- Tailwind CSS via CDN
- Placeholder images via https://placehold.co/WIDTHxHEIGHT only where real assets are unavailable
- Mobile-first. Non-negotiable.

## Page Sections (build in this exact order)
1. Nav — sticky, logo left, links center, Book a Call button right (electric blue pill)
2. Hero — eyebrow, headline, subhead only. No CTA. No trust line.
3. VSL — headline only, video placeholder, CTA below
4. Client logo slider — auto-scrolling ribbon
5. Work portfolio — horizontal scroll carousel, Frame_3 through Frame_10
6. Case study — Go Clean primary, Functional Patterns secondary
7. Testimonials — Hashim video placeholder featured, two written cards below
8. Pricing — 3-column 3-row tiered structure from Frame_1__30_.png reference, hover elevation
9. FAQ — accordion, 5 questions
10. Content — 3 YouTube thumbnails, social slides carousel placeholder
11. Footer — logo, tagline, CTA, copyright

## Mobile Optimization Rules (Non-Negotiable)
- Test every section at 390px viewport after building it — do not skip this
- Nav: hamburger at 768px and below, full-screen overlay
- No horizontal scroll anywhere at any viewport width
- Hero headline: 32px minimum on mobile
- CTA buttons: 48px minimum height, full-width on mobile
- Pricing cards: single column on mobile, 3-column grid at 1024px+
- Case study: single column stack on mobile
- Testimonial cards: single column stack on mobile
- Email portfolio: 85vw card width so 1.5 cards visible, touch swipe
- Logo slider: pure CSS scroll, no JS dependency
- FAQ: full-width tap targets, minimum 44px height per item
- All touch targets minimum 44x44px

## GitHub Workflow
- Test everything on localhost first
- Do NOT commit or push to GitHub until explicitly told to
- When told to push: commit with descriptive message, push to main, confirm

## Anti-Generic Rules
- No default Tailwind blue or indigo
- No flat shadow-md — use layered color-tinted box-shadows
- Every clickable element: hover, focus-visible, and active states
- Surfaces have depth: base #0C1935 → elevated (slightly lighter navy) → floating (cards)
- Animate only transform and opacity. Never transition-all.
- Radial gradient glow behind hero headline, low opacity, for depth
- Pricing cards elevate on hover: transform translateY(-4px) with box-shadow transition

## Hard Rules
- No sections beyond the 11 listed above without explicit instruction
- Minimum 2 screenshot comparison rounds before declaring a section done
- No transition-all anywhere in the codebase
- No email addresses on the page
- No em dashes anywhere in copy
- Do not use the word "retainer" — use "ongoing management"
- Do not mention Upwork by name anywhere on the page
