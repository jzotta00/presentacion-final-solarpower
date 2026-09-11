import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { ARG_PROVINCES, ARG_VIEWBOX } from './argentina-map-data'

/* =====================================================================
   SLIDE SHELL
   Every content slide carries: a chapter reference (which section of the
   informe backs it), a title, the content, and a source footer with date.
   ===================================================================== */

export function Slide({
  children,
  className,
  chapter,
  source,
  block,
}: {
  children: ReactNode
  className?: string
  /** Section of the informe that backs this slide, e.g. "Informe 2.3.2" */
  chapter?: string
  /** Original data source with date, e.g. "INDEC, Censo 2022" */
  source?: ReactNode
  block?: string
}) {
  return (
    <section
      className={cn(
        'relative flex h-full w-full flex-col px-8 pb-12 pt-7 sm:px-12 md:px-16 md:pb-14 md:pt-9',
        className,
      )}
    >
      {(block || chapter) && (
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          {block && <span className="font-serif font-semibold text-primary">{block}</span>}
          {block && chapter && <span aria-hidden="true">|</span>}
          {chapter && <span>{chapter}</span>}
        </div>
      )}
      <div className="flex min-h-0 flex-1 flex-col justify-center">{children}</div>
      {source && (
        <div className="absolute inset-x-8 bottom-4 border-t border-border pt-2 text-[11px] leading-snug text-muted-foreground sm:inset-x-12 md:inset-x-16">
          <span className="font-semibold">Fuente: </span>
          {source}
        </div>
      )}
    </section>
  )
}

export function Title({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        'text-balance font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('mt-3 max-w-4xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg', className)}>{children}</p>
  )
}

export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-pretty text-sm leading-relaxed text-muted-foreground md:text-base', className)}>{children}</p>
}

/* ---------- Section divider slide ---------- */

export function Divider({
  number,
  title,
  subtitle,
  items,
}: {
  number: string
  title: string
  subtitle?: string
  items?: string[]
}) {
  return (
    <section className="relative flex h-full w-full flex-col justify-center px-10 py-12 sm:px-16 md:px-24">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5" aria-hidden="true" />
      <div className="relative">
        <span className="font-serif text-6xl font-bold text-primary/60 md:text-8xl">{number}</span>
        <h2 className="mt-2 max-w-3xl text-balance font-serif text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">{subtitle}</p>}
        {items && (
          <ul className="mt-8 grid max-w-3xl gap-2 text-sm text-muted-foreground md:grid-cols-2 md:text-base">
            {items.map((it, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {it}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

/* ---------- PENDIENTE box: never invent, mark what is missing ---------- */

export function Pendiente({
  title = 'Pendiente',
  children,
  owner,
  className,
}: {
  title?: string
  children: ReactNode
  owner?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col justify-center rounded-lg border-2 border-dashed border-primary/60 bg-primary/10 p-4 text-sm',
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2 font-serif text-xs font-bold text-primary">
        <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
        {title}
        {owner && <span className="font-sans font-normal text-muted-foreground">(responsable: {owner})</span>}
      </div>
      <div className="mt-1.5 text-pretty text-foreground/90">{children}</div>
    </div>
  )
}

/* ---------- Stat / metric card ---------- */

export function Stat({
  value,
  label,
  tone = 'default',
  className,
}: {
  value: ReactNode
  label: ReactNode
  tone?: 'default' | 'primary' | 'accent' | 'destructive'
  className?: string
}) {
  const toneClass = {
    default: 'text-foreground',
    primary: 'text-primary',
    accent: 'text-accent',
    destructive: 'text-destructive',
  }[tone]
  return (
    <div className={cn('rounded-lg border border-border bg-card/60 p-4', className)}>
      <div className={cn('font-serif text-2xl font-bold leading-none md:text-3xl', toneClass)}>{value}</div>
      <div className="mt-2 text-xs leading-snug text-muted-foreground md:text-sm">{label}</div>
    </div>
  )
}

/* ---------- Bullets ---------- */

export function Bullets({ items, className, dense }: { items: ReactNode[]; className?: string; dense?: boolean }) {
  return (
    <ul className={cn('flex flex-col', dense ? 'gap-1.5' : 'gap-3', className)}>
      {items.map((item, i) => (
        <li key={i} className={cn('flex gap-3 leading-relaxed', dense ? 'text-sm' : 'text-sm md:text-base')}>
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ---------- Figure from the informe (real PNG) ---------- */

export function Figura({
  src,
  caption,
  className,
  imgClassName,
}: {
  src: string
  caption: string
  className?: string
  imgClassName?: string
}) {
  return (
    <figure className={cn('flex min-h-0 flex-col', className)}>
      <div className="min-h-0 flex-1 overflow-hidden rounded-lg bg-white p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={caption} className={cn('h-full w-full object-contain', imgClassName)} />
      </div>
      <figcaption className="mt-2 text-xs leading-snug text-muted-foreground">{caption}</figcaption>
    </figure>
  )
}

/* ---------- Data table ---------- */

export function Table({
  headers,
  rows,
  className,
  compact,
  highlightLast,
  align = 'right',
}: {
  headers: string[]
  rows: ReactNode[][]
  className?: string
  compact?: boolean
  highlightLast?: boolean
  align?: 'right' | 'left'
}) {
  return (
    <div className={cn('self-start overflow-hidden rounded-lg border border-border', className)}>
      <table className={cn('w-full border-collapse', compact ? 'text-[13px]' : 'text-sm md:text-[15px]')}>
        <thead>
          <tr className="bg-secondary">
            {headers.map((h, i) => (
              <th
                key={i}
                className={cn('px-3 py-2 font-semibold text-muted-foreground', i === 0 || align === 'left' ? 'text-left' : 'text-right')}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr
              key={ri}
              className={cn(ri % 2 === 1 ? 'bg-card/40' : '', highlightLast && ri === rows.length - 1 ? 'bg-primary/15 font-semibold' : '')}
            >
              {r.map((c, i) => (
                <td
                  key={i}
                  className={cn('px-3 tabular-nums', compact ? 'py-1.5' : 'py-2', i === 0 || align === 'left' ? 'text-left' : 'text-right')}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* =====================================================================
   CHARTS (SVG, with real axes and units)
   ===================================================================== */

export type Tone = 'default' | 'primary' | 'accent' | 'destructive' | 'muted'
const toneFill: Record<Tone, string> = {
  default: 'fill-foreground/70',
  primary: 'fill-primary',
  accent: 'fill-accent',
  destructive: 'fill-destructive',
  muted: 'fill-muted-foreground/50',
}
const toneStroke: Record<Tone, string> = {
  default: 'stroke-foreground/70',
  primary: 'stroke-primary',
  accent: 'stroke-accent',
  destructive: 'stroke-destructive',
  muted: 'stroke-muted-foreground/50',
}
const toneBg: Record<Tone, string> = {
  default: 'bg-foreground/70',
  primary: 'bg-primary',
  accent: 'bg-accent',
  destructive: 'bg-destructive',
  muted: 'bg-muted-foreground/50',
}

function niceTicks(min: number, max: number, n = 5) {
  const range = max - min || 1
  const raw = range / n
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const norm = raw / mag
  const step = (norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10) * mag
  const lo = Math.floor(min / step) * step
  const hi = Math.ceil(max / step) * step
  const ticks: number[] = []
  for (let v = lo; v <= hi + step / 2; v += step) ticks.push(Math.round(v * 1e6) / 1e6)
  return { ticks, lo, hi }
}

/** Vertical bars with a Y axis, gridlines and value labels. Supports negatives. */
export function Bars({
  data,
  height = 300,
  width = 560,
  valueFormat = (v: number) => String(v),
  unit,
  className,
  showValues = true,
}: {
  data: { label: string; value: number; tone?: Tone }[]
  height?: number
  width?: number
  valueFormat?: (v: number) => string
  unit?: string
  className?: string
  showValues?: boolean
}) {
  const padL = 56
  const padR = 12
  const padT = 20
  const padB = 44
  const vals = data.map((d) => d.value)
  const { ticks, lo, hi } = niceTicks(Math.min(0, ...vals), Math.max(0, ...vals))
  const plotH = height - padT - padB
  const plotW = width - padL - padR
  const y = (v: number) => padT + plotH - ((v - lo) / (hi - lo)) * plotH
  const bw = plotW / data.length
  const barW = Math.min(bw * 0.62, 70)
  return (
    <div className={cn('w-full', className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img">
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={padL} x2={width - padR} y1={y(t)} y2={y(t)} className="stroke-border" strokeWidth={1} />
            <text x={padL - 8} y={y(t) + 3} textAnchor="end" className="fill-muted-foreground text-[11px]">
              {valueFormat(t)}
            </text>
          </g>
        ))}
        <line x1={padL} x2={width - padR} y1={y(0)} y2={y(0)} className="stroke-foreground/50" strokeWidth={1.2} />
        {unit && (
          <text x={padL} y={12} className="fill-muted-foreground text-[11px]">
            {unit}
          </text>
        )}
        {data.map((d, i) => {
          const cx = padL + bw * i + bw / 2
          const top = Math.min(y(d.value), y(0))
          const h = Math.abs(y(d.value) - y(0))
          return (
            <g key={i}>
              <rect x={cx - barW / 2} y={top} width={barW} height={Math.max(h, 1)} rx={3} className={toneFill[d.tone ?? 'primary']} />
              {showValues && (
                <text x={cx} y={d.value >= 0 ? top - 5 : top + h + 11} textAnchor="middle" className="fill-foreground text-[11px] font-semibold">
                  {valueFormat(d.value)}
                </text>
              )}
              <text x={cx} y={height - padB + 16} textAnchor="middle" className="fill-muted-foreground text-[11px]">
                {d.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

/** Horizontal bars (rankings with long labels). */
export function HBars({
  data,
  valueFormat = (v: number) => String(v),
  className,
  max,
}: {
  data: { label: string; value: number; tone?: Tone; note?: string }[]
  valueFormat?: (v: number) => string
  className?: string
  max?: number
}) {
  const m = max ?? Math.max(...data.map((d) => d.value), 1)
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {data.map((d, i) => (
        <div key={i} className="grid grid-cols-[minmax(0,10rem)_1fr_auto] items-center gap-3 text-xs md:text-sm">
          <span className="truncate text-muted-foreground">{d.label}</span>
          <div className="h-5 overflow-hidden rounded bg-secondary">
            <div className={cn('h-full rounded', toneBg[d.tone ?? 'primary'])} style={{ width: `${Math.max((d.value / m) * 100, 0.6)}%` }} />
          </div>
          <span className="w-40 text-right font-semibold tabular-nums">
            {valueFormat(d.value)}
            {d.note && <span className="ml-1 font-normal text-muted-foreground">{d.note}</span>}
          </span>
        </div>
      ))}
    </div>
  )
}

/** Multi-series line chart with real axes. */
export function Lines({
  series,
  labels,
  height = 320,
  width = 620,
  valueFormat = (v: number) => String(v),
  unit,
  className,
  markers = true,
  labelEvery = 1,
  annotateLast = true,
  zeroLine = true,
}: {
  series: { name: string; values: number[]; tone?: Tone; dashed?: boolean }[]
  labels: string[]
  height?: number
  width?: number
  valueFormat?: (v: number) => string
  unit?: string
  className?: string
  markers?: boolean
  labelEvery?: number
  annotateLast?: boolean
  zeroLine?: boolean
}) {
  const padL = 62
  const padR = 16
  const padT = 20
  const padB = 40
  const all = series.flatMap((s) => s.values)
  const { ticks, lo, hi } = niceTicks(Math.min(zeroLine ? 0 : Infinity, ...all), Math.max(zeroLine ? 0 : -Infinity, ...all))
  const plotH = height - padT - padB
  const plotW = width - padL - padR
  const n = labels.length
  const x = (i: number) => padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW)
  const y = (v: number) => padT + plotH - ((v - lo) / (hi - lo)) * plotH
  return (
    <div className={cn('w-full', className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img">
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={padL} x2={width - padR} y1={y(t)} y2={y(t)} className="stroke-border" strokeWidth={1} />
            <text x={padL - 8} y={y(t) + 3} textAnchor="end" className="fill-muted-foreground text-[11px]">
              {valueFormat(t)}
            </text>
          </g>
        ))}
        {zeroLine && lo < 0 && <line x1={padL} x2={width - padR} y1={y(0)} y2={y(0)} className="stroke-foreground/50" strokeWidth={1.2} />}
        {unit && (
          <text x={padL} y={12} className="fill-muted-foreground text-[11px]">
            {unit}
          </text>
        )}
        {labels.map((l, i) =>
          i % labelEvery === 0 || i === n - 1 ? (
            <text key={i} x={x(i)} y={height - padB + 16} textAnchor="middle" className="fill-muted-foreground text-[11px]">
              {l}
            </text>
          ) : null,
        )}
        {series.map((s, si) => {
          const d = s.values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(v)}`).join(' ')
          const tone = s.tone ?? 'primary'
          return (
            <g key={si}>
              <path d={d} fill="none" className={toneStroke[tone]} strokeWidth={2.5} strokeDasharray={s.dashed ? '6 5' : undefined} />
              {markers && s.values.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r={3} className={toneFill[tone]} />)}
              {annotateLast && (
                <text x={x(n - 1) - 4} y={y(s.values[n - 1]) - 8} textAnchor="end" className={cn('text-[11px] font-semibold', toneFill[tone])}>
                  {s.name}: {valueFormat(s.values[n - 1])}
                </text>
              )}
            </g>
          )
        })}
      </svg>
      {series.length > 1 && (
        <div className="mt-1 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          {series.map((s, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className={cn('inline-block h-0.5 w-5', toneBg[s.tone ?? 'primary'])} />
              {s.name}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

/** Cash-flow style: bars for annual, line for cumulative. */
export function BarsPlusLine({
  labels,
  bars,
  line,
  height = 340,
  width = 620,
  valueFormat = (v: number) => String(v),
  unit,
  barName = 'Anual',
  lineName = 'Acumulado',
  className,
}: {
  labels: string[]
  bars: number[]
  line: number[]
  height?: number
  width?: number
  valueFormat?: (v: number) => string
  unit?: string
  barName?: string
  lineName?: string
  className?: string
}) {
  const padL = 66
  const padR = 16
  const padT = 20
  const padB = 40
  const all = [...bars, ...line, 0]
  const { ticks, lo, hi } = niceTicks(Math.min(...all), Math.max(...all))
  const plotH = height - padT - padB
  const plotW = width - padL - padR
  const n = labels.length
  const bw = plotW / n
  const x = (i: number) => padL + bw * i + bw / 2
  const y = (v: number) => padT + plotH - ((v - lo) / (hi - lo)) * plotH
  const path = line.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(v)}`).join(' ')
  return (
    <div className={cn('w-full', className)}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img">
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={padL} x2={width - padR} y1={y(t)} y2={y(t)} className="stroke-border" strokeWidth={1} />
            <text x={padL - 8} y={y(t) + 3} textAnchor="end" className="fill-muted-foreground text-[11px]">
              {valueFormat(t)}
            </text>
          </g>
        ))}
        <line x1={padL} x2={width - padR} y1={y(0)} y2={y(0)} className="stroke-foreground/50" strokeWidth={1.2} />
        {unit && (
          <text x={padL} y={12} className="fill-muted-foreground text-[11px]">
            {unit}
          </text>
        )}
        {bars.map((v, i) => (
          <rect
            key={i}
            x={x(i) - bw * 0.3}
            y={Math.min(y(v), y(0))}
            width={bw * 0.6}
            height={Math.max(Math.abs(y(v) - y(0)), 1)}
            rx={2}
            className={v < 0 ? 'fill-destructive/80' : 'fill-primary/80'}
          />
        ))}
        <path d={path} fill="none" className="stroke-accent" strokeWidth={2.5} />
        {line.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r={3} className="fill-accent" />
        ))}
        {labels.map((l, i) => (
          <text key={i} x={x(i)} y={height - padB + 16} textAnchor="middle" className="fill-muted-foreground text-[11px]">
            {l}
          </text>
        ))}
      </svg>
      <div className="mt-1 flex justify-center gap-5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-primary/80" /> {barName}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-5 bg-accent" /> {lineName}
        </span>
      </div>
    </div>
  )
}

/** Donut for a composition (e.g. electricity mix). */
export function Donut({ data, size = 220, className }: { data: { label: string; value: number; color: string }[]; size?: number; className?: string }) {
  const total = data.reduce((a, b) => a + b.value, 0)
  const r = 44
  const c = 2 * Math.PI * r
  let acc = 0
  return (
    <div className={cn('flex items-center gap-6', className)}>
      <svg viewBox="0 0 120 120" width={size} height={size} role="img">
        {data.map((d, i) => {
          const frac = d.value / total
          const dash = `${frac * c} ${c}`
          const offset = -acc * c
          acc += frac
          return (
            <circle key={i} cx={60} cy={60} r={r} fill="none" stroke={d.color} strokeWidth={18} strokeDasharray={dash} strokeDashoffset={offset} transform="rotate(-90 60 60)" />
          )
        })}
      </svg>
      <ul className="flex flex-col gap-1.5 text-sm">
        {data.map((d, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm" style={{ background: d.color }} />
            <span className="text-muted-foreground">{d.label}</span>
            <span className="ml-auto pl-4 font-semibold tabular-nums">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Funnel: descending widths with retention note. */
export function Funnel({ steps, className }: { steps: { label: string; value: number; display: string; note?: string; tone?: Tone }[]; className?: string }) {
  const max = steps[0].value
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {steps.map((s, i) => (
        <div key={i} className="grid grid-cols-[1fr_auto] items-center gap-4">
          <div
            className={cn('flex h-11 items-center justify-between rounded-md px-3 text-sm font-semibold text-background', toneBg[s.tone ?? 'primary'])}
            style={{ width: `${Math.max((s.value / max) * 100, 14)}%`, minWidth: '12rem' }}
          >
            <span className="truncate">{s.label}</span>
            <span className="pl-3 tabular-nums">{s.display}</span>
          </div>
          <span className="w-48 text-right text-xs text-muted-foreground">{s.note}</span>
        </div>
      ))}
    </div>
  )
}

/* ---------- Argentina map with province highlighting ---------- */

export function ArgentinaMap({
  groups,
  className,
  labels = true,
  height = 520,
}: {
  groups: { name: string; postals: string[]; fill: string; label?: string; marker?: boolean }[]
  className?: string
  labels?: boolean
  height?: number
}) {
  const markerProvs = groups.filter((g) => g.marker).flatMap((g) => g.postals.map((p) => ({ p, fill: g.fill })))
  const colorOf = (p: { postal: string; name: string }) => {
    for (const g of groups) if (g.postals.includes(p.postal) || g.postals.includes(p.name)) return g.fill
    return 'oklch(0.3 0.02 255)'
  }
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <svg viewBox={ARG_VIEWBOX} style={{ height, width: 'auto' }} role="img" aria-label="Mapa de Argentina por provincia">
        {ARG_PROVINCES.map((p) => (
          <path key={p.name} d={p.d} fill={colorOf(p)} stroke="oklch(0.17 0.02 255)" strokeWidth={2} />
        ))}
        {markerProvs.map(({ p, fill }) => {
          const prov = ARG_PROVINCES.find((x) => x.postal === p || x.name === p)
          if (!prov) return null
          return (
            <g key={`m-${p}`}>
              <circle cx={prov.cx} cy={prov.cy} r={26} fill={fill} fillOpacity={0.35} stroke={fill} strokeWidth={4} />
              <circle cx={prov.cx} cy={prov.cy} r={7} fill={fill} />
            </g>
          )
        })}
        {labels &&
          ARG_PROVINCES.filter((p) => p.name !== 'Ciudad de Buenos Aires').map((p) => (
            <text key={p.name} x={p.cx} y={p.cy} textAnchor="middle" className="fill-foreground/70 text-[16px] font-semibold">
              {p.postal === 'DF' ? 'BA' : p.postal}
            </text>
          ))}
      </svg>
      <ul className="flex flex-col justify-center gap-3 text-sm">
        {groups.map((g, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-3 w-3 shrink-0 rounded-sm" style={{ background: g.fill }} />
            <span>
              <span className="font-semibold">{g.name}</span>
              {g.label && <span className="block text-xs text-muted-foreground">{g.label}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Horizontal timeline (phases) ---------- */

export function Timeline({ phases, totalMonths, className }: { phases: { name: string; from: number; to: number; detail: string; tone?: Tone }[]; totalMonths: number; className?: string }) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="relative h-3 w-full rounded bg-secondary">
        {phases.map((p, i) => (
          <div
            key={i}
            className={cn('absolute top-0 h-3 rounded', toneBg[p.tone ?? 'primary'])}
            style={{ left: `${((p.from - 1) / totalMonths) * 100}%`, width: `${((p.to - p.from + 1) / totalMonths) * 100}%` }}
          />
        ))}
      </div>
      <div className="relative h-4 text-[11px] text-muted-foreground">
        {[0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
          .filter((m) => m <= totalMonths)
          .map((m) => (
            <span key={m} className="absolute -translate-x-1/2" style={{ left: `${(m / totalMonths) * 100}%` }}>
              {m === 0 ? 'M0' : `A${m / 12}`}
            </span>
          ))}
      </div>
      <div className="mt-2 grid gap-3 md:grid-cols-4">
        {phases.map((p, i) => (
          <div key={i} className="rounded-lg border border-border bg-card/60 p-3">
            <div className="flex items-center gap-2">
              <span className={cn('inline-block h-2.5 w-2.5 rounded-sm', toneBg[p.tone ?? 'primary'])} />
              <span className="font-serif text-sm font-semibold">{p.name}</span>
            </div>
            <div className="text-xs text-muted-foreground">Meses {p.from} a {p.to}</div>
            <p className="mt-1 text-xs leading-snug text-muted-foreground">{p.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Process steps (real sequences only) ---------- */

export function Steps({ steps, className, columns = 1 }: { steps: { title: string; detail?: string; meta?: string }[]; className?: string; columns?: 1 | 2 }) {
  return (
    <ol className={cn('grid gap-2', columns === 2 ? 'md:grid-cols-2' : '', className)}>
      {steps.map((s, i) => (
        <li key={i} className="flex gap-3 rounded-md border border-border bg-card/50 px-3 py-2">
          <span className="font-serif text-sm font-bold text-primary tabular-nums">{i + 1}</span>
          <div className="min-w-0">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium">{s.title}</span>
              {s.meta && <span className="shrink-0 text-xs text-muted-foreground">{s.meta}</span>}
            </div>
            {s.detail && <p className="text-xs leading-snug text-muted-foreground">{s.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ---------- Risk heat map (probability x impact) ---------- */

export function RiskGrid({ risks }: { risks: { id: string; name: string; p: number; i: number }[] }) {
  const cell = (p: number, i: number) => risks.filter((r) => r.p === p && r.i === i)
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-3">
        <div className="flex flex-col justify-between py-1 text-[11px] text-muted-foreground">
          <span>P = 5</span>
          <span>P = 1</span>
        </div>
        <div className="grid flex-1 grid-cols-5 gap-1">
          {[5, 4, 3, 2, 1].map((p) =>
            [1, 2, 3, 4, 5].map((i) => {
              const score = p * i
              const bg = score >= 12 ? 'bg-destructive/70' : score >= 6 ? 'bg-primary/50' : 'bg-accent/30'
              const items = cell(p, i)
              return (
                <div key={`${p}-${i}`} className={cn('flex min-h-12 flex-wrap items-center justify-center gap-1 rounded p-1 text-[11px] font-semibold', bg)}>
                  {items.map((r) => (
                    <span key={r.id} title={r.name} className="rounded bg-background/70 px-1">
                      {r.id}
                    </span>
                  ))}
                </div>
              )
            }),
          )}
        </div>
      </div>
      <div className="ml-12 flex justify-between text-[11px] text-muted-foreground">
        <span>Impacto = 1</span>
        <span>Impacto = 5</span>
      </div>
      <div className="ml-12 mt-1 flex gap-4 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-destructive/70" /> Crítico (≥ 12)</span>
        <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-primary/50" /> Moderado (6 a 11)</span>
        <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent/30" /> Bajo (menor a 6)</span>
      </div>
    </div>
  )
}
