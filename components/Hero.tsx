// components/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 pt-20 text-center">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto flex max-w-4xl flex-col items-center"
            >
                <motion.div variants={itemVariants} className="mb-6">
          <span className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand"></span>
            Elevando o padrão de engenharia de software
          </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-balance text-5xl font-extrabold tracking-tight text-zinc-950 sm:text-7xl"
                >
                    Engenharia de software em nível <span className="text-brand">Enterprise.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mt-6 max-w-2xl text-balance text-lg text-zinc-500 sm:text-xl"
                >
                    Uma boutique de especialistas com bagagem em grandes corporações. Construímos produtos digitais robustos, escaláveis e sob medida para o seu negócio.
                </motion.p>

                <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <button className="group flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-8 text-sm font-semibold text-white transition-all hover:bg-brand-dark">
                        Fale com um Especialista
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button className="group flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-50 hover:border-zinc-300">
                        Conhecer Portfólio
                        <ChevronRight className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-zinc-950" />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}