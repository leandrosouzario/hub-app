import { UPCOMING_APPS } from '@/lib/apps'

const STATUS_ORDER = {
  in_development: 0,
  planned: 1,
}

const timelineStyles = {
  in_development: {
    dot: 'bg-amber-500 ring-amber-100',
    label: 'text-amber-700 bg-amber-50 border-amber-200',
  },
  planned: {
    dot: 'bg-slate-400 ring-slate-100',
    label: 'text-slate-500 bg-slate-100 border-slate-200',
  },
}

export default function Roadmap() {
  const sorted = [...UPCOMING_APPS].sort(
    (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]
  )

  return (
    <section id="roadmap" className="py-14 sm:py-16 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 text-center">
          Próximos Projetos
        </h2>
        <p className="text-sm text-slate-500 text-center mb-10">
          Evolução planejada do ecossistema
        </p>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-px bg-slate-200" aria-hidden="true" />

          <div className="space-y-4">
            {sorted.map((app) => {
              const style = timelineStyles[app.status]

              return (
                <div key={app.id} className="relative flex gap-4 sm:gap-6 pl-10 sm:pl-14">
                  <span
                    className={`absolute left-2.5 sm:left-4 top-5 w-3 h-3 rounded-full ring-4 ${style.dot}`}
                    aria-hidden="true"
                  />

                  <div className="flex-1 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xl" aria-hidden="true">{app.icon}</span>
                      <h3 className="font-semibold text-slate-900">{app.name}</h3>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${style.label}`}>
                        {app.statusLabel}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{app.shortDescription}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
