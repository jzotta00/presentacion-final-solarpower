import { Banknote, Ban, Landmark, Home, TrendingUp, Scale, Gavel, FileText, Zap, ShieldCheck, Handshake, PlugZap } from 'lucide-react'
import { ArgentinaMap } from './primitives'
import type { SlideDef } from './types'
import { Frame, H, Hl, Kicker, Big, Stat, Chip, Panel, IconCard, BlockDivider, VBars, HBars, Ring, COLOR } from './impact'

const B = '1 · Contexto'

export const contexto: SlideDef[] = [
  {
    nav: 'Bloque 1',
    block: B,
    node: (
      <BlockDivider
        number="1"
        title="Contexto y problema"
        hook="Una matriz fósil, años de subsidios y casi nada de solar en los techos."
        topics={['Matriz', 'Subsidios', 'Tarifas', 'Generación distribuida', 'Barrera de capital', 'Marco legal']}
      />
    ),
  },

  {
    nav: 'Matriz eléctrica',
    block: B,
    node: (
      <Frame block={B} source="CAMMESA, jul-2024 a jun-2025; RenovAr; Ley 27.191">
        <H size="lg" className="max-w-[900px]">
          Más de la mitad de la electricidad todavía es <Hl r>fósil</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-[1.25fr_1fr] items-center gap-10 pb-6">
          <Ring
            size={340}
            center="53%"
            centerLabel="fósil"
            data={[
              { label: 'Fósil', value: 53, color: COLOR.red },
              { label: 'Hidráulica', value: 24, color: 'oklch(0.6 0.1 240)' },
              { label: 'Eólica', value: 12, color: COLOR.green },
              { label: 'Nuclear', value: 6, color: 'oklch(0.7 0.05 300)' },
              { label: 'Solar', value: 5, color: COLOR.sun },
            ]}
          />
          <div className="flex flex-col gap-7">
            <Stat value="16%" tone="green" size={76} label="renovables en 2024, contra 4% en 2017. La meta de la Ley 27.191 era 20% en 2025" />
            <Stat value="1.673 MW" tone="sun" size={60} label="solar de gran escala. El techo residencial quedó afuera" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Subsidios energéticos',
    block: B,
    node: (
      <Frame block={B} source="CIPPEC (2023) con datos de la Secretaría de Energía y Presupuesto Abierto">
        <H size="lg" className="max-w-[1000px]">
          Durante años, la luz costó <Hl>menos de lo que valía</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-[1.5fr_1fr] items-center gap-8 pb-6">
          <div>
            <div className="mb-1 text-[17px] opacity-65">Subsidios energéticos, % del PBI</div>
            <VBars
              w={720}
              h={330}
              maxBar={26}
              labelSize={14}
              valueSize={16}
              fmt={(v) => (v >= 2 ? `${v.toLocaleString('es-AR')}%` : '')}
              data={[0.5, 0.4, 0.4, 0.7, 1.2, 1.4, 1.6, 1.7, 2.0, 3.0, 3.4, 2.8, 1.9, 1.2, 1.5, 1.0, 1.9, 2.3, 2.0].map((v, i) => ({
                label: i % 3 === 0 || i === 18 ? String(2004 + i) : '',
                value: v,
                tone: v === 3.4 ? 'red' : v >= 2 ? 'sun' : 'mute',
              }))}
            />
          </div>
          <div className="flex flex-col gap-7">
            <Big value="< 40%" size={96} tone="red" caption="del costo real cubría la tarifa residencial hasta 2023" />
            <Stat value="3,4% del PBI" size={40} tone="ink" label="pico de subsidios, 2014 a 2015" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Normalización tarifaria',
    block: B,
    node: (
      <Frame block={B} source="ENRE, cuadros tarifarios Edenor y Edesur 05/2026; ENRE 2024">
        <H size="lg" className="max-w-[1050px]">
          Se normalizaron las tarifas y las facturas <Hl r>se dispararon</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-[1fr_1.3fr] items-center gap-10 pb-6">
          <div className="flex flex-col gap-6">
            <Big value="+150%" size={140} tone="red" caption="en la factura de hogares N1 en doce meses (2024)" />
            <div className="flex flex-wrap gap-3">
              <Chip tone="red">+21% de IVA</Chip>
              <Chip tone="red">hasta 37% de tasas municipales</Chip>
            </div>
          </div>
          <div>
            <div className="mb-1 text-[17px] opacity-65">Cargo variable sin impuestos, ARS por kWh (Edenor)</div>
            <VBars
              w={640}
              h={330}
              fmt={(v) => `$${Math.round(v)}`}
              data={[
                { label: 'R1', value: 144.321, tone: 'mute', sub: '0-150' },
                { label: 'R2', value: 144.899, tone: 'mute', sub: '151-400' },
                { label: 'R3', value: 155.596, tone: 'sun', sub: '401-500' },
                { label: 'R4', value: 159.077, tone: 'sun', sub: '501-600' },
                { label: 'R5', value: 159.337, tone: 'sun', sub: '601-700' },
                { label: 'R6', value: 173.296, tone: 'red', sub: '+700' },
              ]}
            />
            <div className="mt-2 text-[17px] opacity-70">Nuestro cliente consume 350 a 800 kWh por mes: categorías R3 a R6.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Argentina en el mundo',
    block: B,
    node: (
      <Frame block={B} source="Statista (sep-2023); ENRE 05/2026. Argentina antes de 2024 no figura en el ranking">
        <H size="lg" className="max-w-[1050px]">
          Veníamos de las tarifas <Hl>más bajas del mundo</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-[1.4fr_1fr] items-center gap-10 pb-6">
          <div>
            <div className="mb-3 text-[17px] opacity-65">Precio residencial, USD por kWh</div>
            <HBars
              labelW={150}
              rowH={36}
              gap={11}
              fontSize={20}
              max={0.45}
              fmt={(v) => `${v.toFixed(2).replace('.', ',')}`}
              data={[
                { label: 'Alemania', value: 0.4, tone: 'mute' },
                { label: 'Uruguay', value: 0.26, tone: 'sun' },
                { label: 'Perú', value: 0.19, tone: 'sun' },
                { label: 'Brasil', value: 0.17, tone: 'sun' },
                { label: 'Estados Unidos', value: 0.17, tone: 'mute' },
                { label: 'México', value: 0.12, tone: 'sun' },
                { label: 'Argentina', value: 0.03, tone: 'red', display: '0,01 a 0,05' },
              ]}
            />
          </div>
          <Big value="USD 0,01 a 0,05" size={54} tone="red" caption="por kWh antes de 2024. La normalización todavía tiene camino por recorrer" />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Generación distribuida hoy',
    block: B,
    node: (
      <Frame tone="dark" block={B} source="Secretaría de Energía, Reporte Anual de Generación Distribuida 2024; Censo 2022">
        <Kicker>Generación distribuida residencial</Kicker>
        <div className="mt-2 grid flex-1 grid-cols-[1.2fr_1fr] items-center gap-10 pb-6">
          <div>
            <Big value="1.299" size={230} tone="sun" caption="instalaciones residenciales con solar en todo el país, a diciembre de 2024" />
          </div>
          <div className="flex flex-col gap-8">
            <Stat value="12 M" size={72} tone="white" label="de casas en el país (Censo 2022)" />
            <Stat value="< 0,01%" size={72} tone="red" label="penetración residencial" />
            <Stat value="5,9%" size={72} tone="sun" label="de la meta de 1.000 MW que fijaba la Ley 27.424 para 2028" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'GD por jurisdicción',
    block: B,
    node: (
      <Frame block={B} source="Secretaría de Energía, datos 2023 (total 37,58 MW)">
        <H size="lg" className="max-w-[1050px]">
          Córdoba lidera. El AMBA, con la mayor demanda, <Hl>casi no existe</Hl>
        </H>
        <div className="mt-4 grid flex-1 grid-cols-[0.8fr_1.2fr] items-center gap-8 pb-6">
          <div className="flex h-[400px] items-center justify-center">
            <ArgentinaMap
              labels={false}
              height={400}
              groups={[
                { name: 'Córdoba', postals: ['CB'], fill: 'oklch(0.66 0.17 55)' },
                { name: 'Buenos Aires', postals: ['Buenos Aires'], fill: 'oklch(0.78 0.12 70)' },
                { name: 'CABA', postals: ['Ciudad de Buenos Aires'], fill: 'oklch(0.55 0.13 162)', marker: true },
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <HBars
              labelW={150}
              rowH={38}
              gap={12}
              fontSize={21}
              max={16000}
              fmt={(v) => `${v.toLocaleString('es-AR')} kW`}
              data={[
                { label: 'Córdoba', value: 15151, tone: 'sun', sub: '815 usuarios' },
                { label: 'Buenos Aires', value: 8554, tone: 'mute', sub: '508' },
                { label: 'San Juan', value: 3527, tone: 'mute', sub: '89' },
                { label: 'CABA', value: 2943, tone: 'green', sub: '119' },
              ]}
            />
            <Chip tone="green">CABA + Provincia de Buenos Aires: 627 usuarios-generadores</Chip>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Benchmark internacional',
    block: B,
    node: (
      <Frame block={B} source="PowerMag (2024), SEIA (2024), IRENA (2024), Secretaría de Energía. Japón: dato 2023">
        <H size="lg" className="max-w-[1050px]">
          Australia: <Hl g>37,7%</Hl> de hogares con solar. Argentina: <Hl r>menos de 0,01%</Hl>
        </H>
        <div className="mt-6 flex-1 pb-6">
          <div className="mb-3 text-[17px] opacity-65">Penetración residencial</div>
          <HBars
            labelW={190}
            rowH={40}
            gap={12}
            fontSize={22}
            max={40}
            fmt={(v) => (v < 0.1 ? '< 0,01%' : `${v.toLocaleString('es-AR')}%`)}
            data={[
              { label: 'Australia', value: 37.7, tone: 'green' },
              { label: 'Alemania', value: 12.3, tone: 'sun' },
              { label: 'Países Bajos', value: 10, tone: 'sun' },
              { label: 'Italia', value: 8, tone: 'sun' },
              { label: 'Japón', value: 7.7, tone: 'sun' },
              { label: 'Estados Unidos', value: 4.96, tone: 'sun' },
              { label: 'Argentina', value: 0.01, tone: 'red' },
            ]}
          />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'La barrera de capital',
    block: B,
    node: (
      <Frame block={B} source="SEIA, IRENA (2024); cotizaciones 2026; DNU 70/2023">
        <H size="lg" className="max-w-[1050px]">
          El obstáculo es el <Hl r>precio de entrada</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-[1fr_1.3fr] gap-8 pb-6">
          <div className="flex flex-col justify-center gap-6">
            <Big value="USD 3.000 a 4.000" size={52} tone="red" caption="cuesta un sistema estándar de 5,22 kWp" />
            <div className="h-px bg-black/15" />
            <Big value="USD 600" size={96} tone="green" caption="es la entrada con arrendamiento" />
          </div>
          <div className="flex flex-col justify-center gap-3">
            {[
              [Banknote, 'Compra de contado', 'Fuera del alcance de la mayoría'],
              [Ban, 'Crédito personal', 'TNA de 70% a 120%: se come el ahorro'],
              [Landmark, 'Hipotecario UVA', 'Exige garantía y calificación'],
              [Gavel, 'Incentivos fiscales', 'Derogados por el DNU 70/2023'],
            ].map(([I, t, d]) => {
              const Ic = I as typeof Banknote
              return (
                <div key={t as string} className="flex items-center gap-5 rounded-2xl border border-black/10 bg-white/70 px-6 py-4 shadow-sm">
                  <Ic className="h-9 w-9 shrink-0 text-destructive" strokeWidth={1.8} />
                  <div>
                    <div className="font-serif text-[24px] font-bold leading-tight">{t as string}</div>
                    <div className="text-[19px] opacity-70">{d as string}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Marco regulatorio',
    block: B,
    node: (
      <Frame block={B} source="Boletín Oficial; ENRE; Secretaría de Energía">
        <H size="lg" className="max-w-[1050px]">
          El marco legal <Hl g>ya existe</Hl> y se está simplificando
        </H>
        <div className="mt-8 grid grid-cols-5 gap-4">
          {[
            [Scale, 'Ley 27.424', '2017', 'Derecho a generar, inyectar y compensar'],
            [FileText, 'Decreto 986/2018', '2018', 'Reglamenta la ley y crea el RUGER'],
            [Gavel, 'DNU 70/2023', '2023', 'Derogó los incentivos y mantuvo el derecho a conectarse'],
            [PlugZap, 'Res. SE 235/2024', '2024', 'Permite agregar sistemas y generar en comunidad'],
            [ShieldCheck, 'Res. SE 287/2025', '2025', 'Prohíbe a las distribuidoras cobrar cargos ocultos'],
          ].map(([I, t, y, d]) => {
            const Ic = I as typeof Scale
            return (
              <div key={t as string} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
                <div className="font-serif text-[40px] font-extrabold leading-none text-primary">{y as string}</div>
                <Ic className="mt-4 h-8 w-8 text-ink/60" strokeWidth={1.8} />
                <div className="mt-3 font-serif text-[21px] font-bold leading-tight">{t as string}</div>
                <div className="mt-2 text-[17px] leading-snug opacity-75">{d as string}</div>
              </div>
            )
          })}
        </div>
        <Panel className="mt-auto mb-4 flex items-center gap-4">
          <Handshake className="h-8 w-8 shrink-0 text-accent" />
          <div className="text-[21px] leading-snug">
            Nuestro contrato es una <b>locación de cosas</b> (Código Civil y Comercial, arts. 1187 a 1226). No es un crédito ni una venta de energía.
          </div>
        </Panel>
      </Frame>
    ),
  },
]

void Home
void TrendingUp
void Zap
void IconCard
