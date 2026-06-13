import { FEATURED_APP } from '@/lib/apps'

export default function FeaturedApp() {
  if (!FEATURED_APP) return null

  return (
    <section id="destaque" className="py-14 sm:py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 text-center">
          Aplicação em Destaque
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6 sm:p-8 aspect-video lg:aspect-auto lg:min-h-[280px] flex flex-col justify-between shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-slate-400 font-mono truncate">
                pc.leandrosouza.info
              </span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl mb-3 block" aria-hidden="true">{FEATURED_APP.icon}</span>
                <p className="text-white font-semibold text-lg">{FEATURED_APP.name}</p>
                <p className="text-slate-400 text-sm mt-1">Painel autenticado</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600 text-white">
                Principal
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Disponível
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {FEATURED_APP.name}
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              {FEATURED_APP.longDescription}
            </p>

            <a
              href={FEATURED_APP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Acessar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
