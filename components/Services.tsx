// components/Services.tsx
"use client";

// 1. Adicionamos o import do 'Variants' aqui
import { motion, Variants } from "framer-motion";
import { MonitorSmartphone, Smartphone, PenTool, Server } from "lucide-react";

export function Services() {

    // 2. Tipamos a variável aqui
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    // 3. Tipamos a variável aqui
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section id="servicos" className="bg-zinc-50 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                {/* Cabeçalho da Seção */}
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                        Nossa Expertise
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                        Soluções completas, do conceito ao deploy em produção.
                    </p>
                    <p className="mt-4 text-lg text-zinc-500">
                        Nossa equipe domina todo o ciclo de vida do software. Entregamos produtos com código limpo, arquitetura escalável e design impecável.
                    </p>
                </div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2"
                >
                    {/* Card 1: Web / SaaS (Ocupa 2 colunas) */}
                    <motion.div
                        variants={cardVariants}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200/50 transition-all hover:shadow-md md:col-span-2"
                    >
                        <div>
                            <div className="mb-4 inline-flex rounded-lg bg-brand/10 p-3 text-brand">
                                <MonitorSmartphone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950">Sistemas Web & SaaS</h3>
                            <p className="mt-2 text-zinc-500 max-w-md">
                                Desenvolvemos plataformas web de alta performance e sistemas de gestão robustos, preparados para milhares de acessos simultâneos utilizando as mais recentes tecnologias do mercado.
                            </p>
                        </div>
                        {/* Elemento visual decorativo */}
                        <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-zinc-50 ring-1 ring-zinc-100 transition-transform group-hover:scale-110" />
                    </motion.div>

                    {/* Card 2: Mobile (Ocupa 1 coluna) */}
                    <motion.div
                        variants={cardVariants}
                        className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200/50 transition-all hover:shadow-md"
                    >
                        <div>
                            <div className="mb-4 inline-flex rounded-lg bg-zinc-100 p-3 text-zinc-900">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950">Mobile Apps</h3>
                            <p className="mt-2 text-zinc-500">
                                Aplicativos nativos e híbridos fluidos para iOS e Android, com foco em retenção de usuários.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: UI/UX (Ocupa 1 coluna) */}
                    <motion.div
                        variants={cardVariants}
                        className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200/50 transition-all hover:shadow-md"
                    >
                        <div>
                            <div className="mb-4 inline-flex rounded-lg bg-zinc-100 p-3 text-zinc-900">
                                <PenTool size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950">UI/UX Design</h3>
                            <p className="mt-2 text-zinc-500">
                                Interfaces modernas, minimalistas e projetadas para maximizar a conversão do seu produto.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Cloud (Ocupa 2 colunas) */}
                    <motion.div
                        variants={cardVariants}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-950 p-8 shadow-sm transition-all hover:shadow-md md:col-span-2"
                    >
                        {/* Glow sutil no fundo escuro */}
                        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-brand/20 to-transparent opacity-50" />

                        <div className="relative z-10">
                            <div className="mb-4 inline-flex rounded-lg bg-zinc-800 p-3 text-zinc-300">
                                <Server size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Arquitetura Cloud & DevOps</h3>
                            <p className="mt-2 text-zinc-400 max-w-md">
                                Trazemos a maturidade de grandes empresas para a sua infraestrutura. Pipelines automatizadas, segurança, deploy contínuo (CI/CD) e otimização de custos na AWS/GCP.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}