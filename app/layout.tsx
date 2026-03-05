import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agenceprocom.pro"),
  title: "PROCOM — Agence de Communication 360° | Cotonou, Bénin",
  description: "PROCOM, agence conseil en communication 360° à Cotonou. Depuis 2018 : stratégie digitale, production audiovisuelle, design graphique, nation branding. +100 projets réalisés.",
  openGraph: {
    type: "website",
    title: "PROCOM — Agence de Communication 360° | Cotonou, Bénin",
    description: "Depuis 2018, PROCOM accompagne entreprises, institutions et organisations : stratégie digitale, production audiovisuelle, design graphique, nation branding.",
    url: "https://www.agenceprocom.pro",
    locale: "fr_BJ",
    images: ["/logo-procom.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROCOM — Agence de Communication 360°",
    description: "Depuis 2018, PROCOM accompagne entreprises et institutions dans leur stratégie de communication au Bénin.",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='12' fill='%231B4DDB'/%3E%3Ctext x='50' y='68' font-family='sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EP%3C/text%3E%3C/svg%3E",
  },
  other: {
    "theme-color": "#1B4DDB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem('procom-theme');
                var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
