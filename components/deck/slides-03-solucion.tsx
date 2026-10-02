import {
  Sun, Home, Wallet, Gauge, ShieldCheck, FileText, Smartphone, Wrench, Megaphone, Lightbulb, Handshake, BadgeCheck, Calendar,
  KeyRound, Unplug, TriangleAlert, Rocket, ChartColumn, ArrowRight, ArrowLeft, Building2, Users, Cog,
} from 'lucide-react'
import type { SlideDef } from './types'
import { Frame, H, Hl, Kicker, Big, Stat, Chip, Panel, IconCard, BlockDivider, VBars, Waterfall, FlowSteps, COLOR } from './impact'

const B = '3 · Solución'

type Cell = [string, 'ok' | 'bad' | 'mid']

function MatrixCell({ c, hero }: { c: Cell; hero?: boolean }) {
  const col = c[1] === 'ok' ? COLOR.green : c[1] === 'bad' ? COLOR.red : COLOR.ink
  return (
    <div className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[20px] font-semibold leading-tight ${hero ? 'bg-primary/10' : ''}`} style={{ color: col }}>
      <span className="inline-block h-3 w-3 shrink-0 rounded-full" style={{ background: c[1] === 'mid' ? COLOR.mute : col }} />
      {c[0]}
    </div>
  )
}

export const solucion: SlideDef[] = [
  {
    nav: 'Bloque 3',
    block: B,
    node: (
      <BlockDivider
        number="3"
        title="Solución y comercialización"
        hook="Instalamos, somos dueños del sistema y cobramos una cuota menor al ahorro."
        topics={['El modelo', 'Cuota en UVA', 'Ecuación de ahorro', 'Las 4P', 'Piloto', 'Contrato']}
      />
    ),
  },

  {
    nav: 'El modelo',
    block: B,
    node: (
      <Frame block={B} source="Código Civil y Comercial, arts. 1187 a 1226 (locación de cosas)">
        <H size="lg" className="max-w-[1100px]">
          SolarPower instala y es dueña. <Hl g>El cliente ahorra.</Hl>
        </H>
        <div className="mt-8 grid flex-1 grid-cols-[1fr_auto_1fr] items-stretch gap-6 pb-5">
          <div className="flex flex-col rounded-3xl border-2 border-primary/50 bg-primary/10 p-8">
            <div className="flex items-center gap-3 font-serif text-[30px] font-extrabold">
              <Sun className="h-9 w-9 text-primary" /> SolarPower
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-[24px] leading-snug">
              {['Instala el sistema de 5,22 kWp', 'Es dueña del equipo', 'Mantiene, monitorea y asegura', 'Tramita la conexión con la distribuidora'].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 text-[18px] font-semibold opacity-70">
            <div className="flex flex-col items-center">
              <span>energía</span>
              <ArrowRight className="h-10 w-10 text-primary" />
            </div>
            <div className="flex flex-col items-center">
              <ArrowLeft className="h-10 w-10 text-accent" />
              <span>cuota en UVA</span>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl border-2 border-accent/50 bg-accent/10 p-8">
            <div className="flex items-center gap-3 font-serif text-[30px] font-extrabold">
              <Home className="h-9 w-9 text-accent" /> El cliente
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-[24px] leading-snug">
              {['Paga USD 600 de entrada', 'Cuota fija por 5 años, renovable', 'Ahorra desde el primer mes', 'Al final: renovar, comprar o retirar'].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Comparativa de modelos',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia con base en Sunrun (2024) e IRENA (2023)">
        <H size="md" className="max-w-[1100px]">
          Por qué arrendar y no <Hl>vender, financiar o hacer un PPA</Hl>
        </H>
        <div className="mt-5 flex-1 pb-4">
          <div className="grid grid-cols-[1.25fr_1fr_1fr_1fr_1.1fr] items-end gap-x-3 px-1 pb-2 text-[16px] font-bold uppercase tracking-wider opacity-65">
            <div />
            <div>Compra directa</div>
            <div>Crédito</div>
            <div>PPA</div>
            <div className="rounded-t-lg bg-primary px-3 py-1.5 text-white opacity-100">Arrendamiento</div>
          </div>
          {(
            [
              ['Inversión inicial', [['USD 3.000 a 4.000', 'bad'], ['Cuotas con interés', 'bad'], ['Ninguna', 'ok'], ['USD 600', 'ok']]],
              ['Mantenimiento', [['Cliente', 'bad'], ['Cliente', 'bad'], ['Proveedor', 'ok'], ['SolarPower', 'ok']]],
              ['Cuota previsible', [['Pago único', 'mid'], ['Variable', 'bad'], ['Según producción', 'mid'], ['Fija en UVA', 'ok']]],
              ['Complejidad regulatoria', [['Baja', 'ok'], ['Media (BCRA)', 'mid'], ['Alta (venta de energía)', 'bad'], ['Baja (locación)', 'ok']]],
              ['Barrera de adopción', [['Muy alta', 'bad'], ['Alta', 'bad'], ['Media', 'mid'], ['Baja', 'ok']]],
              ['En Argentina 2026', [['Limitada', 'mid'], ['Creciente', 'mid'], ['No hay', 'bad'], ['Óptima', 'ok']]],
            ] as [string, Cell[]][]
          ).map(([l, cells], i) => (
            <div key={l} className={`grid grid-cols-[1.25fr_1fr_1fr_1fr_1.1fr] items-center gap-x-3 px-1 ${i % 2 === 0 ? 'bg-black/[0.035]' : ''}`}>
              <div className="py-2.5 pl-2 text-[21px] font-semibold">{l}</div>
              {cells.map((c, k) => (
                <MatrixCell key={k} c={c} hero={k === 3} />
              ))}
            </div>
          ))}
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Propuesta de valor',
    block: B,
    node: (
      <Frame block={B}>
        <Kicker>Propuesta de valor</Kicker>
        <H size="lg" className="mt-3">
          Un <Hl>servicio</Hl>, no un producto
        </H>
        <div className="mt-8 grid flex-1 grid-cols-3 gap-6 pb-6">
          <IconCard big icon={Wallet} tone="sun" title="Entrada baja" text="USD 600 en lugar de USD 3.000 a 4.000. Sin deuda bancaria ni hipoteca." />
          <IconCard big icon={Gauge} tone="green" title="Cuota menor a la factura" text="La cuota más la factura residual siempre quedan por debajo de lo que pagaba antes." />
          <IconCard big icon={ShieldCheck} tone="sun" title="Todo incluido" text="Mantenimiento, monitoreo, seguro del equipo y trámite con la distribuidora." />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'La UVA',
    block: B,
    node: (
      <Frame block={B} source="BCRA (Com. A 5945, valores UVA 2024 a 2026); INDEC, IPC feb-2026">
        <H size="lg" className="max-w-[1100px]">
          La UVA hace posible un <Hl>contrato de 5 años</Hl> en Argentina
        </H>
        <div className="mt-4 grid flex-1 grid-cols-[1.1fr_1fr] items-center gap-10 pb-6">
          <div>
            <div className="mb-1 text-[17px] opacity-65">Variación anual de la UVA</div>
            <VBars
              w={560}
              h={310}
              fmt={(v) => `${v.toLocaleString('es-AR')}%`}
              data={[
                { label: '2024', value: 180.72, tone: 'red' },
                { label: '2025', value: 31.28, tone: 'sun' },
                { label: 'Inflación feb-2026', value: 33.1, tone: 'mute' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-7">
            <div className="text-[27px] font-semibold leading-snug">Una cuota en UVA mantiene su poder de compra: el esfuerzo de pago no cambia.</div>
            <Stat value="$2.007" size={64} tone="sun" label="valor de la UVA al 30/06/2026" />
            <Stat value="> 11.000" size={64} tone="green" label="hipotecas UVA en 2024: el segmento ya entiende el instrumento" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Spread UVA vs. tarifa',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia con base en Ministerio de Economía y ENRE (escenarios de tarifa N1, 2025 a 2030)">
        <H size="lg" className="max-w-[1100px]">
          La tarifa sube más que la cuota: <Hl g>el ahorro crece</Hl>
        </H>
        <div className="mt-8 grid flex-1 grid-cols-3 gap-6 pb-4">
          {[
            ['Conservador', '+10%', '25 a 35%', 'mute'],
            ['Base', '+15%', '35 a 45%', 'sun'],
            ['Optimista', '+20%', '45 a 55%', 'green'],
          ].map(([n, g, s, t]) => (
            <Panel key={n} className="flex flex-col">
              <div className="text-[20px] font-bold uppercase tracking-wider opacity-60">{n}</div>
              <div className="mt-2 text-[22px] opacity-75">
                la tarifa real crece <b>{g}</b> por año
              </div>
              <div className="mt-auto">
                <div className="whitespace-nowrap font-serif text-[64px] font-extrabold leading-none" style={{ color: COLOR[t as 'sun'] }}>
                  {s}
                </div>
                <div className="mt-1 text-[20px] opacity-75">de ahorro del cliente contra su cuota</div>
              </div>
            </Panel>
          ))}
        </div>
        <div className="pb-3 text-[19px] opacity-70">La cuota de cada contrato queda fija en UVA. La tarifa de red sube por encima de la inflación mientras dura la normalización.</div>
      </Frame>
    ),
  },

  {
    nav: 'Ecuación de ahorro',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia con tarifa Edenor y Edesur sin subsidio, jul-2026; 1.485 ARS/USD; UVA $2.007">
        <H size="lg" className="max-w-[1100px]">
          El hogar tipo ahorra <Hl g>USD 42 por mes</Hl>
        </H>
        <div className="mt-3 grid flex-1 grid-cols-[1.35fr_1fr] items-center gap-8 pb-8">
          <Waterfall
            w={700}
            h={380}
            fmt={(v) => `USD ${v}`}
            steps={[
              { label: 'Factura\nsin solar', value: 100, kind: 'total', tone: 'red' },
              { label: 'Cuota\nSolarPower', value: -58, kind: 'delta', tone: 'sun' },
              { label: 'Ahorro neto\ndel cliente', value: 42, kind: 'total', tone: 'green' },
            ]}
          />
          <div className="flex flex-col gap-5">
            <Big value="42%" size={150} tone="green" caption="menos que su factura previa" />
            <div className="text-[18px] leading-snug opacity-65">Hogar N1 del AMBA, 400 kWh por mes, sistema de 5,22 kWp, cohorte del Año 1. Cuota de 42,94 UVA.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Producto',
    block: B,
    node: (
      <Frame block={B}>
        <Kicker>Las 4P · Producto</Kicker>
        <H size="lg" className="mt-3 max-w-[1100px]">
          Todo incluido por <Hl>5 años</Hl>
        </H>
        <div className="mt-8 grid grid-cols-4 gap-5">
          <IconCard big icon={Sun} tone="sun" title="9 paneles de 580 Wp" text="5,22 kWp con inversor DEYE o Huawei" />
          <IconCard big icon={FileText} tone="green" title="Trámite incluido" text="Conexión con Edenor o Edesur bajo la Ley 27.424" />
          <IconCard big icon={Smartphone} tone="sun" title="Monitoreo en app" text="Producción y ahorro a la vista del cliente" />
          <IconCard big icon={Wrench} tone="green" title="Mantenimiento" text="Preventivo y correctivo. SolarPower retiene la propiedad" />
        </div>
        <div className="mt-auto flex items-center gap-4 pb-4">
          <Chip tone="sun" className="!text-[21px]">USD 600 de entrada</Chip>
          <Chip tone="green" className="!text-[21px]">Menor barrera de entrada del mercado</Chip>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Precio',
    block: B,
    node: (
      <Frame block={B} source="Ejemplo ilustrativo, promedio anual en pesos. El ahorro mensual varía con la estación">
        <Kicker>Las 4P · Precio</Kicker>
        <H size="lg" className="mt-3 max-w-[1100px]">
          El cliente paga <Hl g>menos de lo que ya pagaba</Hl> por la luz
        </H>
        <div className="mt-8 flex flex-1 flex-col justify-center gap-8 pb-6">
          <div>
            <div className="mb-2 text-[20px] opacity-70">Antes</div>
            <div className="flex h-[72px] w-full items-center rounded-xl px-6 font-serif text-[34px] font-extrabold text-white" style={{ background: COLOR.red }}>
              $150.000 por mes
            </div>
          </div>
          <div>
            <div className="mb-2 text-[20px] opacity-70">Con SolarPower</div>
            <div className="flex h-[72px] items-center gap-0">
              <div className="flex h-full items-center rounded-l-xl px-6 font-serif text-[30px] font-extrabold text-white" style={{ width: '33.3%', background: COLOR.ink }}>
                $50.000 factura
              </div>
              <div className="flex h-full items-center px-6 font-serif text-[30px] font-extrabold text-white" style={{ width: '33.3%', background: COLOR.sun }}>
                $50.000 cuota
              </div>
              <div className="ml-6 font-serif text-[46px] font-extrabold leading-none" style={{ color: COLOR.green }}>
                -33%
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Chip tone="sun" className="!text-[20px]">USD 600 de entrada</Chip>
            <Chip tone="sun" className="!text-[20px]">42,94 UVA por mes (USD 58)</Chip>
            <Chip tone="ink" className="!text-[20px]">Mantenimiento y seguro sin cargo</Chip>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Plaza',
    block: B,
    node: (
      <Frame block={B}>
        <Kicker>Las 4P · Plaza</Kicker>
        <H size="lg" className="mt-3 max-w-[1100px]">
          Equipo propio y <Hl>alianzas</Hl> para llegar al cliente
        </H>
        <div className="mt-7">
          <FlowSteps
            tone="sun"
            steps={[
              { icon: Users, title: 'Equipo comercial', text: 'Evalúa el techo y presenta la propuesta' },
              { icon: Cog, title: 'Plataforma', text: 'Valida, asigna equipos y emite el contrato' },
              { icon: Wrench, title: 'Instaladores propios', text: 'Ejecutan la obra con protocolo SolarPower' },
            ]}
          />
        </div>
        <div className="mt-auto pb-4">
          <div className="mb-3 text-[17px] font-bold uppercase tracking-wider opacity-60">Canales de captación</div>
          <div className="flex flex-wrap gap-3">
            <Chip tone="green" className="!text-[20px]"><Building2 className="h-5 w-5" /> Inmobiliarias y barrios privados</Chip>
            <Chip tone="green" className="!text-[20px]">Fabricantes de aires y electrodomésticos</Chip>
            <Chip tone="green" className="!text-[20px]"><Handshake className="h-5 w-5" /> Referidos</Chip>
            <Chip tone="ink" className="!text-[20px]">Palermo, Belgrano, Nordelta, Vicente López, San Isidro, Tigre</Chip>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Promoción',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia con base en Sunrun (2024)">
        <Kicker>Las 4P · Promoción</Kicker>
        <H size="lg" className="mt-3">
          Tres pilares de <Hl>comunicación</Hl>
        </H>
        <div className="mt-6 grid grid-cols-3 gap-5">
          <IconCard icon={Megaphone} tone="sun" title="Marketing digital" text="Meta Ads e Instagram a propietarios de los barrios objetivo" />
          <IconCard icon={Lightbulb} tone="green" title="Contenido educativo" text="Blog y YouTube: cómo funciona el solar, la Ley 27.424 y la UVA" />
          <IconCard icon={Handshake} tone="sun" title="Referidos" text="Un mes de cuota sin cargo por cada vecino que se suma" />
        </div>
        <div className="mt-auto grid grid-cols-4 gap-5 pb-4">
          <Stat value="≤ USD 250" size={40} tone="sun" label="costo de adquisición por contrato" />
          <Stat value="≥ 8%" size={40} tone="sun" label="conversión de leads calificados" />
          <Stat value="≥ 25%" size={40} tone="green" label="contratos por referidos desde el Año 3" />
          <Stat value="≥ 90%" size={40} tone="green" label="continuidad contractual desde el Año 6" />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Piloto operativo',
    block: B,
    node: (
      <Frame tone="dark" block={B} source="SolarPower Energy S.A.S., fase piloto. Caso real de un contrato vigente en el anexo (A29)">
        <Kicker>Validación en la práctica</Kicker>
        <div className="mt-2 grid flex-1 grid-cols-[1fr_1.1fr] items-center gap-10 pb-6">
          <Big value="20+" size={250} tone="sun" caption="sistemas instalados antes de este trabajo, con distintas configuraciones" />
          <div className="flex flex-col gap-4">
            {[
              [BadgeCheck, 'Elegimos el inversor de string', 'Los microinversores salen 2,5 a 3 veces más caros por Wp'],
              [Wallet, 'La baja barrera de entrada funciona', 'Cuota en UVA competitiva y clientes satisfechos'],
              [ShieldCheck, 'Base de la garantía y del mantenimiento', 'Los datos del piloto definen el plan de operación'],
            ].map(([I, t, d]) => {
              const Ic = I as typeof BadgeCheck
              return (
                <div key={t as string} className="flex items-center gap-5 rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-5">
                  <Ic className="h-9 w-9 shrink-0 text-[oklch(0.8_0.16_78)]" strokeWidth={1.8} />
                  <div>
                    <div className="font-serif text-[25px] font-bold leading-tight">{t as string}</div>
                    <div className="text-[19px] text-white/70">{d as string}</div>
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
    nav: 'El contrato (1 de 2)',
    block: B,
    node: (
      <Frame block={B} source="Contrato de alquiler de sistemas fotovoltaicos de SolarPower Energy S.A.S., cláusulas 1 a 7 (datos del cliente omitidos)">
        <Kicker>El contrato · 1 de 2</Kicker>
        <H size="md" className="mt-3 max-w-[1100px]">
          Qué tiene el contrato: <Hl>simple y previsible</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-3 grid-rows-2 gap-4 pb-4">
          <IconCard icon={Calendar} tone="sun" title="5 años, renovación automática" text="Aviso para no renovar: 90 días" />
          <IconCard icon={FileText} tone="green" title="Carta de oferta" text="Se perfecciona con la aceptación y el pago inicial" />
          <IconCard icon={Gauge} tone="sun" title="Cuota fija en UVA" text="Se paga a 30 días de la factura" />
          <IconCard icon={KeyRound} tone="green" title="Opción de compra" text="En cualquier momento, con precio decreciente" />
          <IconCard icon={Wrench} tone="sun" title="Mantenimiento y seguro" text="A cargo de SolarPower, incluido granizo" />
          <IconCard icon={ShieldCheck} tone="green" title="Garantía de producción" text="Si se desvía más de 20%, se acredita la diferencia" />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'El contrato (2 de 2)',
    block: B,
    node: (
      <Frame block={B} source="Contrato de alquiler de sistemas fotovoltaicos de SolarPower Energy S.A.S., cláusulas 8 a 14 y Anexo II">
        <Kicker>El contrato · 2 de 2</Kicker>
        <H size="md" className="mt-3 max-w-[1100px]">
          Qué pasa si <Hl>algo cambia</Hl>: salida, mora y mudanza
        </H>
        <div className="mt-6 grid flex-1 grid-cols-6 grid-rows-2 gap-4 pb-4">
          <IconCard className="col-span-2" icon={Unplug} tone="sun" title="Salida" text="Se paga la desinstalación. No se devuelve el pago inicial" />
          <IconCard className="col-span-2" icon={TriangleAlert} tone="red" title="Mora" text="Interés a tasa activa del Banco Nación sobre la deuda en UVA" />
          <IconCard className="col-span-2" icon={Home} tone="green" title="Si se vende la casa" text="El contrato pasa al nuevo dueño o a los herederos" />
          <IconCard className="col-span-3" icon={Rocket} tone="sun" title="Mejoras sin costo" text="SolarPower puede actualizar el sistema, con 30 días de aviso" />
          <IconCard className="col-span-3" icon={ChartColumn} tone="green" title="Reporte mensual" text="Energía producida, ahorro y CO₂ evitado" />
        </div>
      </Frame>
    ),
  },
]
