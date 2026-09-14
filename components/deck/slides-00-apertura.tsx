import { Sun } from 'lucide-react'
import { Slide, Title, Lead, Bullets, Stat, Body, Table } from './primitives'
import type { SlideDef } from './types'
import { Hi } from './types'

const B = 'Apertura'

export const apertura: SlideDef[] = [
  {
    nav: 'Portada',
    block: B,
    node: (
      <div className="relative flex h-full w-full flex-col justify-end overflow-hidden">
        <img
          src="/solar-rooftop.png"
          alt="Paneles solares instalados sobre el techo de una vivienda residencial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
        <div className="relative z-10 px-8 pb-12 sm:px-14 md:px-20">
          <div className="text-sm text-muted-foreground">
            Universidad de Buenos Aires · Facultad de Ingeniería · Trabajo Profesional de Ingeniería Industrial (TA019 / 92.99)
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary">
            <Sun className="h-5 w-5" />
            <span className="font-serif text-sm font-semibold">SolarPower Energy</span>
          </div>
          <h1 className="mt-3 max-w-5xl text-balance font-serif text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            Implementación de un Servicio de Arrendamiento Solar para Promover una Huella Ambiental Positiva y Mejorar la
            Matriz Energética en Argentina
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base text-muted-foreground md:text-lg">
            Evaluación de factibilidad técnica, comercial y económico-financiera de un modelo de arrendamiento solar residencial en
            el AMBA, con cuota indexada en UVA.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-1 text-sm">
            <span>Cardoso, Bautista (103057)</span>
            <span>Sarti, Ricardo (102433)</span>
            <span>Zotta, Jerónimo (103865)</span>
          </div>
          <div className="mt-1 text-sm text-muted-foreground">Tutor: Hernán · Buenos Aires, 2026</div>
        </div>
      </div>
    ),
  },

  {
    nav: 'Agenda',
    block: B,
    node: (
      <Slide block={B}>
        <Title>Estructura de la presentación</Title>
        <Lead>Seguimos el orden del informe: del contexto al mercado, de la solución técnica a la evaluación financiera.</Lead>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            ['1', 'Contexto y problema', 'Matriz eléctrica, subsidios, normalización tarifaria, estado de la generación distribuida, barrera de capital, marco regulatorio.'],
            ['2', 'Estudio de mercado', 'PESTELCO, recurso solar, dimensionamiento con Censo 2022, segmentación SP1/SP2/SP3, Porter, FODA, Factores Críticos de Éxito, caso Sunrun.'],
            ['3', 'Solución y comercialización', 'El modelo de arrendamiento, comparativa de alternativas, cuota UVA, ecuación de ahorro, producto, precio, plaza, promoción, piloto, contrato.'],
            ['4', 'Estudio técnico', 'Sistema estándar 5,22 kWp, tecnología TOPCon, inversor de string, arquitectura on-grid, balance neto, dimensionamiento, habilitación, operación.'],
            ['5', 'Plan de implementación', 'Cuatro fases sobre el mapa, recursos, indicadores de validación del piloto, capacidad operativa.'],
            ['6', 'Evaluación económico-financiera', 'CAPEX, cuota por cohorte, OPEX, P&L a 15 años, TREMA por CAPM, VAN, TIR, payback, sensibilidad, escenarios, riesgos, KPIs.'],
            ['7', 'Impacto y conclusiones', 'Impacto ambiental, limitaciones, viabilidad integral, bibliografía.'],
            ['A', 'Anexo', 'Tablas completas del informe y material complementario para preguntas del tribunal.'],
          ].map(([n, t, d]) => (
            <div key={n} className="flex gap-4 rounded-lg border border-border bg-card/50 p-3">
              <span className="font-serif text-2xl font-bold text-primary">{n}</span>
              <div>
                <div className="font-serif font-semibold">{t}</div>
                <p className="text-xs leading-snug text-muted-foreground md:text-sm">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Objetivo y criterios de viabilidad',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 1.3" source="Informe TPP, sección 1.3, Objetivo del Trabajo Profesional.">
        <Title>Objetivo general y criterios de viabilidad</Title>
        <Lead>
          Evaluar la factibilidad integral de implementar un servicio de arrendamiento solar residencial en Argentina a través de
          SolarPower Energy, bajo un esquema de inversión de <Hi>USD 8.000.000</Hi> desplegados progresivamente en los primeros cinco
          años de operación.
        </Lead>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Stat tone="primary" value="15% a 30%" label="TIR anual en USD exigida al proyecto (criterio de viabilidad financiera)" />
          <Stat tone="accent" value="≥ 20%" label="Ahorro neto mínimo del cliente: cuota + nueva factura vs. factura previa" />
          <Stat value="15 años" label="Horizonte de evaluación (2027 a 2042), tres ciclos contractuales de 5 años" />
        </div>
        <div className="mt-6">
          <div className="mb-2 text-sm font-semibold">Objetivos específicos</div>
          <Bullets
            dense
            items={[
              'Estudio de mercado: cuantificar viviendas técnicamente aptas, segmentar por geografía y categoría tarifaria, analizar entorno competitivo y regulatorio.',
              'Estudio técnico: seleccionar y justificar componentes, definir instalación, habilitación ante la distribuidora, monitoreo y mantenimiento.',
              'Modelo económico-financiero a 15 años: TREMA por CAPM ajustado por riesgo país, VAN, TIR, payback y sensibilidad.',
              'Estrategia de comercialización, estructura operativa y plan de escalamiento 2027 a 2042.',
              'Cuantificar el impacto ambiental en toneladas de CO₂ equivalente evitadas.',
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Metodología',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 1 a 4" source="Informe TPP; metodología de evaluación de proyectos adoptada en FIUBA (Sapag Chain & Sapag Chain, 2014; Brealey, Myers & Allen, 2023).">
        <Title>Metodología y fuentes de datos</Title>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ['Estudio de mercado', ['Censo Nacional 2022 (INDEC)', 'Reporte Anual GD 2024 (Sec. de Energía)', 'Cuadros tarifarios ENRE 05/2026', 'Sunrun Form 10-K 2023', 'PESTELCO, Porter, FODA, FCE']],
            ['Estudio técnico', ['Datasheets LONGi, DEYE, Huawei (2024)', 'PVGIS (Comisión Europea) y Global Solar Atlas', 'Ley 27.424, Dec. 986/2018, ENRE 314/2018, SE 235/2024, SE 287/2025', 'Normas IRAM y AEA 90364-7-712']],
            ['Evaluación financiera', ['Modelo por cohortes a 15 años en USD constantes', 'CAPM ajustado por riesgo país (Damodaran, ene-2026; EMBI+ JP Morgan, jul-2026)', 'VAN, TIR, payback, MOIC', 'Sensibilidad a TREMA y CAPEX; tres escenarios']],
            ['Validación empírica', ['Piloto de más de 20 sistemas instalados con distintas configuraciones (microinversores, string DEYE y Huawei)', 'Cotizaciones FOB e internación 2026']],
          ].map(([t, items]) => (
            <div key={t as string} className="rounded-lg border border-border bg-card/50 p-4">
              <div className="font-serif font-semibold">{t as string}</div>
              <ul className="mt-2 flex flex-col gap-1 text-xs leading-snug text-muted-foreground">
                {(items as string[]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Body className="mt-6">
          Todas las cifras de la presentación están tomadas del informe y referencian la sección que las respalda. Los valores
          monetarios se expresan en USD constantes de 2026 a un tipo de cambio de referencia de 1.485 ARS/USD (30/06/2026) y UVA de
          2.007 ARS (30/06/2026), salvo indicación explícita.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Cómo leer las cifras clave',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 1.3, 4.1.2, 4.5.5" source="Informe TPP: criterio de viabilidad (1.3), umbral comercial (2.4.7 y 2.7.6), caso base (Tabla 4.2), inversión y llamadas de capital (Tablas 4.1 y 4.15).">
        <Title>Cómo leer las cifras que se repiten en la presentación</Title>
        <Lead>Cinco números aparecen muchas veces y podrían parecer contradictorios. No lo son: miden cosas distintas.</Lead>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-semibold">Ahorro neto del cliente</div>
            <Table
              align="left"
              headers={['Cifra', 'Qué es', 'Dónde se usa']}
              rows={[
                ['≥\u00a020%', 'Piso: criterio mínimo de viabilidad fijado en los objetivos del trabajo', 'Objetivo, conclusiones'],
                ['≥\u00a030%', 'Meta comercial: umbral con el que se calibra la cuota de cada cohorte', 'Precio, benchmark Sunrun'],
                ['42%', 'Resultado del caso base: hogar N1, 400 kWh/mes, cohorte Año 1', 'Ecuación de ahorro, cierre'],
              ]}
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Inversión</div>
            <Table
              align="left"
              headers={['Cifra', 'Qué es', 'Dónde se usa']}
              rows={[
                ['USD\u00a08.000.000', 'CAPEX bruto acumulado: 4.000 sistemas × USD 2.000 netos, en 5 años', 'Objetivo, CAPEX, fases'],
                ['USD\u00a04.189.442', 'Capital neto que aportan los inversores: desde el Año 2 la propia cartera financia parte del CAPEX', 'Flujo de caja, inversor, cierre'],
              ]}
            />
            <Body className="mt-3">
              La diferencia entre ambas cifras (USD 3,8 M) es CAPEX pagado con el EBITDA de los contratos ya firmados. El pago inicial de
              USD 600 por sistema es fijo y se cuenta neto dentro de los USD 2.000 de CAPEX por sistema.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },
]
