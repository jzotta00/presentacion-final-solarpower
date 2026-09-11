import { Slide, Title, Lead, Body, Bullets, Stat, Divider, Table, Timeline, ArgentinaMap, Pendiente, Bars } from './primitives'
import type { SlideDef } from './types'
import { Hi } from './types'

const B = '5 · Implementación'

export const implementacion: SlideDef[] = [
  {
    nav: 'Bloque 5',
    block: B,
    node: (
      <Divider
        number="5"
        title="Plan de implementación"
        subtitle="Cuatro fases con lógica de validación progresiva: preparación, piloto, crecimiento en el AMBA y expansión nacional."
        items={['Fases sobre el mapa y la línea de tiempo', 'Recursos de la fase de preparación', 'Indicadores de validación del piloto', 'Capacidad operativa y dotación']}
      />
    ),
  },

  {
    nav: 'Fases y geografía',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.6 y 2.3.5 a 2.3.7, Tabla 3.16" source="Informe TPP, secciones 3.6.1 a 3.6.5 (roadmap) y Tabla 2.10 (segmentación).">
        <Title>Cuatro fases: cada una valida las hipótesis de la anterior</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[2fr_3fr]">
          <div className="h-full min-h-0">
            <ArgentinaMap
              groups={[
                { name: 'Fases 0 a 2 · SP1', postals: ['Ciudad de Buenos Aires'], fill: 'oklch(0.74 0.15 162)', marker: true, label: 'CABA + AMBA. Meses 1 a 60. Hasta 4.000 sistemas.' },
                { name: 'Fase 3 · SP2', postals: ['Buenos Aires', 'CB', 'SF'], fill: 'oklch(0.79 0.155 72)', label: 'Prov. Buenos Aires, Córdoba, Santa Fe. Desde el mes 61.' },
                { name: 'Fase 3 · SP3', postals: ['MZ', 'SJ', 'SA', 'JY', 'TM', 'ER', 'SL', 'LR', 'CT', 'SE', 'CC', 'FM', 'MN', 'CN', 'LP', 'NQ', 'RN', 'CH', 'SC'], fill: 'oklch(0.5 0.06 255)', label: 'Resto del país, con prioridad NOA y Cuyo por irradiación mayor a 6 kWh/m²/día.' },
              ]}
            />
          </div>
          <div className="flex flex-col justify-center">
            <Timeline
              totalMonths={120}
              phases={[
                { name: 'Fase 0 · Preparación', from: 1, to: 6, tone: 'muted', detail: 'Constitución, contrato tipo UVA, acuerdos con proveedores, certificación de 6 técnicos, CRM y facturación UVA, seguros.' },
                { name: 'Fase 1 · Piloto', from: 7, to: 18, tone: 'primary', detail: '200 sistemas en el AMBA con 3 a 4 equipos. Valida plazos, ahorro percibido, morosidad y monitoreo remoto.' },
                { name: 'Fase 2 · Crecimiento AMBA', from: 19, to: 60, tone: 'accent', detail: 'Escala a 4.000 sistemas acumulados, 8 a 20 equipos, financiamiento de mediano plazo, negociación con distribuidoras de Córdoba y Santa Fe.' },
                { name: 'Fase 3 · Expansión nacional', from: 61, to: 120, tone: 'default', detail: 'Operación de la flota (ingreso estable mayor a USD 3 M/año), equipo de O&M dedicado; expansión a SP2 y SP3 con distribuidoras adheridas e instaladores locales.' },
              ]}
            />
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Roadmap y cuellos de botella',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.6.5, Tabla 3.16" source="Informe TPP, Tabla 3.16 (M = mes desde el inicio de operaciones).">
        <Title>Roadmap: hitos, recursos y cuello de botella por fase</Title>
        <div className="mt-4">
          <Table
            align="left"
            headers={['Fase', 'Período', 'Hito principal', 'Recursos clave', 'Cuello de botella']}
            rows={[
              ['Fase 0', 'M1 a M6', 'Empresa constituida; primer lote de equipos; técnicos certificados', 'Capital semilla USD 120 k', 'Habilitación legal y comercial'],
              ['Fase 1', 'M7 a M18', '200 sistemas instalados; modelo operativo validado', '3 a 4 equipos de instalación', 'Capacidad de inspección de las distribuidoras'],
              ['Fase 2', 'M19 a M60', '4.000 sistemas acumulados; break-even de FCF', '8 a 20 equipos; línea de crédito', 'Acceso a capital de largo plazo'],
              ['Fase 3', 'M61 a M120', '4.000 sistemas en operación; ingreso estable mayor a USD 3 M/año', 'Equipo de O&M dedicado', 'Escala del equipo de soporte'],
            ]}
          />
        </div>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <Body>
            El principal cuello de botella a lo largo de las cuatro fases es el acceso a capital de largo plazo para financiar el CAPEX
            creciente del portafolio (USD 8 M en 5 años). La Fase 3 contempla financiamiento internacional: bonos verdes y líneas de
            organismos multilaterales (BID, CAF).
          </Body>
          <Pendiente title="Nota para el equipo: cifras de fases en el informe">
            Las secciones 3.6.3 y 3.6.4 del informe mencionan "948 sistemas acumulados" y "2.448 al Año 10", mientras que la Tabla 3.16
            y todo el capítulo 4 usan 4.000. Esta presentación usa 4.000. Corregir esos dos párrafos del informe antes de la defensa.
          </Pendiente>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Fase 0 y validación del piloto',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.6.1 y 3.6.2, Tablas 3.14 y 3.15" source="Informe TPP, Tablas 3.14 (recursos Fase 0) y 3.15 (indicadores de validación del piloto).">
        <Title>Recursos de preparación e indicadores que habilitan pasar de fase</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-semibold">Fase 0: recursos requeridos</div>
            <Table
              align="left"
              compact
              headers={['Recurso', 'Detalle', 'Inversión']}
              rows={[
                ['Capital de trabajo inicial', 'CAPEX de los primeros 20 sistemas + 6 meses de operación', 'USD 100 a 120 k'],
                ['Equipo fundador', '3 socios (comercial, técnico, financiero) + 1 administrativo', 'USD 4.000/mes'],
                ['Asesoría legal', 'Contrato UVA y habilitaciones', 'USD 3 a 5 k'],
                ['Desarrollo tecnológico', 'CRM + módulo de facturación UVA', 'USD 5 a 8 k'],
                ['Certificación de técnicos', 'Capacitación DEYE/Huawei + protocolo (6 personas)', 'USD 2 a 3 k'],
                ['Seguros', 'RC + equipos (póliza anual)', 'USD 3 a 5 k/año'],
              ]}
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Fase 1: criterios de éxito del piloto</div>
            <Table
              align="left"
              compact
              headers={['Indicador', 'Meta', 'Criterio de éxito']}
              rows={[
                ['Instalaciones completadas', '200', '≥ 150 al mes 12'],
                ['Tiempo de ciclo contrato a balance neto', '< 90 días', 'Promedio ≤ 85 días'],
                ['CAPEX real por sistema', '≤ USD 3.300', 'Desvío < 10% vs. USD 3.000'],
                ['Conversión lead a contrato', '≥ 8%', 'Sobre leads calificados'],
                ['Morosidad a 30 días', '< 3%', 'Medida mensual'],
                ['NPS', '≥ 50', 'Encuesta post-instalación'],
                ['Producción real vs. estimada', '≥ 95%', 'Plataforma de monitoreo'],
              ]}
            />
          </div>
        </div>
        <Body className="mt-4">
          Cuatro hipótesis a confirmar en el piloto: plazos y costos de instalación y habilitación, ahorro percibido suficiente para la
          conversión, morosidad menor a 3%, y gestión remota de la flota con intervenciones presenciales limitadas.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Capacidad operativa',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.4.7 y 4.1.4" source="Informe TPP, sección 3.4.7 (capacidad operativa) y Tabla 4.5 (plan de instalaciones). Dotación por fase: Resumen Ejecutivo, Tabla 1.">
        <Title>Capacidad operativa: de 17 a 108 instalaciones por mes</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Bars
            height={300}
            unit="Sistemas nuevos por año"
            valueFormat={(v) => v.toLocaleString('es-AR')}
            data={[
              { label: 'Año 1', value: 200, tone: 'muted' },
              { label: 'Año 2', value: 500, tone: 'primary' },
              { label: 'Año 3', value: 800, tone: 'primary' },
              { label: 'Año 4', value: 1200, tone: 'accent' },
              { label: 'Año 5', value: 1300, tone: 'accent' },
              { label: 'Años 6 a 15', value: 0, tone: 'muted' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Bullets
              dense
              items={[
                <>Ritmo: ~17 instalaciones/mes en el Año 1, ~42 en el Año 2 y ~108 en el Año 5.</>,
                <>Cada instalación: 1 día de obra de 2 técnicos, 1 a 2 días de gestión administrativa y materiales estandarizados.</>,
                <>Equipos de instalación: 3 a 4 en el Año 1, 8 a 10 en el Año 3, más de 20 en el Año 5 (sección 3.4.7). Front-end (instalar) y back-end (mantener la flota) se separan a medida que crece la flota.</>,
                <>Inventario rotante de 15 a 20 sistemas completos para no depender del plazo de importación (60 a 90 días).</>,
              ]}
            />
            <Table
              compact
              headers={['Fase (resumen ejecutivo)', 'Sistemas nuevos', 'Equipos', 'Dotación total']}
              rows={[
                ['Validación · Año 1', '200', '2 (4 técnicos)', '11 personas'],
                ['Escalamiento · Años 2 a 3', '500 y 800', '5 a 8', '21 a 31'],
                ['Expansión máxima · Años 4 a 5', '1.200 y 1.300', '10 a 13', '44 a 50'],
                ['Operación madura · Años 6 a 15', '0', 'O&M', '17'],
              ]}
            />
            <Pendiente title="Nota para el equipo: unificar equipos por año">
              El informe (3.4.7) habla de 3 a 4 equipos en el Año 1 y más de 20 en el Año 5; el resumen ejecutivo (Tabla 1) de 2 y 13.
              Elegir una versión y alinear ambos documentos.
            </Pendiente>
          </div>
        </div>
      </Slide>
    ),
  },
]

void Lead
void Stat
void Hi
