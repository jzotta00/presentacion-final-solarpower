import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* =====================================================================
   PORTER: five boxes, centre = rivalry. Content comes from the informe.
   ===================================================================== */

type Force = { title: string; level: string; tone: 'accent' | 'primary' | 'destructive'; items: string[] }

const toneBadge = {
  accent: 'bg-accent/20 text-accent border-accent/40',
  primary: 'bg-primary/20 text-primary border-primary/40',
  destructive: 'bg-destructive/20 text-destructive border-destructive/40',
}

function ForceBox({ f, className, center }: { f: Force; className?: string; center?: boolean }) {
  return (
    <div className={cn('flex flex-col rounded-lg border bg-card/70 p-3', center ? 'border-primary/50 bg-primary/10' : 'border-border', className)}>
      <div className="flex items-start justify-between gap-2">
        <div className="font-serif text-sm font-semibold leading-tight">{f.title}</div>
        <span className={cn('shrink-0 rounded border px-1.5 py-0.5 text-[11px] font-semibold', toneBadge[f.tone])}>{f.level}</span>
      </div>
      <ul className="mt-2 flex flex-col gap-1 text-[12px] leading-snug text-muted-foreground">
        {f.items.map((it) => (
          <li key={it} className="flex gap-1.5">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PorterDiagram({ forces }: { forces: { top: Force; left: Force; center: Force; right: Force; bottom: Force } }) {
  const Arrow = ({ dir }: { dir: 'down' | 'up' | 'left' | 'right' }) => (
    <div className="flex items-center justify-center text-muted-foreground">
      <span className="text-lg">{dir === 'down' ? '↓' : dir === 'up' ? '↑' : dir === 'left' ? '←' : '→'}</span>
    </div>
  )
  return (
    <div className="grid h-full grid-cols-[1fr_auto_1.15fr_auto_1fr] grid-rows-[auto_auto_auto_auto_auto] gap-x-1 gap-y-1">
      <div className="col-start-3 row-start-1">
        <ForceBox f={forces.top} />
      </div>
      <div className="col-start-3 row-start-2">
        <Arrow dir="down" />
      </div>
      <div className="col-start-1 row-start-3">
        <ForceBox f={forces.left} />
      </div>
      <div className="col-start-2 row-start-3">
        <Arrow dir="right" />
      </div>
      <div className="col-start-3 row-start-3">
        <ForceBox f={forces.center} center />
      </div>
      <div className="col-start-4 row-start-3">
        <Arrow dir="left" />
      </div>
      <div className="col-start-5 row-start-3">
        <ForceBox f={forces.right} />
      </div>
      <div className="col-start-3 row-start-4">
        <Arrow dir="up" />
      </div>
      <div className="col-start-3 row-start-5">
        <ForceBox f={forces.bottom} />
      </div>
    </div>
  )
}

/* =====================================================================
   ON-GRID DIAGRAM with line icons (own drawings), brochure-like flows:
   amber = generación DC, green = AC / inyección, grey = red, blue = datos.
   Content: informe 3.2.1, 3.1.6, 3.1.7.
   ===================================================================== */

const C = {
  dc: 'oklch(0.64 0.17 55)',
  ac: 'oklch(0.52 0.13 162)',
  grid: 'oklch(0.45 0.02 255)',
  data: 'oklch(0.48 0.14 240)',
  ink: 'oklch(0.22 0.025 255)',
  muted: 'oklch(0.42 0.025 255)',
}

function Icon({ x, y, kind, color }: { x: number; y: number; kind: 'sun' | 'panel' | 'inverter' | 'house' | 'meter' | 'tower' | 'cloud'; color: string }) {
  const sw = 2.2
  const common = { fill: 'none', stroke: color, strokeWidth: sw, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <g transform={`translate(${x} ${y})`}>
      {kind === 'sun' && (
        <>
          <circle cx={0} cy={0} r={9} {...common} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line key={a} x1={0} y1={-14} x2={0} y2={-19} transform={`rotate(${a})`} {...common} />
          ))}
        </>
      )}
      {kind === 'panel' && (
        <>
          <path d="M -34 -6 L -22 -22 L 34 -22 L 22 -6 Z" {...common} />
          <line x1={-15} y1={-22} x2={-25} y2={-6} {...common} />
          <line x1={4} y1={-22} x2={-6} y2={-6} {...common} />
          <line x1={23} y1={-22} x2={13} y2={-6} {...common} />
          <line x1={-28} y1={-14} x2={28} y2={-14} {...common} />
          <line x1={0} y1={-6} x2={0} y2={6} {...common} />
          <line x1={-10} y1={6} x2={10} y2={6} {...common} />
        </>
      )}
      {kind === 'inverter' && (
        <>
          <rect x={-22} y={-26} width={44} height={52} rx={5} {...common} />
          <rect x={-14} y={-18} width={28} height={9} rx={1.5} {...common} />
          <path d="M -13 12 C -8 0, -2 0, 0 12 S 8 24, 13 12" {...common} />
          <line x1={-22} y1={-8} x2={-27} y2={-8} {...common} />
          <line x1={22} y1={-8} x2={27} y2={-8} {...common} />
        </>
      )}
      {kind === 'house' && (
        <>
          <path d="M -30 0 L 0 -26 L 30 0" {...common} />
          <path d="M -22 -6 L -22 26 L 22 26 L 22 -6" {...common} />
          <rect x={-6} y={8} width={12} height={18} {...common} />
          <rect x={-17} y={2} width={8} height={8} {...common} />
        </>
      )}
      {kind === 'meter' && (
        <>
          <rect x={-24} y={-24} width={48} height={48} rx={6} {...common} />
          <path d="M -15 8 A 15 15 0 0 1 15 8" {...common} />
          <line x1={0} y1={8} x2={9} y2={-3} {...common} />
          <rect x={-14} y={12} width={28} height={7} rx={1.5} {...common} />
        </>
      )}
      {kind === 'tower' && (
        <>
          <path d="M -6 -30 L -18 30 M 6 -30 L 18 30" {...common} />
          <path d="M -6 -30 L 6 -30 M -9 -14 L 9 -14 M -12 2 L 12 2 M -15 18 L 15 18" {...common} />
          <path d="M -26 -18 L 26 -18" {...common} />
          <path d="M -9 -14 L 9 2 M 9 -14 L -9 2 M -12 2 L 12 18 M 12 2 L -12 18" {...common} strokeWidth={1.4} />
        </>
      )}
      {kind === 'cloud' && (
        <>
          <path d="M -22 8 A 9 9 0 0 1 -14 -8 A 13 13 0 0 1 12 -10 A 9 9 0 0 1 20 8 Z" {...common} />
          <path d="M -8 -18 A 12 12 0 0 1 8 -18" {...common} strokeWidth={1.4} />
        </>
      )}
    </g>
  )
}

function Label({ x, y, title, sub, color, anchor = 'middle' }: { x: number; y: number; title: string; sub: string[]; color?: string; anchor?: 'middle' | 'start' | 'end' }) {
  return (
    <g>
      <text x={x} y={y} textAnchor={anchor} fill={color ?? C.ink} fontSize={13} fontWeight={700}>
        {title}
      </text>
      {sub.map((s, i) => (
        <text key={i} x={x} y={y + 15 + i * 13} textAnchor={anchor} fill={C.muted} fontSize={10.5}>
          {s}
        </text>
      ))}
    </g>
  )
}

function Flow({ d, color, label, lx, ly, dashed, both }: { d: string; color: string; label?: string; lx?: number; ly?: number; dashed?: boolean; both?: boolean }) {
  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeWidth={3} strokeDasharray={dashed ? '6 5' : undefined} markerEnd="url(#arr)" markerStart={both ? 'url(#arr)' : undefined} />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" fill={color} fontSize={11} fontWeight={600}>
          {label}
        </text>
      )}
    </g>
  )
}

export function OnGridDiagram() {
  return (
    <svg viewBox="0 0 760 430" className="w-full" role="img" aria-label="Esquema del sistema on-grid">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke" />
        </marker>
      </defs>

      {/* Paneles */}
      <Icon x={95} y={50} kind="sun" color={C.dc} />
      <Icon x={130} y={110} kind="panel" color={C.dc} />
      <Label x={130} y={140} title="Módulos fotovoltaicos" sub={['9 × 580 Wp TOPCon = 5,22 kWp', 'Dos strings: 5 + 4 módulos']} />

      {/* Inversor */}
      <Icon x={380} y={100} kind="inverter" color={C.ac} />
      <Label x={380} y={150} title="Inversor de string 5 kW" sub={['DEYE o Huawei · 2 MPPT', 'Seccionador DC · anti-isla ENRE 314']} />
      <Flow d="M 200 100 L 350 100" color={C.dc} label="Generación DC" lx={275} ly={90} />

      {/* Casa */}
      <Icon x={640} y={100} kind="house" color={C.ac} />
      <Label x={640} y={150} title="Tablero y cargas del hogar" sub={['Termomagnética 25 A · diferencial 30 mA', 'Autoconsumo directo ~50% de G']} />
      <Flow d="M 410 100 L 605 100" color={C.ac} label="AC 230 V · 50 Hz · autoconsumo" lx={507} ly={90} />

      {/* Medidor */}
      <Icon x={640} y={270} kind="meter" color={C.grid} />
      <Label x={640} y={320} title="Medidor bidireccional" sub={['Registra consumo de red e inyección']} />
      <Flow d="M 640 176 L 640 240" color={C.grid} label="excedente / red" lx={700} ly={212} />

      {/* Red */}
      <Icon x={380} y={270} kind="tower" color={C.grid} />
      <Label x={380} y={320} title="Red Edenor / Edesur" sub={['Balance neto, Ley 27.424', 'Crédito por inyección a precio MEM']} />
      <Flow d="M 610 270 L 415 270" color={C.grid} both label="inyección / suministro" lx={512} ly={260} />

      {/* Monitoreo */}
      <Icon x={130} y={272} kind="cloud" color={C.data} />
      <Label x={130} y={320} title="Monitoreo remoto" sub={['Wi-Fi · DEYE Cloud / FusionSolar', 'Producción, alertas, firmware OTA']} />
      <Flow d="M 350 126 C 250 170, 200 200, 158 258" color={C.data} dashed label="datos" lx={240} ly={200} />

      {/* Leyenda */}
      <g fontSize={11} fill={C.muted}>
        <rect x={40} y={385} width={14} height={4} fill={C.dc} />
        <text x={60} y={389}>Corriente continua (generación)</text>
        <rect x={240} y={385} width={14} height={4} fill={C.ac} />
        <text x={260} y={389}>Corriente alterna (autoconsumo)</text>
        <rect x={450} y={385} width={14} height={4} fill={C.grid} />
        <text x={470} y={389}>Intercambio con la red</text>
        <rect x={620} y={385} width={14} height={4} fill={C.data} />
        <text x={640} y={389}>Datos</text>
      </g>
    </svg>
  )
}

/* Three configurations, described per SolarPower brochure. */
export function ConfigCard({ title, badge, badgeTone, flows, note }: { title: string; badge: string; badgeTone: 'accent' | 'primary' | 'muted'; flows: string[]; note: string }) {
  const tone = { accent: 'border-accent/50 bg-accent/10 text-accent', primary: 'border-primary/50 bg-primary/10 text-primary', muted: 'border-border bg-card/60 text-muted-foreground' }[badgeTone]
  return (
    <div className={cn('flex flex-col rounded-lg border p-4', badgeTone === 'accent' ? 'border-accent/40 bg-accent/5' : 'border-border bg-card/50')}>
      <div className="flex items-center justify-between gap-2">
        <div className="font-serif text-base font-semibold">{title}</div>
        <span className={cn('rounded border px-2 py-0.5 text-[11px] font-semibold', tone)}>{badge}</span>
      </div>
      <ul className="mt-3 flex flex-col gap-1.5 text-[13px] leading-snug text-muted-foreground">
        {flows.map((f) => (
          <li key={f} className="flex gap-1.5">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
            {f}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs leading-snug text-foreground/80">{note}</p>
    </div>
  )
}

/* =====================================================================
   VERTICAL STEPPER with responsable + plazo (habilitación).
   ===================================================================== */

export function Stepper({
  steps,
  className,
  startAt = 1,
}: {
  steps: { title: string; detail?: string; owner: string; time: string; ownerTone?: 'primary' | 'muted' | 'accent' }[]
  className?: string
  startAt?: number
}) {
  return (
    <ol className={cn('relative flex flex-col', className)}>
      {steps.map((s, i) => (
        <li key={i} className="relative grid grid-cols-[2rem_1fr_7.5rem] items-start gap-3 py-2.5">
          {i < steps.length - 1 && <span className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-border" aria-hidden="true" />}
          <span
            className={cn(
              'z-10 flex h-8 w-8 items-center justify-center rounded-full font-serif text-sm font-bold',
              s.ownerTone === 'muted' ? 'bg-secondary text-foreground' : s.ownerTone === 'accent' ? 'bg-accent text-background' : 'bg-primary text-primary-foreground',
            )}
          >
            {i + startAt}
          </span>
          <div className="min-w-0">
            <div className="text-sm font-semibold leading-tight">{s.title}</div>
            <div className="text-[12px] leading-snug text-muted-foreground">
              {s.detail && <span>{s.detail} · </span>}
              <span className="font-medium">{s.owner}</span>
            </div>
          </div>
          <span className="rounded border border-border bg-card/60 px-2 py-1 text-center text-[12px] font-semibold tabular-nums">{s.time}</span>
        </li>
      ))}
    </ol>
  )
}

export function Stars({ n, na }: { n?: number; na?: boolean }) {
  if (na) return <span className="text-muted-foreground">☆ no aplica</span>
  const full = '★'.repeat(n ?? 0)
  return (
    <span className={cn('font-semibold tabular-nums', (n ?? 0) === 3 ? 'text-accent' : (n ?? 0) === 2 ? 'text-primary' : 'text-muted-foreground')}>{full}</span>
  )
}

export type { Force }
export type StepperStep = { title: string; detail?: string; owner: string; time: string; ownerTone?: 'primary' | 'muted' | 'accent' }
export function Note({ children }: { children: ReactNode }) {
  return <p className="text-xs leading-snug text-muted-foreground">{children}</p>
}
