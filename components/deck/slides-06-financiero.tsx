import { Slide, Title, Lead, Body, Bullets, Stat, Divider, Table, Bars, Lines, BarsPlusLine, HBars, RiskGrid, Pendiente } from './primitives'
import type { SlideDef } from './types'
import { Hi, Bad, Ok } from './types'

const B = '6 · Financiero'

/* ---- Datos del informe, capítulo 4 ---- */
const years = Array.from({ length: 15 }, (_, i) => `A${i + 1}`)
const ingresos = [69600, 327200, 840000, 1661600, 2707650, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900]
const ebitda = [-38400, 140120, 546641, 1198022, 2056014, 2635932, 2624803, 2603340, 2581534, 2559373, 2536847, 2513945, 2490657, 2466969, 2442871]
const resultadoNeto = [-118400, -139880, -53359, 118022, 364175, 725356, 848122, 1042171, 1339997, 1663592, 1648950, 1634064, 1618927, 1603530, 1587866]
const fcf = [-438400, -859880, -1053359, -1201978, -635825, 2245356, 2168122, 2042171, 1859997, 1663592, 1648950, 1634064, 1618927, 1603530, 1587866]
const fcfAcum = [-438400, -1298280, -2351639, -3553617, -4189442, -1944086, 224036, 2266207, 4126204, 5789796, 7438746, 9072811, 10691737, 12295267, 13883134]
const vanAcum = [-387965, -1061377, -1791408, -2528603, -2873704, -1795218, -873634, -105451, 513713, 1003788, 1433666, 1810654, 2141181, 2430902, 2684787]

const fmtM = (v: number) => `${(v / 1e6).toLocaleString('es-AR', { maximumFractionDigits: 1 })} M`
const fmtUSD = (v: number) => `USD ${v.toLocaleString('es-AR')}`

export const financiero: SlideDef[] = [
  {
    nav: 'Bloque 6',
    block: B,
    node: (
      <Divider
        number="6"
        title="Evaluación económico-financiera"
        subtitle="Modelo por cohortes a 15 años en USD constantes, TREMA por CAPM ajustado por riesgo país, VAN, TIR, payback, sensibilidad y riesgos."
        items={['Supuestos y CAPEX', 'Cuota por cohorte y OPEX', 'Ingresos, EBITDA y P&L', 'TREMA por CAPM', 'Economía unitaria y FCF', 'VAN, TIR, payback, MOIC', 'Sensibilidad y escenarios', 'Riesgos y KPIs']}
      />
    ),
  },

  {
    nav: 'Supuestos del modelo',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.1.5, Tabla 4.6" source="Elaboración propia; BCRA (UVA 30/06/2026); TC oficial 30/06/2026; JP Morgan EMBI+ / Bloomberg (05/07/2026); Damodaran (ene-2026).">
        <Title>Supuestos macroeconómicos y contractuales del escenario base</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Variable', 'Supuesto base', 'Justificación']}
            rows={[
              ['Moneda del análisis', 'USD constantes 2026', 'Elimina el ruido inflacionario'],
              ['Tipo de cambio', '1.485 ARS/USD (30/06/2026)', 'TC oficial bajo crawling peg; modelar en USD elimina riesgo devaluatorio del análisis'],
              ['UVA', '2.007 ARS (30/06/2026)', 'Cuota 42,94 UVA/mes = 86.189 ARS/mes = USD 58/mes'],
              ['Cuota de nuevas cohortes', '+8% Años 1 a 3; +2% Años 4 a 5', 'Sigue la normalización tarifaria; las cuotas ya firmadas quedan fijas en UVA'],
              ['OPEX directo por sistema', 'USD 80/año, +3% anual', 'Inflación de mano de obra local'],
              ['Plazo del contrato', '5 años + renovación automática', 'Horizonte de análisis 15 años = tres ciclos'],
              ['Amortización contable', '5 años lineal (USD 400/sistema/año)', 'Coincide con el plazo contractual; genera escudo fiscal en la fase de inversión'],
              ['Tasa de churn', '0%', 'Cláusula de salida (reintegro de USD 600) y ahorro neto de USD 42/mes desincentivan la rescisión'],
              ['Impuesto a las ganancias', '35%', 'Con traslado de quebrantos hasta absorción total'],
              ['EMBI+ Argentina', '450 bps', 'Valor al 05/07/2026: 412 bps, redondeado conservadoramente. Mínimo desde agosto de 2019 (2.400 bps en dic-2023)'],
              ['TREMA', '13% anual en USD', 'CAPM: rf 4,50% + β 0,71 × ERP 5,50% + 4,50% riesgo país'],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'CAPEX por sistema',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.1.1, Tabla 4.1" source="Elaboración propia con base en cotizaciones FOB + costos de internación, 2026.">
        <Title>CAPEX: USD 3.000 llave en mano, USD 2.000 netos para SolarPower</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <HBars
            max={3000}
            valueFormat={(v) => `USD ${v.toLocaleString('es-AR')}`}
            data={[
              { label: 'Módulos (9 × 580 Wp TOPCon)', value: 1300, tone: 'primary' },
              { label: 'Inversor de string 5 kW', value: 400, tone: 'primary' },
              { label: 'Estructura y BOS', value: 500, tone: 'primary' },
              { label: 'Mano de obra y habilitación', value: 350, tone: 'primary' },
              { label: 'Logística y contingencia 5%', value: 250, tone: 'primary' },
              { label: 'Total llave en mano (incl. IVA)', value: 3000, tone: 'default' },
              { label: '(-) Pago inicial del cliente', value: 600, tone: 'destructive' },
              { label: '(-) Crédito fiscal IVA recuperable', value: 400, tone: 'destructive' },
              { label: 'CAPEX neto SolarPower', value: 2000, tone: 'accent' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Stat tone="accent" value="USD 2.000" label="capital que inmoviliza SolarPower por sistema instalado" />
            <Stat tone="primary" value="USD 8.000.000" label="inversión total en 5 años para 4.000 sistemas" />
            <Body>
              El precio de USD 3.000 (frente a USD 3.500 de distribución) se logra por importación directa de módulos e inversores. El
              pago inicial de USD 600 cubre íntegramente la mano de obra y funciona como señal de compromiso. El crédito fiscal de IVA
              (USD 400) se recupera en el período fiscal. Amortización contable: USD 400/sistema/año durante 5 años.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Cuota por cohorte',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.1.2, Tabla 4.3" source="Elaboración propia. Cuota base: tarifa Edenor/Edesur sin subsidio julio 2026; TC 1.485; UVA 2.007.">
        <Title>Modelo de cohortes: cada contrato fija su cuota en UVA; cada nueva cohorte entra más alta</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Table
            headers={['Año', 'Cohorte (sistemas nuevos)', 'Cuota anual (USD)', 'Cuota mensual (USD)', 'Variación']}
            rows={[
              ['1', '200', '696', '58', 'Cohorte base'],
              ['2', '500', '752', '63', '+8%'],
              ['3', '800', '812', '68', '+8%'],
              ['4', '1.200', '828', '69', '+2%'],
              ['5', '1.300', '845', '70', '+2%'],
              ['6 a 15', 'Sin instalaciones', 'Fijas', 'Fijas', 'Flota plena'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              Una vez firmado, el contrato queda fijo en UVA: no hay crecimiento real de la cuota para ese cliente. Pero la tarifa de
              referencia sin solar sigue creciendo durante la normalización, así que cada cohorte anual nueva se calibra con una cuota
              mayor manteniendo el umbral de 30% de ahorro para el cliente nuevo.
            </Body>
            <Body>
              El crecimiento aplicado es 8% anual mientras la normalización tarifaria está activa (Años 1 a 3) y 2% cuando se considera
              esencialmente completada (Años 4 y 5). A partir del Año 6 no se instalan sistemas nuevos en el escenario base, por lo que
              los ingresos quedan constantes en USD.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'OPEX',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.1.3, Tabla 4.4" source="Elaboración propia. Monitoreo en capa gratuita: DEYE Cloud y Huawei FusionSolar para flotas residenciales.">
        <Title>Costos operativos: USD 80 por sistema y año, más estructura corporativa</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Table
            align="left"
            headers={['OPEX directo por sistema (Año 1)', 'USD/año']}
            rows={[
              ['Mantenimiento preventivo anual (limpieza + revisión)', '60'],
              ['Monitoreo remoto (plataformas cloud en free tier)', '0'],
              ['Seguro de equipos (póliza de flota)', '10'],
              ['Mantenimiento correctivo promedio', '10'],
              ['Total OPEX directo por sistema', '80'],
            ]}
            highlightLast
          />
          <div className="flex flex-col gap-3">
            <Table
              compact
              headers={['Año', 'OPEX directo flota (USD)', 'OPEX corporativo (USD)']}
              rows={[
                ['1', '8.000', '100.000'],
                ['2', '37.080', '150.000'],
                ['3', '93.359', '200.000'],
                ['4', '183.578', '280.000'],
                ['5', '301.636', '350.000'],
                ['6 a 15', '370.968 a 484.029', '250.000 a 330.000'],
              ]}
            />
            <Body>
              El OPEX directo crece 3% anual por inflación de mano de obra y se aplica sobre la flota promedio del año. El corporativo
              (dirección, administración, comercial) baja en el Año 6 al terminar la expansión y luego crece gradualmente.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Ingresos y EBITDA a 15 años',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.2 y 4.3, Tablas 4.7 y 4.8" source="Elaboración propia. Ingresos por cohortes; sistemas nuevos generan 6 meses de cuota en su primer año.">
        <Title>Perfil en J: ingresos crecen con las cohortes y se estabilizan en USD 3,26 M</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Lines
            height={270}
            unit="USD (millones)"
            valueFormat={fmtM}
            labels={years}
            series={[
              { name: 'Ingresos', values: ingresos, tone: 'primary' },
              { name: 'EBITDA', values: ebitda, tone: 'accent' },
              { name: 'Resultado neto', values: resultadoNeto, tone: 'default', dashed: true },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Stat tone="primary" value="USD 3.256.900" label="ingresos anuales constantes con la flota plena de 4.000 sistemas (Años 6 a 15)" />
            <Stat tone="accent" value="79% a 81%" label="margen EBITDA en los Años 6 a 10; 75% a 78% en los Años 11 a 15 por crecimiento del OPEX" />
            <Body>
              EBITDA positivo desde el Año 2 (43% de margen). El resultado neto es negativo en los Años 1 a 3 por la amortización
              acelerada frente a ingresos todavía chicos, y salta a partir del Año 4. Resultado neto Año 10: USD 1.663.592; Año 15: USD
              1.587.866.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Break-even y escudo fiscal',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.3.1 y 4.3.2, Tabla 4.9" source="Elaboración propia. Tabla 4.9 del informe.">
        <Title>Cuatro break-even y el escudo fiscal de la amortización</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Table
            align="left"
            headers={['Indicador de break-even', 'Se alcanza en', 'Nivel de ingresos']}
            rows={[
              ['EBITDA', 'Año 2', 'USD 327.200 (flota ~700)'],
              ['EBIT', 'Año 4', 'USD 1.661.600 (flota 2.700)'],
              ['Resultado neto', 'Año 4', 'Impuesto = 0 por quebranto acumulado'],
              ['FCF acumulado (payback)', 'Año 6,9', 'FCF acumulado positivo en el transcurso del Año 7'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              La amortización en 5 años sobre activos con vida útil mayor (módulos 25 años, inversores 10 a 15) crea un escudo fiscal
              diferido: crece de USD 80.000 (Año 1) a USD 1.600.000 (Año 5), baja escalonadamente (1.520.000, 1.320.000, 1.000.000,
              520.000) y llega a cero en el Año 10, cuando EBIT = EBITDA.
            </Body>
            <Body>
              El quebranto acumulado de los Años 1 a 3 (USD 311.639) se absorbe a partir del Año 4; el primer año con impuesto efectivo
              es el Año 5 (USD 91.839). Ese patrón explica el salto del resultado neto entre los Años 6 y 10.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'TREMA por CAPM',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.4, Tabla 4.10" source="U.S. Treasury / Bloomberg (jul-2026); Damodaran Online, Betas by Sector y ERP (ene-2026); JP Morgan EMBI+ Argentina (05/07/2026, vía Bloomberg y Ámbito). Metodología: Damodaran (2012) para mercados emergentes.">
        <Title>Tasa de corte: CAPM ajustado por riesgo soberano</Title>
        <div className="mt-4 rounded-lg border border-primary/40 bg-primary/10 p-4 text-center font-serif text-lg md:text-2xl">
          TREMA = r<sub>f</sub> + β × (R<sub>m</sub> − r<sub>f</sub>) + r<sub>país</sub> = 4,50% + 0,71 × 5,50% + 4,50% = <Hi>12,91% ≈ 13%</Hi>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Table
            align="left"
            compact
            headers={['Componente', 'Valor', 'Fuente y justificación']}
            rows={[
              ['Tasa libre de riesgo (rf)', '4,50%', 'US Treasury 10 años, julio 2026 (rango 4,46% a 4,49%)'],
              ['Beta desapalancado (β)', '0,71', 'Damodaran, sector Power / Solar-Renewable, ene-2026. Sunrun β = 0,73, SunPower β = 0,69; media 0,71'],
              ['Prima de riesgo de mercado (ERP)', '5,50%', 'Damodaran, ERP Estados Unidos ene-2026; prima geométrica 1928 a 2025; centro del rango 4,5% a 6,0%'],
              ['Riesgo soberano (EMBI+)', '4,50% (450 bps)', 'JP Morgan EMBI+ Argentina 05/07/2026: 412 bps, redondeado conservadoramente. Mínimo desde ago-2019; 2.400 bps en dic-2023'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              Descomposición: 4,50% libre de riesgo + 3,91% de riesgo sistemático del sector = 8,41%. Los 4,50 puntos restantes son el
              riesgo país, cuyo peso relativo se redujo mucho desde 2023. La TREMA de 13% es comparable con proyectos de renovables en
              mercados emergentes de riesgo moderado (Brasil, Colombia, Perú, 2019 a 2022).
            </Body>
            <Body>
              Sensibilidad al EMBI+: 300 bps llevan la TREMA a 11,4%; 700 bps a 15,4%. Factor de descuento del Año 15 a 13%: (1,13)^-15 =
              0,1599. Criterio de decisión: TIR mayor que TREMA equivale a VAN positivo.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Economía unitaria',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.5.1, Tabla 4.11" source="Elaboración propia. Cohorte base: cuota USD 696/año fija, OPEX USD 80/año +3%, CAPEX neto USD 2.000, descuento al 13%.">
        <Title>Economía unitaria: cada sistema crea valor desde el primer contrato</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Bars
            height={300}
            unit="TIR unitaria por horizonte (%)"
            valueFormat={(v) => `${v.toLocaleString('es-AR')}%`}
            data={[
              { label: '5 años (primer contrato)', value: 16.1, tone: 'primary' },
              { label: '10 años (una renovación)', value: 27.9, tone: 'primary' },
              { label: '15 años (dos renovaciones)', value: 29.5, tone: 'accent' },
              { label: 'TREMA', value: 13, tone: 'destructive' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Table
              headers={['Horizonte', 'VAN unitario (USD, 13%)', 'TIR unitaria']}
              rows={[
                ['5 años', '151,86', '≈ 16,1%'],
                ['10 años', '1.295,32', '≈ 27,9%'],
                ['15 años', '1.899,80', '≈ 29,5%'],
              ]}
            />
            <Body>
              Flujo neto anual del sistema: USD 616 en el Año 1 bajando a USD 576 en el Año 15 por el crecimiento del OPEX. Con CAPEX
              de USD 2.500 (compra a distribuidores) la TIR a 5 años era 7,1% y no cubría la TREMA: la importación directa transforma la
              rentabilidad unitaria. Cada renovación agrega TIR sin nueva inversión.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Flujo de caja libre',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.5.2, Tabla 4.12" source="Elaboración propia. FCF = Resultado neto + Amortización − CAPEX, con impuesto al 35% y traslado de quebrantos.">
        <Title>Flujo de caja libre: cinco años de inversión, diez de distribución</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <BarsPlusLine labels={years} bars={fcf} line={fcfAcum} unit="USD (millones)" valueFormat={fmtM} barName="FCF anual" lineName="FCF acumulado" />
          <div className="flex flex-col gap-3">
            <Stat tone="destructive" value="USD 4.189.442" label="máximo drawdown de capital al cierre del Año 5: pico de capital requerido" />
            <Stat tone="primary" value="6,9 años" label="payback: el acumulado pasa de -1.944.086 (fin Año 6) a +224.036 (fin Año 7); 6 + 1.944.086 / 2.168.122" />
            <Stat tone="accent" value="USD 13.883.134" label="FCF neto acumulado al cierre del Año 15" />
            <Body>
              No hace falta aportar los USD 8 M de golpe: desde el break-even de EBITDA en el Año 2, la propia cartera financia una parte
              creciente del CAPEX. Las llamadas de capital netas de los Años 1 a 5 suman USD 4,19 M.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'VAN, TIR, payback',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.5.3 y 4.5.4, Tablas 4.13 y 4.14" source="Elaboración propia. VAN al 13% sobre los FCF de la Tabla 4.12; TIR obtenida numéricamente.">
        <Title>Indicadores del proyecto: viable con holgura amplia</Title>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat tone="accent" value="USD +2.684.787" label="VAN a TREMA 13%, 15 años" />
          <Stat tone="accent" value="26,4%" label="TIR anual en USD; spread de +13,4 pp sobre la TREMA" />
          <Stat tone="primary" value="6,9 años" label="payback (FCF acumulado = 0)" />
          <Stat tone="primary" value="4,31×" label="MOIC: distribuciones sobre capital llamado" />
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Lines
            height={300}
            unit="VAN acumulado (USD millones, descontado al 13%)"
            valueFormat={fmtM}
            labels={years}
            series={[{ name: 'VAN acumulado', values: vanAcum, tone: 'accent' }]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              El VAN acumulado se vuelve positivo entre los Años 8 y 9. La TIR de 26,4% queda dentro del rango de 15% a 30% fijado como
              criterio de viabilidad en los objetivos del trabajo, y el ahorro del cliente (42%) supera el mínimo de 20%.
            </Body>
            <Body>
              El VAN sería cero recién a una TREMA de 26,4%, equivalente a un EMBI+ de aproximadamente 1.800 bps, nivel que Argentina
              no registra desde 2020.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Perspectiva del inversor',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.5.5, Tabla 4.15" source="Elaboración propia. Estructura all-equity: el flujo del inversor es idéntico al FCF de la compañía.">
        <Title>Propuesta al inversor: USD 4,19 M llamados, USD 18,07 M distribuidos</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Bars
            height={300}
            unit="USD (millones)"
            valueFormat={fmtM}
            data={[
              { label: 'Llamadas de capital (Años 1 a 5)', value: -4189442, tone: 'destructive' },
              { label: 'Distribuciones (Años 6 a 15)', value: 18072576, tone: 'accent' },
              { label: 'Neto acumulado (Año 15)', value: 13883134, tone: 'primary' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Table
              align="left"
              headers={['Concepto', 'Valor']}
              rows={[
                ['Total llamadas de capital (Años 1 a 5)', 'USD 4.189.442'],
                ['Total distribuciones (Años 6 a 15)', 'USD 18.072.576'],
                ['FCF neto acumulado (Año 15)', 'USD 13.883.134'],
                ['MOIC (distribuciones / llamadas)', '4,31×'],
                ['TIR del inversor', '26,4% anual en USD'],
                ['Payback del capital', '6,9 años'],
              ]}
            />
            <Body>
              Sin deuda, la TIR del inversor coincide con la del proyecto. El perfil (inversión intensiva 5 años, distribución 10 años,
              activos con contratos recurrentes) es el de los inversores de infraestructura en mercados emergentes.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Sensibilidad a la TREMA',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.6.1, Tabla 4.16" source="Elaboración propia. EMBI+ implícito = TREMA − 8,41%.">
        <Title>Sensibilidad a la TREMA: VAN positivo en todo el rango de 8% a 20%</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Lines
            height={250}
            unit="VAN del proyecto (USD millones)"
            valueFormat={fmtM}
            labels={['8%', '9%', '10%', '11%', '12%', '13%', '14%', '15%', '16%', '18%', '20%']}
            series={[{ name: 'VAN', values: [5186728, 4568622, 4016508, 3522789, 3080822, 2684787, 2329578, 2010709, 1724230, 1234920, 838381], tone: 'accent' }]}
          />
          <div className="flex flex-col gap-3">
            <Table
              compact
              headers={['TREMA', 'EMBI+ implícito', 'VAN (USD)']}
              rows={[
                ['8%', '≈ 0 bps', '5.186.728'],
                ['11%', '≈ 250 bps', '3.522.789'],
                ['13% (base)', '≈ 450 bps', '2.684.787'],
                ['15%', '≈ 650 bps', '2.010.709'],
                ['18%', '≈ 950 bps', '1.234.920'],
                ['20%', '≈ 1.150 bps', '838.381'],
              ]}
            />
            <Body>
              La TREMA es la variable de mayor impacto porque afecta el descuento de todos los flujos. Incluso a 20% (EMBI+ de 1.150
              bps) el VAN sigue siendo positivo. El margen de 13,4 pp entre TIR y TREMA absorbe deterioros severos del riesgo país.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Sensibilidad al CAPEX',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.6.2, Tabla 4.17" source="Elaboración propia. TREMA 13%, horizonte 15 años.">
        <Title>Sensibilidad al CAPEX: viable incluso volviendo al precio de distribución</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Bars
            height={300}
            unit="VAN del proyecto (USD millones)"
            valueFormat={fmtM}
            data={[
              { label: 'USD 1.500', value: 3625355, tone: 'accent' },
              { label: 'USD 1.750', value: 3157462, tone: 'accent' },
              { label: 'USD 2.000 (base)', value: 2684787, tone: 'primary' },
              { label: 'USD 2.250', value: 2206387, tone: 'primary' },
              { label: 'USD 2.500', value: 1722252, tone: 'muted' },
              { label: 'USD 3.000', value: 721212, tone: 'destructive' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Table
              compact
              headers={['CAPEX neto por sistema', 'VAN (USD)', 'TIR']}
              rows={[
                ['1.500', '3.625.355', '36,1%'],
                ['1.750', '3.157.462', '30,7%'],
                ['2.000 (base)', '2.684.787', '26,4%'],
                ['2.250', '2.206.387', '23,0%'],
                ['2.500', '1.722.252', '20,1%'],
                ['3.000', '721.212', '15,5%'],
              ]}
            />
            <Body>
              Si los costos de importación subieran 50% (de USD 2.000 a USD 3.000 netos), el proyecto mantiene VAN de USD 721.212 y TIR
              de 15,5%, todavía por encima de la TREMA. El CAPEX es la segunda variable de mayor palanca porque determina la inversión
              total y el drawdown máximo.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Tres escenarios',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.6.3, Tabla 4.18" source="Elaboración propia. Horizonte 15 años. Los escenarios combinan EMBI+, escala de instalaciones y CAPEX por sistema.">
        <Title>Escenarios: el pesimista queda prácticamente en equilibrio, el optimista supera USD 6 M</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Table
            align="left"
            compact
            headers={['Variable', 'Pesimista', 'Base', 'Optimista']}
            rows={[
              ['EMBI+ Argentina', '700 bps', '450 bps', '300 bps'],
              ['TREMA resultante', '15,4%', '12,9% ≈ 13%', '11,4%'],
              ['Sistemas instalados', '2.700', '4.000', '4.850'],
              ['CAPEX neto por sistema', 'USD 2.500', 'USD 2.000', 'USD 1.500'],
              ['Inversión total', 'USD 6.750.000', 'USD 8.000.000', 'USD 7.275.000'],
              ['VAN del proyecto', <Bad key="v1">(USD 30.368)</Bad>, <Ok key="v2">USD 2.684.787</Ok>, <Ok key="v3">USD 6.065.491</Ok>],
              ['TIR del proyecto', '15,2%', '26,4%', '40,0%'],
              ['Payback', '8,3 años', '6,9 años', '6,0 años'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Bars
              height={300}
              unit="TIR por escenario (%)"
              valueFormat={(v) => `${v.toLocaleString('es-AR')}%`}
              data={[
                { label: 'Pesimista', value: 15.2, tone: 'destructive' },
                { label: 'Base', value: 26.4, tone: 'primary' },
                { label: 'Optimista', value: 40.0, tone: 'accent' },
              ]}
            />
            <Body>
              En el pesimista (EMBI 700 bps, CAPEX de distribución, menor escala), TIR 15,2% frente a TREMA 15,4%: prácticamente en
              equilibrio, con una destrucción de valor marginal (VAN de USD -30.368 sobre USD 6,75 M invertidos). La viabilidad no
              depende del escenario optimista.
            </Body>
            <Pendiente title="Nota para el equipo: VAN base en Tabla 4.18">
              La Tabla 4.18 del informe (y la Tabla 5 del resumen) muestran VAN base de USD 2.720.580. El valor correcto, consistente con
              las Tablas 4.13 y 4.14 y con las conclusiones, es USD 2.684.787. Corregir antes de la defensa.
            </Pendiente>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Matriz de riesgos',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.8, Tablas 4.23 a 4.27" source="Elaboración propia. Escala 1 a 5 de probabilidad (P) e impacto (I); índice = P × I; crítico si ≥ 12.">
        <Title>Diecinueve riesgos evaluados; uno crítico: el acceso a financiamiento de largo plazo</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[2fr_3fr]">
          <RiskGrid
            risks={[
              { id: 'M1', name: 'Aceleración inflacionaria', p: 2, i: 3 },
              { id: 'M2', name: 'Devaluación abrupta', p: 2, i: 4 },
              { id: 'M3', name: 'Congelamiento tarifario', p: 2, i: 5 },
              { id: 'M4', name: 'Restricción a importaciones', p: 2, i: 4 },
              { id: 'M5', name: 'Recesión', p: 2, i: 3 },
              { id: 'R1', name: 'Modificación adversa Ley 27.424', p: 1, i: 5 },
              { id: 'R2', name: 'Cargos de respaldo', p: 2, i: 4 },
              { id: 'R3', name: 'Cambio normativa UVA', p: 1, i: 4 },
              { id: 'R4', name: 'Demoras certificación IRAM', p: 3, i: 2 },
              { id: 'O1', name: 'Falla masiva de inversores', p: 1, i: 5 },
              { id: 'O2', name: 'Insuficiencia de técnicos', p: 3, i: 3 },
              { id: 'O3', name: 'Daño a propiedad del cliente', p: 2, i: 3 },
              { id: 'O4', name: 'Pérdida de conectividad', p: 3, i: 2 },
              { id: 'O5', name: 'Rescisión anticipada', p: 1, i: 4 },
              { id: 'F1', name: 'Morosidad > 5%', p: 2, i: 4 },
              { id: 'F2', name: 'Sin financiamiento de largo plazo', p: 3, i: 5 },
              { id: 'F3', name: 'Deterioro spread UVA/tarifa', p: 2, i: 3 },
              { id: 'F4', name: 'OPEX superior', p: 2, i: 2 },
              { id: 'F5', name: 'Devaluación encarece CAPEX', p: 2, i: 4 },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Table
              compact
              headers={['Categoría', 'Riesgos', 'Críticos (≥ 12)', 'Moderados (6 a 11)', 'Bajos (< 6)']}
              rows={[
                ['Macroeconómicos', '5', '0', '3', '2'],
                ['Regulatorios', '4', '0', '2', '2'],
                ['Operativos', '5', '0', '3', '2'],
                ['Financieros', '5', '1 (F2)', '2', '2'],
                ['Total', '19', '1', '10', '8'],
              ]}
              highlightLast
            />
            <Bullets
              dense
              items={[
                <><Bad>F2 (índice 15)</Bad>: el CAPEX de USD 8 M excede la capacidad de autofinanciamiento de una empresa nueva. Mitigación: bancos locales, fondos verdes, multilaterales, flota como colateral.</>,
                <><Hi>M3 (índice 10)</Hi>, congelamiento tarifario: cláusula de revisión de cuota y diversificación hacia almacenamiento con baterías.</>,
                <>O5, rescisión anticipada, baja a índice 4 por la cláusula de reintegro del downpayment y el ahorro neto de USD 42/mes.</>,
              ]}
            />
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'KPIs y tablero de control',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.7, Tablas 4.19 a 4.22" source="Elaboración propia con base en Sunrun (2024) y Damodaran (2024).">
        <Title>Indicadores clave de desempeño y tablero de control</Title>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {[
            ['Comerciales', [['CAC', '≤ USD 250'], ['Conversión', '≥ 8%'], ['Pipeline', '≥ 3× meta mensual'], ['Referidos', '≥ 25% (Año 3+)'], ['Renovación', '≥ 90% (Año 6+)']]],
            ['Financieros', [['LTV', '≥ USD 3.000'], ['LTV / CAC', '≥ 3,0×'], ['Morosidad 30 días', '< 3%'], ['Margen EBITDA', '≥ 79% (Año 8+)'], ['FCF acumulado', 'positivo Año 7']]],
            ['Técnicos', [['Tasa de fallas', '< 2%'], ['Producción real / estimada', '≥ 95%'], ['Performance Ratio', '≥ 0,78'], ['Tiempo de resolución', '< 72 h'], ['Disponibilidad', '≥ 99%']]],
            ['Satisfacción', [['NPS', '≥ 50'], ['CSAT', '≥ 4,2 / 5'], ['Renovación a 5 años', '≥ 90%'], ['Rescisión anticipada', '< 1%']]],
          ].map(([t, kpis]) => (
            <div key={t as string} className="rounded-lg border border-border bg-card/60 p-4">
              <div className="font-serif font-semibold">{t as string}</div>
              <ul className="mt-2 flex flex-col gap-1 text-xs">
                {(kpis as string[][]).map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-2">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-semibold tabular-nums">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Body className="mt-4">
          Tablero en tres niveles: ejecutivo (flota activa, ingreso mensual recurrente, morosidad, NPS en semáforo), operativo
          (KPIs técnicos y comerciales semanales y mensuales con alertas de desvío) y analítico (por cohorte, zona y perfil de cliente).
          Implementación sobre Looker Studio o Metabase, alimentado por CRM, API de monitoreo y módulo de facturación UVA. Cada punto de
          morosidad reduce ingresos en ~USD 32.000/año con la flota plena; cada USD 50 menos de CAC mejora el VAN ~1,5%.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Conclusiones financieras',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.9" source="Informe TPP, conclusiones del capítulo 4.">
        <Title>Conclusiones de la evaluación económico-financiera</Title>
        <div className="mt-4">
          <Bullets
            items={[
              <>CAPEX neto de USD 2.000 por sistema (USD 3.000 llave en mano por importación directa, menos USD 600 de inicial y USD 400 de IVA) es financiable para una empresa emergente con acceso a capital de crecimiento.</>,
              <>La economía unitaria arroja TIR de 16,1% a 5 años (ya sobre la TREMA) y 29,5% a 15 años: cada sistema crea valor desde el primer contrato.</>,
              <>Ingresos de USD 69.600 (Año 1) a un plateau de USD 3.256.900 (Años 6 a 15). EBITDA Año 10: USD 2.559.373 (79%); Año 15: USD 2.442.871 (75%).</>,
              <>VAN <Hi>USD +2.684.787</Hi>, TIR <Hi>26,4%</Hi>, payback <Hi>6,9 años</Hi>, drawdown máximo USD 4.189.442, MOIC <Hi>4,31×</Hi>.</>,
              <>Sensibilidad: VAN positivo para toda TREMA entre 8% y 20% y para todo CAPEX entre USD 1.500 y 3.000. El optimista llega a VAN USD 6,1 M y TIR 40%.</>,
              <>Un único riesgo crítico (F2, financiamiento de largo plazo), mitigable con diversificación de fuentes y la flota como colateral.</>,
            ]}
          />
        </div>
      </Slide>
    ),
  },
]

void Lead
void fmtUSD
