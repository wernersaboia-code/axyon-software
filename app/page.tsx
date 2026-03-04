// app/page.tsx
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <Hero />
            <Services />
            <TechStack />
            <Portfolio />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}