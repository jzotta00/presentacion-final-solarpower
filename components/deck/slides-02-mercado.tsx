import { Landmark, TrendingUp, Users, Cpu, Leaf, Scale, Swords, Target, ShieldCheck, Sun } from 'lucide-react'
import { ArgentinaMap } from './primitives'
import type { SlideDef } from './types'
import { Frame, H, Hl, Kicker, Big, Stat, Chip, Panel, IconCard, BlockDivider, FunnelBars, PorterLite, Dots, COLOR } from './impact'

const B = '2 · Mercado'

const SP1 = 'oklch(0.55 0.13 162)'
const SP2 = 'oklch(0.66 0.17 55)'
const SP3 = 'oklch(0.55 0.05 255)'

export const mercado: SlideDef[] = [
  {
    nav: 'Bloque 2',
    block: B,
    node: (
      <BlockDivider
        number="2"
        title="Estudio de mercado"
        hook="Cuántas casas pueden tener solar, quién compite y por qué ahora."
        topics={['PESTELCO', 'Recurso solar', 'Embudo del Censo', 'SP1 · SP2 · SP3', 'Porter y FODA', 'Caso Sunrun']}
      />
    ),
  },

  {
    nav: 'PESTELCO',
    block: B,
    node: (
      <Frame block={B} source="ENRE 05/2026, INDEC (Censo 2022), BCRA, Secretaría de Energía, NDC Argentina 2021, INTI/CADER">
        <H size="lg" className="max-w-[1050px]">
          El entorno acompaña en <Hl g>las siete dimensiones</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-4 grid-rows-2 gap-4 pb-5">
          {[
            [Landmark, 'Política', 'Ley 27.424 y normalización tarifaria', 'Favorable', 'green'],
            [TrendingUp, 'Económica', 'Tarifas al alza y paneles 98,7% más baratos desde 2017', 'Muy favorable', 'green'],
            [Users, 'Social', '68,9% de los hogares son propietarios', 'Favorable', 'green'],
            [Cpu, 'Tecnológica', 'Módulos de 580 Wp y monitoreo remoto', 'Favorable', 'green'],
            [Leaf, 'Ecológica', 'Meta nacional de bajar 30% las emisiones al 2030', 'Favorable', 'green'],
            [Scale, 'Legal', 'Defensa del Consumidor y reglas del ENRE', 'Neutro a favorable', 'sun'],
            [Swords, 'Competitiva', 'Nadie ofrece arrendamiento con cuota en UVA', 'Muy favorable', 'green'],
          ].map(([I, t, d, v, tone]) => {
            const Ic = I as typeof Landmark
            return (
              <div key={t as string} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <Ic className="h-8 w-8 text-ink/60" strokeWidth={1.8} />
                  <Chip tone={tone as 'green' | 'sun'} className="!px-3 !py-1 !text-[15px]">{v as string}</Chip>
                </div>
                <div className="mt-3 font-serif text-[25px] font-bold leading-tight">{t as string}</div>
                <div className="mt-1.5 text-[17px] leading-snug opacity-75">{d as string}</div>
              </div>
            )
          })}
          <div className="flex flex-col justify-center rounded-2xl bg-ink p-5 text-white">
            <div className="font-serif text-[64px] font-extrabold leading-none text-[oklch(0.8_0.16_78)]">0</div>
            <div className="mt-2 text-[19px] leading-snug text-white/80">dimensiones en contra</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Recurso solar',
    block: B,
    node: (
      <Frame block={B} source="Global Solar Atlas (Solargis, Banco Mundial); PVGIS (Comisión Europea), Buenos Aires, 34° norte">
        <H size="lg" className="max-w-[1050px]">
          Sol suficiente para el negocio, y <Hl>donde está la gente</Hl>
        </H>
        <div className="mt-4 grid flex-1 grid-cols-[1.2fr_1fr] items-center gap-10 pb-6">
          <Big value="1.985" unit="kWh/m²/año" size={190} tone="sun" caption="de irradiación sobre plano inclinado en Buenos Aires" />
          <div className="flex flex-col gap-8">
            <Stat value="37%" size={72} tone="green" label="de la población del país vive en el AMBA" />
            <Stat value="1.600 a 1.700" size={52} tone="ink" label="kWh/m²/año de irradiación horizontal en el AMBA" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Embudo del Censo 2022',
    block: B,
    node: (
      <Frame block={B} source="INDEC, Censo 2022; IRENA, CNEA, INTI; Mapa del Potencial Solar de CABA. Elaboración propia">
        <H size="lg" className="max-w-[1100px]">
          De casi 12 millones de casas a <Hl g>4.000 clientes</Hl>
        </H>
        <div className="mt-6 flex flex-1 items-start justify-center pb-4">
          <FunnelBars
            w={1000}
            steps={[
              { display: '11,9 M', label: 'casas (Censo 2022)', value: 11900361, tone: 'ink' },
              { display: '7,1 M', label: 'techo y piso aptos · retiene 59,7%', value: 7104316, tone: 'ink' },
              { display: '3,55 M', label: 'superficie, orientación y sombra · 50%', value: 3552157, tone: 'sun' },
              { display: '954.152', label: 'en CABA y 24 partidos (SP1)', value: 954152, tone: 'sun' },
              { display: '4.000', label: 'meta a 5 años · 0,42% de SP1', value: 4000, tone: 'green' },
            ]}
          />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Segmentación SP1 · SP2 · SP3',
    block: B,
    node: (
      <Frame block={B} source="INDEC, Censo 2022 (viviendas aptas tras filtros 1 y 2). Elaboración propia">
        <H size="lg" className="max-w-[1050px]">
          Entramos por el <Hl g>AMBA</Hl> y después expandimos
        </H>
        <div className="mt-2 grid flex-1 grid-cols-[1fr_1.1fr] items-center gap-8 pb-5">
          <div className="flex h-[420px] items-center justify-center">
            <ArgentinaMap
              height={420}
              labels={false}
              groups={[
                { name: 'SP1', postals: ['Ciudad de Buenos Aires'], fill: SP1, marker: true },
                { name: 'SP2', postals: ['Buenos Aires', 'CB', 'SF'], fill: SP2 },
                { name: 'SP3', postals: ['MZ', 'SJ', 'SA', 'JY', 'TM', 'ER', 'SL', 'LR', 'CT', 'SE', 'CC', 'FM', 'MN', 'CN', 'LP', 'NQ', 'RN', 'CH', 'SC'], fill: SP3 },
              ]}
            />
          </div>
          <div className="flex flex-col gap-5">
            {[
              ['SP1', 'CABA y AMBA', '954.152', 'Años 1 a 5', SP1],
              ['SP2', 'Buenos Aires, Córdoba y Santa Fe', '1.169.475', 'Años 4 a 8', SP2],
              ['SP3', 'Resto del país', '1.428.531', 'Años 7 a 10+', SP3],
            ].map(([k, n, v, y, c]) => (
              <div key={k} className="flex items-center gap-5 rounded-2xl border border-black/10 bg-white/70 px-6 py-4 shadow-sm">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-serif text-[22px] font-extrabold text-white" style={{ background: c }}>
                  {k}
                </span>
                <div className="flex-1">
                  <div className="font-serif text-[38px] font-extrabold leading-none tabular-nums">{v}</div>
                  <div className="mt-1 text-[18px] opacity-70">{n}</div>
                </div>
                <div className="text-[18px] font-semibold opacity-65">{y}</div>
              </div>
            ))}
            <div className="text-[17px] opacity-65">Viviendas técnicamente aptas por segmento. Total país: 3.552.157.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Consumo y categoría objetivo',
    block: B,
    node: (
      <Frame block={B} source="Ministerio de Energía; ENRE 05/2026; Decreto 332/2022 (segmentación tarifaria)">
        <H size="lg" className="max-w-[1100px]">
          Nuestro cliente: hogar <Hl>sin subsidio</Hl> que consume 350 a 800 kWh por mes
        </H>
        <div className="mt-8 grid flex-1 grid-cols-[1.5fr_1fr] items-center gap-10 pb-6">
          <div className="flex flex-col gap-8">
            {[
              ['Hogar promedio del AMBA', 200, 500, COLOR.mute],
              ['Objetivo de SolarPower', 350, 800, COLOR.sun],
            ].map(([l, a, b, c]) => (
              <div key={l as string}>
                <div className="mb-2 text-[21px] font-semibold">{l as string}</div>
                <div className="relative h-14 rounded-xl bg-black/[0.06]">
                  <div
                    className="absolute inset-y-0 flex items-center justify-center rounded-xl font-serif text-[24px] font-extrabold text-white"
                    style={{ left: `${((a as number) / 900) * 100}%`, width: `${(((b as number) - (a as number)) / 900) * 100}%`, background: c as string }}
                  >
                    {a as number} a {b as number}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between text-[16px] opacity-55">
              <span>0</span>
              <span>300</span>
              <span>600</span>
              <span>900 kWh/mes</span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Big value="~70%" size={110} tone="sun" caption="de los usuarios paga tarifa plena. Es nuestro primer segmento" />
            <Chip tone="green">A medida que se normalice, el N2 es el segundo mercado</Chip>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Cinco fuerzas de Porter',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia (Porter, 2008)">
        <H size="md" className="max-w-[1050px]">
          Cinco fuerzas de Porter: un nicho <Hl g>sin rival directo</Hl>
        </H>
        <div className="mt-4 min-h-0 flex-1 pb-4">
          <PorterLite
            top={{ title: 'Nuevos entrantes', level: 'Media', tone: 'sun', line: 'Exige capital, contratos largos y red de instaladores' }}
            left={{ title: 'Proveedores', level: 'Medio', tone: 'sun', line: 'Varios importadores: 2 a 3 por componente' }}
            center={{ title: 'Rivalidad entre competidores', level: 'Baja', tone: 'green', line: 'Nadie ofrece arrendamiento con cuota en UVA' }}
            right={{ title: 'Clientes', level: 'Bajo a medio', tone: 'green', line: 'Hogares individuales y contrato estándar' }}
            bottom={{ title: 'Sustitutos', level: 'Media a alta', tone: 'red', line: 'Compra con crédito, eficiencia o seguir esperando' }}
          />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'FODA',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia">
        <H size="md">FODA de SolarPower Energy</H>
        <div className="mt-5 grid flex-1 grid-cols-2 grid-rows-2 gap-4 pb-5">
          {[
            ['Fortalezas', 'green', ['USD 600 de entrada', 'Primer entrante del segmento', 'Piloto con más de 20 instalaciones']],
            ['Oportunidades', 'sun', ['Normalización tarifaria', '3,5 M de viviendas aptas', 'Equipos cada vez más baratos']],
            ['Debilidades', 'red', ['Mucho capital para escalar', 'Pocos instaladores certificados', 'Marca todavía chica']],
            ['Amenazas', 'ink', ['Inestabilidad macroeconómica', 'Acceso a dólares para importar', 'Competidores con más escala']],
          ].map(([t, tone, items]) => (
            <div key={t as string} className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-black/10 bg-white/70 px-7 py-4 shadow-sm">
              <div className="absolute inset-y-0 left-0 w-2.5" style={{ background: COLOR[tone as 'green'] }} />
              <div className="font-serif text-[28px] font-extrabold leading-none" style={{ color: COLOR[tone as 'green'] }}>
                {t as string}
              </div>
              <ul className="mt-3 flex flex-col gap-1.5 text-[22px] leading-snug">
                {(items as string[]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Factores críticos de éxito',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia; Sunrun (10-K 2023); piloto SolarPower">
        <H size="md" className="max-w-[1100px]">
          Ganamos donde al cliente <Hl>más le duele</Hl>
        </H>
        <div className="mt-5 flex-1 pb-4">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-x-4 px-2 pb-3 text-[17px] font-bold uppercase tracking-wider opacity-60">
            <div />
            <div className="text-primary opacity-100">SolarPower</div>
            <div>Instaladores</div>
            <div>Compra directa</div>
          </div>
          {[
            ['Pago inicial bajo', [3, 1, 1]],
            ['Mantenimiento incluido', [3, 1, 0]],
            ['Monitoreo y garantía de producción', [3, 2, 0]],
            ['Cuota indexada (UVA)', [3, 0, 0]],
            ['Reputación de marca', [2, 2, 3]],
            ['Velocidad de instalación', [2, 2, 3]],
          ].map(([l, v], i) => (
            <div key={l as string} className={`grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-x-4 rounded-xl px-2 py-3 ${i % 2 === 0 ? 'bg-black/[0.04]' : ''}`}>
              <div className="text-[22px] font-semibold">{l as string}</div>
              {(v as number[]).map((n, k) => (
                <div key={k}>
                  <Dots n={n} na={n === 0} tone={k === 0 ? 'sun' : 'mute'} />
                </div>
              ))}
            </div>
          ))}
          <div className="mt-3 px-2 text-[16px] opacity-60">Tres puntos es el nivel más alto. Dos filas donde somos iguales o más débiles, a propósito.</div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Benchmark: Sunrun',
    block: B,
    node: (
      <Frame tone="dark" block={B} source="Sunrun Inc., Form 10-K 2023 y Q4 2024 Earnings Release">
        <Kicker>Caso de éxito · Sunrun (NASDAQ: RUN)</Kicker>
        <H size="lg" className="mt-3 max-w-[1000px]">
          El modelo ya <Hl>funciona a gran escala</Hl>
        </H>
        <div className="mt-auto grid grid-cols-[1fr_0.8fr_1.4fr_1.3fr] gap-8 pb-8">
          <Stat value="933.275" size={46} tone="sun" label="clientes activos a diciembre de 2023" />
          <Stat value="6,7 GW" size={46} tone="sun" label="de capacidad fotovoltaica instalada" />
          <Stat value="USD 2.260 M" size={44} tone="white" label="de ingresos en 2023" />
          <Stat value="1,8%" size={54} tone="green" label="de default en lease, contra 4,2% en préstamos solares" />
        </div>
        <div className="pb-2 text-[22px] text-white/70">La cuota reemplaza un gasto que el hogar ya tiene: la luz.</div>
      </Frame>
    ),
  },

  {
    nav: 'Conclusiones del mercado',
    block: B,
    node: (
      <Frame block={B} source="Energy-Box (jul-2025) para usuarios-generadores 1S-2025">
        <H size="lg" className="max-w-[1100px]">
          Un mercado grande, <Hl>casi vacío</Hl> y con un motor claro
        </H>
        <div className="mt-8 grid grid-cols-4 gap-5">
          <IconCard big icon={Scale} tone="green" title="Marco legal" text="Habilita generar, inyectar y conectarse" />
          <IconCard big icon={TrendingUp} tone="sun" title="Tarifas en alza" text="Son el motor económico del ahorro" />
          <IconCard big icon={Target} tone="green" title="954.152 viviendas" text="aptas en SP1, sin competidor directo" />
          <IconCard big icon={ShieldCheck} tone="sun" title="Riesgos acotados" text="Capital, medidor y regulación: los tres mitigables" />
        </div>
        <div className="mt-auto pb-4">
          <Chip tone="ink" className="!text-[19px]">
            <Sun className="h-5 w-5" /> 2.918 usuarios-generadores en el 1S 2025, sobre más de 3,5 M de viviendas aptas
          </Chip>
        </div>
      </Frame>
    ),
  },
]

void Panel
