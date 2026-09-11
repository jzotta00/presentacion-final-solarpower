import { Leaf } from 'lucide-react'
import { Slide, Title, Lead, Body, Bullets, Stat, Divider, Table } from './primitives'
import type { SlideDef } from './types'
import { Hi } from './types'

const B = '7 · Cierre'

export const cierre: SlideDef[] = [
  {
    nav: 'Bloque 7',
    block: B,
    node: (
      <Divider
        number="7"
        title="Impacto y conclusiones"
        subtitle="Contribución ambiental, social y sectorial; limitaciones del estudio; viabilidad integral."
        items={['Impacto ambiental', 'Limitaciones y trabajo futuro', 'Viabilidad integral', 'Bibliografía']}
      />
    ),
  },

  {
    nav: 'Impacto ambiental',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 5.3 y 2.1.6.5" source="Factor de emisión de la red SADI 2023: 0,307 kgCO₂e/kWh (Secretaría de Energía / IPCC). Meta nacional: 1 GW de generación distribuida a 2030; NDC Argentina 2021 (UNFCCC).">
        <div className="flex items-center gap-2 text-accent">
          <Leaf className="h-5 w-5" />
          <span className="text-sm font-semibold">Contribución al sector y al país</span>
        </div>
        <Title className="mt-2">Impacto ambiental medible</Title>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <Stat tone="accent" value="7.500 a 8.300 kWh" label="de energía limpia por sistema y año en el AMBA" />
          <Stat tone="accent" value="2,3 a 2,5 t" label="de CO₂ equivalente evitadas por hogar y año" />
          <Stat tone="accent" value="9.200 a 10.000 t" label="de CO₂e evitadas por año por la flota de 4.000 sistemas, que genera 30.000 a 33.000 MWh/año" />
        </div>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <Table
            align="left"
            headers={['Métrica', 'Por sistema', 'Flota (4.000)']}
            rows={[
              ['Energía generada por año', '7.500 a 8.300 kWh', '30.000 a 33.000 MWh'],
              ['CO₂e evitadas por año', '2,3 a 2,5 t', '9.200 a 10.000 t'],
              ['Factor de emisión utilizado', '0,307 kgCO₂e/kWh (SADI 2023)', ''],
              ['Referencia nacional', '', 'Meta de 1 GW de GD a 2030'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              <Hi>Social</Hi>: el ahorro neto de USD 42/mes es una transferencia permanente hacia el hogar, sin desembolso inicial
              relevante. Reduce la barrera que excluye a los ingresos medios de la generación distribuida.
            </Body>
            <Body>
              <Hi>Sectorial</Hi>: estandariza procesos de instalación y habilitación, forma técnicos certificados y, como agregador de
              demanda de equipos importados, ayuda a formar precios de referencia locales.
            </Body>
            <Body>
              El perfil ESG habilita bonos verdes y financiamiento de multilaterales (BID, CAF) en la fase de madurez, reduciendo el costo
              de capital. La generación eléctrica representa el 23% de las emisiones de GEI del país.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Limitaciones y trabajo futuro',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 5.4" source="Informe TPP, sección 5.4.">
        <Title>Limitaciones del estudio y trabajo futuro</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-semibold">Limitaciones reconocidas</div>
            <Bullets
              items={[
                <><Hi>Churn 0%</Hi> durante 15 años. La cláusula de salida y el ahorro neto lo defienden, pero mudanzas o cambio de inquilino pueden requerir renegociación.</>,
                <><Hi>Sin financiamiento externo</Hi>: no se modela deuda ni estructura de capital óptima (WACC), que podría mejorar los indicadores.</>,
                <><Hi>Foco en AMBA</Hi>: no se modela la replicabilidad en provincias de alta irradiación (Mendoza, San Juan, Córdoba).</>,
                <><Hi>Ingresos constantes en Años 6 a 15</Hi>: supuesto conservador; no se modelan nuevas zonas, upgrades con baterías ni expansión provincial.</>,
              ]}
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Líneas de trabajo futuro</div>
            <Bullets
              items={[
                'Diseño del instrumento contractual bajo derecho argentino, con cláusulas de transferencia ante venta del inmueble o cambio de inquilino.',
                'Análisis del modelo de expansión con instrumentos de financiamiento del CAPEX.',
                'Investigación de mercado cuantitativa con hogares N1 del AMBA para medir demanda latente.',
                'Piloto de mercado con los primeros 200 sistemas del Año 1 para validar empíricamente churn, satisfacción y costo de adquisición.',
                'Modelar el churn con distribución de probabilidad y cuantificar su impacto sobre el VAN.',
              ]}
            />
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Viabilidad integral',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 5.2 y 5.5" source="Informe TPP, secciones 5.2 y 5.5.">
        <Title>Viabilidad integral: convergen las tres dimensiones</Title>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ['Mercado', ['954.152 viviendas aptas en SP1 y penetración residencial menor a 0,01%', 'Sin competidores directos en arrendamiento solar', 'Ahorro neto de 42% para el cliente, sobre el umbral de 20%', 'Tarifa post-normalización y spread contra UVA amplían el ahorro']],
            ['Técnica', ['Sistema estándar de 5,22 kWp con TOPCon e inversor de string DEYE/Huawei, tecnología madura', 'Instalación en 1 día con 2 técnicos; habilitación en 45 a 70 días hábiles', 'Monitoreo remoto en capa gratuita; 70% del mantenimiento remoto', 'Garantías de 10 a 15 años (inversor) y 25 a 30 años (módulos)']],
            ['Financiera', ['VAN USD +2.684.787 a TREMA 13%', 'TIR 26,4%, dentro del criterio de 15% a 30%', 'Payback 6,9 años; MOIC 4,31×', 'VAN positivo para toda TREMA de 8% a 20% y todo CAPEX de USD 1.500 a 3.000; pesimista en equilibrio']],
          ].map(([t, items]) => (
            <div key={t as string} className="rounded-lg border border-accent/40 bg-accent/10 p-4">
              <div className="font-serif text-lg font-semibold text-accent">{t as string}</div>
              <ul className="mt-2 flex flex-col gap-1.5 text-sm text-foreground/90">
                {(items as string[]).map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Body className="mt-5">
          El proyecto responde a la convergencia de tres condiciones estructurales de la Argentina de 2026: normalización tarifaria,
          restricción de acceso al capital en el segmento residencial y caída secular del costo fotovoltaico. La viabilidad no depende del
          escenario optimista: los indicadores son positivos con los valores vigentes de EMBI+ y tarifa a julio de 2026.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Cierre',
    block: B,
    node: (
      <Slide className="items-center justify-center text-center">
        <span className="font-serif text-sm font-semibold text-primary">SolarPower Energy</span>
        <h2 className="mt-4 max-w-4xl text-balance font-serif text-3xl font-bold leading-tight md:text-5xl">
          Con USD 4,19 M de capital máximo en riesgo, el proyecto construye en 5 años una cartera de 4.000 activos generadores de renta
          indexada
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat tone="accent" value="42%" label="ahorro neto del cliente" />
          <Stat tone="primary" value="26,4%" label="TIR en USD" />
          <Stat tone="primary" value="+2,68 M" label="VAN a TREMA 13% (USD)" />
          <Stat tone="accent" value="9.200 a 10.000 t" label="CO₂e evitadas por año" />
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Cardoso, Bautista · Sarti, Ricardo · Zotta, Jerónimo · FIUBA, TA019 / 92.99, 2026</p>
        <p className="mt-1 text-sm text-muted-foreground">Gracias. Quedamos a disposición para preguntas.</p>
      </Slide>
    ),
  },

  {
    nav: 'Bibliografía (1 de 2)',
    block: B,
    node: (
      <Slide block={B} chapter="Informe, Bibliografía">
        <Title>Bibliografía: normas, fuentes oficiales y académicas</Title>
        <div className="mt-4 grid gap-6 text-[11px] leading-snug text-muted-foreground md:grid-cols-2 md:text-xs">
          <div>
            <div className="mb-1 font-semibold text-foreground">Normas y regulaciones</div>
            <ul className="flex flex-col gap-1">
              <li>Ley N° 27.424 (2017), Régimen de Fomento a la Generación Distribuida. InfoLEG.</li>
              <li>Ley N° 27.191 (2015), Régimen de Fomento Nacional para Fuentes Renovables. InfoLEG.</li>
              <li>Ley N° 24.240 (1993, mod. 26.361/2008), Defensa del Consumidor, arts. 10 y 11.</li>
              <li>DNU 70/2023, Bases para la Reconstrucción de la Economía Argentina, Cap. XII. Boletín Oficial, 20/12/2023.</li>
              <li>Decreto 332/2022, Segmentación Tarifaria. Boletín Oficial, 08/06/2022.</li>
              <li>Decreto 986/2018 (reglamentación Ley 27.424); Res. ENRE 314/2018; Res. ENRE 100/2024.</li>
              <li>Secretaría de Energía, Res. SE 235/2024 (ago-2024) y Res. SE 287/2025 (04/07/2025).</li>
              <li>ENRE, cuadros tarifarios Edenor/Edesur, período 05/2026 y resolución tarifaria mar-2026.</li>
            </ul>
            <div className="mb-1 mt-3 font-semibold text-foreground">Informes y publicaciones oficiales</div>
            <ul className="flex flex-col gap-1">
              <li>Secretaría de Energía, Reporte Anual de Generación Distribuida 2024 (feb-2025).</li>
              <li>INDEC, Censo Nacional de Población, Hogares y Viviendas 2022, resultados definitivos (2023); IPC feb-2026.</li>
              <li>CAMMESA, Informe Mensual de Generación Renovable (abr-2024) e Informe de Generación 2023.</li>
              <li>BCRA, Comunicación A 5945 (2016); valores UVA 2024 a 2026; Informe de Política Monetaria 2024.</li>
              <li>CIPPEC (2023), Evolución de los subsidios energéticos en Argentina en % del PBI, 2004 a 2022.</li>
              <li>INTI / CADER (2024), Primer Censo Fotovoltaico Nacional.</li>
              <li>Secretaría de Energía / IPCC, factor de emisión SADI 2023 = 0,307 kgCO₂e/kWh.</li>
              <li>Gobierno de la Ciudad de Buenos Aires, Mapa del Potencial Solar.</li>
              <li>NDC Argentina 2021, UNFCCC.</li>
            </ul>
          </div>
          <div>
            <div className="mb-1 font-semibold text-foreground">Literatura académica</div>
            <ul className="flex flex-col gap-1">
              <li>Brealey, R. A., Myers, S. C., & Allen, F. (2023). Principles of Corporate Finance (14ª ed.). McGraw-Hill.</li>
              <li>Damodaran, A. (2022). Investment Valuation (3ª ed.). Wiley.</li>
              <li>Damodaran, A. (2026, enero). Equity Risk Premiums: The 2026 Edition; Betas by Sector (US). Damodaran Online.</li>
              <li>Sapag Chain, N., & Sapag Chain, R. (2014). Preparación y evaluación de proyectos (6ª ed.). McGraw-Hill.</li>
              <li>Kotler, P., & Armstrong, G. (2018). Principles of Marketing (17ª ed.). Pearson.</li>
              <li>Porter, M. E. (2008). The Five Competitive Forces That Shape Strategy. Harvard Business Review, 86(1), 78 a 93.</li>
              <li>Freije, I., & Scarafia, T. (2023). Fresh Strawberries S.R.L., Trabajo Profesional de Ingeniería Industrial, FIUBA.</li>
            </ul>
            <div className="mb-1 mt-3 font-semibold text-foreground">Informes de industria</div>
            <ul className="flex flex-col gap-1">
              <li>IRENA (2024). Renewable Power Generation Costs in 2023.</li>
              <li>SEIA / Wood Mackenzie (2024). U.S. Solar Market Insight: 2023 Year in Review.</li>
              <li>Solargis, Global Solar Atlas: Argentina.</li>
              <li>Our World in Data / IRENA (2024). Solar PV Module Prices, 1976 a 2023.</li>
              <li>Low Carbon Power (2025). Argentina Electricity Generation Mix, jul-2024 a jun-2025.</li>
              <li>PVKnowhow (2025). Solar Report Argentina.</li>
              <li>ENF Solar Directory (2024). Argentina Solar Installers.</li>
              <li>PowerMag (2024). A Global Look at Residential Solar Adoption Rates.</li>
              <li>JP Morgan (2026). EMBI+ Argentina. Bloomberg / Ámbito Financiero.</li>
            </ul>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Bibliografía (2 de 2)',
    block: B,
    node: (
      <Slide block={B} chapter="Informe, Bibliografía">
        <Title>Bibliografía: fuentes corporativas, técnicas y periodísticas</Title>
        <div className="mt-4 grid gap-6 text-[11px] leading-snug text-muted-foreground md:grid-cols-2 md:text-xs">
          <div>
            <div className="mb-1 font-semibold text-foreground">Informes anuales y fuentes corporativas</div>
            <ul className="flex flex-col gap-1">
              <li>Sunrun Inc. (2024). Annual Report 2023 (Form 10-K). U.S. SEC.</li>
              <li>Sunrun Inc. (2025). Q4 2024 Earnings Release y Full Year 2024 Financial Results.</li>
              <li>DEYE (2024 a 2025). Inversores de string residenciales, fichas técnicas.</li>
              <li>Huawei (2024 a 2025). FusionSolar Smart PV Solution, documentación técnica.</li>
              <li>LONGi Solar (2024). Hi-MO 7 Series, product specification sheet.</li>
            </ul>
            <div className="mb-1 mt-3 font-semibold text-foreground">Herramientas y datos técnicos</div>
            <ul className="flex flex-col gap-1">
              <li>PVGIS, Photovoltaic Geographical Information System, Comisión Europea (2024).</li>
              <li>Fraunhofer ISE; BloombergNEF; NREL (2024), datos de tecnologías de celdas y degradación.</li>
              <li>Normas IRAM 210013-17, IRAM 210013-21, IRAM 2184, IRAM 2281; AEA 90364-7-712; CIRSOC 102; IEC 60904-3, IEC 61215, IEC 62109, IEEE 1547.</li>
              <li>U.S. Energy Information Administration (2023). Electric Power Monthly.</li>
              <li>Comisión Europea / Eurostat (2023). Electricity prices for households in the EU, 2010 a 2023.</li>
            </ul>
          </div>
          <div>
            <div className="mb-1 font-semibold text-foreground">Artículos periodísticos y fuentes en línea</div>
            <ul className="flex flex-col gap-1">
              <li>pv magazine (2025, febrero). Argentina installs 307 MW of solar in 2024.</li>
              <li>pv magazine (2024, marzo). PV and prices: the not-so-fast uptake of solar in Argentina and Chile.</li>
              <li>Energy-Box (2025, julio). Argentina exceeds 78 MW of distributed generation and nears 3,000 user-generators in first half of 2025.</li>
              <li>Dialogue Earth (2024). Argentina targets huge expansion of renewable energy by 2030.</li>
              <li>Buenos Aires Times (2024, abril). Electricity bills in Buenos Aires metro region to soar up to 150%.</li>
              <li>Fernando Marull y Asociados (2024). Crédito hipotecario en % del PBI: Argentina vs. Chile, 1993 a 2023.</li>
              <li>Market Partners / Argentina en Datos (2024). MEP vs. UVA, enero 2016 a mayo 2024.</li>
              <li>Global Property Guide (2024 a 2025). Argentina Real Estate & Mortgage Market.</li>
              <li>Statista (2023). Precios de electricidad residencial por país.</li>
            </ul>
            <div className="mb-1 mt-3 font-semibold text-foreground">Cartografía de la presentación</div>
            <ul className="flex flex-col gap-1">
              <li>Natural Earth (dominio público), Admin 1: States, Provinces, 1:10m. Límites provinciales simplificados para los mapas de esta presentación.</li>
            </ul>
          </div>
        </div>
      </Slide>
    ),
  },
]

void Lead
