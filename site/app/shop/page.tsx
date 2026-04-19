import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { DiamondMark } from "@/components/DiamondMark";

export const metadata: Metadata = {
  title: "Boutique — Losange",
  description:
    "La collection complète des sacs bandoulière Losange : noir, cognac, ivoire, forêt.",
};

const colors = ["Tous", "Noir", "Cognac", "Ivoire", "Vert forêt"] as const;

export default function ShopPage() {
  return (
    <>
      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 py-16 md:py-20">
          <div className="col-span-12 md:col-span-8">
            <p className="eyebrow flex items-center gap-3">
              <DiamondMark size={10} className="text-gold" />
              Collection · N°01
            </p>
            <h1 className="mt-6 font-display text-display-lg text-ink">
              Tous les
              <br />
              <span className="italic text-stone-600">sacs longs</span>.
            </h1>
          </div>
          <p className="col-span-12 mt-6 max-w-md text-sm text-stone-600 md:col-span-4 md:mt-auto">
            Quatre éditions, chacune numérotée à la main. Stock limité —
            fabrication par séries de 80 à 200 pièces.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-16 z-30 border-b border-ink/15 bg-cream/90 backdrop-blur">
        <div className="container-ed flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Filtrer par couleur" className="-mx-1 overflow-x-auto">
            <ul className="flex items-center gap-1 whitespace-nowrap px-1">
              {colors.map((c, i) => (
                <li key={c}>
                  <button
                    type="button"
                    aria-pressed={i === 0}
                    className="inline-flex min-h-11 items-center border border-transparent px-4 py-2 text-[11px] uppercase tracking-widest text-stone-600 transition-colors hover:text-ink aria-[pressed=true]:border-ink aria-[pressed=true]:text-ink"
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <label
              htmlFor="sort"
              className="text-[11px] uppercase tracking-widest text-stone-600"
            >
              Trier
            </label>
            <select
              id="sort"
              className="min-h-11 border border-ink bg-cream px-3 text-xs uppercase tracking-widest text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              defaultValue="newest"
            >
              <option value="newest">Nouveautés</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section>
        <div className="container-ed py-16">
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
