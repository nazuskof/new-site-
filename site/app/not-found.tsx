import Link from "next/link";
import { DiamondMark } from "@/components/DiamondMark";

export default function NotFound() {
  return (
    <section>
      <div className="container-ed flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="eyebrow flex items-center gap-3">
          <DiamondMark size={10} className="text-gold" /> Erreur 404
        </p>
        <h1 className="mt-6 font-display text-display-xl text-ink">
          Page
          <br />
          <span className="italic text-stone-600">introuvable</span>.
        </h1>
        <p className="mt-6 max-w-md text-base text-stone-600">
          Cette adresse n’existe pas — ou plus. Retrouvez le chemin de la
          boutique.
        </p>
        <div className="mt-10 flex gap-3">
          <Link href="/" className="btn-primary">
            Accueil
          </Link>
          <Link href="/shop" className="btn-outline">
            Boutique
          </Link>
        </div>
      </div>
    </section>
  );
}
