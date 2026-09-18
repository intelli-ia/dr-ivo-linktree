export const CLINIC_NAME = "Clínica Medicamp";
export const CLINIC_TAGLINE = "Agendamentos e informações";

/** Um único lugar para montar os links do site — o linktree vive no bio do Instagram. */
const SITE_UTM = "utm_source=instagram&utm_medium=social&utm_campaign=linktree";
export const siteUrl = (path = "/") =>
  `https://www.clinicamedicamp.com${path}?${SITE_UTM}`;

/** WhatsApp de agendamentos: +55 (79) 99999-0820. */
const WHATSAPP = "5579999990820";
const whatsappUrl = (message: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP}&text=${encodeURIComponent(message)}`;

export type LinkItem = {
  id: string;
  /** Aceita \n para quebra manual e U+00A0 (espaço rígido) para impedir uma quebra. */
  title: string;
  cta: string;
  href: string;
  /** Renderiza o bloco no layout premium de destaque. */
  featured?: boolean;
  /** Só no destaque: linha fina em caixa alta acima do título. */
  eyebrow?: string;
  /** Só no destaque: trecho final do título, realçado na cor da marca. */
  titleAccent?: string;
  /** Linha de apoio abaixo do título, nos cards normais. */
  subtitle?: string;
  /** Só no destaque: arte que sangra na coluna da direita. */
  image?: string;
  /** Ponto focal do recorte, ex. "50% 12%" para manter o rosto no enquadramento. */
  imagePosition?: string;
};

export const LINKS: LinkItem[] = [
  {
    id: "agendamento",
    featured: true,
    eyebrow: "Agendamentos",
    title: "Fale com a nossa equipe e agende a sua",
    titleAccent: "consulta",
    cta: "Chamar no WhatsApp",
    image: "/destaque-agendamento.png",
    // Retrato vertical numa coluna estreita. Y menor = janela sobe na foto = mantém o rosto
    imagePosition: "50% 12%",
    href: whatsappUrl(
      "Olá! Gostaria de agendar uma consulta na Clínica Medicamp."
    ),
  },
  {
    id: "site",
    title: "Site oficial da Clínica Medicamp",
    subtitle: "Especialidades, estrutura e contato",
    cta: "Acessar o site",
    href: siteUrl(),
  },
];
