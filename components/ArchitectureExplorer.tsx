'use client'

import { useEffect, useState } from 'react'
import { FaCheck, FaLink, FaTimes } from 'react-icons/fa'
import type { CaseStudy } from '@/lib/content'

function CaseStudyPanel({ study }: { study: CaseStudy }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#b9ccae]">
          {study.eyebrow}
        </p>
        <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl">
          {study.title}
        </h3>

        <div className="mt-8">
          <p className="adr-label">Challenge</p>
          <p className="mt-2 leading-7 text-white/70">{study.challenge}</p>
        </div>

        <div className="mt-8">
          <p className="adr-label">Constraints</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
            {study.constraints.map((constraint) => (
              <li key={constraint} className="flex gap-3">
                <span aria-hidden="true" className="text-white/30">
                  —
                </span>
                {constraint}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <p className="adr-label">Architecture</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-3 text-sm">
            {study.architecture.map((node, index) => (
              <span key={node} className="flex items-center gap-2">
                <span className="rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2">
                  {node}
                </span>
                {index < study.architecture.length - 1 && (
                  <span aria-hidden="true" className="text-[#b9ccae]">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="adr-label">Options considered</p>
        <ul className="mt-3 space-y-3">
          {study.options.map((option) => (
            <li
              key={option.name}
              className={`rounded-2xl border p-4 ${
                option.verdict === 'chosen'
                  ? 'border-[#b9ccae]/50 bg-[#b9ccae]/10'
                  : 'border-white/12 bg-white/[0.03]'
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-1 ${
                    option.verdict === 'chosen' ? 'text-[#b9ccae]' : 'text-white/35'
                  }`}
                >
                  {option.verdict === 'chosen' ? <FaCheck size={13} /> : <FaTimes size={13} />}
                </span>
                <div>
                  <p className="font-medium">
                    {option.name}
                    <span className="ml-2 text-xs uppercase tracking-[0.12em] text-white/40">
                      {option.verdict}
                    </span>
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-white/65">{option.reasoning}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <p className="adr-label">Trade-offs accepted</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
            {study.tradeoffs.map((tradeoff) => (
              <li key={tradeoff} className="flex gap-3">
                <span aria-hidden="true" className="text-white/30">
                  —
                </span>
                {tradeoff}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-8 border-t border-white/10 pt-8 lg:col-span-2 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="adr-label">Business impact</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {study.impact.map((group) => (
              <div key={group.category}>
                <p className="text-sm font-semibold text-[#dfe9da]">{group.category}</p>
                <ul className="mt-2 space-y-2 text-sm leading-6 text-white/70">
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="adr-label">Lessons learned</p>
          <p className="mt-3 text-sm leading-6 text-white/70">{study.lessons}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-white/10 pt-6 lg:col-span-2">
        {study.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ArchitectureExplorer({ studies }: { studies: CaseStudy[] }) {
  const [activeId, setActiveId] = useState(studies[0].id)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const requestedId = new URLSearchParams(window.location.search).get('case')
    if (requestedId && studies.some((study) => study.id === requestedId)) {
      setActiveId(requestedId)
    }
  }, [studies])

  const selectStudy = (id: string) => {
    setActiveId(id)
    setCopied(false)

    const url = new URL(window.location.href)
    url.searchParams.set('case', id)
    url.hash = 'architecture'
    window.history.replaceState({}, '', url)
  }

  const copyLink = async () => {
    const url = new URL(window.location.href)
    url.searchParams.set('case', activeId)
    url.hash = 'architecture'
    try {
      await navigator.clipboard.writeText(url.toString())
      setCopied(true)
    } catch {
      window.prompt('Copy this architecture link', url.toString())
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          role="tablist"
          aria-label="Architecture case studies"
        >
          {studies.map((study) => {
            const isActive = study.id === activeId
            return (
              <button
                key={study.id}
                type="button"
                role="tab"
                id={`tab-${study.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${study.id}`}
                onClick={() => selectStudy(study.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'border-transparent bg-white text-[#1c211b]'
                    : 'border-white/20 text-white/65 hover:border-white/50 hover:text-white'
                }`}
              >
                {study.tab}
              </button>
            )
          })}
        </div>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 text-sm text-white/65 transition hover:border-white/50 hover:text-white sm:h-auto sm:w-auto sm:px-4 sm:py-2"
          aria-label={`Copy link to ${studies.find((study) => study.id === activeId)?.tab}`}
        >
          <FaLink size={12} aria-hidden="true" />
          <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
        </button>
      </div>

      <div className="mt-10 grid border-t border-white/15 pt-10">
        {studies.map((study) => {
          const isActive = study.id === activeId
          return (
            <div
              key={study.id}
              role="tabpanel"
              id={`panel-${study.id}`}
              aria-labelledby={`tab-${study.id}`}
              aria-hidden={!isActive}
              className="col-start-1 row-start-1 transition-opacity duration-200"
              style={{
                visibility: isActive ? 'visible' : 'hidden',
                pointerEvents: isActive ? 'auto' : 'none',
                opacity: isActive ? 1 : 0,
              }}
            >
              <CaseStudyPanel study={study} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
