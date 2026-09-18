import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { LinkItem } from "@/lib/constants";

/** Cor da base do card. O fade sobre a foto usa exatamente ela, senão aparece emenda. */
const BASE = "#04141C";

/**
 * Bloco de destaque — o primeiro link da página.
 * Duas colunas: tipografia à esquerda, arte sangrando à direita.
 */
export function FeaturedLinkCard({
  link,
  style,
}: {
  link: LinkItem;
  style?: CSSProperties;
}) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className="animate-fade-in-up grain group relative flex items-stretch overflow-hidden rounded-[26px] sm:rounded-[32px] bg-[#04141C] min-h-[390px] sm:min-h-[460px] ring-1 ring-[#8DD9EB]/25 shadow-[0_18px_50px_rgba(0,0,0,0.55),0_0_60px_-24px_rgba(141,217,235,0.45)] hover:-translate-y-[3px] hover:ring-[#8DD9EB]/45 hover:shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_80px_-22px_rgba(141,217,235,0.6)] transition-[transform,box-shadow] duration-500 ease-out"
    >
      {/* Arte — coluna da direita */}
      {link.image && (
        <div className="absolute right-0 inset-y-0 w-[58%] sm:w-[54%] overflow-hidden">
          <Image
            src={link.image}
            alt=""
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ objectPosition: link.imagePosition ?? "50% 15%" }}
            sizes="(max-width: 640px) 60vw, 330px"
            priority
          />
          {/* Véu frio: puxa a foto quente para o azul da marca */}
          <div className="absolute inset-0 bg-[#0B3D4E]/20 mix-blend-color" />
          {/* Fade para a base, dissolvendo a foto sob o texto */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, ${BASE} 0%, ${BASE}D9 18%, ${BASE}26 50%, transparent 72%)`,
            }}
          />
          {/* Vinheta que assenta o retrato no topo e na base */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to top, ${BASE}8C 0%, transparent 30%, transparent 80%, ${BASE}66 100%)`,
            }}
          />
        </div>
      )}

      {/* Brilho da marca, ancorado no canto superior esquerdo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_95%_at_0%_0%,rgba(141,217,235,0.20),transparent_62%)]"
      />
      {/* Fio de luz na borda superior */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#8DD9EB]/60 to-transparent"
      />

      {/* Tipografia — coluna da esquerda */}
      <div className="relative z-10 flex w-[62%] sm:w-[58%] flex-col justify-center px-6 py-9 sm:px-10 sm:py-12">
        {link.eyebrow && (
          <div className="flex items-center gap-2.5 sm:gap-4">
            <span className="h-px w-6 sm:w-10 bg-[#8DD9EB]" />
            <span className="font-body font-medium text-[0.54rem] sm:text-[0.68rem] uppercase tracking-[0.3em] text-[#8DD9EB]">
              {link.eyebrow}
            </span>
          </div>
        )}

        <h2 className="mt-4 sm:mt-6 font-heading font-normal text-white text-[1.26rem] sm:text-[2.05rem] leading-[1.2] sm:leading-[1.16] tracking-[-0.015em]">
          {link.title}
          {link.titleAccent && (
            <>
              {" "}
              <em className="not-italic text-[#8DD9EB]">{link.titleAccent}</em>
            </>
          )}
        </h2>

        <div className="mt-6 sm:mt-9">
          <span className="relative inline-flex items-center gap-1.5 sm:gap-2.5 overflow-hidden rounded-full bg-[#8DD9EB] px-4 py-2 sm:px-7 sm:py-3 ring-1 ring-[#8DD9EB] font-body font-semibold text-[0.5rem] sm:text-[0.7rem] uppercase tracking-[0.1em] sm:tracking-[0.17em] text-[#010B10] transition-[color,transform] duration-300 ease-out group-hover:text-[#8DD9EB] group-hover:delay-100 group-active:scale-[0.97]">
            {/* Tinta que sobe e inverte o botão */}
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-bottom scale-y-0 bg-[#010B10] transition-transform duration-[550ms] [transition-timing-function:cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100"
            />
            <span className="relative whitespace-nowrap">{link.cta}</span>
            {/* Seta em fenda: a atual sai pela direita, a próxima entra pela esquerda */}
            <span className="relative w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 overflow-hidden">
              <ArrowRight className="absolute inset-0 w-full h-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-[190%]" />
              <ArrowRight className="absolute inset-0 w-full h-full -translate-x-[190%] transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0" />
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
