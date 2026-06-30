# Frontend Changes Log

## Logo.tsx — Logo scroll animation rewrite

**Before:** Single-image approach. Base `logo.png` faded out, same `logo.png` overlaid with animated width (100%→40%) clipped from the right via `overflow-hidden` wrapper, sliding left `-8px`. Used `icon.png` was not used.

**After:** Two-image cross-fade + spring slide.
- `logo.png` base fades out: `opacity = max(1 - p*2, 0)` (gone by `p=0.5`)
- `icon.png` overlay slides from right → left using Framer Motion `useSpring(200, { stiffness: 50, damping: 20 })` for ~1.5s smooth settle time
- `icon.png` fades in: `opacity = min(p*2, 1)` (fully visible by `p=0.5`)
- `motion.img` with `style={{ x: smoothX }}` binds the spring motion value to translateX
- Target updates in `useEffect`: `smoothX.set(isReduced ? 0 : (1-p) * 200)`
- Spring continues animating even after user stops scrolling
- `prefers-reduced-motion`: instant switch at `p=0.5` (full logo ↔ icon only, no animation)
- Removed `willChange` manual hint (Framer Motion handles it)
- Resolved `react-hooks/set-state-in-effect` lint error with lazy `useState` initializer for `isReduced`

## Navbar.tsx — Accessibility

- Added `focus-visible:ring-2 focus-visible:ring-primary` to hamburger menu button

## Daftar page (`src/app/daftar/page.tsx`)

- Changed header from static `bg-white` → scroll-based gradient-primary → solid white
- Pre-scroll: `gradient-primary` with light logo variant + white "Beranda" back link
- Post-scroll (`scrollY > 48`): `bg-white/95 backdrop-blur-md border-b shadow-sm` with dark logo + dark back link
- Logo scroll animation (full→icon) works same as home page via `logoProgress = clamp(scrollY/80, 0, 1)`

## Footer (`src/components/layout/Footer.tsx`)

- CTA banner inside footer: dark gradient, `-translate-y-1/2` to float 50/50 between main section and footer
- Heading "Revolutionizing Payments, One palm at a time" (left) + "Mulai pendaftaran biometrik" button (right)
- `rounded-2xl`, `max-w-6xl mx-auto` centered
- CTA section removed from `page.tsx` standalone, lives entirely inside Footer

## Features section (`src/components/sections/Features.tsx`)

- Static grid replaced with interactive vertical tabs (left column: 4 tab buttons with icon+title, right column: dynamic content with icon, title, description, "Pelajari Lebih Lanjut" CTA)
- Autoplay: `useRef` + `useCallback` + `useEffect` pattern, 2500ms interval, resets on manual tab click
- Active tab: `bg-neutral-900` with white text

## QrisComparison section (`src/components/sections/QrisComparison.tsx`)

- "Adopsi saat ini" row removed
- Bottom padding increased to `pb-44 / lg:pb-52` for CTA banner breathing room

## Scroll-reveal animations

- Slide-up (`opacity: 0→1, y: 24→0`) on subheadings + descriptions across Features, HowItWorks, UseCases, QrisComparison, CtaSection
- Respects `prefers-reduced-motion`

## Logo variant prop

- Added `variant` (`dark`/`light`) and `size` (`sm`/`lg`) props to Logo component
- Light variant uses `brightness-0 invert` CSS filter for white logo on dark backgrounds
- Navbar passes `variant={isSolid ? "dark" : "light"}`, `size="sm"`, `progress={logoProgress}`
- Footer passes `variant="light"`, `size="lg"`
