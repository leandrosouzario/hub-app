# Hub App — Leandro Souza

Hub público de aplicações web. Vitrine de projetos desenvolvidos ou planejados.

**URL de produção:** `https://hub.leandrosouza.info`

## Pré-requisitos

- Docker e Docker Compose

## Build e execução (Docker)

1. Crie `.env.local` (opcional):

```env
NEXT_PUBLIC_SITE_URL=https://hub.leandrosouza.info
```

2. Build e execução:

```bash
docker compose build --no-cache
docker compose up -d
```

A aplicação ficará disponível na porta **3010** do host.

## Ícones PWA (iPhone / Tela de Início)

Os PNGs são gerados automaticamente no **build Docker** a partir de `public/icons/icon.svg` (`npm run icons` no Dockerfile). Não é necessário `npm install` na máquina host.

Para alterar o ícone, edite o SVG e rebuild:

```bash
docker compose build --no-cache
docker compose up -d
```

## Desenvolvimento local (opcional)

Requer Node.js 18+ instalado na máquina:

```bash
cd /home/leandro/projetos/hub-app
npm install
npm run dev
```

Abra [http://localhost:3010](http://localhost:3010).

## Cloudflare Tunnel

Adicione ao `config.yml` do cloudflared:

```yaml
- hostname: hub.leandrosouza.info
  service: http://192.168.68.245:3010
```

## Estrutura

```
hub-app/
├── app/              # Páginas Next.js
├── components/       # Seções da homepage
├── lib/apps.js       # Dados dos cards e stack
├── public/icons/     # icon.svg + PNGs gerados no build
├── Dockerfile
└── docker-compose.yml
```

## Escopo

- Vitrine pública, sem autenticação
- Não altera `nextjs-landing` / `pc.leandrosouza.info`
