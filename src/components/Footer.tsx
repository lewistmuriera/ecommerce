import React from "react";

import Image from "next/image";
import Link from "next/link";

const columns = [
  { title: "Featured", links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
  { title: "Shoes", links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"] },
  { title: "Clothing", links: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"] },
  { title: "Kids'", links: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"] },
];

export default function Footer() {
  return (
    <footer className="mt-16 w-full bg-[--color-dark-900] text-[--color-light-200]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-start justify-between gap-8">
          <div className="shrink-0">
            <Image src="/logo.svg" alt="Nike logo" width={28} height={28} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-3 text-[--text-heading-3] font-medium text-[--color-light-100]">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-[--color-dark-500] hover:text-[--color-light-100] text-[--text-body]"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="#" aria-label="Twitter / X">
              <Image src="/x.svg" alt="" width={28} height={28} />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Image src="/facebook.svg" alt="" width={28} height={28} />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Image src="/instagram.svg" alt="" width={28} height={28} />
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[--color-dark-500]">
          <p className="text-[--text-footnote]">
            © 2025 Nike, Inc. All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[--color-light-100]">
              Guides
            </Link>
            <Link href="#" className="hover:text-[--color-light-100]">
              Terms of Sale
            </Link>
            <Link href="#" className="hover:text-[--color-light-100]">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-[--color-light-100]">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
