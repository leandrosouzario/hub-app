import { TECH_CHIPS } from '@/lib/apps'

export default function TechChips() {
  return (
    <section id="stack" className="py-10 sm:py-12 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-5">
          Tecnologias
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {TECH_CHIPS.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
