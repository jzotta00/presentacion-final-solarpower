import { Sun, Cpu, Network, Wrench, BadgeCheck, PlugZap, BatteryCharging, Unplug, Boxes, HardHat, Ruler, ShieldCheck, Landmark } from 'lucide-react'
import { OnGridDiagram } from './diagrams'
import type { SlideDef } from './types'
import { Frame, H, Hl, Kicker, Big, Stat, Chip, Panel, IconCard, BlockDivider, VBars, HBars, FlowSteps, SystemDiagram, AnexoTag, COLOR } from './impact'

const B = '4 · Técnico'

const ars = (v: number) => `$${v.toLocaleString('es-AR')}`

export const tecnico: SlideDef[] = [
  {
    nav: 'Bloque 4',
    block: B,
    node: (
      <BlockDivider
        number="4"
        title="Estudio técnico"
        hook="Un sistema estándar, probado y repetible, de la instalación a la habilitación."
        topics={['Sistema de 5,22 kWp', 'TOPCon e inversor', 'Balance neto', 'Materia prima', 'Habilitación', 'Operación']}
      />
    ),
  },

  {
    nav: 'Sistema estándar',
    block: B,
    node: (
      <Frame tone="dark" block={B} source="Fichas técnicas LONGi Hi-MO 7, DEYE SUN-5K-SG04LP3 y Huawei SUN2000-5KTL-M1 (2024)">
        <Kicker>El activo</Kicker>
        <H size="lg" className="mt-2">
          Un sistema estándar de <Hl>5,22 kWp</Hl>
        </H>
        <div className="mt-6 flex flex-1 items-center justify-center">
          <SystemDiagram />
        </div>
        <div className="flex flex-wrap gap-3 pb-3">
          <Chip dark tone="sun">9 módulos TOPCon de 580 Wp</Chip>
          <Chip dark tone="green">Módulos: 30 años de garantía lineal</Chip>
          <Chip dark tone="sun">Inversor: 10 años, extensible a 15</Chip>
          <Chip dark tone="green">Cumple ENRE 314/2018 y AEA 90364-7-712</Chip>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Tecnología de celdas',
    block: B,
    node: (
      <Frame block={B} source="Fraunhofer ISE, BloombergNEF, fichas LONGi (2024)">
        <H size="lg" className="max-w-[1100px]">
          Por qué <Hl>TOPCon</Hl>: rinde mejor con calor y casi no se degrada al inicio
        </H>
        <div className="mt-6 flex-1 pb-3">
          <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] items-end gap-x-3 px-1 pb-2 text-[16px] font-bold uppercase tracking-wider opacity-65">
            <div />
            <div>PERC</div>
            <div className="rounded-t-lg bg-primary px-3 py-1.5 text-white opacity-100">TOPCon</div>
            <div>HJT</div>
          </div>
          {[
            ['Pérdida inicial (LID)', '1,5 a 2,5%', '0,5 a 1,0%', '< 0,5%'],
            ['Pérdida por temperatura', '-0,36 a -0,38 %/°C', '-0,30 a -0,31 %/°C', '-0,24 a -0,26 %/°C'],
            ['Costo relativo', 'Referencia', '+5 a 10%', '+15 a 20%'],
            ['Cuota de mercado 2024', '~20%', '~65%', '~8%'],
          ].map(([l, a, b, c], i) => (
            <div key={l} className={`grid grid-cols-[1.3fr_1fr_1fr_1fr] items-center gap-x-3 px-1 ${i % 2 === 0 ? 'bg-black/[0.035]' : ''}`}>
              <div className="py-3.5 pl-2 text-[21px] font-semibold">{l}</div>
              <div className="text-[21px] opacity-75">{a}</div>
              <div className="rounded-lg bg-primary/10 py-3 pl-3 text-[22px] font-extrabold text-primary">{b}</div>
              <div className="text-[21px] opacity-75">{c}</div>
            </div>
          ))}
          <Panel className="mt-5 flex items-center gap-5 !py-4">
            <Big value="-9%" size={64} tone="red" />
            <div className="text-[21px] leading-snug">
              Con la célula a 55 °C, un módulo TOPCon de 580 Wp rinde 528 W. Con garantía de producción desde el año 1, la pérdida inicial menor a 1% es clave.
            </div>
          </Panel>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Degradación a 30 años',
    block: B,
    node: (
      <Frame block={B} source="LONGi Solar, JA Solar, NREL (2024). Figura 3.2 del informe">
        <H size="lg" className="max-w-[1100px]">
          Al año 20, el sistema conserva <Hl g>más del 90%</Hl> de su potencia
        </H>
        <div className="mt-4 grid flex-1 grid-cols-[1.45fr_1fr] items-center gap-8 pb-6">
          <div className="rounded-2xl bg-white p-3 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figuras/fig-3-2-degradacion-tec.png" alt="Curvas de degradación a 30 años de PERC y TOPCon" className="h-[380px] w-full object-contain" />
          </div>
          <div className="flex flex-col gap-7">
            <Stat value="92,3%" size={84} tone="green" label="al año 20 con la garantía del fabricante" />
            <Stat value="90,4%" size={84} tone="sun" label="al año 20 en nuestro escenario estándar" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Inversor de string',
    block: B,
    node: (
      <Frame block={B} source="Fichas técnicas DEYE y Huawei (2024); certificación IEC 62109">
        <H size="lg" className="max-w-[1100px]">
          Inversor de string: la mejor relación <Hl>costo-rendimiento</Hl>
        </H>
        <div className="mt-4 grid flex-1 grid-cols-[1fr_1.1fr] items-center gap-10 pb-6">
          <Big value="2,5 a 3×" size={130} tone="green" caption="más barato por Wp que un microinversor: USD 0,08 a 0,10 contra 0,25 a 0,35 por W" />
          <div className="flex flex-col gap-4">
            <IconCard row icon={Network} tone="sun" title="Doble MPPT" text="Dos strings (5 + 4): una sombra en uno no afecta al otro" />
            <IconCard row icon={Wrench} tone="green" title="Un solo equipo en pared" text="Diagnóstico remoto y reemplazo en 3 a 7 días hábiles" />
            <IconCard row icon={BadgeCheck} tone="sun" title="DEYE principal, Huawei premium" text="Validados en el piloto" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'On-grid, off-grid o híbrido',
    block: B,
    node: (
      <Frame block={B} source="Folleto de SolarPower (On Grid, Off Grid e Híbridos); riesgo M3 del informe">
        <H size="lg" className="max-w-[1100px]">
          Tres configuraciones posibles. Elegimos <Hl g>on-grid</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-3 gap-5 pb-4">
          <div className="flex flex-col rounded-3xl border-[3px] border-accent bg-accent/10 p-7">
            <div className="flex items-center justify-between">
              <PlugZap className="h-12 w-12 text-accent" strokeWidth={1.8} />
              <Chip tone="green">Elegida</Chip>
            </div>
            <div className="mt-4 font-serif text-[36px] font-extrabold">On-grid</div>
            <div className="mt-2 text-[22px] leading-snug opacity-85">Sin baterías. El hogar autoconsume y lo que sobra va a la red.</div>
            <div className="mt-auto pt-4 text-[20px] font-semibold text-accent">Mayor ahorro con menor entrada</div>
          </div>
          <div className="flex flex-col rounded-3xl border border-black/10 bg-white/70 p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <BatteryCharging className="h-12 w-12 text-ink/50" strokeWidth={1.8} />
              <Chip tone="mute">No incluida</Chip>
            </div>
            <div className="mt-4 font-serif text-[36px] font-extrabold">Híbrido</div>
            <div className="mt-2 text-[22px] leading-snug opacity-85">Batería de litio. Resuelve los cortes de luz.</div>
            <div className="mt-auto pt-4 text-[20px] opacity-65">Más caro: sube el CAPEX por sistema</div>
          </div>
          <div className="flex flex-col rounded-3xl border border-black/10 bg-white/70 p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <Unplug className="h-12 w-12 text-ink/50" strokeWidth={1.8} />
              <Chip tone="mute">No incluida</Chip>
            </div>
            <div className="mt-4 font-serif text-[36px] font-extrabold">Off-grid</div>
            <div className="mt-2 text-[22px] leading-snug opacity-85">Sin conexión a la red. Independencia total.</div>
            <div className="mt-auto pt-4 text-[20px] opacity-65">Pensado para zonas sin red</div>
          </div>
        </div>
        <div className="pb-3 text-[19px] opacity-65">La elección prioriza entrada baja y ahorro mensual. Las baterías quedan como diversificación futura.</div>
      </Frame>
    ),
  },

  {
    nav: 'Arquitectura on-grid',
    block: B,
    node: (
      <Frame block={B} source="Elaboración propia: 9 módulos de 580 Wp, inversor de 5 kW, protecciones AEA 90364-7-712 y ENRE 314/2018">
        <H size="md" className="max-w-[1100px]">
          Así fluye la energía: <Hl>del techo, al hogar y a la red</Hl>
        </H>
        <div className="mt-2 flex flex-1 items-center justify-center">
          <div style={{ width: 930 }}>
            <OnGridDiagram />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Balance neto (net metering)',
    block: B,
    node: (
      <Frame block={B} source="ENRE y CAMMESA (2024). Mes típico de octubre en el AMBA; la tarifa varía cada mes">
        <H size="lg" className="max-w-[1100px]">
          Lo que sobra se <Hl g>inyecta y se acredita</Hl>
        </H>
        <div className="mt-4 grid flex-1 grid-cols-[1.1fr_1fr] items-center gap-8 pb-4">
          <div>
            <div className="mb-1 text-[17px] opacity-65">Factura de energía de un mes típico, ARS</div>
            <VBars
              w={520}
              h={330}
              fmt={ars}
              data={[
                { label: 'Sin solar', value: 40280, tone: 'red' },
                { label: 'Con solar', value: 4540, tone: 'green' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-5">
            <Big value="-88,7%" size={120} tone="green" caption="en la factura de energía de ese mes" />
            <Chip tone="sun" className="!text-[19px]">Autoconsumir vale más que inyectar</Chip>
            <Chip tone="green" className="!text-[19px]">Los créditos no vencen durante el contrato</Chip>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Estacionalidad de la generación',
    block: B,
    node: (
      <Frame block={B} source="Curva estacional de un contrato real del piloto, reescalada a los 8.289 kWh/año del sistema estándar">
        <H size="lg" className="max-w-[1100px]">
          En diciembre genera <Hl>3,3 veces</Hl> lo que genera en junio
        </H>
        <div className="mt-2 grid flex-1 grid-cols-[1.7fr_1fr] items-center gap-6 pb-4">
          <div>
            <div className="mb-1 text-[17px] opacity-65">Generación mensual, kWh (suman 8.288 por año)</div>
            <VBars
              w={760}
              h={340}
              maxBar={44}
              labelSize={16}
              valueSize={16}
              fmt={(v) => v.toLocaleString('es-AR')}
              data={[
                ['Ene', 1045, 'sun'], ['Feb', 840, 'sun'], ['Mar', 753, 'sun'], ['Abr', 546, 'mute'], ['May', 402, 'mute'], ['Jun', 313, 'red'],
                ['Jul', 360, 'red'], ['Ago', 486, 'mute'], ['Sep', 662, 'mute'], ['Oct', 850, 'sun'], ['Nov', 986, 'sun'], ['Dic', 1045, 'sun'],
              ].map(([label, value, tone]) => ({ label: label as string, value: value as number, tone: tone as 'sun' }))}
            />
          </div>
          <div className="flex flex-col gap-7">
            <Stat value="1.045 kWh" size={46} tone="sun" label="en diciembre y enero" />
            <Stat value="313 kWh" size={46} tone="red" label="en junio" />
            <div className="text-[18px] leading-snug opacity-65">El verano compensa al invierno con créditos de balance neto.</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Materia prima y abastecimiento',
    block: B,
    node: (
      <Frame block={B} source="Cotizaciones FOB e internación 2026; Informe TPP, secciones 2.5.7 a 2.5.10 y 4.1.1. Proveedores en el anexo (A26)">
        <Kicker>La materia prima</Kicker>
        <H size="md" className="mt-2 max-w-[1150px]">
          De dónde salen los <Hl>paneles y los inversores</Hl>
        </H>
        <div className="mt-4 grid grid-cols-4 gap-4">
          <IconCard icon={Sun} tone="sun" title="Paneles" text={<><b className="text-[26px]">USD 1.300</b><br />Importación directa de fabricantes Tier 1: LONGi, JA Solar, Trina, Canadian</>} />
          <IconCard icon={Cpu} tone="green" title="Inversor" text={<><b className="text-[26px]">USD 400</b><br />DEYE como principal y Huawei como premium. Garantía de 10 a 15 años</>} />
          <IconCard icon={Boxes} tone="sun" title="Estructura y BOS" text={<><b className="text-[26px]">USD 500</b><br />Rieles, cableado, protecciones y medidor. Contratos marco</>} />
          <IconCard icon={HardHat} tone="green" title="Instalación" text={<><b className="text-[26px]">USD 350</b><br />Técnicos propios al inicio y red certificada al escalar</>} />
        </div>
        <div className="mt-auto grid grid-cols-[1.3fr_1fr] items-center gap-6 pb-3">
          <Panel className="flex items-center gap-6 !py-3">
            <div>
              <div className="whitespace-nowrap font-serif text-[40px] font-extrabold leading-none text-accent">USD 3.000</div>
              <div className="mt-1 text-[17px] opacity-70">llave en mano con importación directa</div>
            </div>
            <div className="text-[28px] opacity-40">vs</div>
            <div>
              <div className="whitespace-nowrap font-serif text-[40px] font-extrabold leading-none text-destructive">USD 3.500</div>
              <div className="mt-1 text-[17px] opacity-70">comprando a distribuidores</div>
            </div>
          </Panel>
          <div className="flex flex-col gap-2">
            <Chip tone="ink" className="!text-[17px]">Aranceles de módulos: 14% a 28%</Chip>
            <Chip tone="ink" className="!text-[17px]">Stock de 15 a 20 sistemas: la importación tarda 60 a 90 días</Chip>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Dimensionamiento con PVGIS',
    block: B,
    node: (
      <Frame block={B} source="PVGIS (Comisión Europea, 2024); INDEC EPH 2022 y Edenor para el consumo; cálculo propio">
        <H size="lg" className="max-w-[1100px]">
          Cuánta energía produce: <Hl>E = P × GII × PR</Hl>
        </H>
        <div className="mt-8 flex items-center gap-4">
          {[
            ['5,22', 'kWp instalados'],
            ['×', ''],
            ['1.985', 'kWh/m²/año (PVGIS)'],
            ['×', ''],
            ['0,80', 'performance ratio'],
            ['=', ''],
            ['8.289', 'kWh por año'],
          ].map(([v, l], i) =>
            l ? (
              <div key={i} className={`flex-1 rounded-2xl p-5 text-center ${i === 6 ? 'bg-primary text-white' : 'border border-black/10 bg-white/70 shadow-sm'}`}>
                <div className="font-serif text-[52px] font-extrabold leading-none">{v}</div>
                <div className="mt-2 text-[16px] opacity-75">{l}</div>
              </div>
            ) : (
              <div key={i} className="font-serif text-[44px] font-bold opacity-50">
                {v}
              </div>
            ),
          )}
        </div>
        <div className="mt-auto grid grid-cols-[1.3fr_1fr] items-center gap-8 pb-4">
          <HBars
            labelW={210}
            rowH={44}
            gap={14}
            fontSize={21}
            max={8289}
            fmt={(v) => `${v.toLocaleString('es-AR')} kWh`}
            data={[
              { label: 'Producción del sistema', value: 8289, tone: 'sun' },
              { label: 'Consumo del hogar N1', value: 4440, tone: 'mute' },
            ]}
          />
          <Panel className="!p-5">
            <div className="text-[21px] leading-snug">
              Cubre <b>185%</b> del consumo en energía, <b>no en dinero</b>. El ahorro económico real es <span className="hl-g font-bold">42%</span>.
            </div>
          </Panel>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Evaluación del sitio e instalación',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, 3.4.1 y 3.4.3; CIRSOC 102, IRAM 2281, AEA 90364-7-712">
        <H size="lg" className="max-w-[1100px]">
          Se instala en <Hl>un día</Hl> con dos técnicos
        </H>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="text-[17px] font-bold uppercase tracking-wider opacity-60">Antes, visita técnica:</span>
          <Chip tone="ink"><Ruler className="h-5 w-5" /> techo y sombras</Chip>
          <Chip tone="ink">estructura: 301,5 kg de carga</Chip>
          <Chip tone="ink">tablero</Chip>
          <Chip tone="ink">consumo</Chip>
        </div>
        <div className="flex flex-1 items-center pb-4">
          <FlowSteps
            tone="sun"
            steps={[
              { icon: Ruler, title: 'Replanteo y estructura', text: 'Rieles de aluminio y puesta a tierra' },
              { icon: Sun, title: 'Montaje de módulos', text: 'Fijación reversible, conexión por string' },
              { icon: Cpu, title: 'Inversor y conexión', text: 'Inversor en pared y disyuntor de 25 A' },
              { icon: BadgeCheck, title: 'Puesta en marcha', text: 'Verificación en la app y dossier para habilitar' },
            ]}
          />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Habilitación ante la distribuidora',
    block: B,
    node: (
      <Frame block={B} source="Edenor y Edesur (2025); Decreto 986/2018; ENRE 314/2018; Res. SE 235/2024 y 287/2025. Detalle en el anexo (A12 y A12b)">
        <H size="md" className="max-w-[1150px]">
          Cómo se habilita para <Hl g>vender el excedente a la red</Hl>
        </H>
        <div className="mt-4 flex gap-3">
          <Chip tone="green" className="!text-[16px]">Cliente</Chip>
          <Chip tone="sun" className="!text-[16px]">SolarPower</Chip>
          <Chip tone="ink" className="!text-[16px]">Distribuidora</Chip>
        </div>
        <div className="mt-3 grid flex-1 grid-cols-5 grid-rows-2 gap-3 pb-4">
          {(
            [
              ['0', 'Apoderamiento en TAD', 'minutos', 'green'],
              ['1', 'Formulario 1A: solicitud', '10 días hábiles', 'sun'],
              ['2', 'Formulario 1B: proyecto técnico', '5 a 10 días', 'sun'],
              ['3', 'Inspección presencial', '15 días', 'ink'],
              ['4', 'Formulario 2A: aprobación', '5 días', 'ink'],
              ['5', 'Formulario 2B: pedido de medidor', 'inmediato', 'sun'],
              ['6', 'Medidor bidireccional', '10 días', 'ink'],
              ['7', 'Tarifa UGD en la factura', '5 días', 'ink'],
              ['8', 'Registro en el RUGER', '15 días', 'sun'],
            ] as [string, string, string, 'green' | 'sun' | 'ink'][]
          ).map(([n, t, d, tone]) => (
            <div key={n} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full font-serif text-[20px] font-extrabold text-white" style={{ background: COLOR[tone] }}>
                {n}
              </span>
              <div className="mt-2.5 font-serif text-[19px] font-bold leading-tight">{t}</div>
              <div className="mt-auto pt-1.5 text-[16px] font-semibold opacity-65">{d}</div>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-2xl bg-ink p-4 text-white">
            <div className="font-serif text-[46px] font-extrabold leading-none text-[oklch(0.8_0.16_78)]">45 a 70</div>
            <div className="mt-1.5 text-[17px] leading-snug text-white/80">días hábiles en total. Antes: 90 a 120</div>
          </div>
        </div>
        <div className="pb-2 text-[17px] opacity-65">Mientras llega el medidor, el inversor opera en zero-export y el cliente ya autoconsume de día.</div>
      </Frame>
    ),
  },

  {
    nav: 'Monitoreo y mantenimiento',
    block: B,
    node: (
      <Frame block={B} source="DEYE Cloud y Huawei FusionSolar (2024 a 2025); Informe TPP, 3.4.5 y 3.4.6">
        <H size="lg" className="max-w-[1100px]">
          El sistema se cuida <Hl>casi todo a distancia</Hl>
        </H>
        <div className="mt-4 grid flex-1 grid-cols-[1fr_1.1fr] items-center gap-10 pb-6">
          <Big value="70%" size={200} tone="green" caption="del mantenimiento es remoto" />
          <div className="grid grid-cols-2 gap-5">
            <Stat card value="24/7" size={52} tone="sun" label="monitoreo de producción y alertas" />
            <Stat card value="> 60%" size={52} tone="sun" label="de las alertas se resuelven sin visita" />
            <Stat card value="1 a 2" size={52} tone="green" label="limpiezas de módulos por año" />
            <Stat card value="7 a 10" size={52} tone="green" label="días hábiles para reemplazar un inversor" />
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Modelo operativo end-to-end',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, Tabla 3.12">
        <H size="md" className="max-w-[1100px]">
          Del lead al fin de contrato en <Hl>diez etapas</Hl>
        </H>
        <div className="mt-6 flex flex-1 items-center pb-4">
          <FlowSteps
            cols={5}
            tone="sun"
            steps={[
              { title: 'Generación de leads', meta: 'continuo' },
              { title: 'Calificación', meta: '1 a 3 días' },
              { title: 'Propuesta comercial', meta: '1 a 2 días' },
              { title: 'Evaluación técnica', meta: '1 día' },
              { title: 'Diseño del sistema', meta: '2 a 3 días' },
              { title: 'Instalación', meta: '1 día', tone: 'green' },
              { title: 'Habilitación', meta: '45 a 70 días', tone: 'red' },
              { title: 'Puesta en marcha', meta: '1 día', tone: 'green' },
              { title: 'Operación y facturación', meta: 'toda la vigencia' },
              { title: 'Fin de contrato', meta: '30 a 60 días' },
            ]}
          />
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Puntos críticos',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, Tabla 3.13. Riesgos operativos por etapa en el anexo (A13)">
        <H size="lg" className="max-w-[1100px]">
          Tres puntos críticos, <Hl g>tres mitigaciones</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-3 gap-5 pb-4">
          {[
            [Landmark, 'Habilitación', '45 a 70 días', 'Trámites en paralelo, seguimiento semanal y zero-export mientras tanto'],
            [HardHat, 'Capacidad de instalación', '1 por equipo y día', 'Formación continua, escuelas técnicas e INTI y red de subcontratistas certificados'],
            [ShieldCheck, 'Cobranza', '1,8% de default en Sunrun', 'Débito automático y gestión temprana de la mora'],
          ].map(([I, t, n, m]) => {
            const Ic = I as typeof Landmark
            return (
              <div key={t as string} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm">
                <Ic className="h-10 w-10 text-destructive" strokeWidth={1.8} />
                <div className="mt-3 font-serif text-[27px] font-bold leading-tight">{t as string}</div>
                <div className="mt-2 font-serif text-[34px] font-extrabold leading-tight text-destructive">{n as string}</div>
                <div className="mt-auto rounded-xl bg-accent/10 p-4">
                  <div className="text-[15px] font-bold uppercase tracking-wider text-accent">Mitigación</div>
                  <div className="mt-1 text-[19px] leading-snug">{m as string}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Frame>
    ),
  },
]

void AnexoTag
