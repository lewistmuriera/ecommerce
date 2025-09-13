"use client";
import React from "react";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavLink[];
  className?: string;
  cartCount?: number;
}

const defaultLinks: NavLink[] = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar({
  links = defaultLinks,
  className,
  cartCount = 0,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const rootClass =
    [
      "w-full bg-[--color-light-100] text-[--color-dark-900] sticky top-0 z-50 border-b border-[--color-light-300]",
      className || "",
    ].join(" ").trim() || undefined;

  return (
    <nav className={rootClass}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Home" className="flex items-center">
              <Image src="/logo.svg" alt="Nike logo" width={28} height={28} priority />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[--color-dark-900] text-[--text-body] font-medium hover:text-[--color-dark-700] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              aria-label="Search"
              className="text-[--color-dark-900] hover:text-[--color-dark-700]"
            >
              Search
            </button>
            <button
              aria-label="Cart"
              className="text-[--color-dark-900] hover:text-[--color-dark-700]"
            >
              {`My Cart${cartCount ? ` (${cartCount})` : ""}`}
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[--color-dark-900] hover:bg-[--color-light-200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open main menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={
          [
            "md:hidden border-t border-[--color-light-300] bg-[--color-light-100]",
            open ? "block" : "hidden",
          ].join(" ")
        }
      >
        <div className="space-y-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="block py-2 text-[--color-dark-900] text-[--text-body] font-medium hover:text-[--color-dark-700]"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-4">
            <button className="text-[--color-dark-900] hover:text-[--color-dark-700]">
              Search
            </button>
            <button className="text-[--color-dark-900] hover:text-[--color-dark-700]">
              {`My Cart${cartCount ? ` (${cartCount})` : ""}`}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
