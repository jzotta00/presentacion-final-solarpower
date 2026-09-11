import { Slide, Title, Lead, Body, Bullets, Stat, Divider, Figura, Table, Bars, HBars, Donut, ArgentinaMap, Pendiente } from './primitives'
import type { SlideDef } from './types'
import { Hi, Bad, Ok } from './types'

const B = '1 · Contexto'

export const contexto: SlideDef[] = [
  {
    nav: 'Bloque 1',
    block: B,
    node: (
      <Divider
        number="1"
        title="Contexto y problema"
        subtitle="Un país con matriz fósil, décadas de subsidios y una generación distribuida residencial que casi no existe."
        items={[
          'Matriz eléctrica y subsidios',
          'Normalización tarifaria 2024 a 2026',
          'Estado de la generación distribuida',
          'La barrera de capital',
          'Marco regulatorio',
        ]}
      />
    ),
  },

  {
    nav: 'Matriz eléctrica',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 1.2 y 2.2.5" source="CAMMESA, generación jul-2024 a jun-2025 (vía Low Carbon Power, 2025); Ley 27.191 (meta 20% renovables a 2025).">
        <Title>Una matriz todavía dominada por combustibles fósiles</Title>
        <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
          <Donut
            data={[
              { label: 'Fósil (gas natural y derivados)', value: 53, color: 'oklch(0.63 0.2 22)' },
              { label: 'Hidráulica', value: 24, color: 'oklch(0.6 0.1 240)' },
              { label: 'Eólica', value: 12, color: 'oklch(0.74 0.15 162)' },
              { label: 'Nuclear', value: 6, color: 'oklch(0.7 0.05 300)' },
              { label: 'Solar', value: 5, color: 'oklch(0.79 0.155 72)' },
            ]}
          />
          <div className="flex flex-col gap-4">
            <Stat value="43.351 MW" label="Potencia instalada total del sistema (CAMMESA)" />
            <Stat tone="accent" value="16%" label="Renovables no convencionales en la matriz en 2024, frente a 4% en 2017 (RenovAr). Meta Ley 27.191: 20% en 2025" />
            <Stat tone="primary" value="1.673 MW" label="Fotovoltaica utility-scale al cierre de 2024 (+307 MW en el año), concentrada en NOA y Cuyo" />
          </div>
        </div>
        <Body className="mt-4">
          La transición avanzó en generación mayorista; el segmento residencial distribuido quedó rezagado. Ahí se ubica este trabajo.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Subsidios energéticos',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 1.2 y 2.2.11" source="CIPPEC (2023) con base en Secretaría de Energía, Presupuesto Abierto, ASAP y BCRA. Figura 2.8 del informe.">
        <Title>Décadas de subsidios suprimieron la señal de precio</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[3fr_2fr]">
          <Figura src="/figuras/fig-2-8-subsidios-pbi.png" caption="Figura 2.8. Subsidios energéticos en Argentina como porcentaje del PBI, 2004 a 2022." />
          <div className="flex flex-col gap-3">
            <Stat tone="destructive" value="3,4% del PBI" label="Pico de subsidios energéticos, 2014 a 2015" />
            <Stat tone="destructive" value="< 40%" label="Cobertura del costo real del suministro por la tarifa residencial hasta 2023 (CIPPEC)" />
            <Stat tone="primary" value="< 0,5% del PBI" label="Meta de gasto en subsidios comprometida para 2026" />
            <Body>
              Con la tarifa cubriendo menos del 40% del costo, no existía incentivo económico para eficiencia ni autogeneración. La
              trayectoria de reducción del subsidio es el principal impulsor de demanda del servicio.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Normalización tarifaria',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.1.6.2, Tabla 2.15a" source="ENRE, cuadros tarifarios Edenor y Edesur, período 05/2026 (www.argentina.gob.ar/enre/cuadros_tarifarios). Aumento 2024: ENRE, 2024.">
        <Title>Normalización tarifaria: el cargo variable sin subsidio, por categoría</Title>
        <Lead>
          Los hogares sin subsidio (ex-N1 y ex-N3, aproximadamente 70% de los usuarios) pagan tarifa plena. Facturas de hogares N1
          subieron hasta <Bad>150% en doce meses</Bad> durante 2024.
        </Lead>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Bars
            height={300}
            unit="ARS por kWh, sin impuestos (Edenor)"
            valueFormat={(v) => `$${Math.round(v)}`}
            data={[
              { label: 'R1 (0-150 kWh)', value: 144.321, tone: 'muted' },
              { label: 'R2 (151-400)', value: 144.899, tone: 'muted' },
              { label: 'R3 (401-500)', value: 155.596, tone: 'primary' },
              { label: 'R4 (501-600)', value: 159.077, tone: 'primary' },
              { label: 'R5 (601-700)', value: 159.337, tone: 'primary' },
              { label: 'R6 (+700)', value: 173.296, tone: 'destructive' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Stat tone="destructive" value="$144 a $185" label="ARS/kWh sin impuestos según categoría R1 a R6 (Edenor y Edesur, 05/2026)" />
            <Stat tone="destructive" value="+21% IVA y hasta 37%" label="de tasas municipales adicionales en algunos municipios del AMBA: el costo efectivo puede superar $250/kWh" />
            <Body>
              El cliente objetivo (350 a 800 kWh/mes) cae en R3 a R6, con cargo variable de $155 a $185/kWh. Cuadro completo Edenor y
              Edesur, con y sin subsidio, en el Anexo.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Argentina en el mundo',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.2.9" source="Statista y fuentes oficiales por país, sep-2023 (Figura 2.7 del informe); ENRE 05/2026 para el valor argentino actual.">
        <Title>De las tarifas más bajas del mundo a una normalización con margen por recorrer</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[3fr_2fr]">
          <Figura src="/figuras/fig-2-7-precio-paises.png" caption="Figura 2.7. Precios de electricidad residencial por país (USD/kWh), septiembre 2023." />
          <div className="flex flex-col gap-3">
            <Stat tone="destructive" value="USD 0,01 a 0,05" label="por kWh en Argentina antes de 2024, entre los más bajos del mundo" />
            <Stat tone="primary" value="USD 0,26 / 0,19" label="por kWh residencial en Uruguay y Chile: la normalización argentina todavía tiene camino" />
            <Body>
              A nivel internacional los precios residenciales suben 2% a 4% anual en términos reales (EIA 1998 a 2023; Eurostat 2010 a
              2023). Esa tendencia estructural es uno de los fundamentos del modelo: la cuota en UVA da previsibilidad frente a un
              costo que tiende a crecer.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Generación distribuida hoy',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.2.1" source="Secretaría de Energía, Reporte Anual de Generación Distribuida 2024 (feb-2025). Figura 2.1 del informe.">
        <Title>Generación distribuida residencial: un mercado prácticamente vacío</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[3fr_2fr]">
          <Figura src="/figuras/fig-2-1-evolucion-gd.png" caption="Figura 2.1. Usuarios-generadores activos y potencia acumulada de generación distribuida en Argentina, 2018 a 2024." />
          <div className="flex flex-col gap-3">
            <Stat value="2.290" label="usuarios-generadores activos a diciembre de 2024, con 58,99 MW instalados (+92% vs. 30,69 MW en 2023)" />
            <Stat tone="destructive" value="1.299" label="instalaciones residenciales (5,9 MW). El segmento comercial-industrial concentra el 78% de la potencia" />
            <Stat tone="destructive" value="< 0,01%" label="penetración residencial sobre 12 millones de casas (Censo 2022)" />
            <Body>La Ley 27.424 fijaba 1.000 MW de GD para 2028: se alcanzó el 5,9% de la meta.</Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'GD por jurisdicción',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.2.2, Tabla 2.2" source="Secretaría de Energía, distribución de usuarios-generadores y potencia por jurisdicción, datos 2023 (total 37,58 MW).">
        <Title>Dónde está la generación distribuida que existe</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[2fr_3fr]">
          <div className="h-full min-h-0">
            <ArgentinaMap
              labels={false}
              groups={[
                { name: 'Córdoba', postals: ['CB'], fill: 'oklch(0.79 0.155 72)', label: '815 usuarios · 15.151 kW (40,3%)' },
                { name: 'Buenos Aires', postals: ['Buenos Aires'], fill: 'oklch(0.72 0.13 72)', label: '508 usuarios · 8.554 kW (22,7%)' },
                { name: 'San Juan', postals: ['SJ'], fill: 'oklch(0.62 0.1 72)', label: '89 usuarios · 3.527 kW (9,4%)' },
                { name: 'CABA', postals: ['Ciudad de Buenos Aires'], fill: 'oklch(0.72 0.13 72)', label: '119 usuarios · 2.943 kW (7,8%)' },
                { name: 'Mendoza · Misiones · La Pampa', postals: ['MZ', 'MN', 'LP'], fill: 'oklch(0.5 0.07 72)', label: '1,7% a 5,6% cada una' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <HBars
              valueFormat={(v) => `${v.toLocaleString('es-AR')} kW`}
              data={[
                { label: 'Córdoba', value: 15151, tone: 'primary', note: '815 UG' },
                { label: 'Buenos Aires', value: 8554, tone: 'primary', note: '508 UG' },
                { label: 'San Juan', value: 3527, tone: 'muted', note: '89 UG' },
                { label: 'CABA', value: 2943, tone: 'primary', note: '119 UG' },
                { label: 'Misiones', value: 2112, tone: 'muted', note: '12 UG' },
                { label: 'Mendoza', value: 1654, tone: 'muted', note: '46 UG' },
                { label: 'La Pampa', value: 642, tone: 'muted', note: '49 UG' },
                { label: 'Resto del país', value: 2001, tone: 'muted', note: '133 UG' },
              ]}
            />
            <Body>
              Córdoba lidera por adhesión regulatoria temprana (157 distribuidoras habilitadas). El AMBA, con la mayor concentración
              de hogares de alto consumo, tiene apenas 627 usuarios-generadores entre CABA y Provincia de Buenos Aires.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Benchmark internacional',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.2.3, Tabla 2.3" source="PowerMag (2024), SEIA (2024), IRENA (2024), Secretaría de Energía Argentina (2024). Japón: dato 2023.">
        <Title>Penetración residencial: la brecha con los mercados de referencia</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <HBars
            valueFormat={(v) => (v < 0.1 ? '< 0,01%' : `${v.toLocaleString('es-AR')}%`)}
            max={40}
            data={[
              { label: 'Australia', value: 37.7, tone: 'accent', note: '> 3,7 M sistemas' },
              { label: 'Alemania', value: 12.3, tone: 'primary', note: '> 2,5 M' },
              { label: 'Países Bajos', value: 10, tone: 'primary', note: '> 800 k' },
              { label: 'Italia', value: 8, tone: 'primary', note: '> 700 k' },
              { label: 'Japón', value: 7.7, tone: 'primary', note: '> 3 M' },
              { label: 'Estados Unidos', value: 4.96, tone: 'primary', note: '> 4,2 M' },
              { label: 'Argentina', value: 0.01, tone: 'destructive', note: '1.299 residenciales' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              Australia alcanzó 37,7% en menos de 15 años; Estados Unidos 4,96% en 10 años. En Estados Unidos, el 40% de las
              instalaciones residenciales de 2024 fueron bajo Solar Lease o PPA.
            </Body>
            <Body>
              Doble lectura: el mercado argentino no despegó, y las barreras de adopción son reales. El modelo de arrendamiento debe
              trabajar activamente para reducirlas.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'La barrera de capital',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 1.2 y 2.4.8" source="SEIA (2024), IRENA (2024); cotizaciones de mercado argentino 2026; tasas de crédito 2025 a 2026 según informe 2.4.8.">
        <Title>El costo inicial es la principal barrera de adopción</Title>
        <Lead>
          Un sistema estándar de 5,22 kWp cuesta entre <Bad>USD 3.000 y USD 4.000</Bad> en el mercado argentino de 2026. Las
          alternativas de financiamiento disponibles para el hogar no resuelven el problema.
        </Lead>
        <div className="mt-6">
          <Table
            align="left"
            headers={['Alternativa para el hogar', 'Desembolso', 'Condición en Argentina 2025 a 2026', 'Resultado']}
            rows={[
              ['Compra de contado', 'USD 3.000 a 4.000', 'Exige inmovilizar capital en un bien de larga vida útil en un entorno macro incierto', <span key="a" className="text-destructive">Fuera del alcance de la mayoría</span>],
              ['Crédito personal', 'Cuotas con interés', 'Tasas de 70% a 120% TNA', <span key="b" className="text-destructive">Destruye el ahorro del sistema</span>],
              ['Hipotecario UVA', 'Cuotas + CER', '5,5% a 8,5% + CER; requiere garantía hipotecaria y calificación', <span key="c" className="text-primary">Acceso limitado</span>],
              ['Incentivos fiscales (FODIS, CCF)', 'Subsidio', 'Derogados por el DNU 70/2023 (arts. 16 a 37 de la Ley 27.424)', <span key="d" className="text-destructive">Ya no existen</span>],
              ['Arrendamiento solar (propuesta)', 'USD 600 inicial', 'Cuota fija en UVA, propiedad y mantenimiento a cargo de la empresa', <span key="e" className="text-accent">Elimina la barrera</span>],
            ]}
          />
        </div>
        <Body className="mt-4">
          El DNU 70/2023 encareció la compra directa al eliminar los incentivos, pero mantuvo intacto el derecho a conectarse e inyectar
          excedentes. El negocio no depende de que el Estado vuelva a subsidiar.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Marco regulatorio',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.1 y 3.2.3, Tabla 3.5" source="Boletín Oficial de la República Argentina; ENRE; Secretaría de Energía. Fechas según Tabla 3.5 del informe.">
        <Title>Marco regulatorio: habilitante y en simplificación</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Norma', 'Fecha', 'Contenido principal', 'Impacto para el modelo']}
            rows={[
              ['Ley 27.191', '2015', 'Régimen de fomento a renovables; grandes usuarios deben cubrir 20% con renovables en 2025', 'Consolida cadena de suministro y técnicos'],
              ['Ley 27.424', 'Dic-2017', 'Derecho a instalar generación renovable, inyectar excedentes y recibir compensación por balance neto', 'Base legal del modelo on-grid'],
              ['Decreto 986/2018', 'Nov-2018', 'Reglamenta la ley; crea el RUGER; formularios 1A/1B/2A/2B', 'Define el trámite de conexión'],
              ['Res. ENRE 314/2018', 'Dic-2018', 'Requisitos de protección de interfaz red-generador (tensión, frecuencia, anti-isla)', 'Especifica tablero e inversor'],
              ['DNU 70/2023', 'Dic-2023', 'Deroga arts. 16 a 37 de la Ley 27.424: FODIS, exenciones, amortización acelerada, CCF', 'Encarece compra directa; mantiene derecho a conexión'],
              ['Res. ENRE 100/2024', 'Feb-2024', 'Instruye a Edenor y Edesur a implementar medidores inteligentes para usuarios-generadores', 'Mejora medición bidireccional'],
              ['Res. SE 235/2024', 'Sep-2024', 'Categorías UGpe/UGme/UGma; límite de 2 MW a 12 MW; generación comunitaria virtual', 'Habilita agregación de sistemas'],
              ['Res. SE 287/2025', 'Jul-2025', 'Prohíbe a las distribuidoras cobrar estudios, peajes, cargos de respaldo; exige transparencia en factura', 'Elimina costos ocultos y barreras'],
            ]}
          />
        </div>
        <Body className="mt-3">
          Diecisiete provincias adheridas. Las relevantes para las primeras fases: Provincia de Buenos Aires (74 distribuidoras, incluidas
          Edenor y Edesur), CABA, Córdoba y Santa Fe. El contrato de arrendamiento se encuadra en los artículos 1187 a 1226 del Código
          Civil y Comercial (locación de cosas), no es una operación financiera regulada por el BCRA.
        </Body>
      </Slide>
    ),
  },
]

// Keep imports used (Bullets/Ok/Hi/Pendiente may be used in future edits)
void Bullets
void Ok
void Hi
void Pendiente
