---
name: hub-app
description: >-
  Desenvolve o hub-app (hub.leandrosouza.info): catálogo em lib/apps.js,
  componentes da vitrine, deploy Docker. Use neste repositório hub-app.
---

# Hub App

## Atualizar catálogo

1. Editar `lib/apps.js` → `APPS`
2. Conferir cards (`AppPortal`), destaque (`FeaturedApp`), roadmap (`Roadmap`)

## Nova seção

1. Componente em `components/`
2. Import em `app/page.jsx`
3. Âncora em `Header.jsx` se navegável

## Limites

Sem auth, Supabase ou fetch runtime a apps irmãs.

Ver [AGENTS.md](../../AGENTS.md).
