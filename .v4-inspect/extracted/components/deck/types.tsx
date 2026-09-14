import type { ReactNode } from 'react'

export type DeckSlide = {
  id: number
  nav: string
  block: string
  node: ReactNode
}

/** Slides are authored without id; ids are assigned when the deck is assembled. */
export type SlideDef = Omit<DeckSlide, 'id'>

export function Hi({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-primary">{children}</span>
}
export function Ok({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-accent">{children}</span>
}
export function Bad({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-destructive">{children}</span>
}

export const usd = (v: number) => `USD ${v.toLocaleString('es-AR')}`
export const usdK = (v: number) => `${(v / 1000).toLocaleString('es-AR', { maximumFractionDigits: 0 })}k`
export const usdM = (v: number) => `${(v / 1e6).toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })} M`
export const pct = (v: number) => `${v.toLocaleString('es-AR', { maximumFractionDigits: 1 })}%`
export const ars = (v: number) => `$${v.toLocaleString('es-AR', { maximumFractionDigits: 0 })}`
