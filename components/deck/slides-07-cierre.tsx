import { Leaf, Zap, Target, Wrench, TrendingUp } from 'lucide-react'
import { Slide, Title } from './primitives'
import type { SlideDef } from './types'
import { Frame, H, Hl, Kicker, Big, Stat, Chip, Panel, BlockDivider, COLOR } from './impact'

const B = '7 · Cierre'

export const cierre: SlideDef[] = [
  {
    nav: 'Bloque 7',
    block: B,
    node: (
      <BlockDivider
        number="7"
        title="Impacto y conclusiones"
        hook="Lo que cambia para el hogar, para el sector y para el país."
        topics={['Impacto ambiental', 'Limitaciones', 'Viabilidad integral']}
      />
    ),
  },

  {
    nav: 'Impacto ambiental',
    block: B,
    node: (
      <Frame tone="green" block={B} source="Factor de emisión de la red SADI 2023: 0,307 kgCO₂e/kWh (Secretaría de Energía, IPCC); NDC Argentina 2021">
        <div className="flex items-center gap-2 text-white/85">
          <Leaf className="h-6 w-6" />
          <Kicker className="!text-white/85">Impacto ambiental</Kicker>
        </div>
        <div className="mt-2 grid flex-1 grid-cols-[1.55fr_1fr] items-center gap-8 pb-5">
          <div>
            <div className="whitespace-nowrap font-serif text-[92px] font-extrabold leading-[0.95] tracking-tight text-white">9.200 a 10.000</div>
            <div className="mt-3 text-[30px] font-semibold leading-snug text-white/90">toneladas de CO₂ evitadas por año con la flota de 4.000 sistemas</div>
          </div>
          <div className="flex flex-col gap-7">
            <Stat value="2,3 a 2,5 t" size={46} tone="white" label="de CO₂ evitadas por hogar y año" />
            <Stat value="30.000 a 33.000" size={38} tone="white" label="MWh de energía limpia por año" />
            <div className="text-[20px] leading-snug text-white/80">Además: un ahorro permanente para el hogar y acceso a bonos verdes y multilaterales (BID, CAF).</div>
          </div>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Limitaciones y trabajo futuro',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, sección 5.4">
        <H size="lg" className="max-w-[1150px]">
          Lo que el estudio <Hl>no cubre</Hl> y lo que sigue
        </H>
        <div className="mt-6 grid flex-1 grid-cols-2 gap-6 pb-4">
          <Panel>
            <div className="text-[17px] font-bold uppercase tracking-wider text-destructive">Limitaciones</div>
            <ul className="mt-4 flex flex-col gap-3.5 text-[23px] leading-snug">
              {['Churn de 0% durante 15 años', 'No se modela deuda ni estructura óptima de capital', 'Foco en el AMBA, sin replicar en provincias', 'Ingresos constantes de los Años 6 a 15'].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-destructive" />
                  {t}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <div className="text-[17px] font-bold uppercase tracking-wider text-accent">Trabajo futuro</div>
            <ul className="mt-4 flex flex-col gap-3.5 text-[23px] leading-snug">
              {['Modelar el churn como distribución de probabilidad', 'Estudiar el financiamiento del CAPEX', 'Investigación de mercado con hogares N1 del AMBA', 'Piloto de mercado con los primeros 200 sistemas'].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Viabilidad integral',
    block: B,
    node: (
      <Frame block={B} source="Informe TPP, secciones 5.2 y 5.5">
        <H size="lg" className="max-w-[1150px]">
          Convergen las <Hl g>tres dimensiones</Hl>
        </H>
        <div className="mt-6 grid flex-1 grid-cols-3 gap-5 pb-4">
          {[
            [Target, 'Mercado', 'sun', [['954.152', 'viviendas aptas en SP1'], ['< 0,01%', 'de penetración residencial'], ['42%', 'de ahorro para el cliente']]],
            [Wrench, 'Técnica', 'green', [['5,22 kWp', 'sistema estándar maduro'], ['1 día', 'de instalación con 2 técnicos'], ['45 a 70', 'días hábiles de habilitación']]],
            [TrendingUp, 'Financiera', 'sun', [['26,4%', 'TIR en USD'], ['+USD 2,68 M', 'de VAN a TREMA 13%'], ['6,9 años', 'de payback']]],
          ].map(([I, t, tone, items]) => {
            const Ic = I as typeof Target
            return (
              <div key={t as string} className="flex flex-col rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Ic className="h-9 w-9" style={{ color: COLOR[tone as 'sun'] }} strokeWidth={1.8} />
                  <div className="font-serif text-[30px] font-extrabold" style={{ color: COLOR[tone as 'sun'] }}>
                    {t as string}
                  </div>
                </div>
                <div className="mt-5 flex flex-1 flex-col justify-between">
                  {(items as string[][]).map(([v, l]) => (
                    <div key={l}>
                      <div className="font-serif text-[40px] font-extrabold leading-none">{v}</div>
                      <div className="mt-1 text-[18px] opacity-70">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Frame>
    ),
  },

  {
    nav: 'Cierre',
    block: B,
    node: (
      <Frame tone="dark" className="items-center justify-center text-center">
        <div className="flex flex-1 flex-col items-center justify-center">
          <Kicker>SolarPower Energy</Kicker>
          <h2 className="mt-5 max-w-[1050px] text-balance font-serif text-[60px] font-extrabold leading-[1.05] tracking-tight">
            Con <Hl>USD 4,19 M</Hl> de capital máximo en riesgo, se construye en 5 años una cartera de <Hl g>4.000 activos</Hl> que generan renta indexada
          </h2>
          <div className="mt-10 grid grid-cols-4 gap-8">
            <Stat value="42%" size={56} tone="green" label="ahorro neto del cliente" />
            <Stat value="26,4%" size={56} tone="sun" label="TIR en USD" />
            <Stat value="+2,68 M" size={56} tone="sun" label="VAN a TREMA 13% (USD)" />
            <Stat value="9.200 a 10.000 t" size={40} tone="green" label="de CO₂ evitadas por año" />
          </div>
        </div>
        <div className="pb-2 text-center">
          <div className="font-serif text-[30px] font-bold">Gracias</div>
          <div className="mt-1 text-[16px] text-white/60">Cardoso, Bautista · Sarti, Ricardo · Zotta, Jerónimo · FIUBA, Trabajo Profesional de Ingeniería Industrial, 2026</div>
        </div>
      </Frame>
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

