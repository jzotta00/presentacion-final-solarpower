'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Grid2x2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { slides } from './slides'

const DESIGN_W = 1280
const DESIGN_H = 720

export function DeckViewer() {
  const [index, setIndex] = useState(0)
  const [overview, setOverview] = useState(false)
  const total = slides.length

  const go = useCallback(
    (next: number) => {
      setIndex((prev) => Math.min(total - 1, Math.max(0, next)))
    },
    [total],
  )

  // keep latest index available inside the keydown handler
  const indexRef = useRef(index)
  useEffect(() => {
    indexRef.current = index
  }, [index])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        setOverview(false)
        go(indexRef.current + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        setOverview(false)
        go(indexRef.current - 1)
      } else if (e.key === 'Home') {
        go(0)
      } else if (e.key === 'End') {
        go(total - 1)
      } else if (e.key.toLowerCase() === 'g') {
        setOverview((v) => !v)
      } else if (e.key === 'Escape') {
        setOverview(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, total])

  const current = slides[index]

  // Fixed design canvas scaled to fit the stage, so layout is identical on every screen
  const stageRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const el = stageRef.current
    if (!el) return
    const update = () => {
      const r = el.getBoundingClientRect()
      const pad = 24
      setScale(Math.min((r.width - pad * 2) / DESIGN_W, (r.height - pad * 2) / DESIGN_H))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <main className="flex h-dvh w-full flex-col bg-background">
      {/* Progress bar */}
      <div className="h-1 w-full bg-secondary">
        <div
          className="h-full bg-primary transition-[width] duration-300"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* Stage */}
      <div ref={stageRef} className="relative flex flex-1 items-center justify-center overflow-hidden p-3 sm:p-6">
        <div
          className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          style={{ width: DESIGN_W * scale, height: DESIGN_H * scale }}
        >
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})` }}
          >
            {current.node}
          </div>
        </div>

        {/* Prev / Next click zones */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Diapositiva anterior"
          className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition hover:bg-secondary disabled:opacity-30 sm:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === total - 1}
          aria-label="Diapositiva siguiente"
          className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition hover:bg-secondary disabled:opacity-30 sm:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom bar */}
      <footer className="flex items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-8">
        <div className="flex items-center gap-3 truncate">
          <span className="rounded-full bg-primary/15 px-2.5 py-0.5 font-serif text-xs font-semibold uppercase tracking-wider text-primary">
            {current.block}
          </span>
          <span className="truncate text-sm text-muted-foreground">{current.nav}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-serif text-sm font-semibold tabular-nums text-muted-foreground">
            {String(index + 1).padStart(2, '0')} / {total}
          </span>
          <button
            type="button"
            onClick={() => setOverview((v) => !v)}
            aria-label="Ver todas las diapositivas"
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground transition hover:bg-secondary"
          >
            <Grid2x2 className="h-4 w-4" />
            <span className="hidden sm:inline">Índice</span>
          </button>
        </div>
      </footer>

      {/* Overview grid */}
      {overview && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <h2 className="font-serif text-lg font-semibold">Índice de diapositivas</h2>
            <button
              type="button"
              onClick={() => setOverview(false)}
              aria-label="Cerrar índice"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto p-6 sm:grid-cols-3 lg:grid-cols-4">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  go(i)
                  setOverview(false)
                }}
                className={cn(
                  'group flex flex-col rounded-xl border p-4 text-left transition hover:border-primary',
                  i === index ? 'border-primary bg-primary/10' : 'border-border bg-card',
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.block}</span>
                </div>
                <span className="mt-2 text-sm font-medium leading-snug">{s.nav}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
