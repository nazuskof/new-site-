export type Product = {
  slug: string;
  name: string;
  edition: string;
  price: number;
  currency: "EUR";
  color: string;
  colorHex: string;
  leather: string;
  dimensions: string;
  description: string;
  story: string;
  image: string;
  gallery: string[];
};

export const products: Product[] = [
  {
    slug: "losange-01-noir",
    name: "Losange 01",
    edition: "Édition Noir",
    price: 680,
    currency: "EUR",
    color: "Noir",
    colorHex: "#0C0A09",
    leather: "Vachette pleine fleur, tannage végétal",
    dimensions: "H 18 × L 26 × P 6 cm · Bandoulière 115–135 cm",
    description:
      "Notre silhouette inaugurale. Un rectangle allongé, bord franc, motif losange piqué à la main sur le rabat.",
    story:
      "Dessiné à Paris, assemblé dans un atelier de trois artisans à Florence. Chaque pièce porte le numéro de son créateur et la date de fabrication.",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "losange-02-cognac",
    name: "Losange 02",
    edition: "Édition Cognac",
    price: 720,
    currency: "EUR",
    color: "Cognac",
    colorHex: "#A16207",
    leather: "Vachette pleine fleur, patine naturelle",
    dimensions: "H 20 × L 30 × P 7 cm · Bandoulière 120–140 cm",
    description:
      "Une version plus généreuse, au cuir patiné main. Le losange prend la lumière, la bandoulière se porte sous le bras ou en travers.",
    story:
      "Le cognac est obtenu par frottement à la cire et au chiffon, sans teinture industrielle. Deux pièces ne sont jamais identiques.",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1590739225287-bd31519780c3?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "losange-03-ivoire",
    name: "Losange 03",
    edition: "Édition Ivoire",
    price: 740,
    currency: "EUR",
    color: "Ivoire",
    colorHex: "#E8E3D5",
    leather: "Agneau nappa, doublure suédine",
    dimensions: "H 16 × L 24 × P 5 cm · Bandoulière 110–130 cm",
    description:
      "La plus fine du trio. Un agneau souple, doublure suédine, fermeture aimantée dissimulée sous le rabat.",
    story:
      "Le modèle le plus demandé de la première collection. Livré avec une housse en coton non teint, cousue à Lyon.",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "losange-04-forest",
    name: "Losange 04",
    edition: "Édition Forêt",
    price: 760,
    currency: "EUR",
    color: "Vert forêt",
    colorHex: "#1F3B2C",
    leather: "Vachette pleine fleur, teinture au bain",
    dimensions: "H 19 × L 28 × P 6 cm · Bandoulière 115–135 cm",
    description:
      "Un vert profond, presque noir, révélé par la lumière. Boucle laiton non traité, qui se patinera avec le temps.",
    story:
      "Série limitée de 120 pièces. Chacune est numérotée au dos du rabat, sous le losange central.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number, currency: "EUR" = "EUR") {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
