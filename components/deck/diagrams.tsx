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
   ON-GRID BLOCK DIAGRAM (SVG). Flows: DC amber, AC green, grid grey,
   data blue. Content: informe 3.2.1, 3.1.6, 3.1.7.
   ===================================================================== */

const C = {
  dc: 'oklch(0.79 0.155 72)',
  ac: 'oklch(0.74 0.15 162)',
  grid: 'oklch(0.7 0.02 255)',
  data: 'oklch(0.7 0.12 240)',
  box: 'oklch(0.24 0.02 255)',
  boxStroke: 'oklch(0.35 0.02 255)',
  text: 'oklch(0.95 0.01 255)',
  muted: 'oklch(0.72 0.02 255)',
}

function Box({ x, y, w, h, title, sub, accent }: { x: number; y: number; w: number; h: number; title: string; sub: string[]; accent?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={C.box} stroke={accent ?? C.boxStroke} strokeWidth={accent ? 2 : 1.2} />
      <text x={x + w / 2} y={y + 20} textAnchor="middle" fill={C.text} fontSize={13} fontWeight={700}>
        {title}
      </text>
      {sub.map((s, i) => (
        <text key={i} x={x + w / 2} y={y + 38 + i * 14} textAnchor="middle" fill={C.muted} fontSize={10.5}>
          {s}
        </text>
      ))}
    </g>
  )
}

function Flow({ d, color, label, lx, ly, dashed }: { d: string; color: string; label?: string; lx?: number; ly?: number; dashed?: boolean }) {
  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeWidth={3} strokeDasharray={dashed ? '6 5' : undefined} markerEnd="url(#arr)" />
      {label && (
        <text x={lx} y={ly} textAnchor="middle" fill={color} fontSize={10.5} fontWeight={600}>
          {label}
        </text>
      )}
    </g>
  )
}

export function OnGridDiagram() {
  return (
    <svg viewBox="0 0 760 400" className="w-full" role="img" aria-label="Diagrama de bloques del sistema on-grid">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="context-stroke" />
        </marker>
      </defs>

      {/* Row 1: strings */}
      <Box x={20} y={30} w={170} h={78} title="String 1 · 5 módulos" sub={['TOPCon 580 Wp c/u', 'Voc string 246,6 V']} accent={C.dc} />
      <Box x={20} y={130} w={170} h={78} title="String 2 · 4 módulos" sub={['TOPCon 580 Wp c/u', 'Total 9 × 580 = 5.220 Wp']} accent={C.dc} />

      {/* Inverter */}
      <Box x={270} y={80} w={190} h={96} title="Inversor de string 5 kW" sub={['DEYE SUN-5K o Huawei 5KTL', '2 MPPT independientes', 'Seccionador DC · anti-isla']} accent={C.ac} />

      {/* DC flows */}
      <Flow d="M 190 69 C 230 69, 230 105, 270 105" color={C.dc} label="DC" lx={230} ly={80} />
      <Flow d="M 190 169 C 230 169, 230 150, 270 150" color={C.dc} label="DC" lx={230} ly={185} />

      {/* Tablero */}
      <Box x={540} y={80} w={200} h={96} title="Tablero del hogar" sub={['Termomagnética 25 A', 'Diferencial tipo A 30 mA', 'Descargadores tipo 1+2']} />
      <Flow d="M 460 128 L 540 128" color={C.ac} label="AC 230 V · 50 Hz" lx={500} ly={70} />

      {/* Cargas */}
      <Box x={540} y={220} w={200} h={64} title="Cargas del hogar" sub={['Autoconsumo directo (~50% de G)']} />
      <Flow d="M 640 176 L 640 220" color={C.ac} label="autoconsumo" lx={690} ly={202} />

      {/* Medidor */}
      <Box x={270} y={220} w={190} h={64} title="Medidor bidireccional" sub={['Registra consumo de red e inyección']} accent={C.grid} />
      <Flow d="M 540 150 C 500 150, 500 250, 460 250" color={C.grid} label="excedente ↔ red" lx={505} ly={205} />

      {/* Red */}
      <Box x={20} y={220} w={170} h={78} title="Red Edenor / Edesur" sub={['Balance neto, Ley 27.424', 'Crédito por inyección a precio MEM']} accent={C.grid} />
      <Flow d="M 270 252 L 190 252" color={C.grid} />
      <Flow d="M 190 268 L 270 268" color={C.grid} />

      {/* Monitoreo */}
      <Box x={270} y={318} w={190} h={64} title="Monitoreo remoto" sub={['Wi-Fi integrado · DEYE Cloud / FusionSolar']} accent={C.data} />
      <Flow d="M 365 176 L 365 318" color={C.data} dashed label="datos" lx={385} ly={300} />

      {/* Legend */}
      <g fontSize={10.5} fill={C.muted}>
        <rect x={545} y={330} width={14} height={4} fill={C.dc} />
        <text x={565} y={334}>Corriente continua (DC)</text>
        <rect x={545} y={348} width={14} height={4} fill={C.ac} />
        <text x={565} y={352}>Corriente alterna (AC)</text>
        <rect x={545} y={366} width={14} height={4} fill={C.grid} />
        <text x={565} y={370}>Intercambio con la red</text>
        <rect x={545} y={384} width={14} height={4} fill={C.data} />
        <text x={565} y={388}>Datos de monitoreo</text>
      </g>
    </svg>
  )
}

/* =====================================================================
   VERTICAL STEPPER with responsable + plazo (habilitación).
   ===================================================================== */

export function Stepper({
  steps,
  className,
}: {
  steps: { title: string; detail?: string; owner: string; time: string; ownerTone?: 'primary' | 'muted' }[]
  className?: string
}) {
  return (
    <ol className={cn('relative flex flex-col', className)}>
      {steps.map((s, i) => (
        <li key={i} className="relative grid grid-cols-[2rem_1fr_7.5rem] items-start gap-3 py-2.5">
          {i < steps.length - 1 && <span className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-border" aria-hidden="true" />}
          <span
            className={cn(
              'z-10 flex h-8 w-8 items-center justify-center rounded-full font-serif text-sm font-bold',
              s.ownerTone === 'muted' ? 'bg-secondary text-foreground' : 'bg-primary text-primary-foreground',
            )}
          >
            {i + 1}
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
export type StepperStep = { title: string; detail?: string; owner: string; time: string; ownerTone?: 'primary' | 'muted' }
export function Note({ children }: { children: ReactNode }) {
  return <p className="text-xs leading-snug text-muted-foreground">{children}</p>
}
