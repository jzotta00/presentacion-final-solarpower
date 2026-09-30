import { Home, Sun, Wallet, ShieldCheck, Cloud, Gauge, Megaphone, MapPin, Package, Tag } from 'lucide-react'
import { Slide, Title, Lead, Body, Bullets, Stat, Divider, Figura, Table, Bars, Pendiente } from './primitives'
import type { SlideDef } from './types'
import { Hi, Bad, Ok } from './types'

const B = '3 · Solución'

export const solucion: SlideDef[] = [
  {
    nav: 'Bloque 3',
    block: B,
    node: (
      <Divider
        number="3"
        title="Solución y comercialización"
        subtitle="Arrendamiento solar residencial con cuota en UVA: el modelo, la cuota, el ahorro y las 4P."
        items={['El modelo de arrendamiento', 'Comparativa de alternativas', 'Cuota UVA y spread contra tarifa', 'Ecuación de ahorro', 'Producto · Precio · Plaza · Promoción', 'Piloto y contrato']}
      />
    ),
  },

  {
    nav: 'El modelo',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 1.1 y 2.4.6" source="Informe TPP, secciones 1.1 y 2.4.6.">
        <Title>Arrendamiento solar: SolarPower instala y es dueña; el cliente paga una cuota menor a lo que ahorra</Title>
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-lg border border-primary/40 bg-primary/10 p-5">
            <div className="flex items-center gap-2 font-serif font-semibold">
              <Sun className="h-5 w-5 text-primary" /> SolarPower Energy
            </div>
            <Bullets
              dense
              className="mt-3"
              items={[
                'Instala el sistema de 5,22 kWp en el techo del cliente',
                'Retiene la propiedad del equipo durante todo el contrato',
                'Opera, monitorea, mantiene y asegura el sistema',
                'Gestiona la habilitación ante Edenor o Edesur',
                'Cobra una cuota mensual fija en UVA',
              ]}
            />
          </div>
          <div className="hidden flex-col items-center justify-center gap-2 text-xs text-muted-foreground md:flex">
            <span>energía ↓</span>
            <span>cuota UVA ↑</span>
          </div>
          <div className="rounded-lg border border-accent/40 bg-accent/10 p-5">
            <div className="flex items-center gap-2 font-serif font-semibold">
              <Home className="h-5 w-5 text-accent" /> El cliente
            </div>
            <Bullets
              dense
              className="mt-3"
              items={[
                'Paga un inicial de USD 600 que cubre la mano de obra',
                'Paga una cuota mensual fija en UVA por 5 años, con renovación automática',
                'Sigue conectado a la red: paga menos en la factura, no cero',
                'Ahorra desde el primer mes, sin deuda ni inversión',
                'Al final de cada ciclo: renovar, comprar a valor residual o remover',
              ]}
            />
          </div>
        </div>
        <Body className="mt-5">
          Es un contrato de locación de cosas (Código Civil y Comercial, arts. 1187 a 1226), no una venta de energía ni un crédito. Por
          eso no está sujeto a la regulación de comercialización eléctrica ni a la normativa del BCRA para entidades financieras.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Comparativa de modelos',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.4.4 a 2.4.8, Tabla 2.16" source="Elaboración propia con base en Sunrun (2024), IRENA (2023) y análisis propio.">
        <Title>Por qué arrendamiento y no venta, crédito o PPA</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Criterio', 'Compra directa', 'Crédito bancario', 'PPA', 'Arrendamiento (SolarPower)']}
            rows={[
              ['Inversión inicial', 'USD 3.000 a 4.000', 'Diferida (cuotas)', 'Ninguna', <Ok key="1">USD 600</Ok>],
              ['Propiedad del sistema', 'Cliente', 'Cliente', 'Proveedor', 'SolarPower'],
              ['Riesgo financiero del cliente', <Bad key="2">Alto</Bad>, <Bad key="3">Medio-alto (deuda)</Bad>, 'Bajo', <Ok key="4">Bajo</Ok>],
              ['Mantenimiento', 'Cliente', 'Cliente', 'Proveedor', <Ok key="5">SolarPower</Ok>],
              ['Predictibilidad de la cuota', 'Pago único', 'Variable (tasa + UVA)', 'Variable (producción)', <Ok key="6">Fija en UVA</Ok>],
              ['Complejidad regulatoria', 'Baja', 'Media (BCRA)', <Bad key="7">Alta (venta de energía)</Bad>, <Ok key="8">Baja (locación)</Ok>],
              ['Barrera de adopción', <Bad key="9">Muy alta</Bad>, <Bad key="10">Alta</Bad>, 'Media', <Ok key="11">Baja</Ok>],
              ['Escalabilidad del proveedor', 'No aplica', 'No aplica', 'Media', <Ok key="12">Alta</Ok>],
              ['Ahorro neto año 1 del cliente', 'Máximo (sin cuota)', 'Reducido (interés)', '10 a 30%', '30 a 42%'],
              ['Aplicabilidad en Argentina 2026', 'Limitada', 'Creciente', 'No hay', <Ok key="13">Óptima</Ok>],
            ]}
          />
        </div>
        <Body className="mt-3">
          Cinco razones: la barrera de capital, la aversión al endeudamiento de largo plazo con inflación de 33% i.a., la complejidad
          regulatoria del PPA, la gestión integral del activo durante 25 años, y la escalabilidad de una cartera de contratos
          financiable (Gross Earning Assets, validado por Sunrun con USD 17.800 M en 2024).
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Propuesta de valor',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.5.1 y 2.7.5" source="Informe TPP, secciones 2.5.1 y 2.7.5.">
        <Title>Propuesta de valor: un servicio, no un producto</Title>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            [Wallet, 'Accesibilidad financiera', 'Pago inicial de USD 600 en lugar de USD 3.000 a 4.000 de compra directa. Sin deuda bancaria ni garantía hipotecaria.'],
            [Gauge, 'Competitividad tarifaria', 'Cuota en UVA calibrada para que cuota más factura residual sea estrictamente menor a la factura previa.'],
            [ShieldCheck, 'Servicio integral', 'Mantenimiento preventivo y correctivo, monitoreo remoto, seguro del equipo y gestión del trámite ante la distribuidora.'],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Wallet
            return (
              <div key={t as string} className="rounded-lg border border-border bg-card/60 p-5">
                <I className="h-6 w-6 text-primary" />
                <div className="mt-3 font-serif font-semibold">{t as string}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d as string}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-6">
          <div className="mb-2 text-sm font-semibold">Diferenciadores frente a un instalador convencional de venta directa</div>
          <Bullets
            dense
            items={[
              'Baja barrera de entrada que amplía el mercado a hogares que no podrían financiar la compra.',
              'Contrato de 5 años con renovación automática y mantenimiento incluido: elimina la incertidumbre post-instalación.',
              'Cuota UVA que crece solo con el IPC, mientras la tarifa eléctrica crece más rápido en el contexto de normalización.',
              'Monitoreo remoto (DEYE Cloud / Huawei FusionSolar) y medidores de consumo que permiten verificar el ahorro real.',
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'La UVA',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.5.4 y 2.5.5" source="BCRA, Comunicación A 5945 (31/03/2016); BCRA, valores UVA 2024 a 2026; INDEC, IPC feb-2026; BCRA, créditos hipotecarios 2024. Figura 2.12 del informe: FMyA con base en BCRA y FRED.">
        <Title>La UVA: el instrumento que resuelve el contrato de largo plazo en Argentina</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-4">
            <Body>
              Creada por el BCRA en marzo de 2016, la UVA se actualiza a diario según el CER, que sigue al IPC del INDEC. Una cuota en
              UVA mantiene su poder adquisitivo constante: si los ingresos del hogar acompañan la inflación, el esfuerzo de pago no
              cambia. Para la empresa, protege el margen real de los ingresos frente a costos que también se indexan.
            </Body>
            <Bars
              height={300}
              unit="Variación anual de la UVA (%)"
              valueFormat={(v) => `${v.toLocaleString('es-AR')}%`}
              data={[
                { label: '2024 (fase de alta volatilidad)', value: 180.72, tone: 'destructive' },
                { label: '2025 (fase de desaceleración)', value: 31.28, tone: 'primary' },
                { label: 'Inflación i.a. feb-2026', value: 33.1, tone: 'muted' },
              ]}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Stat tone="primary" value="$2.007" label="valor de la UVA al 30/06/2026 (BCRA). Al 30/03/2026: $1.850,06" />
            <Stat value="> 11.000" label="hipotecas UVA originadas en 2024, el mejor año desde 2018, con más de una docena de bancos a 5,5% a 8,5% + CER" />
            <Body>
              La recuperación del crédito hipotecario UVA genera familiaridad con el instrumento en el segmento objetivo: quien ya tiene
              una hipoteca indexada entiende una cuota de arrendamiento en UVA.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Spread UVA vs. tarifa',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.2.10 y 2.5.4, Tabla 2.7" source="Elaboración propia en base a Ministerio de Economía y ENRE (escenarios de tarifa N1 2025 a 2030).">
        <Title>El spread entre la tarifa eléctrica y la UVA amplía el ahorro con el tiempo</Title>
        <Lead>
          La cuota ajusta por inflación general (UVA). La tarifa de red, durante la normalización, crece por encima de la inflación por
          la quita de subsidios y la actualización del VAD. El ahorro del cliente se amplía en términos reales sin modificar el contrato.
        </Lead>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <Table
            headers={['Escenario', 'Crecimiento real anual de la tarifa', 'Tarifa N1 estimada 2030 (USD/kWh)', 'Ahorro vs. cuota']}
            rows={[
              ['Conservador', '+10% / año', '0,16 a 0,19', '25 a 35%'],
              ['Base', '+15% / año', '0,19 a 0,24', '35 a 45%'],
              ['Optimista', '+20% / año', '0,24 a 0,30', '45 a 55%'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              Precios internacionales de referencia: Uruguay USD 0,26/kWh y Chile USD 0,19/kWh. La tarifa argentina post-normalización
              todavía está por debajo, lo que sugiere margen adicional de crecimiento real.
            </Body>
            <Body>
              En el modelo financiero este efecto se captura por cohortes: la cuota de cada contrato queda fija en UVA, pero cada nueva
              cohorte anual entra con una cuota mayor (+8% en años 1 a 3, +2% en años 4 a 5) mientras la tarifa de referencia sigue
              subiendo. Ver bloque financiero.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Ecuación de ahorro',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 4.1.2, Tabla 4.2" source="Elaboración propia con base en tarifa Edenor/Edesur sin subsidio, julio 2026; TC 1.485 ARS/USD; UVA 2.007 ARS (30/06/2026).">
        <Title>La ecuación de ahorro para el hogar tipo</Title>
        <Lead>Hogar N1 del AMBA, sin subsidio, consumo de 400 kWh/mes, sistema estándar de 5,22 kWp, cohorte base (Año 1).</Lead>
        <div className="mt-5 grid items-center gap-6 md:grid-cols-2">
          <Bars
            height={300}
            unit="USD por mes"
            valueFormat={(v) => `USD ${v}`}
            data={[
              { label: 'Factura sin solar (ahorro bruto)', value: 100, tone: 'destructive' },
              { label: 'Cuota SolarPower', value: 58, tone: 'primary' },
              { label: 'Ahorro neto del cliente', value: 42, tone: 'accent' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Table
              headers={['Concepto', 'USD/mes']}
              rows={[
                ['Ahorro bruto (factura eléctrica evitada)', '100'],
                ['(-) Cuota mensual de arrendamiento', '(58)'],
                ['= Ahorro neto mensual', '42'],
                ['Ahorro sobre factura previa', '42%'],
              ]}
              highlightLast
            />
            <Body>
              La cuota de <Hi>42,94 UVA/mes</Hi> equivale a 86.189 ARS/mes o USD 58 y captura el 58% del ahorro bruto. El 42% que
              retiene el cliente supera el umbral comercial de 30% y el criterio de viabilidad de 20% fijado en los objetivos.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Producto',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.7.4 y 2.7.5" source="Informe TPP, secciones 2.7.4 (posicionamiento) y 2.7.5 (producto).">
        <div className="flex items-center gap-2 text-primary">
          <Package className="h-5 w-5" />
          <span className="text-sm font-semibold">Mezcla comercial · Producto</span>
        </div>
        <Title className="mt-2">Producto: un contrato de servicio de 5 años, renovable, todo incluido</Title>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <Bullets
            items={[
              'Diseño personalizado del sistema según el perfil de consumo del hogar.',
              'Suministro e instalación de 9 módulos TOPCon de 580 Wp con inversor de string DEYE o Huawei on-grid (5,22 kWp), con pago inicial de USD 600.',
              'Tramitación completa de la conexión con la distribuidora (Edenor/Edesur) bajo Ley 27.424.',
              'Monitoreo permanente vía DEYE Cloud o Huawei FusionSolar, con app para el cliente.',
              'Mantenimiento preventivo y correctivo durante toda la vigencia. SolarPower retiene la propiedad.',
            ]}
          />
          <div className="rounded-lg border border-border bg-card/60 p-5">
            <div className="font-serif font-semibold">Posicionamiento</div>
            <p className="mt-2 text-sm text-muted-foreground">
              El proveedor de acceso a la energía solar con la menor barrera de entrada del mercado. Mensaje central: energía solar con un
              pago inicial reducido y una cuota mensual menor a lo que hoy se paga de luz, con mantenimiento incluido. La dimensión
              ambiental es el diferenciador complementario, con mayor resonancia en el segmento N1 urbano.
            </p>
            <div className="mt-4 font-serif font-semibold">Estrategia adoptada</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Diferenciación por modelo de negocio (arrendamiento con cuota UVA), foco geográfico concentrado en SP1 y posicionamiento
              en hogares conscientes del gasto energético y del impacto ambiental.
            </p>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Precio',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.7.6, Tabla 2.12" source="Informe TPP, sección 2.7.6 y Tabla 2.12. Valores del ejemplo: promedios anuales; la generación varía estacionalmente.">
        <div className="flex items-center gap-2 text-primary">
          <Tag className="h-5 w-5" />
          <span className="text-sm font-semibold">Mezcla comercial · Precio</span>
        </div>
        <Title className="mt-2">Precio: el cliente paga menos de lo que pagaba por su electricidad</Title>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <Table
            align="left"
            headers={['Componente', 'Descripción', 'Valor']}
            rows={[
              ['Pago inicial', 'Al momento de la instalación; cubre mano de obra', 'USD 600'],
              ['Cuota mensual', 'En UVA, fija durante el contrato', '42,94 UVA (USD 58, cohorte base)'],
              ['Factura residual', 'Consumo de red no cubierto por generación', 'Variable según consumo'],
              ['Ahorro neto', 'Factura previa menos (cuota + factura residual)', '42% en el hogar tipo'],
              ['Mantenimiento, monitoreo, seguro', 'Incluidos en la cuota', 'Sin cargo adicional'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <div className="rounded-lg border border-border bg-card/60 p-4 text-sm">
              <div className="font-serif font-semibold">Ejemplo ilustrativo del informe (promedio anual, en pesos)</div>
              <p className="mt-2 text-muted-foreground">
                Un hogar que pagaba $150.000/mes de luz pasa a pagar aproximadamente $50.000 a la distribuidora más una cuota de
                aproximadamente $50.000 a SolarPower: $100.000 en total, un 33% menos. El ahorro mensual real fluctúa con la estación.
              </p>
            </div>
            <Body>
              Principio de calibración: el costo total del servicio solar debe ser estrictamente inferior a la factura eléctrica previa.
              Es la condición necesaria de viabilidad comercial (Q menor que F).
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Plaza',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.5.2 y 2.7.7" source="Informe TPP, secciones 2.5.2 (modelo de operaciones) y 2.7.7 (canales).">
        <div className="flex items-center gap-2 text-primary">
          <MapPin className="h-5 w-5" />
          <span className="text-sm font-semibold">Mezcla comercial · Plaza</span>
        </div>
        <Title className="mt-2">Plaza: equipo comercial centralizado y alianzas de captación</Title>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-semibold">Ciclo comercial interno</div>
            <Bullets
              items={[
                'El equipo comercial identifica oportunidades, hace la evaluación preliminar del techo y presenta la propuesta.',
                'La plataforma interna valida la solicitud, asigna equipamiento del inventario y emite el contrato de arrendamiento.',
                'Instaladores propios ejecutan la obra bajo protocolos de calidad y seguridad de SolarPower.',
              ]}
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Canales complementarios de captación</div>
            <Bullets
              items={[
                'Alianzas con inmobiliarias y desarrolladoras de barrios privados.',
                'Acuerdos con fabricantes de aires acondicionados y electrodomésticos eficientes.',
                'Programa de referidos entre clientes existentes.',
                'Foco geográfico inicial: barrios de mayor nivel socioeconómico del AMBA (Palermo, Belgrano, Nordelta, Vicente López, San Isidro, Tigre).',
              ]}
            />
          </div>
        </div>
        <Body className="mt-5">
          El modelo centralizado da control directo sobre la calidad desde la venta hasta la post-instalación. A medida que el volumen
          escale, se incorporan instaladores subcontratados certificados bajo el estándar SolarPower, como hizo Sunrun en su fase de
          expansión.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Promoción',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.7.8 y 4.7.1" source="Informe TPP, sección 2.7.8 (promoción) y Tabla 4.19 (KPIs comerciales).">
        <div className="flex items-center gap-2 text-primary">
          <Megaphone className="h-5 w-5" />
          <span className="text-sm font-semibold">Mezcla comercial · Promoción</span>
        </div>
        <Title className="mt-2">Promoción: tres pilares de comunicación</Title>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ['Marketing digital segmentado', 'Publicidad en Meta Ads e Instagram dirigida a propietarios en los barrios objetivo del AMBA, con mensajes centrados en el ahorro concreto en la factura.'],
            ['Contenido educativo', 'Blog y canal de YouTube que expliquen cómo funciona la energía solar, qué es la Ley 27.424, qué son las UVA y cómo calcular el ahorro esperado.'],
            ['Programa de referidos', 'Cada cliente que refiere a un vecino o familiar recibe un mes de cuota sin cargo. Efecto de red a costo marginal muy bajo.'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-lg border border-border bg-card/60 p-5">
              <div className="font-serif font-semibold">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          <Stat tone="primary" value="≤ USD 250" label="CAC objetivo (gasto de marketing y ventas por contrato firmado)" />
          <Stat tone="primary" value="≥ 8%" label="tasa de conversión objetivo, contratos sobre leads calificados" />
          <Stat tone="accent" value="≥ 25%" label="contratos por referidos a partir del Año 3; CAC de referidos 60% menor" />
          <Stat tone="accent" value="≥ 90%" label="tasa de renovación contractual objetivo a partir del Año 6" />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Piloto operativo',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 1.1, 2.6.3 y 2.8" source="Informe TPP, sección 1.1 (fase piloto).">
        <Title>Validación empírica: el piloto de más de 20 instalaciones</Title>
        <Lead>
          Antes de este trabajo, SolarPower ejecutó una fase piloto con más de 20 sistemas residenciales instalados con distintas
          configuraciones (microinversores, inversores de string DEYE e inversores de string Huawei). Los resultados validaron la
          viabilidad técnica, comercial y operativa del modelo y sirvieron para seleccionar la configuración estándar.
        </Lead>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          <Bullets
            items={[
              <>Confirmó que los inversores de string DEYE/Huawei ofrecen la mejor relación costo-rendimiento frente a microinversores (2,5 a 3 veces más caros por Wp).</>,
              <>Validó la baja barrera de entrada, la cuota UVA competitiva y la satisfacción y retención de clientes.</>,
              <>Constituye la base empírica de la garantía de producción y del plan de mantenimiento.</>,
            ]}
          />
          <Pendiente title="Pendiente: datos del caso real" owner="Ricky">
            Pegar acá los datos de un cliente real del piloto: costo llave en mano, cuota inicial, valor de la opción de compra,
            diferencia contra compra directa, valor de cada componente, y los gráficos de generación real vs. estimada de la plataforma
            de monitoreo (DEYE Cloud o FusionSolar). Sin estos datos, esta slide se presenta solo con el texto de la izquierda.
          </Pendiente>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'El contrato (1 de 2)',
    block: B,
    node: (
      <Slide block={B} chapter="Contrato real de arrendamiento (piloto SolarPower, anonimizado)" source="Oferta y Contrato de Alquiler de Sistemas Fotovoltaicos, SolarPower Energy S.A.S., 2026 (cláusulas Primera a Séptima). Datos del cliente omitidos por privacidad.">
        <Title>El contrato: cómo se perfecciona, partes y condiciones económicas</Title>
        <div className="mt-3">
          <Table
            align="left"
            compact
            headers={['Cláusula', 'Contenido']}
            rows={[
              ['Cómo se perfecciona', 'No hay firma digital: SolarPower envía una carta de oferta (vigencia 15 días hábiles) y el cliente la acepta transfiriendo el pago inicial a la cuenta de la empresa.'],
              ['Partes', 'SolarPower Energy S.A.S. (sociedad por acciones simplificada ya constituida) como propietaria, y el cliente como arrendatario.'],
              ['Objeto', 'Sistema fotovoltaico instalado en el domicilio del cliente. La propiedad permanece en SolarPower.'],
              ['Plazo', '5 años, renovación automática por períodos de 5 años. Cualquiera de las partes puede no renovar avisando con 90 días de anticipación.'],
              ['Cuota', 'Fija en UVA (IVA incluido), actualizada por el valor BCRA. Pagadera a 30 días corridos de la factura.'],
              ['Pago inicial', 'Monto en pesos por instalación, logística y gestión del plan (equivalente a USD 600 en la cohorte base del modelo).'],
              ['Opción de compra', 'En cualquier momento del contrato, al día con los pagos. Precio decreciente mes a mes (Anexo II), descontando lo ya amortizado en cuotas.'],
              ['Mantenimiento y reparaciones', 'A cargo de SolarPower, sin costo salvo uso indebido o daño de terceros. Si no se resuelve en 30 días hábiles, el cliente tiene derecho a una reducción proporcional de la cuota.'],
              ['Seguro', 'Cobertura específica contra destrucción o rotura de paneles por granizo. Mientras el sistema está fuera de servicio por reemplazo, se suspende el cobro de la cuota.'],
              ['Garantía de producción', 'Si la producción real se desvía más de 20% de la esperada en el año, SolarPower acredita la diferencia al cliente.'],
            ]}
          />
          <Body className="mt-3">
            Esta tabla ya no es una descripción genérica basada en el informe: son las cláusulas reales de un contrato vigente del
            piloto, con los datos del cliente omitidos por privacidad. Reemplaza lo que antes era un supuesto sobre "cómo debería ser"
            el contrato. Sigue en la siguiente slide (mora, transferencia, mejoras, reportes, jurisdicción).
          </Body>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'El contrato (2 de 2)',
    block: B,
    node: (
      <Slide block={B} chapter="Contrato real de arrendamiento (piloto SolarPower, anonimizado)" source="Oferta y Contrato de Alquiler de Sistemas Fotovoltaicos, SolarPower Energy S.A.S., 2026 (cláusulas Octava a Decimocuarta y Anexo II). Datos del cliente omitidos por privacidad.">
        <Title>El contrato: salida, mora, transferencia y seguimiento</Title>
        <div className="mt-3 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Table
            align="left"
            compact
            headers={['Cláusula', 'Contenido']}
            rows={[
              ['Rescisión anticipada (cláusula de salida)', 'El cliente paga el costo de desinstalación del sistema (mano de obra), no el reintegro del pago inicial.'],
              ['Mora', 'Intereses punitorios a la tasa activa del Banco Nación a 30 días, devengados diariamente sobre la deuda actualizada por UVA.'],
              ['Transferencia del inmueble', 'El contrato se transfiere automáticamente al nuevo propietario, o el cliente ejerce la opción de compra antes de vender. Ante fallecimiento, pasa a los herederos.'],
              ['Mejoras futuras', 'SolarPower puede reemplazar el sistema por uno de mejor tecnología o agregar paneles/baterías sin costo adicional, avisando con 30 días de anticipación.'],
              ['Reportes mensuales', 'Energía producida, ahorro económico, reducción de CO₂ (equivalente en árboles) y rendimiento de los paneles.'],
              ['Jurisdicción', 'Tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, ley argentina.'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              La cláusula de transferencia ante venta del inmueble o fallecimiento, que el informe (5.4) marcaba como trabajo futuro
              pendiente, ya está resuelta en este contrato real: no hace falta un nuevo trámite, el contrato sigue con el nuevo
              propietario o los herederos.
            </Body>
            <Body>
              La cláusula de salida (pagar la desinstalación en vez de devolver el pago inicial) es más favorable para el cliente que
              reintegrar el downpayment, y consistente con el bajo nivel de rescisión anticipada que asume el modelo financiero (riesgo
              O5, índice bajo).
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },
]

void Figura
void Cloud
void Bad
void Hi
