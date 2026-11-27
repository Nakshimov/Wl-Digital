import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "../assets/hero.jpg";
import serviceSonorizacao from "../assets/service-sonorizacao.jpg";
import serviceLed from "../assets/service-led.jpg";
import serviceAudiovisual from "../assets/service-audiovisual.jpg";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";
import portfolio4 from "../assets/portfolio-4.jpg";
import portfolio5 from "../assets/portfolio-5.jpg";
import portfolio6 from "../assets/portfolio-6.jpg";
import portfolio7 from "../assets/portfolio-7.jpg";
import portfolio8 from "../assets/portfolio-8.jpg";
import portfolio9 from "../assets/portfolio-9.jpg";
import portfolio10 from "../assets/portfolio-10.jpg";
import portfolio11 from "../assets/portfolio-11.jpg";

const baseUrl = import.meta.env.BASE_URL;
const siteUrl = "https://nakshimov.github.io/Wl-Digital/";
const siteName = "WL Digital";
const siteDescription =
  "Desde 2002, a WL Digital oferece sonorização, painéis de LED e serviços audiovisuais para palestras e eventos em Brasília.";
const ogImage = `${siteUrl}og-image.jpg`;

const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
  portfolio11,
];

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contatos", label: "Contatos" },
];

const services = [
  {
    img: serviceSonorizacao,
    alt: "Equipamentos de sonorização em evento corporativo",
    t: "Sonorização",
    d: "Equipamentos sonoros de alta qualidade, aliados a uma equipe altamente capacitada, para que seu evento seja um sucesso.",
  },
  {
    img: serviceLed,
    alt: "Painel de LED exibindo vídeo em evento",
    t: "Painéis de LED",
    d: "Painéis de LED de alta definição para vídeo, apresentações e identidade visual com brilho e nitidez em qualquer ambiente.",
  },
  {
    img: serviceAudiovisual,
    alt: "Equipe técnica operando equipamentos audiovisuais",
    t: "Serviços Audiovisuais",
    d: "Solução completa em imagem, iluminação, projeção e suporte técnico para palestras, congressos e eventos corporativos.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}wl-logo.png`,
  image: ogImage,
  description: siteDescription,
  telephone: "+556133284042",
  email: "eventos@wldigital.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SRTVN Lote P, Edifício Brasília Rádio Center",
    addressLocality: "Brasília",
    addressRegion: "DF",
    postalCode: "70719-900",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: ["Brasília", "Distrito Federal", "Brasil"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços audiovisuais",
    itemListElement: services.map((service) => ({
      "@type": "Service",
      name: service.t,
      description: service.d,
      provider: { "@id": `${siteUrl}#organization` },
    })),
  },
  sameAs: ["https://wldigital.com.br/"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "WL Digital — Locação de Equipamentos Audiovisuais em Brasília",
      },
      { name: "description", content: siteDescription },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: siteName },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: siteUrl },
      {
        property: "og:title",
        content: "WL Digital — Locação de Equipamentos Audiovisuais",
      },
      { property: "og:description", content: siteDescription },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Palco de evento com iluminação profissional da WL Digital",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "WL Digital — Locação de Equipamentos Audiovisuais",
      },
      { name: "twitter:description", content: siteDescription },
      { name: "twitter:image", content: ogImage },
      {
        name: "twitter:image:alt",
        content: "Palco de evento com iluminação profissional da WL Digital",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>

      {/* NAV */}
      <header
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor:
            "color-mix(in oklab, var(--background) 80%, transparent)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#inicio"
            className="flex items-center"
            aria-label="WL Digital — início"
          >
            <img
              src={`${baseUrl}wl-logo.png`}
              alt="WL Digital"
              width={128}
              height={73}
              className="h-9 w-auto drop-shadow-[0_0_10px_rgba(0,153,255,0.35)]"
            />
          </a>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Menu principal (mobile)"
              className="absolute left-0 top-full mt-3 flex w-56 flex-col gap-1 rounded-2xl border border-border bg-card/95 p-3 text-sm shadow-xl backdrop-blur"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-foreground/80 transition-colors hover:bg-background hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/556133284042"
                className="mt-1 rounded-lg px-3 py-2 font-semibold text-primary transition-colors hover:bg-background"
              >
                Orçamento
              </a>
            </nav>
          </details>
          <nav
            aria-label="Menu principal"
            className="hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/556133284042"
            className="hidden rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            Orçamento
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section
          id="inicio"
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          <img
            src={heroImage}
            alt="Palco de evento com iluminação profissional da WL Digital"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--background) 40%, transparent) 0%, var(--background) 100%)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-glow">
              <span className="h-2 w-2 rounded-full bg-primary" /> Desde 2002 em
              Brasília
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
              Seu evento na mão dos{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                melhores profissionais
              </span>
              .
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
              Locação de equipamentos audiovisuais para palestras e eventos
              corporativos. Sonorização, painéis de LED e suporte técnico com
              padrão de excelência.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#contatos"
                className="rounded-full px-8 py-4 text-center text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Solicitar Orçamento
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-border bg-card/40 px-8 py-4 text-center text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
              >
                Ver Portfólio
              </a>
            </div>

            <div className="mt-16 grid max-w-3xl grid-cols-3 gap-4 sm:mt-20 sm:gap-8">
              {[
                { n: "24+", l: "Anos de mercado" },
                { n: "500+", l: "Eventos realizados" },
                { n: "100%", l: "Compromisso" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-extrabold text-primary-glow sm:text-3xl md:text-4xl">
                    {s.n}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUEM SOMOS */}
        <section id="quem-somos" className="relative py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Quem Somos
                </p>
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Excelência em audiovisual, evento após evento.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  A{" "}
                  <span className="font-semibold text-foreground">
                    WL Digital
                  </span>{" "}
                  atua na área de locação de equipamentos audiovisuais para
                  palestras e eventos. No mercado desde 2002, desenvolvemos um
                  trabalho diferenciado em Brasília — prestando atendimento e
                  suporte com altos níveis de excelência, sempre em linha com
                  nossos princípios de ética, respeito e qualidade.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-3">
                  {[
                    "Ética",
                    "Qualidade",
                    "Compromisso",
                    "Suporte técnico",
                    "Atendimento",
                    "Pontualidade",
                  ].map((v) => (
                    <div key={v} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section
          id="servicos"
          className="relative py-20 sm:py-24 md:py-32"
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--primary) 6%, var(--background))",
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 max-w-2xl sm:mb-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Serviços
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Trabalhamos com
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.t}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/60"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.alt}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold sm:text-2xl">{s.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.d}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section id="equipe" className="relative py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Nossa Equipe
                </p>
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Técnicos que fazem seu evento acontecer.
                </h2>
                <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Contamos com equipe técnica qualificada, que entrega, monta
                    e configura os equipamentos locados conforme o contrato
                    firmado com o cliente — se esforçando ao máximo para que seu
                    evento seja um sucesso.
                  </p>
                  <p>
                    Desde 2002, nossos serviços de locação já foram reconhecidos
                    por diversas empresas. Prestamos nossos serviços
                    moldando-nos às necessidades do cliente e, assim, atendemos
                    empresas pequenas a multinacionais presentes em todo o
                    Brasil e no Distrito Federal.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { k: "Suporte técnico", v: "A combinar" },
                  { k: "Montagem", v: "Inclusa" },
                  { k: "Configuração", v: "Profissional" },
                  { k: "Cobertura", v: "\u00a0Brasil" },
                ].map((c) => (
                  <div
                    key={c.k}
                    className="rounded-2xl border border-border bg-card p-4 sm:p-6"
                  >
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {c.k}
                    </div>
                    <div className="mt-2 text-lg font-bold text-foreground sm:text-xl">
                      {c.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PORTIFÓLIO */}
        <section
          id="portfolio"
          className="relative py-20 sm:py-24 md:py-32"
          style={{
            backgroundColor:
              "color-mix(in oklab, var(--primary) 6%, var(--background))",
          }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4 sm:mb-16 sm:gap-6">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Portfólio
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Alguns dos nossos eventos.
                </h2>
              </div>
              <span className="text-sm text-muted-foreground">
                Palestras · Corporativo · Social
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioImages.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt={`Evento realizado pela WL Digital — ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATOS */}
        <section id="contatos" className="relative py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="grid grid-cols-1 gap-10 p-6 sm:p-10 md:p-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Entre em Contato
                  </p>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    Vamos planejar o seu próximo evento.
                  </h2>
                  <p className="mt-6 text-base text-muted-foreground sm:text-lg">
                    Fale com nossa equipe e receba um orçamento personalizado.
                    Atendemos de segunda a sexta, das 08h às 18h.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      l: "Telefone",
                      v: "(61) 3328-4042",
                      href: "tel:+556133284042",
                      cta: "Ligar agora",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                    },
                    {
                      l: "WhatsApp",
                      v: "(61) 3328-4042",
                      href: "https://wa.me/556133284042",
                      cta: "Abrir WhatsApp",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-6 w-6"
                        >
                          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.44-8.42zM12.06 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.85 9.85 0 0 1 2.9 7c0 5.47-4.44 9.9-9.9 9.9zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
                        </svg>
                      ),
                    },
                    {
                      l: "E-mail",
                      v: "eventos@wldigital.com.br",
                      href: "mailto:eventos@wldigital.com.br",
                      cta: "Enviar e-mail",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="h-6 w-6"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-10 6L2 7" />
                        </svg>
                      ),
                    },
                  ].map((c) => (
                    <a
                      key={c.l}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-background sm:gap-4 sm:p-4"
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-primary-foreground sm:h-12 sm:w-12"
                        style={{ backgroundImage: "var(--gradient-brand)" }}
                      >
                        {c.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {c.l}
                        </div>
                        <div className="mt-0.5 break-all text-base font-bold text-foreground sm:text-lg">
                          {c.v}
                        </div>
                      </div>
                      <span className="hidden shrink-0 items-center gap-1 rounded-full border border-primary/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:inline-flex">
                        {c.cta} →
                      </span>
                    </a>
                  ))}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Horário
                    </span>
                    <span className="font-medium text-foreground">
                      Seg. a Sex. — 08:00 às 18:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section
          id="localizacao"
          className="border-t border-border pb-20 sm:pb-24"
        >
          <div className="mx-auto max-w-7xl px-6 pt-20 sm:pt-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Localização
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Brasília — Distrito Federal
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              SRTVN Lote P, Edifício Brasília Rádio Center — Asa Norte,
              Brasília/DF · CEP 70719-900
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border sm:mt-10">
              {mapLoaded ? (
                <iframe
                  title="Localização WL Digital"
                  src="https://www.google.com/maps?q=SRTVN+Lote+P%2C+Edif%C3%ADcio+Bras%C3%ADlia+R%C3%A1dio+Center%2C+Asa+Norte%2C+Bras%C3%ADlia%2FDF%2C+70719-900&output=embed"
                  className="h-[320px] w-full grayscale-[0.4] sm:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="flex h-[320px] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-card to-background text-center transition-colors hover:from-card hover:to-primary/10 sm:h-[420px]"
                >
                  <span className="text-3xl" aria-hidden="true">
                    📍
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Ver localização no mapa
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Clique para carregar o Google Maps
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
          <a href="#inicio" aria-label="Voltar ao início">
            <img
              src={`${baseUrl}wl-logo.png`}
              alt="WL Digital"
              width={96}
              height={55}
              className="h-7 w-auto drop-shadow-[0_0_8px_rgba(0,153,255,0.3)]"
            />
          </a>
          <span>
            © {new Date().getFullYear()} WL Digital — Locação de Equipamentos
            Audiovisuais
          </span>
        </div>
      </footer>

      <a
        href="https://wa.me/556133284042?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full border border-white/20 p-1.5 text-primary-foreground shadow-[var(--shadow-glow)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 sm:bottom-5 sm:right-5 sm:pr-5"
        style={{ backgroundImage: "var(--gradient-brand)" }}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#25D366] shadow-md">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.44-8.42zM12.06 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.85 9.85 0 0 1 2.9 7c0 5.47-4.44 9.9-9.9 9.9zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
          </svg>
        </span>
        <span className="sr-only text-left leading-tight sm:not-sr-only sm:block">
          <span className="block text-xs font-extrabold uppercase tracking-widest">
            Fale com a gente
          </span>
          <span className="block text-xs text-white/85">
            Orçamento pelo WhatsApp
          </span>
        </span>
      </a>
    </div>
  );
}
