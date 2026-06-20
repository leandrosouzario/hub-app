# Hub App — Agent Guide

Vitrine pública do ecossistema em `https://hub.leandrosouza.info`.

## Escopo

- Homepage e componentes em `components/`
- Catálogo em `lib/apps.js`
- SEO em `app/layout.jsx`
- Docker e docs operacionais

**Fora de escopo:** auth, Supabase, API routes, lógica de apps irmãs.

## Stack

Next.js 16 · React 18 · Tailwind · JavaScript · porta **3010** · Docker `3010:3000`

## Estrutura

```
app/           layout, page, globals.css
components/    seções da homepage
lib/apps.js    APPS, FEATURED_APP, UPCOMING_APPS, TECH_CHIPS
```

## Catálogo (`lib/apps.js`)

Status: `available` | `in_development` | `planned`. Fonte única — não duplicar listas nos componentes.

Apps irmãs (URLs de produção):

| App | URL |
|-----|-----|
| Painel Corporativo | `https://pc.leandrosouza.info` |
| Gym App | `https://gym.leandrosouza.info` |

## Convenções

- Server Components por padrão; `'use client'` só para interatividade (`Header.jsx`).
- UI em pt-BR; padrão visual slate + emerald/blue.
- Links externos: `target="_blank"` + `rel="noopener noreferrer"`.

## Deploy

```bash
npm run dev          # :3010
docker compose up -d # :3010 no host
```

Cloudflare Tunnel: `hub.leandrosouza.info` → host `:3010`

## Git

`git@github.com:leandrosouzario/hub-app.git` · branch `main`
