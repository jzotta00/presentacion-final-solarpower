import { Sun, Globe, Target, Lightbulb, Wrench, Rocket, TrendingUp, Flag, Layers, Search, Cpu, ChartLine, BadgeCheck } from 'lucide-react'
import type { SlideDef } from './types'
import { Frame, H, Hl, Kicker, Stat, IconCard, Chip, Panel } from './impact'

const B = 'Apertura'

export const apertura: SlideDef[] = [
  {
    nav: 'Portada',
    block: B,
    node: (
      <div className="on-dark relative flex h-full w-full flex-col justify-end overflow-hidden bg-ink text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/solar-rooftop.png" alt="Paneles solares instalados sobre el techo de una vivienda" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/20" />
        <div className="relative z-10 px-20 pb-14">
          <div className="flex items-center gap-3 text-primary">
            <Sun className="h-7 w-7" />
            <span className="font-serif text-[22px] font-bold tracking-wide">SolarPower Energy</span>
          </div>
          <h1 className="mt-5 max-w-[1050px] text-balance font-serif text-[62px] font-extrabold leading-[1.03] tracking-tight">
            Energía solar para el hogar, <Hl>sin pagar el sistema</Hl>
          </h1>
          <p className="mt-5 max-w-[960px] text-pretty text-[25px] leading-snug text-white/80">
            Estudio de factibilidad técnico-económica de un servicio de arrendamiento solar residencial en el AMBA
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-1 text-[19px] font-semibold">
            <span>Cardoso, Bautista</span>
            <span>Sarti, Ricardo</span>
            <span>Zotta, Jerónimo</span>
          </div>
          <div className="mt-2 text-[16px] text-white/60">
            Universidad de Buenos Aires · Facultad de Ingeniería · Trabajo Profesional de Ingeniería Industrial · Tutor: Ing. Hernán Terzolo · 2026
          </div>
        </div>
      </div>
    ),
  },

  {
    nav: 'Agenda',
    block: B,
    node: (
      <Frame block={B}>
        <H size="lg">Lo que vamos a recorrer</H>
        <div className="mt-8 grid flex-1 grid-cols-4 grid-rows-2 gap-5 pb-4">
          {[
            [Globe, '1', 'Contexto', 'El problema y la oportunidad'],
            [Target, '2', 'Mercado', 'A quién le vendemos'],
            [Lightbulb, '3', 'Solución', 'El modelo y la cuota'],
            [Wrench, '4', 'Técnico', 'El sistema y la habilitación'],
            [Rocket, '5', 'Implementación', 'Cómo se despliega'],
            [TrendingUp, '6', 'Financiero', 'Los números del negocio'],
            [Flag, '7', 'Cierre', 'Impacto y conclusiones'],
            [Layers, 'A', 'Anexo', 'Respaldo para preguntas'],
          ].map(([I, n, t, d]) => {
            const Ic = I as typeof Globe
            return (
              <div key={n as string} className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[56px] font-extrabold leading-none text-primary">{n as string}</span>
                  <Ic className="h-9 w-9 text-ink/60" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="font-serif text-[26px] font-bold leading-tight">{t as string}</div>
                  <div className="mt-1 text-[18px] leading-snug opacity-70">{d as string}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Objetivo y criterios de viabilidad',
    block: B,
    node: (
      <Frame block={B}>
        <Kicker>Objetivo</Kicker>
        <H size="lg" className="mt-3 max-w-[1000px]">
          ¿Es viable arrendar energía solar a hogares argentinos, con <Hl>USD 8 M</Hl> invertidos en 5 años?
        </H>
        <div className="mt-auto grid grid-cols-3 gap-6 pb-6">
          <Panel>
            <Stat value="15% a 30%" size={52} tone="sun" label="TIR anual en USD que exige el proyecto" />
          </Panel>
          <Panel>
            <Stat value="≥ 20%" size={52} tone="green" label="ahorro neto mínimo para el cliente" />
          </Panel>
          <Panel>
            <Stat value="15 años" size={52} tone="ink" label="horizonte de evaluación: tres ciclos de 5 años" />
          </Panel>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Metodología',
    block: B,
    node: (
      <Frame block={B}>
        <H size="lg">De dónde salen los números</H>
        <div className="mt-10 grid grid-cols-4 gap-5">
          <IconCard big icon={Search} tone="sun" title="Mercado" text="Censo 2022 (INDEC), ENRE, Secretaría de Energía, Sunrun 10-K" />
          <IconCard big icon={Cpu} tone="green" title="Técnico" text="PVGIS, fichas LONGi, DEYE y Huawei, normas IRAM y AEA" />
          <IconCard big icon={ChartLine} tone="sun" title="Financiero" text="Modelo por cohortes a 15 años, CAPM, VAN, TIR y sensibilidad" />
          <IconCard big icon={BadgeCheck} tone="green" title="Validación" text="Piloto con más de 20 sistemas instalados y cotizaciones FOB 2026" />
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pb-4">
          <Chip tone="ink">USD constantes de 2026</Chip>
          <Chip tone="ink">1.485 ARS/USD</Chip>
          <Chip tone="ink">UVA $2.007</Chip>
          <span className="text-[16px] opacity-60">valores al 30/06/2026</span>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Cómo leer las cifras clave',
    block: B,
    node: (
      <Frame block={B}>
        <H size="md" className="max-w-[1000px]">
          Hay cifras que se repiten. No se contradicen: <Hl>miden cosas distintas</Hl>
        </H>
        <div className="mt-8 grid flex-1 grid-cols-[3fr_2fr] gap-6 pb-6">
          <Panel className="flex flex-col">
            <div className="text-[18px] font-bold uppercase tracking-wider opacity-60">Ahorro del cliente</div>
            <div className="mt-auto grid grid-cols-3 gap-4">
              <Stat value="20%" size={72} tone="mute" label="piso: mínimo para que el proyecto sea viable" />
              <Stat value="30%" size={72} tone="sun" label="meta comercial con la que se calibra la cuota" />
              <Stat value="42%" size={72} tone="green" label="resultado del caso base (hogar N1, 400 kWh/mes)" />
            </div>
          </Panel>
          <Panel className="flex flex-col">
            <div className="text-[18px] font-bold uppercase tracking-wider opacity-60">Inversión</div>
            <div className="mt-auto grid grid-cols-2 gap-4">
              <Stat value="USD 8 M" size={32} tone="sun" label="CAPEX bruto: 4.000 sistemas × USD 2.000" />
              <Stat value="USD 4,19 M" size={32} tone="green" label="capital que aportan los inversores" />
            </div>
            <div className="mt-5 text-[16px] leading-snug opacity-65">La diferencia la paga la propia cartera con su EBITDA.</div>
          </Panel>
        </div>
      </Frame>
    ),
  },
]
