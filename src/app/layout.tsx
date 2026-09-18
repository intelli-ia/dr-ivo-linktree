import type { Metadata } from "next";
import { MuseoModerno, Montserrat } from "next/font/google";
import "./globals.css";

/** Títulos — MuseoModerno Regular (400). */
const museoModerno = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-heading",
});

/** Textos — Montserrat Medium (500); 600 fica disponível para os CTAs. */
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Clínica Medicamp",
  description:
    "Agendamentos, site oficial e canais de contato da Clínica Medicamp.",
  icons: {
    icon: [{ url: "/medicamp-perfil.jpg", type: "image/jpeg" }],
    apple: [{ url: "/medicamp-perfil.jpg", type: "image/jpeg" }],
  },
};

export const viewport = {
  themeColor: "#010B10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${museoModerno.variable} ${montserrat.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
