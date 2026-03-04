// app/layout.tsx
import type { Metadata } from "next";
// Se o seu projeto estiver usando a fonte Geist (padrão do Next 16), mantenha o import. 
// Se estiver usando Inter, troque 'Geist' por 'Inter'.
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Axyon Software | Engenharia de Software Enterprise",
    description: "Uma boutique de especialistas com bagagem em grandes corporações. Construímos produtos digitais robustos, escaláveis e sob medida para o seu negócio.",
    keywords: ["Software House", "Desenvolvimento Web", "SaaS", "Aplicativos", "Next.js", "AWS", "Axyon"],
    authors: [{ name: "Axyon Software" }],

    // Configuração para WhatsApp, Facebook e LinkedIn
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.axyon.com.br", // Troque pelo seu domínio final depois
        title: "Axyon Software | Engenharia de Software Enterprise",
        description: "Transformamos ideias complexas em produtos digitais de alta performance.",
        siteName: "Axyon Software",
        images: [
            {
                url: "/og-image.png", // A imagem que vai aparecer no WhatsApp
                width: 1200,
                height: 630,
                alt: "Axyon Software House",
            },
        ],
    },

    // Configuração para o X (Twitter)
    twitter: {
        card: "summary_large_image",
        title: "Axyon Software | Engenharia de Software Enterprise",
        description: "Transformamos ideias complexas em produtos digitais de alta performance.",
        images: ["/og-image.jpg"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-brand selection:text-white`}
        >
        {children}
        </body>
        </html>
    );
}