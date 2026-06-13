'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/#destaque', label: 'Destaque' },
  { href: '/#roadmap', label: 'Projetos' },
  { href: '/#about', label: 'Sobre' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 relative">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-sm font-bold text-slate-900"
          >
            <span className="text-blue-700">LS</span> Hub
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-blue-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-14 bg-black/20 z-40"
            aria-label="Fechar menu"
            onClick={closeMobileMenu}
          />
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-14 z-50 bg-white border-b border-slate-200 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  )
}
