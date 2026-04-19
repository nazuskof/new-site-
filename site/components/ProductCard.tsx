import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.edition}, couleur ${product.color}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-opacity duration-500 ease-editorial group-hover:opacity-90"
          priority={index < 2}
        />
        <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center border border-ink/80 bg-cream/80 px-2 py-1 text-[10px] uppercase tracking-widest text-ink backdrop-blur-sm">
          № {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xl leading-tight text-ink">
            {product.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-stone-600">
            {product.edition}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-ink">{formatPrice(product.price)}</p>
          <span className="mt-1 inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-ink opacity-0 transition-opacity duration-300 ease-editorial group-hover:opacity-100">
            Voir
            <ArrowUpRight className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
