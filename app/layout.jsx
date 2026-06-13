import './globals.css'

export const metadata = {
  title: 'Leandro Souza Hub — Portal de Aplicações',
  description:
    'Portal de aplicações e ferramentas web desenvolvidas por Leandro Souza.',
  keywords: 'leandro souza, nextjs, supabase, aplicações web, hub',
  authors: [{ name: 'Leandro Souza' }],
  openGraph: {
    title: 'Hub de Aplicações — Leandro Souza',
    description:
      'Projetos, ferramentas e sistemas web desenvolvidos com stack moderna.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
