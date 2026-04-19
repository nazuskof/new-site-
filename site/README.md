# Losange — Maroquinerie éditoriale

Site e-commerce multi-pages pour une maison fictive de maroquinerie,
spécialisée dans le **sac bandoulière long à motif losange**.

## Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS 3**
- **TypeScript**
- **lucide-react** pour les icônes (SVG uniquement, aucun emoji)
- Polices : **Playfair Display** + **Inter** (Google Fonts via `next/font`)

## Design system

Style **Brutalisme / Editorial** généré avec `ui-ux-pro-max`.
Source de vérité : `../design-system/losange/MASTER.md`.

| Rôle        | Valeur    |
| ----------- | --------- |
| Primary     | `#1C1917` |
| Accent/Gold | `#A16207` |
| Background  | `#FAFAF9` |
| Foreground  | `#0C0A09` |

## Pages

- `/` — Home (hero éditorial, manifesto, grille produits, citation presse)
- `/shop` — Boutique (filtres couleur, tri, grille)
- `/shop/[slug]` — Fiche produit (galerie, specs, histoire, related)
- `/about` — Atelier (timeline, valeurs)
- `/contact` — Contact (formulaire, adresses)
- `/not-found` — 404 éditorial

## Installation

```bash
cd site
npm install
npm run dev
```

Le site tourne sur <http://localhost:3000>.

## Structure

```
site/
├── app/
│   ├── layout.tsx          # Header + Footer globaux, polices, skip link
│   ├── page.tsx            # Home
│   ├── globals.css         # Tokens + classes utilitaires
│   ├── shop/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── not-found.tsx
├── components/
│   ├── Header.tsx          # Nav sticky + menu mobile accessible
│   ├── Footer.tsx          # Newsletter + coordonnées
│   ├── ProductCard.tsx
│   └── DiamondMark.tsx     # Logo losange SVG
├── lib/
│   └── products.ts         # Catalogue (4 éditions)
└── tailwind.config.ts
```

## Accessibilité

- Contraste AA respecté (4.5:1+ sur tous les textes)
- Skip link en haut de page
- Focus visibles (ring 2px)
- `prefers-reduced-motion` respecté
- Aucun emoji comme icône — uniquement `lucide-react`
- Hit target ≥ 44px sur tous les contrôles
- Labels visibles sur tous les champs de formulaire
