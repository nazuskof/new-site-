import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-ink/15 bg-cream text-ink">
      <div className="container-ed grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl leading-[0.95] tracking-tight">
            Un cuir.
            <br />
            Un motif.
            <br />
            Une maison.
          </p>
          <p className="mt-6 max-w-sm text-sm text-stone-600">
            Losange est une maison de maroquinerie fondée en 2024, spécialisée dans
            le sac bandoulière long, au motif losange signature.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Explorer</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/shop" className="link-underline">
                Boutique
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-underline">
                Atelier
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Lettre</p>
          <p className="mt-4 text-sm text-stone-600">
            Les nouvelles éditions, deux fois par an. Aucun spam.
          </p>
          <form
            className="mt-4 flex gap-2"
            action="/contact"
            method="get"
            aria-label="Formulaire d’inscription à la lettre"
          >
            <label htmlFor="news-email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="news-email"
              name="email"
              type="email"
              required
              placeholder="vous@exemple.com"
              className="min-h-11 w-full border border-ink bg-transparent px-4 text-sm text-ink placeholder:text-stone-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            />
            <button type="submit" className="btn-primary px-5">
              S’inscrire
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink/15">
        <div className="container-ed flex flex-col items-start justify-between gap-4 py-6 text-xs uppercase tracking-widest text-stone-600 md:flex-row md:items-center">
          <p>© {year} Losange — Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="link-underline">
              Mentions légales
            </Link>
            <Link href="/about" className="link-underline">
              Livraison & retours
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 link-underline"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
