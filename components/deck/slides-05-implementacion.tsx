import { ArgentinaMap } from './primitives'
import type { SlideDef } from './types'
import { Frame, H, Hl, Big, Stat, Chip, Panel, BlockDivider, VBars, COLOR } from './impact'

const B = '5 · Implementación'

const SP1 = 'oklch(0.55 0.13 162)'
const SP2 = 'oklch(0.66 0.17 55)'
const SP3 = 'oklch(0.55 0.05 255)'

export const implementacion: SlideDef[] = [
  {
    nav: 'Bloque 5',
    block: B,
    node: (
      <BlockDivider
        number="5"
        title="Plan de implementación"
        hook="Cuatro fases. Cada una valida lo que supuso la anterior."
        topics={['Fases y mapa', 'Cuellos de botella', 'Validación del piloto', 'Capacidad y dotación']}
      />
    ),
  },

  {
    nav: 'Fases y geografía',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, secciones 3.6.1 a 3.6.5 y Tabla 3.16 (M = mes desde el inicio de operaciones)">
        <H size="lg" className="max-w-[1100px]">
          Cuatro fases: <Hl g>cada una valida a la anterior</Hl>
        </H>
        <div className="mt-5 grid flex-1 grid-cols-[1.5fr_1fr] gap-6 pb-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {[
              ['0', 'Preparación', 'Unidad de arrendamiento, técnicos certificados, CRM', 'Meses 1 a 6', 'mute'],
              ['1', 'Piloto', '200 sistemas con 3 a 4 equipos', 'Meses 7 a 18', 'sun'],
              ['2', 'Crecimiento AMBA', '4.000 sistemas acumulados con 8 a 20 equipos', 'Meses 19 a 60', 'green'],
              ['3', 'Operación y expansión', 'Más de USD 3 M por año y salto a SP2 y SP3', 'Meses 61 a 120', 'ink'],
            ].map(([n, t, d, m, tone]) => (
              <div key={n} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full font-serif text-[24px] font-extrabold text-white" style={{ background: COLOR[tone as 'sun'] }}>
                    {n}
                  </span>
                  <div className="font-serif text-[25px] font-extrabold leading-tight">{t}</div>
                </div>
                <div className="mt-3 text-[20px] leading-snug opacity-80">{d}</div>
                <div className="mt-auto pt-2 text-[18px] font-bold" style={{ color: COLOR[tone as 'sun'] }}>
                  {m}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <ArgentinaMap
              height={360}
              labels={false}
              groups={[
                { name: 'Fases 0 a 2 · SP1', postals: ['Ciudad de Buenos Aires'], fill: SP1, marker: true },
                { name: 'Fase 3 · SP2', postals: ['Buenos Aires', 'CB', 'SF'], fill: SP2 },
                { name: 'Fase 3 · SP3', postals: ['MZ', 'SJ', 'SA', 'JY', 'TM', 'ER', 'SL', 'LR', 'CT', 'SE', 'CC', 'FM', 'MN', 'CN', 'LP', 'NQ', 'RN', 'CH', 'SC'], fill: SP3 },
              ]}
            />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Roadmap y cuellos de botella',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, Tabla 3.16">
        <H size="lg" className="max-w-[1100px]">
          Cada fase tiene <Hl r>su cuello de botella</Hl>
        </H>
        <div className="mt-5 grid flex-1 grid-cols-4 gap-4 pb-3">
          {[
            ['Fase 0', 'M1 a M6', 'Unidad de arrendamiento operativa y técnicos certificados', 'Capital semilla de USD 120 k', 'Habilitación legal y comercial'],
            ['Fase 1', 'M7 a M18', '200 sistemas instalados y modelo validado', '3 a 4 equipos de instalación', 'Capacidad de inspección de las distribuidoras'],
            ['Fase 2', 'M19 a M60', '4.000 sistemas y break-even de flujo de caja', '8 a 20 equipos y línea de crédito', 'Acceso a capital de largo plazo'],
            ['Fase 3', 'M61 a M120', '4.000 sistemas en operación, más de USD 3 M por año', 'Equipo de operación y mantenimiento', 'Escala del equipo de soporte'],
          ].map(([f, m, h, r, c]) => (
            <div key={f} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
              <div className="font-serif text-[30px] font-extrabold leading-none text-primary">{f}</div>
              <div className="mt-1 text-[16px] font-semibold opacity-60">{m}</div>
              <div className="mt-4 text-[13px] font-bold uppercase tracking-wider opacity-55">Hito</div>
              <div className="text-[19px] leading-snug">{h}</div>
              <div className="mt-3 text-[13px] font-bold uppercase tracking-wider opacity-55">Recurso</div>
              <div className="text-[19px] leading-snug">{r}</div>
              <div className="mt-auto rounded-xl bg-destructive/10 p-3.5">
                <div className="text-[13px] font-bold uppercase tracking-wider text-destructive">Cuello de botella</div>
                <div className="text-[19px] font-semibold leading-snug">{c}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-2 text-[18px] opacity-70">El cuello que atraviesa todo el plan es el capital de largo plazo. La Fase 3 contempla bonos verdes y líneas del BID y la CAF.</div>
      </Frame>
    ),
  },

  {
    nav: 'Fase 0 y validación del piloto',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, Tablas 3.14 y 3.15">
        <H size="lg" className="max-w-[1100px]">
          Qué tiene que pasar para <Hl g>pasar de fase</Hl>
        </H>
        <div className="mt-5 grid flex-1 grid-cols-[1fr_2fr] gap-6 pb-4">
          <Panel className="flex flex-col">
            <div className="text-[16px] font-bold uppercase tracking-wider opacity-60">Fase 0 · lo que se necesita</div>
            <Big value={<span className="whitespace-nowrap">USD 100 a 120 k</span>} size={34} tone="sun" className="mt-4" caption="de capital de trabajo: los primeros 20 sistemas y 6 meses de operación" />
            <div className="mt-auto flex flex-col gap-2 pt-4">
              <Chip tone="ink" className="!text-[17px]">3 socios y 1 administrativo</Chip>
              <Chip tone="ink" className="!text-[17px]">6 técnicos certificados</Chip>
              <Chip tone="ink" className="!text-[17px]">CRM con facturación en UVA</Chip>
            </div>
          </Panel>
          <div className="grid grid-cols-4 grid-rows-2 gap-3">
            <div className="flex flex-col justify-center rounded-2xl bg-ink p-4 text-white">
              <div className="text-[15px] font-bold uppercase tracking-wider text-[oklch(0.8_0.16_78)]">Fase 1</div>
              <div className="mt-1 font-serif text-[24px] font-extrabold leading-tight">Metas de éxito del piloto</div>
            </div>
            {[
              ['200', 'instalaciones (≥ 150 al mes 12)'],
              ['< 90', 'días de contrato a medidor'],
              ['≤ 3.300', 'USD de CAPEX real por sistema'],
              ['≥ 8%', 'conversión de leads a contrato'],
              ['< 3%', 'de morosidad a 30 días'],
              ['≥ 50', 'NPS en la encuesta post-instalación'],
              ['≥ 95%', 'producción real contra estimada'],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col justify-center rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm">
                <div className="font-serif text-[40px] font-extrabold leading-none text-accent">{v}</div>
                <div className="mt-1.5 text-[16px] leading-snug opacity-75">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Capacidad operativa',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, 3.4.7 y Tabla 4.5; dotación por fase del Resumen Ejecutivo">
        <H size="lg" className="max-w-[1100px]">
          De <Hl>17 a 108</Hl> instalaciones por mes
        </H>
        <div className="mt-3 grid flex-1 grid-cols-[1.2fr_1fr] items-center gap-8 pb-4">
          <div>
            <div className="mb-1 text-[17px] opacity-65">Sistemas nuevos por año</div>
            <VBars
              w={640}
              h={340}
              fmt={(v) => v.toLocaleString('es-AR')}
              data={[
                { label: 'Año 1', value: 200, tone: 'mute', sub: '~17 por mes' },
                { label: 'Año 2', value: 500, tone: 'sun', sub: '~42' },
                { label: 'Año 3', value: 800, tone: 'sun', sub: '~67' },
                { label: 'Año 4', value: 1200, tone: 'green', sub: '~100' },
                { label: 'Año 5', value: 1300, tone: 'green', sub: '~108' },
              ]}
            />
          </div>
          <div>
            <div className="mb-3 text-[17px] font-bold uppercase tracking-wider opacity-60">Dotación total</div>
            <div className="flex flex-col gap-3">
              {[
                ['11', 'personas', 'Año 1, validación'],
                ['21 a 31', 'personas', 'Años 2 y 3, escalamiento'],
                ['44 a 50', 'personas', 'Años 4 y 5, expansión máxima'],
                ['17', 'personas', 'Años 6 a 15, operación y mantenimiento'],
              ].map(([v, u, l]) => (
                <div key={l} className="flex items-baseline gap-3 rounded-2xl border border-black/10 bg-white/70 px-5 py-3 shadow-sm">
                  <span className="min-w-[150px] font-serif text-[40px] font-extrabold leading-none text-primary">{v}</span>
                  <span className="text-[19px] leading-tight opacity-75">
                    {u}
                    <br />
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Frame>
    ),
  },
]

void Stat
