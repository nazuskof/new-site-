import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { DiamondMark } from "@/components/DiamondMark";

export const metadata: Metadata = {
  title: "Contact — Losange",
  description:
    "Écrivez-nous, passez à la boutique Paris Marais ou à l’atelier Florence.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink/15">
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-10 pb-16 pt-14 md:pt-20">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow flex items-center gap-3">
              <DiamondMark size={10} className="text-gold" />
              Nous écrire
            </p>
            <h1 className="mt-6 font-display text-display-xl text-ink">
              On vous
              <br />
              <span className="italic text-stone-600">répond</span>,
              <br />
              en 48h.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-base leading-relaxed text-stone-600">
              Une question sur un modèle, une commande, une visite d’atelier ?
              Utilisez le formulaire — ou passez par l’un des canaux ci-dessous.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + COORDS */}
      <section>
        <div className="container-ed grid grid-cols-12 gap-x-6 gap-y-16 py-16">
          <div className="col-span-12 md:col-span-7">
            <form
              className="space-y-6"
              aria-label="Formulaire de contact"
              action="#"
              method="post"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first"
                    className="eyebrow mb-2 block"
                  >
                    Prénom<span className="text-gold"> *</span>
                  </label>
                  <input
                    id="first"
                    name="first"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="min-h-11 w-full border border-ink bg-transparent px-4 py-2 text-sm text-ink placeholder:text-stone-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  />
                </div>
                <div>
                  <label htmlFor="last" className="eyebrow mb-2 block">
                    Nom<span className="text-gold"> *</span>
                  </label>
                  <input
                    id="last"
                    name="last"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="min-h-11 w-full border border-ink bg-transparent px-4 py-2 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="eyebrow mb-2 block">
                  E-mail<span className="text-gold"> *</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="vous@exemple.com"
                  className="min-h-11 w-full border border-ink bg-transparent px-4 py-2 text-sm text-ink placeholder:text-stone-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                />
              </div>

              <div>
                <label htmlFor="subject" className="eyebrow mb-2 block">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="min-h-11 w-full border border-ink bg-transparent px-3 py-2 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  defaultValue="order"
                >
                  <option value="order">Une commande</option>
                  <option value="product">Un produit</option>
                  <option value="appointment">Rendez-vous à l’atelier</option>
                  <option value="press">Presse</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">
                  Message<span className="text-gold"> *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-y border border-ink bg-transparent px-4 py-3 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  placeholder="Dites-nous tout…"
                />
                <p className="mt-2 text-[11px] uppercase tracking-widest text-stone-600">
                  Réponse sous 48h ouvrées.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-start gap-3 text-xs text-stone-600">
                  <input
                    type="checkbox"
                    name="newsletter"
                    className="mt-0.5 h-4 w-4 border-ink accent-ink"
                  />
                  Je souhaite recevoir la lettre Losange (2 / an).
                </label>
                <button type="submit" className="btn-primary">
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          <aside className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="eyebrow">Nos adresses</p>
            <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
              <li className="flex items-start gap-4 py-5">
                <MapPin
                  className="mt-0.5 h-4 w-4 text-ink"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-display text-lg text-ink">Boutique — Paris</p>
                  <p className="mt-1 text-sm text-stone-600">
                    14 rue de Turenne, 75004 Paris
                    <br />
                    Mardi – Samedi · 11h – 19h
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 py-5">
                <MapPin
                  className="mt-0.5 h-4 w-4 text-ink"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-display text-lg text-ink">Atelier — Florence</p>
                  <p className="mt-1 text-sm text-stone-600">
                    Via di Santo Spirito 8, 50125 Firenze
                    <br />
                    Sur rendez-vous uniquement
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 py-5">
                <Mail
                  className="mt-0.5 h-4 w-4 text-ink"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-display text-lg text-ink">E-mail</p>
                  <a
                    href="mailto:bonjour@losange.maison"
                    className="mt-1 inline-block text-sm link-underline"
                  >
                    bonjour@losange.maison
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 py-5">
                <Phone
                  className="mt-0.5 h-4 w-4 text-ink"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-display text-lg text-ink">Téléphone</p>
                  <a
                    href="tel:+33142710000"
                    className="mt-1 inline-block text-sm link-underline"
                  >
                    +33 1 42 71 00 00
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
