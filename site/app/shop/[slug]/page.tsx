import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Check, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProduct, formatPrice, products } from "@/lib/products";
import { DiamondMark } from "@/components/DiamondMark";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Introuvable — Losange" };
  return {
    title: `${product.name} · ${product.edition} — Losange`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-ink/15">
        <div className="container-ed py-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-stone-600 hover:text-ink"
          >
            <ArrowLeft className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
            Retour à la boutique
          </Link>
        </div>
      </section>

      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-10 py-10 md:py-16">
          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[4/5] w-full overflow-hidden bg-stone-200">
                <Image
                  src={product.gallery[0]}
                  alt={`${product.name}, vue principale`}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                  priority
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 border border-ink/80 bg-cream/80 px-2 py-1 text-[10px] uppercase tracking-widest text-ink backdrop-blur-sm">
                  <DiamondMark size={10} className="text-gold" /> Édition limitée
                </span>
              </div>
              {product.gallery.slice(1).map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-square w-full overflow-hidden bg-stone-200"
                >
                  <Image
                    src={src}
                    alt={`${product.name}, vue ${i + 2}`}
                    fill
                    sizes="(min-width: 768px) 27vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:sticky md:top-24 md:self-start">
            <p className="eyebrow">{product.edition}</p>
            <h1 className="mt-3 font-display text-display-md text-ink">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-ink">{formatPrice(product.price)}</p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-600">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="eyebrow">Couleur</p>
              <div className="mt-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-6 w-6 rounded-full border border-ink/30"
                  style={{ backgroundColor: product.colorHex }}
                />
                <span className="text-sm text-ink">{product.color}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button type="button" className="btn-primary w-full">
                <Check className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                Ajouter au panier — {formatPrice(product.price)}
              </button>
              <button type="button" className="btn-outline w-full">
                Prendre rendez-vous à l’atelier
              </button>
            </div>

            <dl className="mt-8 divide-y divide-ink/15 border-y border-ink/15 text-sm">
              <div className="flex items-start justify-between gap-6 py-4">
                <dt className="eyebrow">Cuir</dt>
                <dd className="text-right text-ink">{product.leather}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-4">
                <dt className="eyebrow">Dimensions</dt>
                <dd className="text-right text-ink">{product.dimensions}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-4">
                <dt className="eyebrow">Fabrication</dt>
                <dd className="text-right text-ink">Florence, Italie</dd>
              </div>
            </dl>

            <ul className="mt-6 grid grid-cols-3 gap-3 text-[11px] uppercase tracking-widest text-stone-600">
              <li className="flex flex-col items-start gap-2">
                <Truck className="h-4 w-4 text-ink" strokeWidth={1.5} aria-hidden="true" />
                Livraison offerte dès 400 €
              </li>
              <li className="flex flex-col items-start gap-2">
                <RotateCcw className="h-4 w-4 text-ink" strokeWidth={1.5} aria-hidden="true" />
                30 jours pour changer d’avis
              </li>
              <li className="flex flex-col items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-ink" strokeWidth={1.5} aria-hidden="true" />
                Garantie atelier 10 ans
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-8 py-16">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">L’histoire</p>
          </div>
          <p className="col-span-12 font-display text-display-md text-ink md:col-span-8">
            {product.story}
          </p>
        </div>
      </section>

      {/* RELATED */}
      <section>
        <div className="container-ed py-16">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-display-md text-ink">
              Autres éditions
            </h2>
            <Link
              href="/shop"
              className="text-xs uppercase tracking-widest text-ink link-underline"
            >
              Tout voir
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Link
                href={`/shop/${p.slug}`}
                key={p.slug}
                className="group block"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="object-cover transition-opacity duration-500 ease-editorial group-hover:opacity-90"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <p className="font-display text-lg text-ink">{p.name}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-stone-600">
                      {p.edition}
                    </p>
                  </div>
                  <p className="text-sm text-ink">{formatPrice(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
