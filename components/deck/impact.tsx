import type { ReactNode, ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import { cn } from '@/lib/utils'

/* =====================================================================
   IMPACT KIT
   Primitivas de la presentación "marketinera": poco texto, números grandes,
   un gráfico por diapositiva. Canvas fijo de 1280x720: se usan tamaños en px
   (sin breakpoints) para que el layout sea idéntico en cualquier pantalla.
   El anexo sigue usando primitives.tsx, que no se toca.
   ===================================================================== */

export type Icon = ComponentType<LucideProps>
export type Tone = 'sun' | 'green' | 'red' | 'ink' | 'mute' | 'soft' | 'white'

export const COLOR: Record<Tone, string> = {
  sun: 'oklch(0.66 0.17 55)',
  green: 'oklch(0.55 0.13 162)',
  red: 'oklch(0.52 0.2 25)',
  ink: 'oklch(0.24 0.035 255)',
  mute: 'oklch(0.72 0.02 255)',
  soft: 'oklch(0.86 0.08 80)',
  white: 'oklch(0.99 0.005 90)',
}
export const COLOR_DARK: Record<Tone, string> = {
  sun: 'oklch(0.8 0.16 78)',
  green: 'oklch(0.78 0.15 162)',
  red: 'oklch(0.72 0.18 25)',
  ink: 'oklch(0.3 0.04 255)',
  mute: 'oklch(0.6 0.03 255)',
  soft: 'oklch(0.5 0.07 70)',
  white: 'oklch(0.99 0.005 90)',
}

const toneText: Record<Tone, string> = {
  sun: 'text-primary',
  green: 'text-accent',
  red: 'text-destructive',
  ink: 'text-ink',
  mute: 'text-muted-foreground',
  soft: 'text-primary',
  white: 'text-white',
}

/* ---------- Slide frame ---------- */

type FrameTone = 'light' | 'dark' | 'sun' | 'green'

const frameBg: Record<FrameTone, string> = {
  light: 'bg-background text-foreground',
  dark: 'on-dark bg-ink text-white',
  sun: 'bg-primary text-ink',
  green: 'on-dark bg-accent text-white',
}

export function Frame({
  tone = 'light',
  block,
  source,
  children,
  className,
}: {
  tone?: FrameTone
  block?: string
  source?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn('relative flex h-full w-full flex-col overflow-hidden px-16 pb-12 pt-14', frameBg[tone], className)}>
      {block && (
        <div className="absolute left-16 top-5 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] opacity-60">
          <span className="inline-block h-2 w-2 rounded-full bg-current" />
          {block}
        </div>
      )}
      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
      {source && (
        <div className="absolute bottom-3.5 left-16 right-16 text-[11px] leading-tight opacity-55">
          <span className="font-semibold">Fuente:</span> {source}
        </div>
      )}
    </section>
  )
}

/* ---------- Typography ---------- */

const hSize = { xl: 'text-[72px]', lg: 'text-[54px]', md: 'text-[42px]', sm: 'text-[34px]' }

export function H({ children, size = 'lg', className }: { children: ReactNode; size?: keyof typeof hSize; className?: string }) {
  return <h2 className={cn('text-balance font-serif font-extrabold leading-[1.05] tracking-tight', hSize[size], className)}>{children}</h2>
}

export function Hl({ children, g, r }: { children: ReactNode; g?: boolean; r?: boolean }) {
  return <span className={r ? 'hl-r' : g ? 'hl-g' : 'hl'}>{children}</span>
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('text-[15px] font-bold uppercase tracking-[0.16em] text-primary', className)}>{children}</div>
}

export function Sub({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-pretty text-[22px] leading-snug opacity-75', className)}>{children}</p>
}

/** Giant number with optional unit and caption. */
export function Big({
  value,
  unit,
  caption,
  size = 150,
  tone = 'sun',
  className,
  align = 'left',
}: {
  value: ReactNode
  unit?: ReactNode
  caption?: ReactNode
  size?: number
  tone?: Tone
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('flex flex-col', align === 'center' ? 'items-center text-center' : '', className)}>
      <div className="flex items-baseline gap-3">
        <span
          className={cn('font-serif font-extrabold leading-[0.9] tracking-tight tabular-nums', toneText[tone])}
          style={{ fontSize: size }}
        >
          {value}
        </span>
        {unit && <span className="font-serif font-bold opacity-80" style={{ fontSize: Math.max(24, size * 0.26) }}>{unit}</span>}
      </div>
      {caption && <div className="mt-3 max-w-[560px] text-pretty text-[22px] leading-snug opacity-80">{caption}</div>}
    </div>
  )
}

/** Medium stat: number + short label. */
export function Stat({
  value,
  label,
  tone = 'sun',
  size = 64,
  className,
  card,
}: {
  value: ReactNode
  label: ReactNode
  tone?: Tone
  size?: number
  className?: string
  card?: boolean
}) {
  return (
    <div className={cn('flex flex-col', card ? 'rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm' : '', className)}>
      <div className={cn('font-serif font-extrabold leading-none tracking-tight tabular-nums', toneText[tone])} style={{ fontSize: size }}>
        {value}
      </div>
      <div className="mt-2.5 text-pretty text-[19px] leading-snug opacity-80">{label}</div>
    </div>
  )
}

/* ---------- Cards ---------- */

export function IconCard({
  icon: I,
  title,
  text,
  tone = 'sun',
  className,
  dark,
  big,
  row,
}: {
  icon: Icon
  title: ReactNode
  text?: ReactNode
  tone?: Tone
  className?: string
  dark?: boolean
  big?: boolean
  row?: boolean
}) {
  if (row) {
    const c = (dark ? COLOR_DARK : COLOR)[tone]
    return (
      <div className={cn('flex items-center gap-5 rounded-2xl px-6 py-4', dark ? 'border border-white/15 bg-white/[0.06]' : 'border border-black/10 bg-white/70 shadow-sm', className)}>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklch, ${c} 18%, transparent)`, color: c }}>
          <I style={{ width: 30, height: 30 }} strokeWidth={2} />
        </div>
        <div>
          <div className="font-serif text-[23px] font-bold leading-tight">{title}</div>
          {text && <div className="mt-1 text-[18px] leading-snug opacity-75">{text}</div>}
        </div>
      </div>
    )
  }
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl p-6',
        dark ? 'border border-white/15 bg-white/[0.06]' : 'border border-black/10 bg-white/70 shadow-sm',
        className,
      )}
    >
      <div
        className="flex items-center justify-center rounded-xl"
        style={{
          width: big ? 64 : 52,
          height: big ? 64 : 52,
          background: `color-mix(in oklch, ${(dark ? COLOR_DARK : COLOR)[tone]} 18%, transparent)`,
          color: (dark ? COLOR_DARK : COLOR)[tone],
        }}
      >
        <I style={{ width: big ? 34 : 28, height: big ? 34 : 28 }} strokeWidth={2} />
      </div>
      <div className={cn('mt-4 font-serif font-bold leading-tight', big ? 'text-[28px]' : 'text-[23px]')}>{title}</div>
      {text && <div className={cn('mt-2 text-pretty leading-snug opacity-75', big ? 'text-[20px]' : 'text-[18px]')}>{text}</div>}
    </div>
  )
}

export function Chip({ children, tone = 'ink', className, dark }: { children: ReactNode; tone?: Tone; className?: string; dark?: boolean }) {
  const c = (dark ? COLOR_DARK : COLOR)[tone]
  return (
    <span
      className={cn('inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[17px] font-semibold', className)}
      style={{ background: `color-mix(in oklch, ${c} 16%, transparent)`, color: c }}
    >
      {children}
    </span>
  )
}

export function Panel({ children, className, dark }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <div className={cn('rounded-2xl p-6', dark ? 'border border-white/15 bg-white/[0.06]' : 'border border-black/10 bg-white/70 shadow-sm', className)}>
      {children}
    </div>
  )
}

/* ---------- Divider (bloque) ---------- */

export function BlockDivider({ number, title, hook, topics }: { number: string; title: string; hook: string; topics?: string[] }) {
  return (
    <section className="on-dark relative flex h-full w-full flex-col justify-center overflow-hidden bg-ink px-20 text-white">
      <div
        className="pointer-events-none absolute -right-6 -top-10 select-none font-serif font-extrabold leading-none"
        style={{ fontSize: 560, color: 'transparent', WebkitTextStroke: '3px oklch(0.8 0.16 78 / 0.35)' }}
        aria-hidden="true"
      >
        {number}
      </div>
      <div className="absolute inset-y-0 left-0 w-3 bg-primary" />
      <div className="relative max-w-[820px]">
        <Kicker className="text-[17px]">{number === '0' ? '' : `Bloque ${number}`}</Kicker>
        <h2 className="mt-3 text-balance font-serif text-[84px] font-extrabold leading-[1] tracking-tight">{title}</h2>
        <p className="mt-6 max-w-[700px] text-pretty text-[28px] leading-snug text-white/75">{hook}</p>
        {topics && (
          <div className="mt-10 flex flex-wrap gap-3">
            {topics.map((t) => (
              <span key={t} className="rounded-full border border-white/25 px-4 py-1.5 text-[17px] text-white/80">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* =====================================================================
   CHARTS (SVG, tipografía grande, etiquetas directas)
   ===================================================================== */

type BarDatum = { label: string; value: number; tone?: Tone; sub?: string; display?: string }

export function VBars({
  data,
  w = 640,
  h = 360,
  fmt = (v: number) => String(v),
  maxBar = 120,
  labelSize = 17,
  valueSize = 22,
  dark,
  className,
}: {
  data: BarDatum[]
  w?: number
  h?: number
  fmt?: (v: number) => string
  maxBar?: number
  labelSize?: number
  valueSize?: number
  dark?: boolean
  className?: string
}) {
  const pal = dark ? COLOR_DARK : COLOR
  const vals = data.map((d) => d.value)
  const max = Math.max(0, ...vals)
  const min = Math.min(0, ...vals)
  const padT = 38
  const padB = data.some((d) => d.sub) ? 74 : 50
  const plotH = h - padT - padB
  const span = max - min || 1
  const y = (v: number) => padT + plotH - ((v - min) / span) * plotH
  const bw = w / data.length
  const bar = Math.min(bw * 0.68, maxBar)
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className={className} role="img">
      <line x1={0} x2={w} y1={y(0)} y2={y(0)} stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} />
      {data.map((d, i) => {
        const cx = bw * i + bw / 2
        const top = Math.min(y(d.value), y(0))
        const bh = Math.max(Math.abs(y(d.value) - y(0)), 2)
        const c = pal[d.tone ?? 'sun']
        return (
          <g key={i}>
            <rect x={cx - bar / 2} y={top} width={bar} height={bh} rx={8} fill={c} />
            <text
              x={cx}
              y={d.value >= 0 ? top - 9 : y(0) - 9}
              textAnchor="middle"
              fontSize={valueSize}
              fontWeight={800}
              fill="currentColor"
              fontFamily="var(--font-serif)"
            >
              {d.display ?? fmt(d.value)}
            </text>
            <text x={cx} y={h - padB + 28} textAnchor="middle" fontSize={labelSize} fill="currentColor" fillOpacity={0.75}>
              {d.label}
            </text>
            {d.sub && (
              <text x={cx} y={h - padB + 28 + labelSize + 6} textAnchor="middle" fontSize={labelSize - 2} fill="currentColor" fillOpacity={0.55}>
                {d.sub}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

export function HBars({
  data,
  fmt = (v: number) => String(v),
  max,
  labelW = 200,
  rowH = 40,
  gap = 12,
  fontSize = 20,
  dark,
  className,
}: {
  data: BarDatum[]
  fmt?: (v: number) => string
  max?: number
  labelW?: number
  rowH?: number
  gap?: number
  fontSize?: number
  dark?: boolean
  className?: string
}) {
  const pal = dark ? COLOR_DARK : COLOR
  const m = max ?? Math.max(...data.map((d) => d.value), 1)
  return (
    <div className={cn('flex flex-col', className)} style={{ gap }}>
      {data.map((d, i) => (
        <div key={i} className="flex items-center gap-4" style={{ height: rowH }}>
          <div className="shrink-0 text-right leading-tight opacity-85" style={{ width: labelW, fontSize }}>
            {d.label}
          </div>
          <div className="relative flex-1" style={{ height: rowH }}>
            <div className="absolute inset-y-0 left-0 rounded-md" style={{ width: `${Math.max((d.value / m) * 100, 0.8)}%`, background: pal[d.tone ?? 'sun'] }} />
          </div>
          <div className="shrink-0 font-serif font-extrabold tabular-nums" style={{ minWidth: 110, fontSize: fontSize + 2 }}>
            {d.display ?? fmt(d.value)}
            {d.sub && <span className="ml-1.5 text-[0.7em] font-medium opacity-60">{d.sub}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

export function LineChart({
  series,
  labels,
  w = 700,
  h = 360,
  fmt = (v: number) => String(v),
  labelEvery = 1,
  zero = true,
  area,
  dark,
  endLabels = true,
  className,
}: {
  series: { name: string; values: number[]; tone?: Tone; dashed?: boolean }[]
  labels: string[]
  w?: number
  h?: number
  fmt?: (v: number) => string
  labelEvery?: number
  zero?: boolean
  area?: boolean
  dark?: boolean
  endLabels?: boolean
  className?: string
}) {
  const pal = dark ? COLOR_DARK : COLOR
  const all = series.flatMap((s) => s.values)
  const lo = Math.min(zero ? 0 : Infinity, ...all)
  const hi = Math.max(zero ? 0 : -Infinity, ...all)
  const padL = 12
  const padR = endLabels ? 150 : 24
  const padT = 20
  const padB = 44
  const plotW = w - padL - padR
  const plotH = h - padT - padB
  const n = labels.length
  const x = (i: number) => padL + (i / (n - 1)) * plotW
  const y = (v: number) => padT + plotH - ((v - lo) / (hi - lo || 1)) * plotH
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className={className} role="img">
      {lo < 0 && <line x1={padL} x2={padL + plotW} y1={y(0)} y2={y(0)} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} strokeDasharray="5 5" />}
      <line x1={padL} x2={padL + plotW} y1={padT + plotH} y2={padT + plotH} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1.5} />
      {labels.map((l, i) =>
        i % labelEvery === 0 || i === n - 1 ? (
          <text key={i} x={x(i)} y={h - 14} textAnchor="middle" fontSize={16} fill="currentColor" fillOpacity={0.65}>
            {l}
          </text>
        ) : null,
      )}
      {series.map((s, si) => {
        const c = pal[s.tone ?? 'sun']
        const d = s.values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(v)}`).join(' ')
        const last = s.values[s.values.length - 1]
        return (
          <g key={si}>
            {area && si === 0 && <path d={`${d} L ${x(n - 1)} ${y(0)} L ${x(0)} ${y(0)} Z`} fill={c} fillOpacity={0.14} />}
            <path d={d} fill="none" stroke={c} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={s.dashed ? '10 8' : undefined} />
            <circle cx={x(n - 1)} cy={y(last)} r={7} fill={c} />
            {endLabels && (
              <>
                <text x={x(n - 1) + 16} y={y(last) - 2} fontSize={22} fontWeight={800} fill={c} fontFamily="var(--font-serif)">
                  {fmt(last)}
                </text>
                <text x={x(n - 1) + 16} y={y(last) + 20} fontSize={15} fill="currentColor" fillOpacity={0.7}>
                  {s.name}
                </text>
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/** Cascada: totales (desde 0) y deltas flotantes. */
export function Waterfall({
  steps,
  w = 760,
  h = 380,
  fmt = (v: number) => String(v),
  dark,
}: {
  steps: { label: string; value: number; kind: 'total' | 'delta'; tone?: Tone }[]
  w?: number
  h?: number
  fmt?: (v: number) => string
  dark?: boolean
}) {
  const pal = dark ? COLOR_DARK : COLOR
  let run = 0
  const bars = steps.map((s) => {
    const from = s.kind === 'total' ? 0 : run
    const to = s.kind === 'total' ? s.value : run + s.value
    run = to
    return { ...s, from, to }
  })
  const hi = Math.max(...bars.flatMap((b) => [b.from, b.to]))
  const padT = 40
  const padB = 66
  const plotH = h - padT - padB
  const y = (v: number) => padT + plotH - (v / hi) * plotH
  const bw = w / steps.length
  const bar = Math.min(bw * 0.62, 150)
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} role="img">
      <line x1={0} x2={w} y1={y(0)} y2={y(0)} stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} />
      {bars.map((b, i) => {
        const cx = bw * i + bw / 2
        const top = y(Math.max(b.from, b.to))
        const bh = Math.abs(y(b.from) - y(b.to))
        const c = pal[b.tone ?? (b.kind === 'total' ? 'sun' : 'red')]
        const next = bars[i + 1]
        return (
          <g key={i}>
            <rect x={cx - bar / 2} y={top} width={bar} height={Math.max(bh, 2)} rx={8} fill={c} />
            <text
              x={cx}
              y={top - 10}
              textAnchor="middle"
              fontSize={26}
              fontWeight={800}
              fill="currentColor"
              fontFamily="var(--font-serif)"
            >
              {b.kind === 'delta' && b.value < 0 ? `-${fmt(Math.abs(b.value))}` : fmt(b.value)}
            </text>
            <text x={cx} y={h - padB + 28} textAnchor="middle" fontSize={17} fill="currentColor" fillOpacity={0.8}>
              {b.label.split('\n').map((ln, k) => (
                <tspan key={k} x={cx} dy={k === 0 ? 0 : 21}>
                  {ln}
                </tspan>
              ))}
            </text>
            {next && (
              <line
                x1={cx + bar / 2}
                x2={bw * (i + 1) + bw / 2 - bar / 2}
                y1={y(b.to)}
                y2={y(b.to)}
                stroke="currentColor"
                strokeOpacity={0.3}
                strokeDasharray="4 4"
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}

/** Embudo centrado en escala logarítmica con valor y etiqueta dentro de la barra. */
export function FunnelBars({ steps, w = 1100 }: { steps: { label: string; value: number; display: string; tone?: Tone; note?: string }[]; w?: number }) {
  const logs = steps.map((s) => Math.log10(s.value))
  const mx = Math.max(...logs)
  const mn = Math.min(...logs) - 1.6
  return (
    <div className="flex flex-col items-center gap-3" style={{ width: w }}>
      {steps.map((s, i) => {
        const pct = (logs[i] - mn) / (mx - mn)
        return (
          <div key={i} className="relative flex items-center justify-center">
            <div
              className="flex h-[78px] items-center justify-center gap-4 rounded-xl px-6 text-white"
              style={{ width: Math.max(pct * w, 300), background: COLOR[s.tone ?? 'ink'] }}
            >
              <span className="font-serif text-[38px] font-extrabold tabular-nums leading-none">{s.display}</span>
              <span className="text-[19px] leading-tight opacity-90">{s.label}</span>
            </div>
            {s.note && <div className="absolute left-full ml-4 w-[220px] text-[16px] leading-tight opacity-65">{s.note}</div>}
          </div>
        )
      })}
    </div>
  )
}

/** Anillo con segmentos y leyenda grande. */
export function Ring({
  data,
  size = 330,
  center,
  centerLabel,
  legendSize = 22,
}: {
  data: { label: string; value: number; color: string }[]
  size?: number
  center?: ReactNode
  centerLabel?: ReactNode
  legendSize?: number
}) {
  const total = data.reduce((a, b) => a + b.value, 0)
  const r = 44
  const c = 2 * Math.PI * r
  let acc = 0
  return (
    <div className="flex items-center gap-10">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 120 120" width={size} height={size} role="img">
          {data.map((d, i) => {
            const frac = d.value / total
            const dash = `${frac * c - 0.8} ${c}`
            const offset = -acc * c
            acc += frac
            return <circle key={i} cx={60} cy={60} r={r} fill="none" stroke={d.color} strokeWidth={20} strokeDasharray={dash} strokeDashoffset={offset} transform="rotate(-90 60 60)" />
          })}
        </svg>
        {center && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="font-serif text-[64px] font-extrabold leading-none">{center}</div>
            {centerLabel && <div className="mt-1 text-[17px] opacity-70">{centerLabel}</div>}
          </div>
        )}
      </div>
      <ul className="flex flex-col gap-3">
        {data.map((d, i) => (
          <li key={i} className="flex items-center gap-3" style={{ fontSize: legendSize }}>
            <span className="inline-block h-4 w-4 rounded" style={{ background: d.color }} />
            <span className="opacity-80">{d.label}</span>
            <span className="ml-4 font-serif font-extrabold tabular-nums">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- Flow / steps ---------- */

export function FlowSteps({
  steps,
  dark,
  cols,
  tone = 'sun',
  small,
}: {
  steps: { icon?: Icon; title: ReactNode; text?: ReactNode; meta?: ReactNode; tone?: Tone }[]
  dark?: boolean
  cols?: number
  tone?: Tone
  small?: boolean
}) {
  const pal = dark ? COLOR_DARK : COLOR
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols ?? steps.length}, minmax(0, 1fr))` }}>
      {steps.map((s, i) => {
        const I = s.icon
        const c = pal[s.tone ?? tone]
        return (
          <div
            key={i}
            className={cn('relative flex flex-col rounded-2xl', small ? 'p-4' : 'p-5', dark ? 'border border-white/15 bg-white/[0.06]' : 'border border-black/10 bg-white/70 shadow-sm')}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex shrink-0 items-center justify-center rounded-full font-serif font-extrabold text-white"
                style={{ width: small ? 34 : 40, height: small ? 34 : 40, background: c, fontSize: small ? 17 : 20 }}
              >
                {i + 1}
              </span>
              {I && <I style={{ width: small ? 24 : 28, height: small ? 24 : 28, color: c }} strokeWidth={2} />}
            </div>
            <div className={cn('mt-3 font-serif font-bold leading-tight', small ? 'text-[19px]' : 'text-[22px]')}>{s.title}</div>
            {s.text && <div className={cn('mt-1.5 leading-snug opacity-75', small ? 'text-[15px]' : 'text-[17px]')}>{s.text}</div>}
            {s.meta && <div className={cn('mt-auto pt-2 font-semibold', small ? 'text-[15px]' : 'text-[17px]')} style={{ color: c }}>{s.meta}</div>}
          </div>
        )
      })}
    </div>
  )
}

/* ---------- Porter (versión liviana) ---------- */

type PorterBox = { title: string; level: string; tone: Tone; line: string }

function PBox({ b, hero }: { b: PorterBox; hero?: boolean }) {
  const c = COLOR[b.tone]
  return (
    <div
      className="flex h-full flex-col justify-between rounded-2xl p-5"
      style={{
        background: hero ? `color-mix(in oklch, ${c} 14%, white)` : 'oklch(1 0 0 / 0.7)',
        border: `2px solid ${hero ? c : 'oklch(0 0 0 / 0.1)'}`,
      }}
    >
      <div className="font-serif text-[20px] font-bold leading-tight">{b.title}</div>
      <div>
        <div className="font-serif text-[40px] font-extrabold leading-none" style={{ color: c }}>
          {b.level}
        </div>
        <div className="mt-2 text-[16px] leading-snug opacity-70">{b.line}</div>
      </div>
    </div>
  )
}

export function PorterLite({ top, left, center, right, bottom }: { top: PorterBox; left: PorterBox; center: PorterBox; right: PorterBox; bottom: PorterBox }) {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-3 gap-4">
      <div className="col-start-2 row-start-1">
        <PBox b={top} />
      </div>
      <div className="col-start-1 row-start-2">
        <PBox b={left} />
      </div>
      <div className="col-start-2 row-start-2">
        <PBox b={center} hero />
      </div>
      <div className="col-start-3 row-start-2">
        <PBox b={right} />
      </div>
      <div className="col-start-2 row-start-3">
        <PBox b={bottom} />
      </div>
    </div>
  )
}

/* ---------- Sistema 5,22 kWp: 9 módulos en 2 strings ---------- */

export function SystemDiagram() {
  const panel = (x: number, y: number, k: string) => (
    <g key={k} transform={`translate(${x} ${y})`}>
      <rect width={82} height={118} rx={8} fill="oklch(0.28 0.06 255)" stroke="oklch(0.8 0.16 78)" strokeWidth={3} />
      {[1, 2].map((i) => (
        <line key={`v${i}`} x1={(82 / 3) * i} x2={(82 / 3) * i} y1={6} y2={112} stroke="oklch(0.8 0.16 78)" strokeOpacity={0.35} strokeWidth={1.5} />
      ))}
      {[1, 2, 3, 4].map((i) => (
        <line key={`h${i}`} x1={6} x2={76} y1={(118 / 5) * i} y2={(118 / 5) * i} stroke="oklch(0.8 0.16 78)" strokeOpacity={0.35} strokeWidth={1.5} />
      ))}
    </g>
  )
  return (
    <svg viewBox="0 0 1040 400" width={1040} height={400} role="img" aria-label="9 módulos en dos strings conectados a un inversor">
      <text x={0} y={20} fontSize={19} fontWeight={700} fill="oklch(0.8 0.16 78)">String 1 · 5 módulos</text>
      {[0, 1, 2, 3, 4].map((i) => panel(i * 96, 34, `a${i}`))}
      <text x={0} y={216} fontSize={19} fontWeight={700} fill="oklch(0.8 0.16 78)">String 2 · 4 módulos</text>
      {[0, 1, 2, 3].map((i) => panel(i * 96, 230, `b${i}`))}
      <path d="M 484 93 H 560 V 160 H 600" fill="none" stroke="oklch(0.8 0.16 78)" strokeWidth={4} />
      <path d="M 388 289 H 560 V 240 H 600" fill="none" stroke="oklch(0.8 0.16 78)" strokeWidth={4} />
      <rect x={600} y={130} width={150} height={140} rx={14} fill="oklch(0.99 0.005 90)" />
      <text x={675} y={188} textAnchor="middle" fontSize={26} fontWeight={800} fill="oklch(0.24 0.035 255)" fontFamily="var(--font-serif)">Inversor</text>
      <text x={675} y={216} textAnchor="middle" fontSize={19} fill="oklch(0.24 0.035 255)">5 kW · doble MPPT</text>
      <path d="M 750 200 H 810" fill="none" stroke="oklch(0.78 0.15 162)" strokeWidth={4} />
      <polygon points="810,188 834,200 810,212" fill="oklch(0.78 0.15 162)" />
      <text x={842} y={207} fontSize={22} fontWeight={700} fill="oklch(0.78 0.15 162)">Hogar + red</text>
    </svg>
  )
}

/* ---------- Escala de calificación (puntos) ---------- */

export function Dots({ n, na, tone = 'sun' }: { n: number; na?: boolean; tone?: Tone }) {
  if (na) return <span className="text-[18px] opacity-40">no aplica</span>
  return (
    <span className="inline-flex gap-1.5">
      {[1, 2, 3].map((i) => (
        <span key={i} className="inline-block h-[18px] w-[18px] rounded-full" style={{ background: i <= n ? COLOR[tone] : 'oklch(0 0 0 / 0.1)' }} />
      ))}
    </span>
  )
}

/* ---------- Pie de página con salto al anexo ---------- */

export function AnexoTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-current px-3 py-1 text-[13px] font-semibold uppercase tracking-wider opacity-55">
      Anexo · {children}
    </span>
  )
}
