import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FeaturedLinkCard } from "@/components/FeaturedLinkCard";
import { MedicampWordmark } from "@/components/MedicampWordmark";
import { LINKS, CLINIC_NAME, CLINIC_TAGLINE } from "@/lib/constants";

export default function LinktreePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden flex flex-col items-center px-4 pt-10 pb-12">
      {/* Aura fria no topo — separa o cabeçalho do fundo quase preto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(141,217,235,0.14),transparent_72%)]"
      />

      {/* Cabeçalho */}
      <section className="relative animate-fade-in-up flex flex-col items-center mb-10">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-white ring-1 ring-[#8DD9EB]/40 ring-offset-[5px] ring-offset-[#010B10] shadow-[0_0_46px_-10px_rgba(141,217,235,0.55)]">
          <Image
            src="/medicamp-perfil.jpg"
            alt={CLINIC_NAME}
            fill
            className="object-cover scale-[1.08]"
            priority
          />
        </div>

        <h1 className="mt-7 text-[#8DD9EB]">
          <MedicampWordmark className="w-[210px] sm:w-[248px] h-auto" />
          <span className="sr-only">{CLINIC_NAME}</span>
        </h1>

        <div className="mt-5 h-px w-12 bg-gradient-to-r from-transparent via-[#8DD9EB]/70 to-transparent" />

        <p className="mt-4 font-body text-[0.78rem] sm:text-[0.84rem] uppercase tracking-[0.26em] text-white/55">
          {CLINIC_TAGLINE}
        </p>
      </section>

      {/* Links */}
      <section className="relative w-full max-w-xl flex flex-col gap-4 sm:gap-5">
        {LINKS.map((link, index) =>
          link.featured ? (
            <FeaturedLinkCard
              key={link.id}
              link={link}
              style={{ animationDelay: `${index * 110}ms` }}
            />
          ) : (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 110}ms` }}
              className="animate-fade-in-up group relative flex items-center justify-between gap-5 rounded-[22px] bg-[#07161D] px-6 py-5 sm:px-8 sm:py-6 ring-1 ring-[#8DD9EB]/15 shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:-translate-y-[2px] hover:bg-[#0A1D26] hover:ring-[#8DD9EB]/40 hover:shadow-[0_14px_38px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out"
            >
              {/* Brilho sutil no topo do card */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#8DD9EB]/25 to-transparent"
              />

              <div className="flex flex-col gap-1.5 min-w-0">
                <h2 className="font-heading font-normal text-[#8DD9EB] text-[1.12rem] sm:text-[1.38rem] leading-[1.2] tracking-[-0.01em] whitespace-pre-line">
                  {link.title}
                </h2>
                {link.subtitle && (
                  <p className="font-body text-[0.74rem] sm:text-[0.82rem] text-white/55 leading-snug">
                    {link.subtitle}
                  </p>
                )}
                <span className="mt-1 font-body font-medium text-[0.55rem] sm:text-[0.62rem] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-[#8DD9EB]/80">
                  {link.cta}
                </span>
              </div>

              <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-[#8DD9EB]/10 ring-1 ring-[#8DD9EB]/25 text-[#8DD9EB] transition-all duration-300 group-hover:bg-[#8DD9EB] group-hover:text-[#010B10] group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </span>
            </a>
          )
        )}
      </section>

      {/* Rodapé */}
      <footer className="relative mt-16 flex flex-col items-center gap-3 text-center">
        <div className="h-px w-16 bg-white/10" />
        <p className="font-body text-[0.68rem] tracking-[0.12em] text-white/35">
          © {new Date().getFullYear()} {CLINIC_NAME}
        </p>
      </footer>
    </main>
  );
}
