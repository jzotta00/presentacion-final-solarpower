import { Slide, Title, Lead, Body, Bullets, Stat, Divider, Figura, Table, Funnel, ArgentinaMap, HBars } from './primitives'
import type { SlideDef } from './types'
import { Hi, Bad, Ok } from './types'
import { PorterDiagram, Stars } from './diagrams'

const B = '2 · Mercado'

export const mercado: SlideDef[] = [
  {
    nav: 'Bloque 2',
    block: B,
    node: (
      <Divider
        number="2"
        title="Estudio de mercado"
        subtitle="Entorno, recurso solar, dimensionamiento del mercado técnicamente viable y análisis estratégico."
        items={['PESTELCO', 'Recurso solar', 'Embudo del Censo 2022', 'Segmentación SP1 · SP2 · SP3', 'Porter, FODA, FCE', 'Benchmark Sunrun']}
      />
    ),
  },

  {
    nav: 'PESTELCO',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.1.6, Tabla 2.14" source="Elaboración propia con base en ENRE (05/2026), INDEC (Censo 2022, IPC feb-2026), BCRA (UVA 30/03/2026), Secretaría de Energía, NDC Argentina 2021, INTI/CADER (2024).">
        <Title>Análisis PESTELCO: entorno favorable en las siete dimensiones</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Dimensión', 'Factores clave', 'Impacto']}
            rows={[
              ['Política', 'Ley 27.424, DNU 70/2023, Res. SE 235/2024, compromiso COP26 (reducir 30% emisiones al 2030), normalización tarifaria', <Ok key="p">Favorable</Ok>],
              ['Económica', 'Inflación 211% (2023), 118% (2024), 33,1% i.a. (feb-2026). Cargo variable $144 a $185/kWh sin impuestos. Paneles -98,7% FOB desde 2017. UVA $1.850,06 (30/03/2026)', <Ok key="e">Muy favorable</Ok>],
              ['Social', '68,9% de hogares propietarios (Censo 2022); 92,46% urbanización; ~70% de usuarios sin subsidio; penetración digital > 85% en AMBA', <Ok key="s">Favorable</Ok>],
              ['Tecnológica', 'TOPCon +580 Wp (eficiencia 20 a 25%); inversores de string DEYE y Huawei con monitoreo integrado; medidores en cada sistema', <Ok key="t">Favorable</Ok>],
              ['Ecológica', 'Factor de emisión SADI 0,307 kgCO₂e/kWh; Ley 27.520 de cambio climático; meta -30% GEI al 2030', <Ok key="ec">Favorable</Ok>],
              ['Legal', 'Ley 24.240 (Defensa del Consumidor); reglamentos ENRE de conexión; contrato UVA con respaldo BCRA; UIF Res. 76/2019', <span key="l" className="font-semibold">Neutro a favorable</span>],
              ['Competitiva', 'Ninguna empresa ofrece arrendamiento solar con cuota UVA; más de 50 instaladoras de venta directa en AMBA; primer censo fotovoltaico INTI/CADER (jun-2024)', <Ok key="c">Muy favorable</Ok>],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Recurso solar',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.2.7 y 3.2.4" source="Global Solar Atlas (Solargis / World Bank); PVGIS (Comisión Europea), Buenos Aires, inclinación 34°, orientación norte.">
        <Title>Recurso solar: moderado en el AMBA, suficiente para el modelo</Title>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Stat tone="primary" value="1.600 a 1.700" label="kWh/m²/año de irradiación horizontal global (GHI) en Buenos Aires y AMBA" />
          <Stat value="1.700 a 2.700" label="kWh/m²/año de GHI en el país: desde la región pampeana hasta la Puna jujeña, una de las zonas de mayor recurso del mundo" />
          <Stat tone="primary" value="1.985" label="kWh/m²/año de irradiación sobre plano inclinado (GII) en Buenos Aires a 34° norte, según PVGIS" />
          <Stat value="1,5 a 6,3" label="kWh/m²/día: variación estacional en el AMBA entre invierno y verano" />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Body>
            La irradiación del AMBA es inferior a la del NOA y Cuyo, donde se concentra la fotovoltaica de gran escala. Pero el
            mercado residencial se decide por otra variable: la densidad de hogares con alto consumo, alta tarifa y capacidad de pago.
            El AMBA concentra el 37% de la población nacional.
          </Body>
          <Body>
            Con este recurso, el sistema estándar de 5,22 kWp genera más que el consumo anual de un hogar N1 típico (ver Estudio
            técnico), lo que asegura la cobertura incluso con la degradación de los módulos a lo largo del contrato.
          </Body>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Embudo del Censo 2022',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.3.2 y 2.3.3, Tabla 2.5" source="INDEC, Censo Nacional de Población, Hogares y Viviendas 2022 (resultados definitivos, 2023); IRENA, CNEA, INTI; Mapa del Potencial Solar de CABA (GCBA). Elaboración propia.">
        <Title>Del universo censal al mercado técnicamente viable</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Funnel
            steps={[
              { label: 'Casas consideradas en el embudo (Censo 2022)', value: 11900361, display: '11,90 M', note: 'Total país de casas: 12,04 M (informe 2.3.2). Excluye departamentos, ranchos y casillas' },
              { label: 'Filtro 1: materiales de techo y piso', value: 7104316, display: '7,10 M', note: 'Retiene 59,7% (proxy estructural y socioeconómico)', tone: 'primary' },
              { label: 'Filtro 2: superficie, orientación y sombra', value: 3552157, display: '3,55 M', note: 'Retiene 50% (IRENA, CNEA, INTI; Mapa de Techos CABA)', tone: 'primary' },
              { label: 'SP1: CABA + 24 partidos del GBA', value: 954152, display: '954.152', note: 'Mercado primario, años 1 a 5', tone: 'accent' },
              { label: 'Alcance evaluado en este trabajo', value: 4000, display: '4.000', note: '0,42% de SP1 en 5 años', tone: 'default' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              <Hi>Filtro 1</Hi>: techo de baldosa, membrana, teja, losa o chapa con cielorraso, y piso de cerámica, madera, cemento
              alisado o similar. Es más exigente que la clasificación tarifaria (70% sin subsidio), por lo que subsume la dimensión
              socioeconómica y evita doble conteo.
            </Body>
            <Body>
              <Hi>Filtro 2</Hi>: pendiente menor a 45°, orientación norte (noreste y noroeste rinden 80 a 90% del óptimo) y ausencia de
              sombreado por linderos, tanques y antenas. Se adoptó el valor conservador de 50%.
            </Body>
            <Body>
              Se excluye Tierra del Fuego por baja irradiación y no se cuentan viviendas de verano ni locales comerciales.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Segmentación SP1 · SP2 · SP3',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.3.5 a 2.3.8, Tabla 2.10" source="Elaboración propia en base a INDEC, Censo 2022 (viviendas aptas tras filtros 1 y 2).">
        <Title>Tres niveles de expansión geográfica</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[2fr_3fr]">
          <div className="h-full min-h-0">
            <ArgentinaMap
              groups={[
                { name: 'SP1 · Mercado primario', postals: ['Ciudad de Buenos Aires'], fill: 'oklch(0.74 0.15 162)', marker: true, label: 'CABA + AMBA · 954.152 viviendas aptas · Años 1 a 5' },
                { name: 'SP2 · Mercado secundario', postals: ['Buenos Aires', 'CB', 'SF'], fill: 'oklch(0.79 0.155 72)', label: 'Prov. Buenos Aires, Córdoba, Santa Fe · 1.169.475 · Años 4 a 8' },
                { name: 'SP3 · Expansión nacional', postals: ['MZ', 'SJ', 'SA', 'JY', 'TM', 'ER', 'SL', 'LR', 'CT', 'SE', 'CC', 'FM', 'MN', 'CN', 'LP', 'NQ', 'RN', 'CH', 'SC'], fill: 'oklch(0.5 0.06 255)', label: 'Resto del país · 1.428.531 · Años 7 a 10+' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Table
              headers={['Segmento', 'Viviendas aptas', 'Fase']}
              rows={[
                ['SP1 · CABA + AMBA', '954.152', 'Años 1 a 5'],
                ['SP2 · Prov. Bs. As. + Córdoba + Santa Fe', '1.169.475', 'Años 4 a 8'],
                ['SP3 · Resto del país', '1.428.531', 'Años 7 a 10+'],
                ['Total país', '3.552.157', ''],
              ]}
              highlightLast
            />
            <Body>
              El AMBA (incluido en la Provincia de Buenos Aires en el mapa) se eligió como entrada por cinco razones: densidad y
              poder adquisitivo, presencia de Edenor y Edesur adheridas a la Ley 27.424, infraestructura eléctrica robusta, mayor
              conciencia ambiental en N1/N3 y disponibilidad de instaladores certificados. Córdoba, con 815 usuarios-generadores y 157
              distribuidoras adheridas, es el primer paso natural de SP2.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Consumo y categoría objetivo',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.3.1 y 2.3.4, Tabla 2.6" source="Ministerio de Energía (estudios de eficiencia); ENRE, cuadros tarifarios Edenor/Edesur 05/2026; Decreto 332/2022 (segmentación tarifaria).">
        <Title>El cliente objetivo: hogar sin subsidio, consumo de 350 a 800 kWh/mes</Title>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Table
            align="left"
            headers={['Categoría', 'Descripción', '% usuarios', 'Cargo variable 05/2026']}
            rows={[
              ['Sin subsidio (ex-N1 y ex-N3)', 'Tarifa plena', '~70%', '$144 a $185/kWh sin impuestos (R1 a R6)'],
              ['Con subsidio (N2)', 'Subsidio parcial en reducción', '~30%', '$70 a $86/kWh consumo base; tarifa plena sobre el excedente'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Stat tone="primary" value="200 a 500 kWh/mes" label="consumo promedio del hogar residencial AMBA según tamaño, época y equipamiento" />
            <Stat tone="accent" value="350 a 800 kWh/mes" label="rango objetivo de SolarPower (4.200 a 9.600 kWh/año), donde el ahorro absoluto es mayor" />
          </div>
        </div>
        <div className="mt-6">
          <Bullets
            dense
            items={[
              <>Prioridad inicial: <Hi>segmento sin subsidio</Hi>, porque paga tarifa plena (maximiza el ahorro percibido), tiene mayor capacidad de pago y es más receptivo al argumento ambiental.</>,
              <>A medida que la normalización avance sobre el N2, ese segmento se convierte en el segundo mercado prioritario.</>,
              <>El consumo base subsidiado es 300 kWh/mes en verano e invierno y 150 kWh/mes en meses templados: el excedente ya se paga a tarifa plena.</>,
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Cinco fuerzas de Porter',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.6.1 (Figura 2.14 recreada)" source="Elaboración propia (Porter, 2008). Contenido según sección 2.6.1 del informe.">
        <Title>Cinco fuerzas de Porter: un nicho sin rivalidad directa</Title>
        <div className="mt-3 min-h-0 flex-1">
          <PorterDiagram
            forces={{
              top: {
                title: 'Amenaza de nuevos entrantes',
                level: 'Media',
                tone: 'primary',
                items: ['Barreras: capital intensivo, contratos de largo plazo, red de instaladores, plataforma de monitoreo', 'No insuperables en 3 a 5 años para un actor con capital'],
              },
              left: {
                title: 'Poder de proveedores',
                level: 'Medio',
                tone: 'primary',
                items: ['Múltiples importadores: LONGi, JA Solar, Trina, Canadian; DEYE, Huawei, Growatt', 'Estrategia: 2 a 3 proveedores por componente'],
              },
              center: {
                title: 'Rivalidad entre competidores',
                level: 'Baja',
                tone: 'accent',
                items: ['Ninguna empresa ofrece arrendamiento estructurado con cuota UVA, mantenimiento y monitoreo', 'Los actuales son instaladores de venta directa'],
              },
              right: {
                title: 'Poder de clientes',
                level: 'Bajo a medio',
                tone: 'accent',
                items: ['Hogares individuales, oferta nueva, contrato estándar', 'Crece con la madurez del mercado'],
              },
              bottom: {
                title: 'Amenaza de sustitutos',
                level: 'Media a alta',
                tone: 'destructive',
                items: ['Compra directa con crédito accesible', 'Eficiencia energética del hogar', 'Seguir pagando la tarifa y esperar'],
              },
            }}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'FODA',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.6.2, Tabla 2.11" source="Elaboración propia.">
        <Title>FODA de SolarPower Energy</Title>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            ['Fortalezas', 'border-accent/40 bg-accent/10', ['Baja barrera de entrada: USD 600 de inicial', 'Tecnología DEYE/Huawei confiable con monitoreo remoto', 'Primer entrante en arrendamiento solar residencial en Argentina', 'Equipo con conocimiento técnico y financiero combinado', 'Contrato en UVA: protección real de los ingresos', 'Piloto operativo de más de 20 instalaciones exitosas']],
            ['Oportunidades', 'border-primary/40 bg-primary/10', ['Normalización tarifaria: aumento de facturas eléctricas', 'Mercado técnico de más de 3,5 M de viviendas aptas', 'Caída sostenida del precio de equipos', 'Reactivación del crédito UVA en 2024 (más de 11.000 hipotecas)', 'Creciente conciencia ambiental en segmentos medios y altos', 'Brecha enorme vs. mercados maduros (< 0,01% penetración)']],
            ['Debilidades', 'border-destructive/40 bg-destructive/10', ['Alta intensidad de capital para escalar la cartera', 'Dependencia de financiamiento de largo plazo', 'Red de instaladores certificados limitada al inicio', 'Marca todavía poco conocida fuera del piloto', 'Modelo contractual complejo de explicar al cliente masivo', 'Historial crediticio y track record acotados al piloto operativo']],
            ['Amenazas', 'border-border bg-card/60', ['Inestabilidad macro y riesgo de congelamiento tarifario', 'Dificultad de acceso a dólares para importar equipos', 'Entrada de competidores con mayor escala o respaldo', 'Reversión regulatoria de la normalización', 'Deterioro de la relación UVA / tarifa eléctrica', 'Resistencia del consumidor al arrendamiento de largo plazo']],
          ].map(([t, cls, items]) => (
            <div key={t as string} className={`rounded-lg border p-4 ${cls as string}`}>
              <div className="font-serif font-semibold">{t as string}</div>
              <ul className="mt-2 grid gap-1 text-xs leading-snug text-muted-foreground md:grid-cols-2 md:text-[13px]">
                {(items as string[]).map((i) => (
                  <li key={i} className="flex gap-1.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Factores críticos de éxito',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.6.3 (Figura 2.19 recreada)" source="Elaboración propia; benchmark Sunrun (Form 10-K 2023); piloto SolarPower. Escala: ★★★ alto, ★★ medio, ★ bajo, ☆ no aplica.">
        <Title>Factores críticos de éxito frente a la competencia</Title>
        <div className="mt-3 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Table
            align="left"
            compact
            headers={['Factor crítico de éxito', 'SolarPower (proyectado)', 'Instaladores convencionales', 'Compra directa']}
            rows={[
              ['Modelo de cuota con pago inicial reducido', <Stars key="a" n={3} />, <Stars key="b" n={1} />, <Stars key="c" n={1} />],
              ['Servicio de mantenimiento incluido', <Stars key="a" n={3} />, <Stars key="b" n={1} />, <Stars key="c" na />],
              ['Monitoreo y garantía de producción', <Stars key="a" n={3} />, <Stars key="b" n={2} />, <Stars key="c" na />],
              ['Indexación anti-inflación (UVA)', <Stars key="a" n={3} />, <Stars key="b" na />, <Stars key="c" na />],
              ['Accesibilidad (pago inicial bajo)', <Stars key="a" n={3} />, <Stars key="b" n={1} />, <Stars key="c" na />],
              ['Reputación y confianza de marca', <Stars key="a" n={2} />, <Stars key="b" n={2} />, <Stars key="c" n={3} />],
              ['Velocidad de instalación', <Stars key="a" n={2} />, <Stars key="b" n={2} />, <Stars key="c" n={3} />],
              ['Flexibilidad del producto', <Stars key="a" n={2} />, <Stars key="b" n={3} />, <Stars key="c" n={2} />],
            ]}
          />
          <Bullets
            dense
            items={[
              <><Hi>Cuota con baja barrera de entrada</Hi> (FCE principal): USD 600 de inicial vs. USD 3.000 a 4.000 de compra directa.</>,
              <><Hi>Mantenimiento incluido y garantía de producción</Hi>: producción mínima anual garantizada, con compensación en cuota si no se alcanza.</>,
              <><Hi>Monitoreo en tiempo real</Hi>: producción, consumo, ahorro acumulado y CO₂ evitado visibles para el cliente.</>,
              <><Hi>Indexación UVA</Hi>: protege el ingreso real de la empresa y mantiene el diferencial de ahorro del cliente.</>,
              <><Hi>Reputación y confianza de marca</Hi>: desventaja inicial; se construye con referidos (cada referido reduce el CAC 40 a 60%), certificaciones ISO 9001 e IRAM.</>,
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Benchmark: Sunrun',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.4.7, Tabla 2.8" source="Sunrun Inc., Annual Report 2023 (Form 10-K, SEC); Sunrun Q4 2024 Earnings Release (GEA 2024). Elaboración propia.">
        <Title>El modelo está validado a escala: Sunrun Inc. (NASDAQ: RUN)</Title>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat tone="primary" value="933.275" label="clientes activos a diciembre de 2023" />
          <Stat tone="primary" value="6,7 GW" label="capacidad fotovoltaica instalada (2023)" />
          <Stat value="USD 2.260 M" label="ingresos totales 2023; más de USD 1.300 M recurrentes" />
          <Stat tone="accent" value="1,8%" label="tasa de default en Solar Lease, frente a 4,2% en préstamos solares" />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Table
            align="left"
            compact
            headers={['Indicador Sunrun 2023', 'Valor', 'Lectura para SolarPower']}
            rows={[
              ['Plazo de contrato típico', '25 años', 'Referencia para el diseño 5 + 5 + 5'],
              ['Cuota mensual típica', 'USD 75 a 200', 'Benchmark de pricing'],
              ['Garantía de ahorro', '10 a 30%', 'Objetivo SolarPower: 30% mínimo'],
              ['Gross Earning Assets (2024)', 'USD 17.800 M', 'La cartera de contratos es financiable y titulizable'],
            ]}
          />
          <Body>
            La baja morosidad se explica porque la cuota reemplaza un gasto que el hogar no puede evitar (la luz) en lugar de agregar
            uno nuevo. Sunrun fue fundada en 2007 en San Francisco y escaló con una red de instaladores locales, comparable al modelo
            de técnicos certificados que propone SolarPower.
          </Body>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Conclusiones del mercado',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.8" source="Informe TPP, conclusiones del capítulo 2. Dato de usuarios-generadores 1S-2025: Energy-Box (jul-2025).">
        <Title>Conclusiones del estudio de mercado</Title>
        <div className="mt-4">
          <Bullets
            items={[
              <>El marco regulatorio (Ley 27.424 + Res. SE 235/2024 + Res. SE 287/2025) garantiza el derecho a generar, inyectar y conectarse. El DNU 70/2023 encareció la compra directa y refuerza al arrendamiento.</>,
              <>La normalización tarifaria es el driver económico central: aumentos superiores al 150% en doce meses para hogares N1 hacen perceptible el ahorro solar.</>,
              <>Mercado de alta escala y prácticamente virgen: <Hi>2.918 usuarios-generadores</Hi> al primer semestre de 2025 sobre más de 3,5 millones de viviendas aptas. Solo SP1 suma <Hi>954.152</Hi>.</>,
              <>PESTELCO favorable en todas las dimensiones; ausencia total de competidores en el nicho de arrendamiento.</>,
              <>El piloto de más de 20 instalaciones valida los supuestos clave: baja barrera de entrada, cuota UVA competitiva y ahorro neto.</>,
              <>Sunrun demuestra que el modelo es escalable y rentable; Argentina ofrece un mercado más virgen, sin competidores y con shock tarifario.</>,
              <>Riesgos principales: acceso a capital de largo plazo, demoras de habilitación del medidor bidireccional y cambio regulatorio. Los tres son mitigables.</>,
            ]}
          />
        </div>
      </Slide>
    ),
  },
]

void Lead
void HBars
