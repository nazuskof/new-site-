"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const nav = [
  { href: "/shop", label: "Boutique" },
  { href: "/about", label: "Atelier" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="container-ed flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Losange — accueil"
          className="font-display text-xl tracking-tight text-ink"
        >
          LOSANGE<span className="text-gold">.</span>
        </Link>

        <nav className="hidden md:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-widest text-ink link-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Rechercher"
            className="hidden h-10 w-10 items-center justify-center text-ink transition-colors hover:text-gold md:inline-flex"
          >
            <Search className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Panier (0 article)"
            className="relative inline-flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-gold"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigation mobile"
          className="border-t border-ink/15 bg-cream md:hidden"
        >
          <ul className="container-ed flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-ink/10 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm uppercase tracking-widest text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
