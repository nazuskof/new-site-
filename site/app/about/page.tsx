import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DiamondMark } from "@/components/DiamondMark";

export const metadata: Metadata = {
  title: "Atelier — Losange",
  description:
    "Losange est une maison de maroquinerie fondée en 2024. Un atelier, trois artisans, des séries courtes.",
};

const timeline = [
  { year: "2023", title: "Premier prototype", body: "Un rabat, un losange, un fil ciré. Le dessin ne changera plus." },
  { year: "2024", title: "Fondation à Paris", body: "Deux co-fondatrices. Une ligne : le sac long, le cuir, la main." },
  { year: "2025", title: "Atelier Florence", body: "Rencontre avec Paolo, Elena et Marco. L’atelier prend place à Santo Spirito." },
  { year: "2026", title: "Édition N°01", body: "Quatre couleurs, 600 pièces. L’essentiel. Rien d’autre." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-10 pb-16 pt-14 md:pt-20">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <DiamondMark size={10} className="text-gold" />
              L’atelier
            </p>
            <h1 className="mt-6 font-display text-display-xl text-ink">
              Trois
              <br />
              <span className="italic text-stone-600">mains</span>,
              <br />
              une <br />
              forme.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-base leading-relaxed text-stone-600">
              Losange est une maison de maroquinerie fondée en 2024 à Paris.
              Nous dessinons des sacs longs, piqués à la main, dans un atelier
              de trois artisans à Florence. Nous ne faisons qu’une chose :
              <span className="text-ink"> bien la faire</span>.
            </p>
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              Pas de logo extérieur. Pas de saison. Deux éditions par an, quand
              le cuir et la main sont prêts — pas avant.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE + QUOTE */}
      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-10 py-16">
          <div className="relative col-span-12 aspect-[16/10] md:col-span-8">
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80"
              alt="Atelier de maroquinerie — cuir, fil ciré, outils"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
            />
          </div>
          <figure className="col-span-12 self-end md:col-span-4">
            <blockquote className="font-display text-display-md text-ink">
              “Le sac <span className="italic text-stone-600">est</span> son
              motif. Si on l’enlève, il n’y a plus rien.”
            </blockquote>
            <figcaption className="mt-6 text-xs uppercase tracking-widest text-stone-600">
              Elena C. · Maître artisan
            </figcaption>
          </figure>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-12 py-20">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">Histoire</p>
            <h2 className="mt-4 font-display text-display-md text-ink">
              Quatre
              <br />
              années.
            </h2>
          </div>
          <ol className="col-span-12 divide-y divide-ink/15 border-y border-ink/15 md:col-span-9">
            {timeline.map((t) => (
              <li
                key={t.year}
                className="grid grid-cols-12 gap-4 py-6 md:py-8"
              >
                <div className="col-span-12 md:col-span-2">
                  <p className="font-display text-2xl text-ink">{t.year}</p>
                </div>
                <div className="col-span-12 md:col-span-10">
                  <p className="text-base text-ink">{t.title}</p>
                  <p className="mt-2 max-w-xl text-sm text-stone-600">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ink text-cream">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-10 py-20">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[11px] uppercase tracking-widest text-cream/60">
              Nos principes
            </p>
            <h2 className="mt-4 font-display text-display-lg">
              Trois règles,
              <br />
              rien de plus.
            </h2>
          </div>
          <ol className="col-span-12 grid grid-cols-1 gap-8 md:col-span-8 md:grid-cols-3">
            {[
              ["01", "Un geste", "Le losange, piqué main. Partout, pareil."],
              ["02", "Peu, mais bien", "600 pièces par an. Pas plus."],
              ["03", "Sans logo", "Le motif suffit. On ne signe pas l’évidence."],
            ].map(([n, title, body]) => (
              <li key={n} className="border-t border-cream/20 pt-6">
                <p className="font-display text-3xl">{n}</p>
                <p className="mt-4 text-base text-cream">{title}</p>
                <p className="mt-2 text-sm text-cream/70">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="container-ed flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-display-md text-ink">
            Venez nous voir
            <span className="italic text-stone-600"> à l’atelier</span>.
          </h2>
          <Link href="/contact" className="btn-primary">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
