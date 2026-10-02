import { Coins, Gauge, Timer, Target } from 'lucide-react'
import type { SlideDef } from './types'
import { Frame, H, Hl, Kicker, Big, Stat, Chip, Panel, BlockDivider, VBars, HBars, LineChart, Waterfall, COLOR } from './impact'

const B = '6 · Financiero'

/* ---- Datos del informe, capítulo 4 ---- */
const years = Array.from({ length: 15 }, (_, i) => `A${i + 1}`)
const ingresos = [69600, 327200, 840000, 1661600, 2707650, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900]
const ebitda = [-38400, 140120, 546641, 1198022, 2056014, 2635932, 2624803, 2603340, 2581534, 2559373, 2536847, 2513945, 2490657, 2466969, 2442871]
const fcfAcum = [-438400, -1298280, -2351639, -3553617, -4189442, -1944086, 224036, 2266207, 4126204, 5789796, 7438746, 9072811, 10691737, 12295267, 13883134]

const M = (v: number) => `${(v / 1e6).toLocaleString('es-AR', { maximumFractionDigits: 2 })} M`
const usd = (v: number) => `USD ${v.toLocaleString('es-AR')}`

export const financiero: SlideDef[] = [
  {
    nav: 'Bloque 6',
    block: B,
    node: (
      <BlockDivider
        number="6"
        title="Evaluación económico-financiera"
        hook="USD 4,19 M de capital máximo, TIR de 26,4% y un modelo que resiste el estrés."
        topics={['Supuestos y CAPEX', 'Cuota y OPEX', 'Ingresos y flujo', 'TREMA', 'VAN y TIR', 'Sensibilidad', 'Riesgos y KPIs']}
      />
    ),
  },

  {
    nav: 'Supuestos del modelo',
    block: B,
    node: (
      <Frame block={B} source="BCRA (UVA 30/06/2026); TC oficial 30/06/2026; JP Morgan EMBI+ (05/07/2026); Damodaran (ene-2026)">
        <H size="lg" className="max-w-[1100px]">
          Los supuestos que <Hl>sostienen el modelo</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-4 grid-rows-2 gap-4 pb-4">
          {[
            ['USD 2026', 'moneda constante: sin ruido inflacionario'],
            ['1.485', 'ARS por USD (30/06/2026)'],
            ['$2.007', 'valor de la UVA: cuota de 42,94 UVA = USD 58'],
            ['+8% / +2%', 'cuota de las nuevas cohortes: Años 1 a 3 y Años 4 a 5'],
            ['USD 80', 'de OPEX directo por sistema y año, +3% anual'],
            ['0%', 'de churn: la salida cuesta la desinstalación'],
            ['35%', 'de impuesto a las ganancias, con quebrantos'],
            ['13%', 'de TREMA anual en USD'],
          ].map(([v, l], i) => (
            <div key={l} className={`flex flex-col justify-center rounded-2xl p-5 ${i === 7 ? 'bg-ink text-white' : 'border border-black/10 bg-white/70 shadow-sm'}`}>
              <div className={`font-serif text-[44px] font-extrabold leading-none ${i === 7 ? 'text-[oklch(0.8_0.16_78)]' : 'text-primary'}`}>{v}</div>
              <div className={`mt-2 text-[18px] leading-snug ${i === 7 ? 'text-white/80' : 'opacity-75'}`}>{l}</div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },

  {
    nav: 'CAPEX por sistema',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia con cotizaciones FOB e internación, 2026">
        <H size="lg" className="max-w-[1150px]">
          USD 3.000 llave en mano, <Hl g>USD 2.000 netos</Hl> para SolarPower
        </H>
        <div className="mt-2 grid flex-1 grid-cols-[1.5fr_1fr] items-center gap-8 pb-6">
          <Waterfall
            w={760}
            h={390}
            fmt={(v) => `${v.toLocaleString('es-AR')}`}
            steps={[
              { label: 'Costo llave\nen mano', value: 3000, kind: 'total', tone: 'ink' },
              { label: 'Pago inicial\ndel cliente', value: -600, kind: 'delta', tone: 'sun' },
              { label: 'IVA crédito\nfiscal', value: -400, kind: 'delta', tone: 'sun' },
              { label: 'CAPEX neto\nSolarPower', value: 2000, kind: 'total', tone: 'green' },
            ]}
          />
          <div className="flex flex-col gap-6">
            <Stat value="USD 8 M" size={78} tone="sun" label="de inversión total: 4.000 sistemas en 5 años" />
            <div className="text-[19px] leading-snug opacity-70">La importación directa baja el precio de USD 3.500 (distribución) a USD 3.000.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Cuota por cohorte',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Cuota base: tarifa Edenor y Edesur sin subsidio, jul-2026">
        <H size="lg" className="max-w-[1150px]">
          Cada cohorte entra con una cuota más alta. <Hl>Las ya firmadas no cambian</Hl>
        </H>
        <div className="mt-3 grid flex-1 grid-cols-[1.4fr_1fr] items-center gap-8 pb-6">
          <div>
            <div className="mb-1 text-[17px] opacity-65">Cuota mensual de cada cohorte, USD</div>
            <VBars
              w={640}
              h={340}
              fmt={(v) => `USD ${v}`}
              data={[
                { label: 'Año 1', value: 58, tone: 'mute', sub: '200 sistemas' },
                { label: 'Año 2', value: 63, tone: 'sun', sub: '500' },
                { label: 'Año 3', value: 68, tone: 'sun', sub: '800' },
                { label: 'Año 4', value: 69, tone: 'green', sub: '1.200' },
                { label: 'Año 5', value: 70, tone: 'green', sub: '1.300' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-5">
            <Chip tone="sun" className="!text-[20px]">+8% por año en los Años 1 a 3</Chip>
            <Chip tone="green" className="!text-[20px]">+2% por año en los Años 4 y 5</Chip>
            <div className="text-[20px] leading-snug opacity-75">Cada cohorte sigue la normalización de la tarifa y mantiene el piso de 30% de ahorro para el cliente nuevo.</div>
            <div className="text-[20px] leading-snug opacity-75">Desde el Año 6 no se instalan sistemas nuevos: los ingresos quedan constantes.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'OPEX',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Monitoreo en capa gratuita de DEYE Cloud y Huawei FusionSolar">
        <H size="lg" className="max-w-[1100px]">
          Operar un sistema cuesta <Hl>USD 80 por año</Hl>
        </H>
        <div className="mt-4 grid flex-1 grid-cols-[1.3fr_1fr] items-center gap-10 pb-6">
          <div>
            <div className="mb-3 text-[17px] opacity-65">OPEX directo por sistema, USD por año</div>
            <HBars
              labelW={250}
              rowH={46}
              gap={14}
              fontSize={21}
              max={60}
              fmt={(v) => `${v}`}
              data={[
                { label: 'Mantenimiento preventivo', value: 60, tone: 'sun' },
                { label: 'Seguro de equipos', value: 10, tone: 'sun' },
                { label: 'Mantenimiento correctivo', value: 10, tone: 'sun' },
                { label: 'Monitoreo remoto', value: 0.4, tone: 'mute', display: '0', sub: 'capa gratuita' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <Panel>
              <div className="text-[16px] font-bold uppercase tracking-wider opacity-60">Estructura corporativa</div>
              <div className="mt-2 font-serif text-[44px] font-extrabold leading-none text-ink">USD 100 k a 350 k</div>
              <div className="mt-2 text-[18px] opacity-70">por año entre los Años 1 y 5, dirección, administración y comercial</div>
            </Panel>
            <div className="text-[19px] opacity-70">El OPEX directo crece 3% por año y se aplica sobre la flota promedio.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Ingresos y EBITDA a 15 años',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Los sistemas nuevos generan 6 meses de cuota en su primer año">
        <H size="lg" className="max-w-[1150px]">
          Una cartera que cobra: <Hl>USD 3,26 M por año</Hl> con la flota plena
        </H>
        <div className="mt-2 grid flex-1 grid-cols-[1.7fr_1fr] items-center gap-4 pb-4">
          <div>
            <div className="mb-1 text-[17px] opacity-65">USD millones por año</div>
            <LineChart
              w={780}
              h={360}
              labels={years}
              labelEvery={2}
              fmt={M}
              area
              series={[
                { name: 'Ingresos', values: ingresos, tone: 'sun' },
                { name: 'EBITDA', values: ebitda, tone: 'green' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-7">
            <Stat value="79% a 81%" size={52} tone="green" label="de margen EBITDA en los Años 6 a 10" />
            <Stat value="Año 2" size={52} tone="sun" label="EBITDA positivo: margen de 43%" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Break-even y escudo fiscal',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Tabla 4.9 del informe">
        <H size="lg" className="max-w-[1100px]">
          Cuatro puntos de equilibrio en <Hl g>siete años</Hl>
        </H>
        <div className="mt-10 flex-1">
          <div className="relative mx-6 mt-16 h-3 rounded-full bg-black/10">
            <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: '100%', background: `linear-gradient(90deg, ${COLOR.red}, ${COLOR.sun}, ${COLOR.green})` }} />
            {[
              [2, 'EBITDA', 'Año 2', 'USD 327.200 de ingresos'],
              [4, 'EBIT', 'Año 4', 'USD 1,66 M de ingresos'],
              [4, 'Resultado neto', 'Año 4', 'Sin impuesto por quebranto'],
              [6.9, 'Payback', 'Año 6,9', 'El flujo acumulado cruza cero'],
            ].map(([y, t, a, d], i) => {
              const left = ((y as number) / 8) * 100
              const up = i % 2 === 0
              const shift = i === 1 ? -150 : i === 2 ? 20 : 0
              return (
                <div key={i} className="absolute" style={{ left: `${left}%` }}>
                  <div className="absolute -top-2 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-white shadow" style={{ background: COLOR.ink }} />
                  <div className={`absolute w-[250px] -translate-x-1/2 text-center ${up ? '-top-[104px]' : 'top-12'}`} style={{ marginLeft: shift }}>
                    <div className="font-serif text-[22px] font-extrabold">{t as string}</div>
                    <div className="font-serif text-[34px] font-extrabold leading-none text-primary">{a as string}</div>
                    <div className="mt-1 text-[16px] opacity-65">{d as string}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="pb-3 text-[19px] opacity-70">La amortización en 5 años genera un escudo fiscal que llega a USD 1,6 M en el Año 5 y se agota en el Año 10.</div>
      </Frame>
    ),
  },

  {
    nav: 'TREMA por CAPM',
    block: B,
    node: (
      <Frame block={B} source="US Treasury (jul-2026); Damodaran (ene-2026); JP Morgan EMBI+ Argentina (05/07/2026: 412 pb, redondeado a 450 pb)">
        <H size="lg" className="max-w-[1100px]">
          La tasa de corte: <Hl>13% anual en dólares</Hl>
        </H>
        <div className="mt-8 flex items-stretch gap-3">
          {[
            ['4,50%', 'tasa libre de riesgo', 'Treasury a 10 años'],
            ['+', '', ''],
            ['0,71 × 5,50%', 'riesgo del sector solar', 'beta × prima de mercado'],
            ['+', '', ''],
            ['4,50%', 'riesgo país', 'EMBI+ Argentina'],
            ['=', '', ''],
            ['12,9%', 'TREMA', 'redondeada a 13%'],
          ].map(([v, l, s], i) =>
            l ? (
              <div key={i} className={`flex flex-1 flex-col justify-center rounded-2xl p-5 text-center ${i === 6 ? 'bg-primary text-white' : 'border border-black/10 bg-white/70 shadow-sm'}`}>
                <div className="font-serif text-[40px] font-extrabold leading-none">{v}</div>
                <div className="mt-2 text-[18px] font-semibold leading-tight">{l}</div>
                <div className="mt-1 text-[15px] leading-tight opacity-70">{s}</div>
              </div>
            ) : (
              <div key={i} className="flex items-center font-serif text-[40px] font-bold opacity-45">
                {v}
              </div>
            ),
          )}
        </div>
        <div className="mt-auto flex gap-3 pb-5">
          <Chip tone="green" className="!text-[19px]">Con EMBI+ de 300 pb: 11,4%</Chip>
          <Chip tone="red" className="!text-[19px]">Con EMBI+ de 700 pb: 15,4%</Chip>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Economía unitaria',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Cohorte base: cuota de USD 696 por año, CAPEX neto de USD 2.000, descuento al 13%">
        <H size="lg" className="max-w-[1150px]">
          Cada sistema <Hl g>crea valor desde el primer contrato</Hl>
        </H>
        <div className="mt-2 grid flex-1 grid-cols-[1.3fr_1fr] items-center gap-8 pb-5">
          <div>
            <div className="mb-1 text-[17px] opacity-65">TIR de un sistema según el horizonte</div>
            <VBars
              w={640}
              h={350}
              fmt={(v) => `${v.toLocaleString('es-AR')}%`}
              data={[
                { label: '5 años', value: 16.1, tone: 'sun', sub: 'primer contrato' },
                { label: '10 años', value: 27.9, tone: 'green', sub: 'una renovación' },
                { label: '15 años', value: 29.5, tone: 'green', sub: 'dos renovaciones' },
                { label: 'TREMA', value: 13, tone: 'red' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <Stat value="USD 1.900" size={64} tone="green" label="de VAN por sistema a 15 años" />
            <div className="text-[19px] leading-snug opacity-70">Con CAPEX de USD 2.500 la TIR a 5 años era 7,1% y no cubría la tasa. La importación directa lo cambia todo.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Flujo de caja libre',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. FCF = resultado neto + amortización - CAPEX, con impuesto de 35% y quebrantos. Tabla 4.12 (completa en el anexo, A18)">
        <H size="lg" className="max-w-[1150px]">
          Cinco años de inversión, <Hl g>diez de distribución</Hl>
        </H>
        <div className="mt-0 grid flex-1 grid-cols-[1.7fr_1fr] items-center gap-6 pb-4">
          <div>
            <div className="mb-1 text-[17px] opacity-65">Flujo de caja libre acumulado, USD millones</div>
            <VBars
              w={800}
              h={350}
              maxBar={40}
              labelSize={15}
              valueSize={0}
              fmt={() => ''}
              data={fcfAcum.map((v, i) => ({ label: String(i + 1), value: v, tone: v < 0 ? 'red' : 'green' }))}
            />
            <div className="-mt-1 text-center text-[16px] opacity-60">Año del proyecto</div>
          </div>
          <div className="flex flex-col gap-6">
            <Stat value="-USD 4,19 M" size={44} tone="red" label="máximo capital requerido, al cierre del Año 5" />
            <Stat value="6,9 años" size={46} tone="sun" label="de payback" />
            <Stat value="+USD 13,88 M" size={44} tone="green" label="acumulado al Año 15" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'VAN, TIR, payback',
    block: B,
    node: (
      <Frame tone="dark" block={B} source="Elaboración propia. VAN al 13% sobre los FCF de la Tabla 4.12; TIR calculada numéricamente">
        <Kicker>Indicadores del proyecto</Kicker>
        <H size="lg" className="mt-3 max-w-[1100px]">
          Viable con <Hl g>amplia holgura</Hl>
        </H>
        <div className="mt-auto grid grid-cols-4 gap-6 pb-6">
          <Stat value="+2,68 M" size={64} tone="green" label="VAN en USD, con TREMA de 13% y 15 años" />
          <Stat value="26,4%" size={64} tone="green" label="TIR en USD: 13,4 puntos sobre la TREMA" />
          <Stat value="6,9" size={64} tone="sun" label="años de payback" />
          <Stat value="4,31×" size={64} tone="sun" label="MOIC: lo que recibe el inversor por cada dólar" />
        </div>
        <div className="pb-2 text-[21px] text-white/70">Para que el VAN fuera cero, la TREMA tendría que llegar a 26,4%: un riesgo país de unos 1.800 pb, que Argentina no tiene desde 2020.</div>
      </Frame>
    ),
  },

  {
    nav: 'Perspectiva del inversor',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Estructura sin deuda: el flujo del inversor es idéntico al FCF de la compañía">
        <H size="lg" className="max-w-[1150px]">
          Entran <Hl r>USD 4,19 M</Hl>. Vuelven <Hl g>USD 18,07 M</Hl>
        </H>
        <div className="mt-2 grid flex-1 grid-cols-[1.2fr_1fr] items-center gap-8 pb-5">
          <div>
            <div className="mb-1 text-[17px] opacity-65">USD millones</div>
            <VBars
              w={600}
              h={350}
              fmt={(v) => `${v < 0 ? '-' : ''}${Math.abs(v / 1e6).toLocaleString('es-AR', { maximumFractionDigits: 2 })}`}
              data={[
                { label: 'Aportes', value: -4189442, tone: 'red', sub: 'Años 1 a 5' },
                { label: 'Distribuciones', value: 18072576, tone: 'green', sub: 'Años 6 a 15' },
                { label: 'Neto', value: 13883134, tone: 'sun', sub: 'Año 15' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <Big value="4,31×" size={130} tone="sun" caption="MOIC del inversor" />
            <Chip tone="green" className="!text-[19px]">TIR de 26,4% en USD</Chip>
            <Chip tone="ink" className="!text-[19px]">Infraestructura con contratos recurrentes</Chip>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Sensibilidad a la TREMA',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. EMBI+ implícito = TREMA - 8,41%. Tabla completa en el anexo (A21)">
        <H size="lg" className="max-w-[1150px]">
          VAN positivo con una tasa de <Hl g>8% a 20%</Hl>
        </H>
        <div className="mt-2 grid flex-1 grid-cols-[1.7fr_1fr] items-center gap-4 pb-4">
          <div>
            <div className="mb-1 text-[17px] opacity-65">VAN del proyecto según la TREMA, USD millones</div>
            <LineChart
              w={780}
              h={350}
              area
              labels={['8%', '9%', '10%', '11%', '12%', '13%', '14%', '15%', '16%', '18%', '20%']}
              labelEvery={2}
              fmt={M}
              series={[{ name: 'VAN', values: [5186728, 4568622, 4016508, 3522789, 3080822, 2684787, 2329578, 2010709, 1724230, 1234920, 838381], tone: 'green' }]}
            />
          </div>
          <div className="flex flex-col gap-6">
            <Stat value="+USD 0,84 M" size={44} tone="green" label="de VAN aun con TREMA de 20% (EMBI+ de 1.150 pb)" />
            <div className="text-[19px] leading-snug opacity-70">La TREMA es la variable de mayor impacto. El margen de 13,4 puntos absorbe un deterioro severo del riesgo país.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Sensibilidad al CAPEX',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. TREMA de 13%, horizonte de 15 años">
        <H size="lg" className="max-w-[1150px]">
          Viable incluso si el CAPEX sube <Hl>50%</Hl>
        </H>
        <div className="mt-2 grid flex-1 grid-cols-[1.5fr_1fr] items-center gap-8 pb-5">
          <div>
            <div className="mb-1 text-[17px] opacity-65">VAN según el CAPEX neto por sistema, USD millones</div>
            <VBars
              w={700}
              h={350}
              fmt={(v) => (v / 1e6).toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              data={[
                { label: '1.500', value: 3625355, tone: 'green', sub: 'TIR 36,1%' },
                { label: '1.750', value: 3157462, tone: 'green', sub: '30,7%' },
                { label: '2.000', value: 2684787, tone: 'sun', sub: '26,4% (base)' },
                { label: '2.250', value: 2206387, tone: 'mute', sub: '23,0%' },
                { label: '2.500', value: 1722252, tone: 'mute', sub: '20,1%' },
                { label: '3.000', value: 721212, tone: 'red', sub: '15,5%' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-5">
            <Stat value="15,5%" size={84} tone="red" label="de TIR con CAPEX de USD 3.000: todavía sobre la TREMA" />
            <div className="text-[19px] leading-snug opacity-70">Con USD 3.000 netos el VAN sigue positivo: USD 721.212.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Tres escenarios',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Los escenarios combinan EMBI+, escala de instalaciones y CAPEX por sistema">
        <H size="lg" className="max-w-[1150px]">
          Tres escenarios: el peor queda <Hl>en equilibrio</Hl>
        </H>
        <div className="mt-5 grid flex-1 grid-cols-3 gap-5 pb-4">
          {[
            ['Pesimista', 'red', '(USD 30.368)', '15,2%', '8,3 años', 'EMBI+ 700 pb · 2.700 sistemas · CAPEX USD 2.500'],
            ['Base', 'sun', 'USD 2.684.787', '26,4%', '6,9 años', 'EMBI+ 450 pb · 4.000 sistemas · CAPEX USD 2.000'],
            ['Optimista', 'green', 'USD 6.065.491', '40,0%', '6,0 años', 'EMBI+ 300 pb · 4.850 sistemas · CAPEX USD 1.500'],
          ].map(([n, t, van, tir, pb, sup]) => (
            <div key={n} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm" style={{ borderTop: `8px solid ${COLOR[t as 'sun']}` }}>
              <div className="font-serif text-[28px] font-extrabold" style={{ color: COLOR[t as 'sun'] }}>
                {n}
              </div>
              <div className="mt-3 text-[15px] font-bold uppercase tracking-wider opacity-55">VAN</div>
              <div className="font-serif text-[36px] font-extrabold leading-none" style={{ color: COLOR[t as 'sun'] }}>
                {van}
              </div>
              <div className="mt-4 flex gap-8">
                <div>
                  <div className="text-[15px] font-bold uppercase tracking-wider opacity-55">TIR</div>
                  <div className="font-serif text-[34px] font-extrabold leading-none">{tir}</div>
                </div>
                <div>
                  <div className="text-[15px] font-bold uppercase tracking-wider opacity-55">Payback</div>
                  <div className="font-serif text-[34px] font-extrabold leading-none">{pb}</div>
                </div>
              </div>
              <div className="mt-auto pt-4 text-[16px] leading-snug opacity-65">{sup}</div>
            </div>
          ))}
        </div>
        <div className="pb-2 text-[18px] opacity-70">En el pesimista el VAN es levemente negativo: 0,45% de la inversión. La conclusión se apoya en el caso base, no en el optimista.</div>
      </Frame>
    ),
  },

  {
    nav: 'Matriz de riesgos',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Escala de 1 a 5; índice = probabilidad × impacto; crítico si es 12 o más. Detalle en el anexo (A22 y A23)">
        <H size="lg" className="max-w-[1150px]">
          19 riesgos evaluados, <Hl r>uno crítico</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-[1fr_1.1fr] items-center gap-10 pb-5">
          <div className="flex flex-col gap-5">
            <div className="flex h-16 overflow-hidden rounded-2xl text-[22px] font-extrabold text-white">
              <div className="flex items-center justify-center" style={{ width: `${(1 / 19) * 100}%`, background: COLOR.red, minWidth: 60 }}>1</div>
              <div className="flex items-center justify-center" style={{ width: `${(10 / 19) * 100}%`, background: COLOR.sun }}>10</div>
              <div className="flex items-center justify-center" style={{ width: `${(8 / 19) * 100}%`, background: COLOR.green }}>8</div>
            </div>
            <div className="flex gap-4 text-[17px]">
              <Chip tone="red">crítico</Chip>
              <Chip tone="sun">moderados</Chip>
              <Chip tone="green">bajos</Chip>
            </div>
            <div className="text-[19px] leading-snug opacity-70">Cinco macroeconómicos, cuatro regulatorios, cinco operativos y cinco financieros.</div>
          </div>
          <Panel className="border-destructive/40 !bg-destructive/5">
            <div className="text-[16px] font-bold uppercase tracking-wider text-destructive">El crítico · F2 · índice 15</div>
            <div className="mt-2 font-serif text-[32px] font-extrabold leading-tight">Conseguir financiamiento de largo plazo</div>
            <div className="mt-3 text-[19px] leading-snug opacity-75">USD 8 M exceden lo que una empresa nueva puede autofinanciar.</div>
            <div className="mt-4 text-[15px] font-bold uppercase tracking-wider text-accent">Mitigación</div>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Bancos locales', 'Fondos verdes', 'Multilaterales', 'La flota como colateral'].map((t) => (
                <Chip key={t} tone="green" className="!text-[17px]">{t}</Chip>
              ))}
            </div>
          </Panel>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'KPIs comerciales',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia con base en Sunrun (2024). Tabla completa en el anexo (A24)">
        <Kicker>Tablero de control · Comerciales</Kicker>
        <H size="lg" className="mt-2 max-w-[1100px]">
          ¿Funciona el motor de <Hl>conseguir clientes</Hl>?
        </H>
        <div className="mt-auto grid grid-cols-4 gap-5 pb-5">
          {[
            ['≤ USD 250', 'CAC', 'costo de adquisición por contrato firmado'],
            ['≥ 8%', 'Conversión', 'contratos sobre leads calificados'],
            ['≥ 25%', 'Referidos', 'de los contratos, desde el Año 3'],
            ['≥ 3×', 'Pipeline', 'leads en curso sobre la meta mensual'],
          ].map(([v, t, l]) => (
            <Panel key={t}>
              <div className="text-[16px] font-bold uppercase tracking-wider opacity-55">{t}</div>
              <div className="mt-2 whitespace-nowrap font-serif text-[44px] font-extrabold leading-none text-primary">{v}</div>
              <div className="mt-2 text-[18px] leading-snug opacity-75">{l}</div>
            </Panel>
          ))}
        </div>
      </Frame>
    ),
  },

  {
    nav: 'KPIs de retención y cobranza',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia con base en Sunrun (2024). Tabla completa en el anexo (A24)">
        <Kicker>Tablero de control · Retención y cobranza</Kicker>
        <H size="lg" className="mt-2 max-w-[1100px]">
          ¿Se sostiene <Hl g>la cartera</Hl> de contratos?
        </H>
        <div className="mt-auto grid grid-cols-4 gap-5 pb-5">
          {[
            ['≥ USD 3.000', 'LTV', 'valor de vida del cliente. LTV sobre CAC de 3× o más'],
            ['< 3%', 'Morosidad', 'cuotas impagas a más de 30 días'],
            ['≥ 90%', 'Continuidad', 'de contratos que siguen al llegar al año 5'],
            ['< 1%', 'Rescisión', 'anual de contratos antes de tiempo'],
          ].map(([v, t, l]) => (
            <Panel key={t}>
              <div className="text-[16px] font-bold uppercase tracking-wider opacity-55">{t}</div>
              <div className="mt-2 whitespace-nowrap font-serif text-[36px] font-extrabold leading-none text-accent">{v}</div>
              <div className="mt-2 text-[18px] leading-snug opacity-75">{l}</div>
            </Panel>
          ))}
        </div>
      </Frame>
    ),
  },

  {
    nav: 'KPIs técnicos',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia. Tabla completa en el anexo (A24)">
        <Kicker>Tablero de control · Técnicos</Kicker>
        <H size="lg" className="mt-2 max-w-[1100px]">
          ¿La flota <Hl>funciona como prometimos</Hl>?
        </H>
        <div className="mt-auto grid grid-cols-5 gap-4 pb-5">
          {[
            ['≥ 95%', 'Producción', 'real sobre la estimada con PVGIS'],
            ['≥ 0,78', 'Performance Ratio', 'detecta pérdidas anormales'],
            ['< 2%', 'Fallas', 'de los sistemas activos'],
            ['< 72 h', 'Resolución', 'desde la alerta hasta la solución'],
            ['≥ 99%', 'Disponibilidad', 'en horas de sol'],
          ].map(([v, t, l]) => (
            <Panel key={t} className="!p-5">
              <div className="text-[15px] font-bold uppercase tracking-wider opacity-55">{t}</div>
              <div className="mt-2 font-serif text-[40px] font-extrabold leading-none text-primary">{v}</div>
              <div className="mt-2 text-[17px] leading-snug opacity-75">{l}</div>
            </Panel>
          ))}
        </div>
      </Frame>
    ),
  },

  {
    nav: 'KPIs de satisfacción',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia con base en Sunrun (2024)">
        <Kicker>Tablero de control · Satisfacción</Kicker>
        <H size="lg" className="mt-2 max-w-[1100px]">
          Un cliente satisfecho <Hl g>refiere y no rescinde</Hl>
        </H>
        <div className="mt-8 grid grid-cols-2 gap-5">
          <Panel>
            <div className="text-[16px] font-bold uppercase tracking-wider opacity-55">NPS</div>
            <div className="mt-2 font-serif text-[72px] font-extrabold leading-none text-accent">≥ 50</div>
            <div className="mt-2 text-[19px] opacity-75">promotores menos detractores</div>
          </Panel>
          <Panel>
            <div className="text-[16px] font-bold uppercase tracking-wider opacity-55">CSAT</div>
            <div className="mt-2 font-serif text-[72px] font-extrabold leading-none text-accent">≥ 4,2 / 5</div>
            <div className="mt-2 text-[19px] opacity-75">satisfacción post-instalación</div>
          </Panel>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pb-5">
          <span className="text-[17px] font-bold uppercase tracking-wider opacity-60">Tablero en tres niveles:</span>
          <Chip tone="sun" className="!text-[19px]">Ejecutivo</Chip>
          <Chip tone="green" className="!text-[19px]">Operativo</Chip>
          <Chip tone="ink" className="!text-[19px]">Analítico</Chip>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Conclusiones financieras',
    block: B,
    node: (
      <Frame tone="dark" block={B} source="Informe TPP, conclusiones del capítulo 4">
        <Kicker>Conclusión financiera</Kicker>
        <H size="lg" className="mt-3 max-w-[1150px]">
          El negocio cierra, <Hl>y resiste el estrés</Hl>
        </H>
        <div className="mt-auto grid grid-cols-4 gap-6 pb-6">
          <Stat value="USD 2.000" size={46} tone="sun" label="de CAPEX neto por sistema, por importación directa" />
          <Stat value="26,4%" size={46} tone="green" label="de TIR, con VAN de +USD 2,68 M" />
          <Stat value="6,9 años" size={46} tone="sun" label="de payback y 4,31× de MOIC" />
          <Stat value="1" size={46} tone="red" label="riesgo crítico: el financiamiento de largo plazo" />
        </div>
        <div className="pb-2 text-[18px] text-white/65">Condicionado a USD constantes con paridad estable, CAPEX de USD 2.000 netos y ausencia de deuda.</div>
      </Frame>
    ),
  },
]

void Coins
void Gauge
void Timer
void Target
void usd
