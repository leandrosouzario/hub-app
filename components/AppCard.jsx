function StatusBadge({ status, label }) {
  const styles = {
    available: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    in_development: 'bg-amber-50 text-amber-700 border-amber-200',
    planned: 'bg-slate-100 text-slate-500 border-slate-200',
  }

  return (
    <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${styles[status]}`}>
      {label}
    </span>
  )
}

export default function AppCard({ app, compact = false }) {
  const isAvailable = app.status === 'available'

  const cardClasses = isAvailable
    ? app.featured
      ? 'border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-lg hover:border-blue-700'
      : 'border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300'
    : 'border border-slate-200 bg-slate-50/80'

  const inner = (
    <>
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className={`${compact ? 'text-2xl' : 'text-3xl'}`} aria-hidden="true">
          {app.icon}
        </span>
        <div className="flex flex-wrap gap-1 justify-end">
          {app.featured && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-600 text-white">
              Principal
            </span>
          )}
          <StatusBadge status={app.status} label={app.statusLabel} />
        </div>
      </div>

      <h3 className={`font-semibold text-slate-900 mb-1.5 ${compact ? 'text-base' : 'text-lg'}`}>
        {app.name}
      </h3>

      <p className={`text-slate-600 leading-snug flex-1 ${compact ? 'text-xs' : 'text-sm'}`}>
        {app.shortDescription}
      </p>

      <div className="mt-4">
        {isAvailable ? (
          <span className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white group-hover:bg-blue-700 transition-colors">
            Acessar
          </span>
        ) : (
          <span className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-lg bg-slate-200 text-slate-500 cursor-not-allowed">
            Em breve
          </span>
        )}
      </div>
    </>
  )

  if (isAvailable) {
    return (
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex flex-col h-full rounded-xl p-4 sm:p-5 transition-all duration-200 ${cardClasses}`}
      >
        {inner}
      </a>
    )
  }

  return (
    <div className={`flex flex-col h-full rounded-xl p-4 sm:p-5 ${cardClasses}`} aria-disabled="true">
      {inner}
    </div>
  )
}
