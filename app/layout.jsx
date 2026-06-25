import { PWA_APPLE_TOUCH_ICON } from '@/lib/pwa-icons'
import './globals.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hub.leandrosouza.info'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Leandro Souza Hub — Portal de Aplicações',
  description:
    'Portal de aplicações e ferramentas web desenvolvidas por Leandro Souza.',
  keywords: 'leandro souza, nextjs, supabase, aplicações web, hub',
  authors: [{ name: 'Leandro Souza' }],
  applicationName: 'Leandro Souza Hub',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Hub',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'Hub de Aplicações — Leandro Souza',
    description:
      'Projetos, ferramentas e sistemas web desenvolvidos com stack moderna.',
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Leandro Souza Hub',
  },
  icons: {
    icon: [{ url: '/icons/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: PWA_APPLE_TOUCH_ICON, sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="apple-touch-icon"
          href={PWA_APPLE_TOUCH_ICON}
          sizes="180x180"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
