import React from "react";
import Card from "@/components/Card";


type Tone = "orange" | "red" | "green";

const products = [
    {
        id: 1,
        title: "Air Max Pulse",
        subtitle: "Men's Shoes",
        meta: "6 Colour",
        price: 149.99,
        imageSrc: "/shoes/shoe-1.jpg",
        badge: { label: "New", tone: "orange" as Tone },
    },
    {
        id: 2,
        title: "Air Zoom Pegasus",
        subtitle: "Men's Shoes",
        meta: "4 Colour",
        price: 129.99,
        imageSrc: "/shoes/shoe-2.webp",
        badge: { label: "Hot", tone: "red" as Tone },
    },
    {
        id: 3,
        title: "InfinityRN 4",
        subtitle: "Men's Shoes",
        meta: "6 Colour",
        price: 159.99,
        imageSrc: "/shoes/shoe-3.webp",
        badge: { label: "Trending", tone: "green" as Tone },
    },
    {
        id: 4,
        title: "Metcon 9",
        subtitle: "Men's Shoes",
        meta: "3 Colour",
        price: 139.99,
        imageSrc: "/shoes/shoe-4.webp",
    },
] as const;

const toneToVariant: Record<Tone, "neutral" | "success" | "warning" | "danger"> = {
    orange: "warning",
    red: "danger",
    green: "success",
};

const Home = () => {
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="latest" className="pb-12">
                <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
                    Latest shoes
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p) => (
                        <Card
                            key={p.id}
                            title={p.title}
                            subtitle={p.subtitle}
                            imageSrc={p.imageSrc}
                            imageAlt={`${p.title} - ${p.subtitle}`}
                            price={`$${p.price.toFixed(2)}`}
                            badgeLabel={p.badge?.label}
                            badgeVariant={p.badge ? toneToVariant[p.badge.tone] : undefined}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;