// components/Portfolio.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { ProjectCard } from "./ProjectCard"; // Importamos o carrossel que criamos

// Os Dados Reais da Axyon (Agora com Arrays de Imagens)
const projects = [
    {
        id: 1,
        title: "Easy Prospect: CRM Internacional",
        category: "SaaS B2B & Cloud",
        description: "Desenvolvimento de um sistema de gestão de Comércio Exterior para uma empresa sediada na Alemanha. Criamos uma arquitetura segura, multilíngue e preparada para lidar com regras complexas de negócios e dados sensíveis europeus (GDPR).",
        techs: ["Next.js", "Arquitetura Cloud", "Segurança de Dados"],
        // Coloque os nomes das suas imagens aqui!
        images: [
            "/portfolio/easy-1.png",
            "/portfolio/easy-2.png",
            "/portfolio/easy-3.png"
        ],
        link: "#",
    },
    {
        id: 2,
        title: "Code Plus: Escola de Tecnologia",
        category: "LMS & Educação",
        description: "Plataforma de ensino focada na formação de engenheiros Java. Desenvolvemos um ambiente de aprendizado imersivo (do básico ao avançado) com dashboards de acompanhamento de alunos e gestão completa para a administração.",
        techs: ["React", "Node.js", "Dashboard Analítico", "Vídeo Streaming"],
        // Coloque os nomes das suas imagens aqui!
        images: [
            "/portfolio/codeplus-1.png",
            "/portfolio/codeplus-2.png",
        ],
        link: "#",
    },
    {
        id: 3,
        title: "Foodie: Plataforma de Delivery",
        category: "App Mobile & Conversão",
        description: "Criado para revolucionar o pedido de comida. Focamos obsessivamente na interface (UI) e na experiência (UX) para garantir que o usuário faça o pedido no menor número de cliques possível, aumentando o faturamento dos restaurantes.",
        techs: ["UI/UX Design", "Figma", "React Native", "Pagamentos"],
        // Coloque os nomes das suas imagens aqui!
        images: [
            "/portfolio/foodie-1.png",
            "/portfolio/foodie-2.png",
            "/portfolio/foodie-3.png"
        ],
        link: "#",
    },
];

export function Portfolio() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <section id="portfolio" className="bg-zinc-950 py-24 text-white sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 md:px-12">

                {/* Cabeçalho */}
                <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-light">
                            Nossas Entregas
                        </h2>
                        <p className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-5xl">
                            De plataformas na Alemanha a Apps de alta conversão.
                        </p>
                    </div>
                    <p className="max-w-md text-zinc-400">
                        Conheça as soluções que construímos. Interfaces modernas apoiadas por engenharia de software de ponta.
                    </p>
                </div>

                {/* Renderizando os Projetos */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-12 sm:gap-20"
                >
                    {projects.map((project, index) => (
                        <motion.div key={project.id} variants={itemVariants}>
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}