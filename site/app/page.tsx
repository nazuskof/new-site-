import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { DiamondMark } from "@/components/DiamondMark";

export default function HomePage() {
  const [hero, ...rest] = products;

  return (
    <>
      {/* HERO */}
      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-10 pb-16 pt-10 md:pt-16">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-stone-600">
              <DiamondMark size={10} className="text-gold" />
              Édition N°01 — Printemps 2026
            </div>
            <h1 className="mt-6 font-display text-display-xl text-ink">
              Le sac
              <br />
              <span className="italic text-stone-600">long</span>,
              <br />
              marqué au
              <br />
              losange.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-stone-600">
              Quatre silhouettes, un seul geste : une bandoulière longue, un
              cuir pleine fleur, un losange piqué à la main. Fabriqué en petites
              séries à Florence.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-primary">
                Découvrir la collection
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link href="/about" className="btn-outline">
                L’atelier
              </Link>
            </div>

            <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-ink/15 pt-8">
              <div>
                <dt className="eyebrow">Fabrication</dt>
                <dd className="mt-2 font-display text-2xl text-ink">Florence</dd>
              </div>
              <div>
                <dt className="eyebrow">Cuir</dt>
                <dd className="mt-2 font-display text-2xl text-ink">Pleine fleur</dd>
              </div>
              <div>
                <dt className="eyebrow">Éditions</dt>
                <dd className="mt-2 font-display text-2xl text-ink">2 / an</dd>
              </div>
            </dl>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
              <Image
                src={hero.image}
                alt={`${hero.name} — ${hero.edition}, sac bandoulière en cuir`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div className="bg-cream px-3 py-2">
                  <p className="text-[10px] uppercase tracking-widest text-stone-600">
                    Pièce en vedette
                  </p>
                  <p className="mt-0.5 font-display text-lg text-ink">
                    {hero.name} · {hero.color}
                  </p>
                </div>
                <Link
                  href={`/shop/${hero.slug}`}
                  className="inline-flex h-11 w-11 items-center justify-center bg-ink text-white transition-colors hover:bg-gold"
                  aria-label={`Voir ${hero.name}`}
                >
                  <ArrowRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden="true" className="overflow-hidden border-b border-ink/15 py-5">
        <div className="flex items-center gap-10 whitespace-nowrap font-display text-2xl tracking-tight text-ink">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-10 opacity-90">
              Cuir pleine fleur
              <DiamondMark size={10} className="text-gold" />
              Piqué main
              <DiamondMark size={10} className="text-gold" />
              Série limitée
              <DiamondMark size={10} className="text-gold" />
              Fait à Florence
              <DiamondMark size={10} className="text-gold" />
            </span>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-10 py-20">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">Le geste</p>
            <h2 className="mt-4 font-display text-display-md text-ink">
              Un losange,
              <br />
              tracé,
              <br />
              <span className="italic text-stone-600">répété</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-6">
            <p className="text-base leading-relaxed text-stone-600">
              Le motif naît d’un pliage. Une diagonale, puis son inverse, puis la
              rencontre des deux — un losange au centre, rabat fermé. Chaque sac
              est piqué à la main, fil poissé, trois à quatre heures au cadran,
              par un seul artisan du début à la fin.
            </p>
            <ul className="mt-8 divide-y divide-ink/15 border-y border-ink/15 text-sm">
              {[
                ["01", "Sélection du cuir en tannerie toscane"],
                ["02", "Coupe et marquage du motif au compas"],
                ["03", "Piqûre main au fil de lin ciré"],
                ["04", "Finition à la cire, numérotation"],
              ].map(([n, label]) => (
                <li key={n} className="flex items-center justify-between py-4">
                  <span className="font-display text-base text-stone-600">{n}</span>
                  <span className="text-right text-ink">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2 md:col-start-11">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink link-underline"
            >
              Voir l’atelier <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section>
        <div className="container-ed py-20">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">La collection</p>
              <h2 className="mt-3 font-display text-display-lg text-ink">
                Quatre <span className="italic text-stone-600">éditions</span>.
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden items-center gap-2 text-xs uppercase tracking-widest text-ink link-underline sm:inline-flex"
            >
              Tout voir <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          <div className="mt-12 sm:hidden">
            <Link href="/shop" className="btn-outline w-full">
              Voir toute la collection
            </Link>
          </div>
        </div>
      </section>

      {/* PRESS / QUOTE */}
      <section className="border-t border-ink/15 bg-ink text-cream">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-8 py-20">
          <div className="col-span-12 md:col-span-2">
            <p className="text-[11px] uppercase tracking-widest text-cream/60">
              Dans la presse
            </p>
          </div>
          <blockquote className="col-span-12 md:col-span-9">
            <p className="font-display text-display-md">
              “Un objet qui refuse le logo et choisit la forme —
              <span className="italic text-stone-300">
                {" "}
                le plus beau sac de l’année.
              </span>
              ”
            </p>
            <footer className="mt-8 text-xs uppercase tracking-widest text-cream/60">
              — Revue Matière, Mars 2026
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
