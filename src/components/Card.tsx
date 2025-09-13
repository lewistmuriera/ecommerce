import React from "react";

import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  price?: string;
  badgeLabel?: string;
  badgeVariant?: "neutral" | "success" | "warning" | "danger";
  href?: string;
  className?: string;
}

function badgeClasses(variant: CardProps["badgeVariant"]) {
  switch (variant) {
    case "success":
      return "bg-[--color-green] text-white";
    case "warning":
      return "bg-[--color-orange] text-white";
    case "danger":
      return "bg-[--color-red] text-white";
    default:
      return "bg-[--color-light-100] text-[--color-dark-900] border border-[--color-light-300]";
  }
}

export default function Card({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  price,
  badgeLabel,
  badgeVariant = "neutral",
  href = "#",
  className,
}: CardProps) {
  const rootClass =
    ["block group", className || ""].join(" ").trim() || undefined;

  const content = (
    <>
      <div className="relative overflow-hidden rounded-xl bg-[--color-light-100]">
        <div className="aspect-[4/3] w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-contain"
          />
        </div>
        {badgeLabel ? (
          <span
            className={[
              "absolute left-3 top-3 rounded-full px-3 py-1 text-[--text-caption] font-medium shadow-sm",
              badgeClasses(badgeVariant),
            ].join(" ")}
          >
            {badgeLabel}
          </span>
        ) : null}
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[--text-body-medium] leading-[--text-body-medium--line-height] text-[--color-dark-900]">
            {title}
          </h3>
          {subtitle ? (
            <p className="text-[--text-caption] leading-[--text-caption--line-height] text-[--color-dark-700]">
              {subtitle}
            </p>
          ) : null}
        </div>
        {price ? (
          <p className="text-[--text-body-medium] text-[--color-dark-900]">
            {price}
          </p>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={rootClass}>
        {content}
      </Link>
    );
  }

  return <div className={rootClass}>{content}</div>;
}
