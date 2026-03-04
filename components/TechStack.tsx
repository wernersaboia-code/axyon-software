// components/TechStack.tsx
"use client";

import {
    Code2, Database, Cloud, Palette, Cpu,
    Layers, Server, Smartphone, LayoutTemplate
} from "lucide-react";

// Separamos em duas linhas para irem em direções opostas
const rowOne = [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Layers },
    { name: "TypeScript", icon: Code2 },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Angular", icon: Code2 },
    { name: "Figma", icon: LayoutTemplate },
    { name: "UI/UX Design", icon: Palette },
    { name: "Design System", icon: Layers },
    { name: "Prototipagem", icon: Smartphone },
];

const rowTwo = [
    { name: "Node.js", icon: Server },
    { name: "Java & Spring Boot", icon: Cpu },
    { name: "Python", icon: Code2 },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Redis", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Cloud },
    { name: "Vercel", icon: Cloud },
    { name: "GraphQL", icon: Server },
    { name: "Microsserviços", icon: Layers },
];

export function TechStack() {
    return (
        <section className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="mb-12 text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                        Nosso Arsenal Técnico
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                        Tecnologias de ponta para produtos globais.
                    </p>
                </div>
            </div>

            {/* Container das esteiras com "Fade" (máscara de gradiente nas bordas) */}
            <div className="relative mx-auto max-w-screen-2xl">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent sm:w-48" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent sm:w-48" />

                {/* Linha 1 (Move para a Esquerda) */}
                <div className="flex w-max animate-marquee gap-4 pb-6 hover:[animation-play-state:paused]">
                    {[...rowOne, ...rowOne, ...rowOne].map((tech, i) => (
                        <div
                            key={`row1-${i}`}
                            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-6 py-3 transition-colors hover:border-zinc-300 hover:bg-zinc-100"
                        >
                            <tech.icon className="h-5 w-5 text-zinc-500" />
                            <span className="whitespace-nowrap font-medium text-zinc-700">
                {tech.name}
              </span>
                        </div>
                    ))}
                </div>

                {/* Linha 2 (Move para a Direita) */}
                <div className="flex w-max animate-marquee-reverse gap-4 hover:[animation-play-state:paused]">
                    {[...rowTwo, ...rowTwo, ...rowTwo].map((tech, i) => (
                        <div
                            key={`row2-${i}`}
                            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-6 py-3 transition-colors hover:border-zinc-300 hover:bg-zinc-100"
                        >
                            <tech.icon className="h-5 w-5 text-zinc-500" />
                            <span className="whitespace-nowrap font-medium text-zinc-700">
                {tech.name}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}