// components/ProjectCard.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Tipagem do nosso Projeto
type Project = {
    id: number;
    title: string;
    category: string;
    description: string;
    techs: string[];
    images: string[];
    link: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    };

    return (
        <div
            className={`group flex flex-col items-center gap-8 md:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            {/* O Container do Carrossel (Estilo Magic UI) */}
            <div className="relative w-full overflow-hidden rounded-3xl bg-zinc-900 md:w-3/5 aspect-[16/11] ring-1 ring-white/10">

                {/* Imagem com Animação de Fade */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={project.images[currentImage]}
                            alt={`${project.title} - Imagem ${currentImage + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 60vw"
                            priority={index === 0 && currentImage === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Setas de Navegação (Aparecem no Hover) */}
                {project.images.length > 1 && (
                    <>
                        <div className="absolute inset-y-0 left-4 flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <button
                                onClick={prevImage}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-4 flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <button
                                onClick={nextImage}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Barrinhas de Progresso Inferiores */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 px-4">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImage(i)}
                                    className={`h-1 rounded-full transition-all duration-300 ${
                                        currentImage === i
                                            ? "w-8 bg-white"
                                            : "w-4 bg-white/30 hover:bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Textos do Projeto (A Sua Copy Matadora) */}
            <div className="flex w-full flex-col justify-center md:w-2/5">
        <span className="mb-4 inline-flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-300">
          {project.category}
        </span>

                <h3 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {project.title}
                </h3>

                <p className="mb-8 text-zinc-400">
                    {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                        <span key={tech} className="text-sm font-medium text-brand-light">
              {tech}
            </span>
                    ))}
                </div>

                <Link
                    href={project.link}
                    className="inline-flex w-fit items-center gap-2 border-b border-brand pb-1 text-sm font-semibold text-white transition-colors hover:text-brand-light"
                >
                    Conhecer Case
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}