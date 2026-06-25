import { PWA_MANIFEST_ICONS } from '@/lib/pwa-icons'

/** @returns {import('next').MetadataRoute.Manifest} */
export default function manifest() {
  return {
    id: 'hub-app',
    name: 'Leandro Souza Hub',
    short_name: 'Hub',
    description:
      'Portal de aplicações e ferramentas web desenvolvidas por Leandro Souza.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    lang: 'pt-BR',
    categories: ['productivity', 'utilities'],
    icons: PWA_MANIFEST_ICONS.map((icon) => ({ ...icon })),
  }
}
