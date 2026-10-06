'use client'

import { useId, useRef, useState, type ReactNode, type KeyboardEvent } from 'react'

// Tabs for a program's study plan; panel content is rendered on the server and passed in.
export default function StudyPlanTabs({ tabs }: { tabs: { label: string; count?: number; content: ReactNode }[] }) {
  const [active, setActive] = useState(0)
  const baseId = useId()
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = tabs.length - 1
    let next = active
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    else return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2 mb-6" onKeyDown={onKeyDown}>
        {tabs.map((t, i) => {
          const selected = i === active
          return (
            <button
              key={t.label}
              ref={(el) => { tabRefs.current[i] = el }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2"
              style={{
                background: selected ? '#1d1e20' : '#FFFFFF',
                color: selected ? '#FFFFFF' : '#1d1e20',
                border: `1px solid ${selected ? '#1d1e20' : '#D1CFC9'}`,
                borderRadius: '999px',
              }}
            >
              {t.label}
              {t.count !== undefined && (
                <span
                  className="text-xs px-1.5 rounded-full"
                  style={{ background: selected ? 'rgba(255,255,255,0.18)' : '#F4F2EE' }}
                >
                  {t.count}
                </span>
              )}
            </button>
          )
        })}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.label}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className="focus:outline-none"
        >
          {t.content}
        </div>
      ))}
    </div>
  )
}
