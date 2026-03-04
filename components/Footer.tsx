// components/Footer.tsx
import Link from "next/link";
import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 pb-8 pt-16 text-zinc-400">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">

                    {/* Coluna 1: A Marca */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            AXYON<span className="text-brand">.</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed">
                            Elevando o padrão de engenharia de software. Construímos produtos digitais robustos e escaláveis para empresas que não abrem mão da excelência.
                        </p>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">Navegação</h3>
                        <ul className="mt-4 flex flex-col gap-3 text-sm">
                            <li><Link href="#servicos" className="transition-colors hover:text-white">Expertise</Link></li>
                            <li><Link href="#portfolio" className="transition-colors hover:text-white">Cases de Sucesso</Link></li>
                            <li><Link href="#contato" className="transition-colors hover:text-white">Iniciar Projeto</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Redes Sociais */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">Conecte-se</h3>
                        <div className="mt-4 flex gap-4">
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition-colors hover:bg-brand hover:text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition-colors hover:bg-brand hover:text-white">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition-colors hover:bg-brand hover:text-white">
                                <Github size={18} />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 transition-colors hover:bg-brand hover:text-white">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Linha Inferior */}
                <div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-800 pt-8 sm:flex-row text-xs">
                    <p>© {currentYear} Axyon Software House. Todos os direitos reservados.</p>
                    <div className="mt-4 flex gap-4 sm:mt-0">
                        <Link href="#" className="hover:text-white">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-white">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}