import { APPS } from '@/lib/apps'
import AppCard from '@/components/AppCard'

export default function AppPortal() {
  return (
    <section
      id="apps"
      className="min-h-[calc(100vh-3.5rem)] flex flex-col bg-slate-50 px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-8"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <div className="text-center mb-5 sm:mb-6 shrink-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Leandro Souza Hub
          </h1>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Aplicações e ferramentas desenvolvidas por mim.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 content-start">
          {APPS.map((app) => (
            <AppCard key={app.id} app={app} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
