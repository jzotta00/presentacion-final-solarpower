import { Slide, Title, Body, Bullets, Divider, Table, Pendiente } from './primitives'
import type { SlideDef } from './types'
import { Bad } from './types'

const B = 'Anexo'
const n = (v: number) => v.toLocaleString('es-AR')
const neg = (v: number) => (v === 0 ? '0' : v < 0 ? `(${n(Math.abs(v))})` : n(v))

const pl = {
  years: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5', 'Año 6', 'Año 7', 'Año 8', 'Año 9', 'Año 10', 'Año 11', 'Año 12', 'Año 13', 'Año 14', 'Año 15'],
  ingresos: [69600, 327200, 840000, 1661600, 2707650, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900, 3256900],
  opexDir: [8000, 37080, 93359, 183578, 301636, 370968, 382097, 393560, 405366, 417527, 430053, 442955, 456243, 469931, 484029],
  opexCorp: [100000, 150000, 200000, 280000, 350000, 250000, 250000, 260000, 270000, 280000, 290000, 300000, 310000, 320000, 330000],
  ebitda: [-38400, 140120, 546641, 1198022, 2056014, 2635932, 2624803, 2603340, 2581534, 2559373, 2536847, 2513945, 2490657, 2466969, 2442871],
  amort: [80000, 280000, 600000, 1080000, 1600000, 1520000, 1320000, 1000000, 520000, 0, 0, 0, 0, 0, 0],
  ebit: [-118400, -139880, -53359, 118022, 456014, 1115932, 1304803, 1603340, 2061534, 2559373, 2536847, 2513945, 2490657, 2466969, 2442871],
  tax: [0, 0, 0, 0, 91839, 390576, 456681, 561169, 721537, 895780, 887896, 879881, 871730, 863439, 855005],
  neto: [-118400, -139880, -53359, 118022, 364175, 725356, 848122, 1042171, 1339997, 1663592, 1648950, 1634064, 1618927, 1603530, 1587866],
  capex: [400000, 1000000, 1600000, 2400000, 2600000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  fcf: [-438400, -859880, -1053359, -1201978, -635825, 2245356, 2168122, 2042171, 1859997, 1663592, 1648950, 1634064, 1618927, 1603530, 1587866],
  fcfAcum: [-438400, -1298280, -2351639, -3553617, -4189442, -1944086, 224036, 2266207, 4126204, 5789796, 7438746, 9072811, 10691737, 12295267, 13883134],
  fd: [0.885, 0.7831, 0.6931, 0.6133, 0.5428, 0.4803, 0.4251, 0.3762, 0.3329, 0.2946, 0.2607, 0.2307, 0.2042, 0.1807, 0.1599],
  fcfDesc: [-387965, -673412, -730031, -737196, -345100, 1078486, 921583, 768183, 619165, 490075, 429877, 376988, 330527, 289720, 253885],
  vanAcum: [-387965, -1061377, -1791408, -2528603, -2873704, -1795218, -873634, -105451, 513713, 1003788, 1433666, 1810654, 2141181, 2430902, 2684787],
}

function plSlide(from: number, to: number, label: string, nota: string): SlideDef {
  const idx = Array.from({ length: to - from + 1 }, (_, i) => from + i)
  const row = (name: string, arr: number[], negStyle = false) => [name, ...idx.map((i) => (negStyle ? neg(arr[i]) : n(arr[i])))]
  const margin = idx.map((i) => (pl.ebitda[i] > 0 ? `${Math.round((pl.ebitda[i] / pl.ingresos[i]) * 100)}%` : '–'))
  return {
    nav: `A${label} · P&L años ${from + 1} a ${to + 1}`,
    block: B,
    node: (
      <Slide block={B} chapter={`Informe Tablas 4.8a a 4.8c`} source="Elaboración propia. USD constantes. Impuesto a las ganancias 35% con traslado de quebrantos.">
        <Title>A{label}. Estado de resultados proyectado, años {from + 1} a {to + 1}</Title>
        <div className="mt-4">
          <Table
            compact
            headers={['Línea (USD)', ...idx.map((i) => pl.years[i])]}
            rows={[
              row('(+) Ingresos', pl.ingresos),
              row('(-) OPEX directo flota', pl.opexDir.map((v) => -v), true),
              row('(-) OPEX corporativo', pl.opexCorp.map((v) => -v), true),
              row('= EBITDA', pl.ebitda, true),
              ['Margen EBITDA', ...margin],
              row('(-) Amortización', pl.amort.map((v) => -v), true),
              row('= EBIT', pl.ebit, true),
              row('(-) Impuesto 35%', pl.tax.map((v) => -v), true),
              row('= Resultado neto', pl.neto, true),
            ]}
          />
        </div>
        <Body className="mt-3">{nota}</Body>
      </Slide>
    ),
  }
}

export const anexoB: SlideDef[] = [
  plSlide(0, 4, '15', 'EBITDA positivo desde el Año 2 (43%); EBIT positivo en el Año 4; impuesto efectivo desde el Año 5 tras absorber el quebranto acumulado de USD 311.639 de los Años 1 a 3.'),
  plSlide(5, 9, '16', 'Régimen estacionario: ingresos constantes. La amortización baja de USD 1.520.000 (Año 6) a USD 0 (Año 10) a medida que cada cohorte completa sus 5 años.'),
  plSlide(10, 14, '17', 'Activos totalmente depreciados: EBIT = EBITDA. Los márgenes declinan levemente por el crecimiento del OPEX (3% anual directo, corporativo gradual).'),

  {
    nav: 'A18 · FCF completo',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 4.12" source="Elaboración propia. FCF = Resultado neto + Amortización − CAPEX.">
        <Title>A18. Flujo de caja libre de la compañía, años 1 a 15</Title>
        <div className="mt-4">
          <Table
            compact
            headers={['Año', 'EBIT', 'Impuesto', 'Resultado neto', 'Amortización', 'CAPEX', 'FCF anual', 'FCF acumulado']}
            rows={pl.years.map((y, i) => [y, neg(pl.ebit[i]), neg(-pl.tax[i]), neg(pl.neto[i]), n(pl.amort[i]), neg(-pl.capex[i]), neg(pl.fcf[i]), neg(pl.fcfAcum[i])])}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A19 · VAN acumulado',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 4.13" source="Elaboración propia. Factor de descuento (1,13)^-t.">
        <Title>A19. Cálculo del VAN a TREMA 13%, años 1 a 15</Title>
        <div className="mt-4">
          <Table
            compact
            headers={['Año', 'FCF anual (USD)', 'Factor de descuento', 'FCF descontado (USD)', 'VAN acumulado (USD)']}
            rows={[
              ...pl.years.map((y, i) => [y, neg(pl.fcf[i]), pl.fd[i].toFixed(4).replace('.', ','), neg(pl.fcfDesc[i]), neg(pl.vanAcum[i])]),
              ['VAN del proyecto', '', '', '', '+2.684.787'],
            ]}
            highlightLast
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A20 · Economía unitaria completa',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 4.11" source="Elaboración propia. Cohorte base: cuota USD 696/año; OPEX USD 80 +3%/año; CAPEX neto USD 2.000; descuento 13%.">
        <Title>A20. Economía unitaria por sistema, flujo descontado a 15 años</Title>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Table
            compact
            headers={['Año', 'Cuota', 'OPEX', 'Flujo neto', 'Factor 13%', 'FCF desc.']}
            rows={[
              ['0', '–', '–', '(2.000)', '1,0000', '(2.000,00)'],
              ['1', '696', '(80)', '616', '0,8850', '545,12'],
              ['2', '696', '(82)', '614', '0,7831', '480,93'],
              ['3', '696', '(85)', '611', '0,6931', '423,37'],
              ['4', '696', '(87)', '609', '0,6133', '373,46'],
              ['5', '696', '(90)', '606', '0,5428', '328,98'],
              ['VAN 5 años (TIR ≈ 16,1%)', '', '', '', '', '151,86'],
              ['6', '696', '(93)', '603', '0,4803', '289,65'],
              ['7', '696', '(95)', '601', '0,4251', '255,39'],
            ]}
          />
          <Table
            compact
            headers={['Año', 'Cuota', 'OPEX', 'Flujo neto', 'Factor 13%', 'FCF desc.']}
            rows={[
              ['8', '696', '(98)', '598', '0,3762', '224,93'],
              ['9', '696', '(101)', '595', '0,3329', '198,07'],
              ['10', '696', '(104)', '592', '0,2946', '174,43'],
              ['VAN 10 años (TIR ≈ 27,9%)', '', '', '', '', '1.295,32'],
              ['11', '696', '(107)', '589', '0,2607', '153,52'],
              ['12', '696', '(110)', '586', '0,2307', '135,18'],
              ['13', '696', '(113)', '583', '0,2042', '119,05'],
              ['14', '696', '(117)', '579', '0,1807', '104,63'],
              ['15', '696', '(120)', '576', '0,1599', '92,10'],
              ['VAN 15 años (TIR ≈ 29,5%)', '', '', '', '', '1.899,80'],
            ]}
            highlightLast
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A21 · Sensibilidad TREMA completa',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 4.16" source="Elaboración propia. EMBI+ implícito = TREMA − 8,41%.">
        <Title>A21. Sensibilidad del VAN a la TREMA, rango 8% a 20%</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['TREMA', 'EMBI+ implícito', 'VAN del proyecto (USD)', 'Evaluación']}
            rows={[
              ['8%', '≈ 0 bps', '5.186.728', 'Holgura muy amplia'],
              ['9%', '≈ 50 bps', '4.568.622', 'Holgura muy amplia'],
              ['10%', '≈ 150 bps', '4.016.508', 'Holgura muy amplia'],
              ['11%', '≈ 250 bps', '3.522.789', 'Holgura amplia'],
              ['12%', '≈ 350 bps', '3.080.822', 'Holgura amplia'],
              ['13% (base)', '≈ 450 bps', '2.684.787', 'Escenario base'],
              ['14%', '≈ 550 bps', '2.329.578', 'Holgura significativa'],
              ['15%', '≈ 650 bps', '2.010.709', 'Holgura significativa'],
              ['16%', '≈ 750 bps', '1.724.230', 'Holgura significativa'],
              ['18%', '≈ 950 bps', '1.234.920', 'Holgura moderada'],
              ['20%', '≈ 1.150 bps', '838.381', 'Holgura moderada'],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A22 · Riesgos macro y regulatorios',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tablas 4.23 y 4.24" source="Elaboración propia. P = probabilidad, I = impacto (1 a 5).">
        <Title>A22. Matriz de riesgos: macroeconómicos y regulatorios</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['ID', 'Riesgo', 'P', 'I', 'P×I', 'Mitigación']}
            rows={[
              ['M1', 'Aceleración inflacionaria sostenida (> 80% anual)', '2', '3', '6', 'Cuota UVA ajusta automáticamente; riesgo residual en morosidad'],
              ['M2', 'Devaluación abrupta (> 50%)', '2', '4', '8', 'Stock de equipos 2 a 3 meses; contratos de provisión a precio fijo'],
              ['M3', 'Congelamiento tarifario', '2', '5', '10', 'Cláusula de revisión de cuota; diversificación hacia baterías'],
              ['M4', 'Restricción a importaciones', '2', '4', '8', 'Múltiples importadores; proveedores con stock local'],
              ['M5', 'Recesión con caída del poder adquisitivo', '2', '3', '6', 'En recesión las tarifas también suben; modelo resiliente'],
              ['R1', 'Modificación adversa de la Ley 27.424', '1', '5', '5', 'Cláusula de revisión; reorientación a autoconsumo con batería'],
              ['R2', 'Cargos de respaldo a usuarios-generadores', '2', '4', '8', 'Res. SE 287/2025 los prohíbe; monitoreo regulatorio'],
              ['R3', 'Cambio de normativa UVA o sustitución del índice', '1', '4', '4', 'Cláusula de sustitución de índice'],
              ['R4', 'Demoras en certificación IRAM de inversores', '3', '2', '6', 'IEC 62109 aceptada como equivalente'],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A23 · Riesgos operativos y financieros',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tablas 4.25 y 4.26" source="Elaboración propia. Crítico: índice ≥ 12.">
        <Title>A23. Matriz de riesgos: operativos y financieros</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['ID', 'Riesgo', 'P', 'I', 'P×I', 'Mitigación']}
            rows={[
              ['O1', 'Fallas masivas de inversores (defecto de lote)', '1', '5', '5', 'Garantía 10 a 15 años; stock de reposición'],
              ['O2', 'Insuficiencia de técnicos certificados', '3', '3', '9', 'Formación continua; alianzas con escuelas técnicas e INTI'],
              ['O3', 'Daño a la propiedad del cliente', '2', '3', '6', 'Seguro RC obligatorio; protocolo estandarizado'],
              ['O4', 'Pérdida de conectividad del monitoreo', '3', '2', '6', 'Wi-Fi integrado + datalogger local con 7 días de almacenamiento'],
              ['O5', 'Rescisión anticipada (churn)', '1', '4', '4', 'Cláusula de salida (pago del costo de desinstalación); ahorro neto de USD 42/mes'],
              ['F1', 'Morosidad superior al 5%', '2', '4', '8', 'Débito automático; gestión temprana; penalización contractual'],
              ['F2', <Bad key="f2">Imposibilidad de acceder a financiamiento de largo plazo</Bad>, '3', '5', <Bad key="f2i">15</Bad>, 'Bancos locales, fondos verdes, multilaterales; flota como colateral'],
              ['F3', 'Deterioro del spread UVA / tarifa', '2', '3', '6', 'Monitoreo trimestral; cláusula de revisión; diversificación de producto'],
              ['F4', 'OPEX de mantenimiento superior al presupuestado', '2', '2', '4', 'Garantías; monitoreo preventivo; provisión del 2% sobre ingreso bruto'],
              ['F5', 'Devaluación que encarezca el CAPEX sin ajuste de ingresos', '2', '4', '8', 'Stock 2 a 3 meses; precio fijo trimestral; pausa de instalaciones si es necesario'],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A24 · KPIs completos',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tablas 4.19 a 4.22" source="Elaboración propia con base en Sunrun (2024) y Damodaran (2024).">
        <Title>A24. KPIs: fórmula, frecuencia, meta e impacto</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['KPI', 'Fórmula / método', 'Frecuencia', 'Meta', 'Impacto']}
            rows={[
              ['CAC', 'Gasto marketing + ventas / contratos firmados', 'Mensual', '≤ USD 250', 'Cada USD 50 menos mejora el VAN ~1,5%'],
              ['Tasa de conversión', 'Contratos / leads calificados', 'Mensual', '≥ 8%', 'Reduce el CAC efectivo'],
              ['Tasa de referidos', 'Contratos por referido / total', 'Trimestral', '≥ 25% (Año 3+)', 'CAC de referidos ~60% menor'],
              ['Renovación contractual', 'Renovados / vencimientos', 'Anual (Año 6+)', '≥ 90%', 'Determina ingresos Años 6 a 15'],
              ['LTV', 'Σ (cuota − OPEX) / (1+r)^t', 'Anual', '≥ USD 3.000', 'Techo del CAC (LTV/CAC ≥ 3)'],
              ['Morosidad a 30 días', 'Cuotas impagas > 30 días / emitidas', 'Mensual', '< 3%', 'Cada punto: ~USD 32.000/año menos con flota plena'],
              ['Margen EBITDA', 'EBITDA / ingresos', 'Trimestral', '≥ 79% (Año 8+)', 'Salud operativa'],
              ['Tasa de fallas técnicas', 'Sistemas con falla / activos', 'Mensual', '< 2%', 'Reduce OPEX correctivo'],
              ['Producción real vs. estimada', 'Real / estimada', 'Mensual', '≥ 95%', 'Bajo 90% activa compensación'],
              ['Performance Ratio', 'E real / (P pico × GII)', 'Mensual', '≥ 0,78', 'Calidad de instalación y mantenimiento'],
              ['Tiempo medio de resolución', 'Σ (resolución − alerta) / alertas', 'Mensual', '< 72 h', 'Minimiza pérdida por fallas'],
              ['Disponibilidad', 'Horas operativas / horas de sol', 'Anual', '≥ 99%', 'Cada punto: ~1% de ingresos'],
              ['NPS / CSAT', 'Encuesta 0 a 10 / 1 a 5', 'Trimestral / post-instalación', '≥ 50 / ≥ 4,2', 'Retención y referidos'],
              ['Rescisión anticipada', 'Rescisiones / activos', 'Anual', '< 1%', 'Consistente con cláusula de salida'],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A25 · Misión, visión y valores',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.7.1 a 2.7.3, Tabla 2.18" source="Informe TPP, sección 2.7.">
        <Title>A25. Misión, visión y valores</Title>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="rounded-lg border border-border bg-card/60 p-4">
              <div className="font-serif font-semibold">Misión</div>
              <p className="mt-1 text-sm text-muted-foreground">Brindar acceso a la energía solar residencial a través de un modelo de arrendamiento simple, confiable y completamente gestionado, eliminando las barreras de inversión. SolarPower instala, monitorea y mantiene el sistema durante toda la vigencia del contrato, garantizando un ahorro real desde el primer día.</p>
            </div>
            <div className="rounded-lg border border-border bg-card/60 p-4">
              <div className="font-serif font-semibold">Visión</div>
              <p className="mt-1 text-sm text-muted-foreground">Ser la empresa líder de servicios de energía solar distribuida en Argentina, con presencia en las tres regiones (SP1, SP2, SP3), desplegando USD 8 M en 5 años y construyendo un portafolio de activos bajo contrato con renovación automática.</p>
            </div>
          </div>
          <Table
            align="left"
            compact
            headers={['Valor', 'Descripción']}
            rows={[
              ['Confiabilidad', 'El sistema funciona, produce lo proyectado y respondemos ante problemas. Base de contratos de largo plazo.'],
              ['Transparencia', 'Producción, ahorro y mantenimiento visibles en tiempo real. Sin letra chica.'],
              ['Accesibilidad', 'La energía solar no debe ser un privilegio de quien puede pagar USD 3.000 de inversión inicial.'],
              ['Sostenibilidad', 'Cada sistema reduce la huella de carbono de un hogar; el impacto ambiental es el núcleo del negocio.'],
              ['Excelencia técnica', 'Inversores DEYE/Huawei, módulos TOPCon Tier 1, técnicos certificados bajo normas IRAM e internacionales.'],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A26 · Proveedores críticos',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.5.7 a 2.5.10" source="Informe TPP, secciones 2.5.7 a 2.5.10.">
        <Title>A26. Análisis de proveedores críticos</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Grupo', 'Peso en el costo', 'Situación del mercado', 'Estrategia']}
            rows={[
              ['Módulos fotovoltaicos', '35 a 40%', 'Oferta dominada por fabricantes chinos (JA Solar, LONGi, Trina, Canadian Solar); aranceles 14% a 28%; producción local limitada y más cara', '2 a 3 proveedores calificados; negociar volumen creciente'],
              ['Inversores', '', 'Múltiples proveedores con presencia local (DEYE, Huawei, Growatt); bajo riesgo de dependencia', 'DEYE principal, Huawei premium; garantías 10 a 15 años'],
              ['Estructuras y BOS', '15 a 20%', 'Muchos fabricantes locales e internacionales; bajo poder del proveedor', 'Especificaciones estandarizadas; contratos marco con 2 a 3 proveedores'],
              ['Instalación y mano de obra', '', 'Equipo interno reducido en Años 1 y 2; luego red de subcontratistas certificados', 'Certificación bajo estándar SolarPower; escalar sin flota propia fija'],
            ]}
          />
        </div>
        <Body className="mt-3">Plazo de reposición de importados: 60 a 90 días. Inventario rotante de 15 a 20 sistemas completos para no frenar instalaciones.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A27 · Material complementario',
    block: B,
    node: (
      <Slide block={B} chapter="Sugerido por el tutor" source="Contenido no incluido en el informe; se agrega como complemento para la defensa.">
        <Title>A27. Material complementario: qué es y por qué está separado</Title>
        <Body className="mt-3">
          El tutor sugirió sumar al anexo elementos que enriquecen la defensa pero que no forman parte del informe escrito: el
          mecanismo real del contrato y evidencia del piloto. Se presentan separados y etiquetados como complementarios para que el
          tribunal no los busque en el informe.
        </Body>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {[
            ['A28', 'Carta de oferta y aceptación', 'Cómo se perfecciona el contrato en la práctica: no hay firma digital.'],
            ['A29', 'Caso real del piloto', 'Datos de un contrato vigente, anonimizado.'],
            ['A30 a A32', 'Checklist interno', 'Material pendiente y correcciones al informe antes de la defensa.'],
            ['PDF', 'Folletos de SolarPower', 'Ricky tiene dos piezas propias para mostrar si el tribunal pregunta: "Sistemas solares On Grid, Off Grid e Híbridos" y el instructivo "Trámites a Distancia" (apoderamiento en TAD).'],
          ].map(([id, t, d]) => (
            <div key={id} className="flex gap-3 rounded-lg border border-border bg-card/50 p-3">
              <span className="font-serif font-bold text-primary">{id}</span>
              <div>
                <div className="text-sm font-semibold">{t}</div>
                <p className="text-xs text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A28 · Carta de oferta y aceptación',
    block: B,
    node: (
      <Slide block={B} chapter="Contrato real de arrendamiento (piloto SolarPower)" source="Oferta de Alquiler de Sistemas Fotovoltaicos, SolarPower Energy S.A.S., 2026.">
        <Title>A28. Cómo se perfecciona el contrato: no hay firma digital</Title>
        <Body className="mt-3">
          El mecanismo real no es una firma (digital ni manuscrita): SolarPower envía una carta de oferta con una vigencia de 15 días
          hábiles desde su recepción. La oferta se considera aceptada cuando el cliente transfiere el monto del pago inicial a la cuenta
          bancaria de SolarPower indicada en la oferta. A partir de ese depósito, los derechos y obligaciones del Anexo I (el contrato)
          quedan operativos y exigibles entre las partes.
        </Body>
        <Bullets
          className="mt-4"
          items={[
            'No se requiere firma electrónica ni certificado digital (Ley 25.506): la aceptación es por conducta, mediante transferencia bancaria a una cuenta identificada con CBU, alias y CUIT de SolarPower.',
            'Encuadre bajo Ley 24.240: la oferta y su Anexo I ya contienen descripción del objeto, precio, plazo y condiciones de rescisión (art. 10).',
            'Es más simple de gestionar a distancia que una firma digital: no depende de que el cliente tenga certificado propio.',
          ]}
        />
      </Slide>
    ),
  },

  {
    nav: 'A29 · Caso real del piloto',
    block: B,
    node: (
      <Slide block={B} chapter="Contrato real de arrendamiento, piloto SolarPower (anonimizado)" source="Oferta y Contrato de Alquiler de Sistemas Fotovoltaicos, Anexo II, SolarPower Energy S.A.S., 2026. Datos del cliente omitidos por privacidad.">
        <Title>A29. Caso real de un contrato vigente del piloto</Title>
        <div className="mt-3 grid gap-6 md:grid-cols-2">
          <Table
            align="left"
            compact
            headers={['Concepto', 'Valor']}
            rows={[
              ['Cuota mensual', '66,01 UVA (IVA incluido), ajustada por el valor BCRA'],
              ['Pago inicial (instalación, logística y gestión)', '$ 1.793.761 ARS'],
              ['Costo de desinstalación (cláusula de salida)', '$ 1.793.761 ARS = 905 UVA'],
              ['Producción estimada, Año 1 (Anexo II del contrato)', '≈ 13.315 kWh/año'],
              ['Opción de compra, mes 1 del Año 1', '6.021,86 UVA'],
              ['Opción de compra, mes 12 del Año 5', '5.621,75 UVA'],
              ['Plazo', '5 años, renovación automática'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              Este es un sistema real de mayor potencia que el estándar de 5,22 kWp usado para la evaluación financiera: su producción
              estimada (≈13.315 kWh/año) casi duplica los 8.289 kWh/año del sistema estándar, así que estas cifras no se deben promediar
              ni comparar directamente con las del capítulo 4. Sirve como evidencia de que el modelo de arrendamiento, la opción de compra
              decreciente y la cláusula de salida ya operan en la práctica, no como el caso base del análisis financiero.
            </Body>
            <Pendiente title="Pendiente" owner="Ricky">
              Falta la ficha técnica del sistema (módulos, inversor) y el monitoreo real (DEYE Cloud o FusionSolar) para comparar
              producción real vs. estimada.
            </Pendiente>
          </div>
        </div>
        <Body className="mt-2">Nombre y DNI del cliente omitidos por privacidad; el contrato completo está disponible si el tribunal lo solicita.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A30 · Material pendiente',
    block: B,
    node: (
      <Slide block={B} chapter="Control interno del equipo">
        <Title>A30. Material que falta completar en la presentación</Title>
        <Bullets
          className="mt-4"
          items={[
            'Ficha técnica y monitoreo real (DEYE Cloud o FusionSolar) del caso del piloto en A29. Responsable: Ricky.',
          ]}
        />
      </Slide>
    ),
  },

  {
    nav: 'A31 · Correcciones numéricas del informe',
    block: B,
    node: (
      <Slide block={B} chapter="Control interno del equipo">
        <Title>A31. Correcciones numéricas que el tribunal puede detectar</Title>
        <Bullets
          dense
          className="mt-4"
          items={[
            'Unificar la generación anual del sistema: 8.289 (Tabla 3.6), 8.101 (3.4.2), 5.500 a 6.500 (2.3.1), 5.000 a 8.300 (2.2.7), 4.612 (Figura 3.5).',
            'VAN base en Tabla 4.18 y en Tabla 5 del resumen: 2.720.580 debe ser 2.684.787.',
            'Secciones 3.6.3 y 3.6.4: "948" y "2.448" sistemas deben ser consistentes con los 4.000 de la Tabla 3.16 y del capítulo 4.',
            'Cuota como % de factura: capítulos 1 y 2 dicen 30 a 35% con ahorro 30 a 40%; capítulo 4 dice 58% del ahorro bruto con ahorro 42%. Alinear.',
            'Downpayment: USD 300 a 600 (cap. 1 y 2) vs. USD 600 (cap. 4). UVA: $1.850,06 (30/03) vs. $2.007 (30/06). Indicar cuál se usa.',
            'Equipos de instalación por año: informe 3.4.7 (3 a 4 en Año 1, más de 20 en Año 5) vs. resumen Tabla 1 (2 y 13).',
            'FODA, FCE y 2.4.6 dicen que el inicial de USD 600 es "aprox. 10% del sistema"; con USD 3.000 llave en mano es 20%. Corregir el porcentaje o la base. El deck ya dice solo "USD 600".',
            'Casas del Censo: 2.3.2 dice 12.044.162 pero la Tabla 2.5 (base real del embudo, 59,7% = 7.104.316) suma 11.900.361. Explicar la diferencia de 143.801 casas.',
            'Tabla 3.6: autoconsumo ~2.700 + inyección ~4.000 = 6.700 kWh, pero la producción es 8.289 kWh. La inyección debería ser ~5.500. El deck retiró esa fila.',
            'Tabla 4.18 / 4.6.3: el texto dice que el pesimista "no destruye valor" pero su VAN es negativo (-30.368). El deck ahora dice "levemente negativo".',
          ]}
        />
      </Slide>
    ),
  },

  {
    nav: 'A32 · Correcciones de contenido del informe',
    block: B,
    node: (
      <Slide block={B} chapter="Control interno del equipo">
        <Title>A32. Correcciones de figuras y contenido</Title>
        <Bullets
          dense
          className="mt-4"
          items={[
            'Figura 3.4: dice "4,8 kWp, 8 × 600 Wp, microinversores Enphase IQ8H"; el texto describe 9 × 580 Wp con inversor de string. Reemplazar la imagen.',
            'Figura 3.5: el título dice "4,8 kWp". Regenerar con el sistema de 5,22 kWp.',
            'Figura 2.1: la leyenda dice "2018 a 2024" pero el gráfico cubre mayo 2023 a abril 2024.',
            'Figura 3.7: dice "45 a 90 días calendario"; el texto dice 45 a 70 días hábiles.',
            'Resumen ejecutivo: la versión revisada tiene datos que contradicen el informe (Brasil/Chile/México, menos de 5.000 sistemas, degradación 0,4%, GHI 4,5 con PR 78%). Usar la versión corregida.',
            'Agregar a 3.4.4 y Tabla 3.10 el paso 0 de apoderamiento en TAD, ya presente en el deck.',
            'Escribir en 3.2.1 los motivos de elegir on-grid frente a híbrido y off-grid (el deck ya trae la razón cualitativa; falta cuantificarla si quieren).',
            'Sección 2.1.5 / 3.5.1: reemplazar la descripción genérica del contrato por las cláusulas reales (carta de oferta, cláusula de salida = desinstalación, seguro contra granizo, garantía 20%, transferencia automática, mejoras, reportes mensuales), ya usadas en el deck.',
            'Sección 1.1 / Fase 0: aclarar que SolarPower Energy S.A.S. ya está constituida (CUIT 30-71891376-0); la Fase 0 es poner en marcha la unidad de arrendamiento, no fundar la empresa.',
            'Si preguntan por qué la cuota no sube por inflación en dólares: el capítulo 4 está en USD constantes bajo paridad de poder adquisitivo estable (nota agregada en el deck).',
          ]}
        />
      </Slide>
    ),
  },
]
