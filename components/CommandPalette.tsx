'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { capabilities, caseStudies } from '@/lib/content'

type Entry = {
  group: string
  title: string
  detail: string
  target: string
  keywords: string
}

const entries: Entry[] = [
  ...caseStudies.map((study) => ({
    group: 'Architecture',
    title: study.title,
    detail: study.tab,
    target: `?case=${study.id}#architecture`,
    keywords: [
      study.tab,
      study.eyebrow,
      study.challenge,
      study.lessons,
      ...study.stack,
      ...study.impact.flatMap((group) => [group.category, ...group.points]),
      ...study.tradeoffs,
    ]
      .join(' ')
      .toLowerCase(),
  })),
  ...capabilities.map((capability) => ({
    group: 'Capability',
    title: capability.title,
    detail: capability.description,
    target: '#leverage',
    keywords: `${capability.title} ${capability.description} ${capability.points.join(' ')}`.toLowerCase(),
  })),
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery('')
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsOpen((open) => !open)
        return
      }
      if (event.key === 'Escape') {
        close()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [close])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return entries.slice(0, 6)
    return entries.filter((entry) => entry.keywords.includes(term)).slice(0, 8)
  }, [query])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-[#5b5b52] transition-colors hover:border-black/40 hover:text-[#171713] lg:h-auto lg:w-auto lg:gap-2 lg:px-4 lg:py-2"
        aria-label="Search portfolio"
      >
        <FaSearch size={12} aria-hidden="true" />
        <span className="hidden lg:inline">Search</span>
        <kbd className="ml-1 hidden rounded border border-black/15 px-1.5 py-0.5 font-sans text-[11px] text-[#8a8a80] lg:inline">
          ⌘K
        </kbd>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/30 px-4 pt-[12vh] backdrop-blur-sm"
          role="presentation"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search the portfolio"
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-black/10 bg-[#f7f7f3] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-black/10 px-5 py-4">
              <FaSearch size={13} className="text-[#8a8a80]" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try terraform, OpenTelemetry or FinOps"
                className="w-full bg-transparent text-base outline-none placeholder:text-[#9a9a90]"
              />
            </div>

            <ul className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-5 py-6 text-sm text-[#727269]">No matches for “{query}”.</li>
              )}
              {results.map((entry) => (
                <li key={`${entry.group}-${entry.title}`}>
                  <a
                    href={entry.target}
                    onClick={close}
                    className="block px-5 py-3 transition-colors hover:bg-black/5"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4f6b45]">
                      {entry.group}
                    </p>
                    <p className="mt-1 font-medium leading-6">{entry.title}</p>
                    <p className="text-sm text-[#727269]">{entry.detail}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
