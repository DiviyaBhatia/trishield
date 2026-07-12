---
name: TriShield Systems
description: Managed IT, security, and infrastructure operations partner — the site that convinces IT decision-makers TriShield is an extension of their own team.
colors:
  trust-blue: "#1d77ba"
  trust-blue-deep: "#155a8e"
  ember-orange: "#f15a27"
  ember-orange-deep: "#dc4512"
  ink: "#171717"
  card-stone: "#F3F3F1"
  card-slate: "#EAEAEA"
  border-mist: "#e5e7eb"
  surface: "#ffffff"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 100
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  full: "9999px"
spacing:
  sm: "0.5rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.ember-orange}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.ember-orange-deep}"
  button-secondary:
    backgroundColor: "{colors.trust-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-secondary-hover:
    backgroundColor: "{colors.trust-blue-deep}"
  eyebrow-tag:
    backgroundColor: "transparent"
    textColor: "{colors.trust-blue}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  service-card:
    backgroundColor: "{colors.card-stone}"
    rounded: "{rounded.lg}"
    padding: "32px 48px"
  input-field:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

# Design System: TriShield Systems

## 1. Overview

**Creative North Star: "The Operations Console"**

TriShield isn't selling a product, it's selling operational trust: a NOC/SOC team that runs a client's infrastructure like it's their own. The site should feel like the calm, competent interface of a team that's actually watching — steady, specific, unhurried — not a pitch deck dressed up as a homepage. Every screen earns credibility through concrete detail (named services, real tooling, partner logos) rather than adjectives.

This system explicitly rejects the generic AI/SaaS-template look: no cream or beige body backgrounds, no gradient-clip hero headlines, no interchangeable icon-card grids repeated for their own sake. Confidence here comes from restraint and specificity, the way an ops dashboard earns trust — not from decoration.

**Key Characteristics:**
- Two-color system: Trust Blue for steadiness and navigation, Ember Orange reserved for the one action that matters (contact/CTA).
- Flat, white-first surfaces; depth is a hover response, not a resting state.
- Poppins carries authority in headlines; Outfit carries readability in body copy — the pairing itself is the entire type system, no third face.
- Soft full-radius pills for wayfinding (nav, eyebrow tags, tab controls) against sharper rounded rectangles for content containers (cards, buttons, inputs) — pill shape means "navigate/filter", rectangle means "read/act".

## 2. Colors

The palette is deliberately narrow: one steady blue, one warm action orange, and a wide neutral range doing the rest of the work. Color is spent, not decorated with.

### Primary
- **Trust Blue** (#1d77ba): The dependability color. Used for the brand wordmark accent, active/selected states (tabs, scrolled nav), links, focus rings, and the secondary "Get in Touch" button variant. Also the color now carrying the four bolded eyebrow labels (What We Do, Why Choose Us, Latest Insights, About Us) so they read as intentional, not decorative gray.

### Secondary
- **Ember Orange** (#f15a27, deep hover #dc4512): The single "act now" color. Reserved almost exclusively for primary CTAs (Explore Services, Get in Touch, Send Message) and small accent icon badges (Available/Agile/Ahead pillars). Its rarity is what makes it legible as "click here."

### Neutral
- **Surface White** (#ffffff): The default page and card background across the entire site — this is a white-first system, not a tinted-neutral one.
- **Ink** (#171717 / gray-900): Primary heading and body-emphasis text.
- **Card Stone** (#F3F3F1) / **Card Slate** (#EAEAEA): Alternating backgrounds for the stacked service cards — the one place the palette uses a subtle warm/cool neutral pair to differentiate adjacent panels without adding a third brand color.
- **Border Mist** (gray-200/gray-300, ~#e5e7eb): Hairline borders and dividers throughout — cards, inputs, footer rules.
- **Muted text** (gray-400/500/600): Secondary copy, descriptions, placeholders — never the primary reading color for body paragraphs longer than a line.

### Named Rules
**The One Action Rule.** Ember Orange appears only on the element the visitor should click next. If two orange elements are visible in the same viewport, one of them is wrong.

## 3. Typography

**Display Font:** Poppins (with system sans-serif fallback)
**Body Font:** Outfit (with system sans-serif fallback)

**Character:** Poppins carries every heading at heavier weights for authority; the hero display line breaks that rule deliberately with a font-thin weight to feel like a calm opening statement rather than a shout. Outfit runs underneath as the reading face — geometric but warm, never competing with Poppins for attention.

### Hierarchy
- **Display** (font-thin/100, clamp ~2.5rem–4.5rem, tight leading): Hero headline only. One per page.
- **Headline** (bold/700, 1.875rem–3.75rem, -0.02em tracking): Section titles ("Explore Our Comprehensive Range of Services", "Why Partner With Us?").
- **Title** (bold/700, 1.5rem–2.25rem): Card and component headings (service titles, advantage titles).
- **Body** (regular/400, 0.875rem–1rem, 1.6 line-height): Paragraph copy, capped conversationally at a readable measure — don't let body paragraphs run full-bleed on wide desktop cards.
- **Label** (bold/700, 0.75rem, 0.1em tracking, uppercase): Eyebrow tags, "Key Solutions" sub-headers, footer pillar labels (Available/Agile/Ahead).

### Named Rules
**The Restraint Break Rule.** Weight is the primary hierarchy signal (thin hero → bold headline → bold label), not size alone. When in doubt, change weight before changing size.

## 4. Elevation

Soft & responsive: surfaces are flat at rest and gain shadow only in response to interaction. Nothing on the page carries a resting drop shadow heavier than `shadow-sm`; hover states deepen the shadow and lift the element slightly (translateY(-8px) on cards, translateY(-4px) on buttons), signaling "this responds to you" rather than implying permanent physical depth. The one exception is the stacked service-card deck, which uses a heavier layered shadow to sell the fanned-stack illusion as cards scroll past each other — that's a structural effect, not a hover state.

### Shadow Vocabulary
- **Resting** (`shadow-sm`, `0 1px 2px rgba(0,0,0,0.05)`): Default card/nav state.
- **Hover response** (`shadow-lg` / `shadow-xl`): Buttons and advantage/service cards on hover, always paired with a small upward transform.
- **Stack depth** (`0 -12px 30px -5px rgba(0,0,0,0.06), 0 15px 15px -5px rgba(0,0,0,0.02)`): The sticky-stacking service cards only — a deliberate exception to the flat-by-default rule.
- **Modal** (`shadow-2xl`): Contact modal only, paired with a `bg-black/60 backdrop-blur-sm` scrim — the one place true elevation (a floating layer above the page) is intentional.

### Named Rules
**The Flat-By-Default Rule.** If a shadow doesn't respond to hover, focus, or a genuine layering need (modal, stacked cards), remove it.

## 5. Components

Confident and grounded: solid color fills, bold weight labels, minimal ornament. Components read as tools a technical buyer trusts, not marketing flourishes.

### Buttons
- **Shape:** Rounded rectangle, 0.75rem radius (`rounded-xl`).
- **Primary:** Ember Orange fill, white bold text, `16px 32px` padding, `shadow-lg` at rest, deepens on hover with a 4px lift. Used for the one primary action per view (Get in Touch, Send Message).
- **Secondary:** Trust Blue fill, otherwise identical shape/motion to primary — used when a screen needs a second, lower-emphasis action alongside the orange primary (Hero's "Get in Touch" next to "Explore Services").
- **Hover/Focus:** Background deepens one step (`#dc4512` / `#155a8e`), `-translate-y-1`, shadow grows. No border, no outline change — the fill and lift alone carry the feedback.

### Eyebrow Tags (Label Pills)
- **Style:** Full-radius pill (`rounded-full`), `8px 16px` padding, 1px border, bold uppercase 0.75rem text in Trust Blue (`border-[#1d77ba]/30`, `text-[#1d77ba]`) on light surfaces; inverted to a bold white-on-translucent-white variant on the dark Insights section background.
- **Rule:** One eyebrow per section maximum, and only above section headers already load-bearing enough to deserve it (What We Do, Why Choose Us, Latest Insights, About Us) — never as decoration above every subsection.

### Cards / Containers
- **Corner Style:** 1.5rem radius (`rounded-2xl`/`rounded-3xl`) — generous rounding on all content containers, consistent across service cards, advantage cards, and the contact modal.
- **Background:** White by default; Card Stone/Card Slate alternation only in the service-card stack, for visual separation between adjacent panels.
- **Shadow Strategy:** See Elevation — flat at rest, lift + shadow on hover, transparent border that tints toward the accent color on hover (`hover:border-[#1d77ba]/20` or `hover:border-red-500/20` for risk cards).
- **Border:** Transparent at rest, 1px accent-tinted on hover; hairline `border-gray-200/50` on the largest service cards for definition against a white page.
- **Internal Padding:** Generous — `32px` mobile, `48px` desktop on primary cards.

### Inputs / Fields
- **Style:** White background, 1px `border-gray-200`, `rounded-xl`, `12px 16px` padding, semibold gray-700 label above each field.
- **Focus:** `ring-2 ring-[#1d77ba]` — the only place a hard focus ring appears; no border-color change, the ring is the entire focus signal.
- **Error/Disabled:** Not yet implemented in the codebase — required fields currently rely on native HTML `required` validation only. Flag as a gap if the contact form needs custom error states.

### Navigation
- **Style:** Floating pill nav, fixed with `top-4` offset, full-radius at rest (opens to `rounded-[2rem]` when the mobile menu expands), `backdrop-blur-md`. Unscrolled: `bg-white/75`, gray-800 text. Scrolled (`scrollY > 10`): `bg-blue-100/95` with a Trust-Blue-tinted border, signaling "you've moved past the hero" without changing layout.
- **Typography:** Bold uppercase nav labels, Ember Orange hover color on every link — the only place orange appears outside CTAs, functioning as a consistent "you're hovering something clickable" signal.
- **Mobile:** Same pill container expands downward with a bordered-top stacked link list; the About Us dropdown becomes a native `<details>` disclosure instead of a JS-toggled panel.

### Segmented Tabs (Trishield Edge)
- **Style:** White pill container (`rounded-2xl`, `shadow-sm`) holding 3 flex-equal buttons. Active tab: Trust Blue fill, white bold text, `shadow-md`. Inactive: transparent, gray-600 text, gray-50 hover.

## 6. Do's and Don'ts

### Do:
- **Do** keep Ember Orange (#f15a27) to one instance per viewport — it means "click this."
- **Do** use Trust Blue (#1d77ba) for anything that signals "you're here" or "this is active" (nav scrolled state, active tab, focus ring, bolded eyebrow tags).
- **Do** keep shadows flat at rest and let hover states carry all elevation change, except the deliberate stacked-card and modal exceptions documented in Elevation.
- **Do** pair Poppins bold headlines with Outfit regular body copy — no third typeface, ever.
- **Do** lead every service/advantage description with a concrete, named detail (a tool, a certification, a service acronym like PIM/PAM) before any adjective.

### Don't:
- **Don't** use a cream, beige, or warm-tinted near-white as a page background — surfaces are true white (#ffffff) or the two named neutral card tones only. This is the generic-AI-template tell PRODUCT.md explicitly rejects.
- **Don't** apply `background-clip: text` gradient treatments to headlines — emphasis comes from Trust Blue color-swap on a key phrase (see Hero's "Our Solutions", Services' "Innovative Services"), never a gradient.
- **Don't** build another identical icon-card grid section. The site already has one strong repeating pattern (the service-card stack); a second interchangeable card grid reads as template filler.
- **Don't** add a colored `border-left`/`border-right` stripe accent to any card or list item — none exist in the current system, and it isn't this brand's visual language.
- **Don't** stack more than one eyebrow-tag label per section, and don't add one to every subsection just because the pattern exists elsewhere on the page.
