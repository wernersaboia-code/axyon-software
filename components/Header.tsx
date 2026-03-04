// components/Header.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Função para fechar o menu mobile ao clicar num link
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-b border-zinc-200/50 bg-white/70 px-6 backdrop-blur-md md:px-12"
            >
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-950">
                        AXYON<span className="text-brand">.</span>
                    </Link>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="#servicos" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950">
                        Expertise
                    </Link>
                    <Link href="#portfolio" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950">
                        Portfólio
                    </Link>
                    <Link href="#contato" className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950">
                        Contato
                    </Link>
                </nav>

                {/* Botão Contato (Desktop) & Botão Menu (Mobile) */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#contato"
                        className="hidden rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 md:block"
                    >
                        Iniciar Projeto
                    </Link>

                    <button
                        className="text-zinc-950 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Gaveta do Menu Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 flex flex-col bg-white/95 px-6 pt-24 backdrop-blur-lg md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            <Link
                                href="#servicos"
                                onClick={closeMenu}
                                className="text-2xl font-semibold text-zinc-900"
                            >
                                Expertise
                            </Link>
                            <Link
                                href="#portfolio"
                                onClick={closeMenu}
                                className="text-2xl font-semibold text-zinc-900"
                            >
                                Portfólio
                            </Link>
                            <Link
                                href="#contato"
                                onClick={closeMenu}
                                className="text-2xl font-semibold text-zinc-900"
                            >
                                Contato
                            </Link>

                            <Link
                                href="#contato"
                                onClick={closeMenu}
                                className="mx-auto mt-8 w-full max-w-xs rounded-full bg-brand px-5 py-4 text-center text-lg font-medium text-white transition-all active:scale-95"
                            >
                                Iniciar Projeto
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}