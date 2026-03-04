// components/Contact.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export function Contact() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="contato" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Lado Esquerdo: Textos e Informações */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                            Vamos Conversar
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                            Pronto para transformar a sua ideia em código?
                        </p>
                        <p className="mt-4 text-lg text-zinc-500">
                            Nossa equipe de especialistas está pronta para entender o seu desafio. Preencha o formulário e entraremos em contato em menos de 24 horas.
                        </p>

                        <div className="mt-12 flex flex-col gap-6">
                            <div className="flex items-center gap-4 text-zinc-600">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100">
                                    <Mail className="h-5 w-5 text-brand" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-900">E-mail</p>
                                    <p className="text-sm">contato@axyon.com.br</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-zinc-600">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100">
                                    <MessageSquare className="h-5 w-5 text-brand" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-900">WhatsApp</p>
                                    <p className="text-sm">Resposta rápida em horário comercial</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado Direito: O Formulário Enterprise */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm sm:p-10"
                    >
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-900">Nome completo</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="João Silva"
                                        className="h-12 rounded-lg border border-zinc-300 bg-white px-4 text-sm outline-none transition-all focus:border-brand focus:ring-1 focus:ring-brand"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="company" className="text-sm font-medium text-zinc-900">Empresa</label>
                                    <input
                                        id="company"
                                        type="text"
                                        placeholder="Sua Empresa LTDA"
                                        className="h-12 rounded-lg border border-zinc-300 bg-white px-4 text-sm outline-none transition-all focus:border-brand focus:ring-1 focus:ring-brand"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-900">E-mail corporativo</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="joao@empresa.com.br"
                                    className="h-12 rounded-lg border border-zinc-300 bg-white px-4 text-sm outline-none transition-all focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-900">Como podemos ajudar?</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Conte-nos um pouco sobre o seu projeto..."
                                    className="rounded-lg border border-zinc-300 bg-white p-4 text-sm outline-none transition-all focus:border-brand focus:ring-1 focus:ring-brand"
                                />
                            </div>

                            <button
                                type="button" // Mudaremos para submit depois
                                className="mt-2 h-12 w-full rounded-lg bg-zinc-950 px-4 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}