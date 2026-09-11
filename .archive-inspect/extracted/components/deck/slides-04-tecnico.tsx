import { Slide, Title, Lead, Body, Bullets, Stat, Divider, Figura, Table, Steps, Pendiente } from './primitives'
import type { SlideDef } from './types'
import { Hi, Bad, Ok } from './types'

const B = '4 · Técnico'

export const tecnico: SlideDef[] = [
  {
    nav: 'Bloque 4',
    block: B,
    node: (
      <Divider
        number="4"
        title="Estudio técnico"
        subtitle="El sistema estándar de 5,22 kWp: tecnología, arquitectura on-grid, balance neto, dimensionamiento, habilitación y operación."
        items={['Sistema estándar', 'Módulos TOPCon e inversor de string', 'Arquitectura on-grid y balance neto', 'Dimensionamiento con PVGIS', 'Habilitación ante Edenor/Edesur', 'Monitoreo, mantenimiento y modelo operativo']}
      />
    ),
  },

  {
    nav: 'Sistema estándar',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.1 y 3.7" source="Datasheets LONGi Hi-MO 7 (2024), DEYE SUN-5K-SG04LP3 y Huawei SUN2000-5KTL-M1 (2024). Informe TPP, Tablas 3.1 y 3.3.">
        <Title>El activo: sistema fotovoltaico on-grid de 5,22 kWp</Title>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat tone="primary" value="9 × 580 Wp" label="módulos TOPCon N-type bifaciales Tier 1 (referencia LONGi Hi-MO 7), eficiencia 21,2%" />
          <Stat tone="primary" value="5.220 Wp" label="potencia pico DC, en dos strings (5 + 4 módulos) sobre dos canales MPPT independientes" />
          <Stat value="5.000 W AC" label="inversor de string monofásico DEYE o Huawei, 230 V, 50 Hz, eficiencia pico 97,6% a 98,4%" />
          <Stat value="1,044" label="ratio DC/AC: leve sobredimensionamiento habitual que maximiza captura con mínimo recorte" />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Bullets
            dense
            items={[
              'Tensión de circuito abierto del string mayor: 5 × 49,32 V = 246,6 V, dentro del rango MPPT (90 a 520/560 V) y lejos de la zona de riesgo PID.',
              'Balance de sistema: estructura de aluminio anodizado, cable solar 4 mm² con conectores MC4 IP67, seccionador DC, termomagnética 25 A, diferencial tipo A 30 mA, protección de interfaz de red y descargadores tipo 1+2.',
              'Cumple ENRE 314/2018 (anti-isla IEEE 1547), IRAM 210013 e instalación según AEA 90364-7-712.',
            ]}
          />
          <Bullets
            dense
            items={[
              'Garantías: módulos 12 años de producto y 30 años lineal de rendimiento (≥ 85% al año 25); inversor 10 años, extensible a 15.',
              'Vida útil: módulos 25 a 30 años; inversor 12 a 15 años. El modelo financiero prevé un reemplazo de inversor por sistema dentro del mantenimiento correctivo.',
              'Monitoreo integrado por Wi-Fi hacia DEYE Cloud o Huawei FusionSolar, sin gateway adicional.',
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Tecnología de celdas',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.1.2 y 3.1.3, Tabla 3.2, Figura 3.1" source="Elaboración propia con datos de Fraunhofer ISE, BloombergNEF, datasheets LONGi (2024). Figura 3.1 del informe.">
        <Title>Por qué TOPCon: mejor coeficiente de temperatura y mínima degradación inicial</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[3fr_2fr]">
          <Figura src="/figuras/fig-3-1-curvas-iv.png" caption="Figura 3.1. Curvas I-V y P-V del módulo TOPCon de 580 Wp bajo STC, verano AMBA (50 °C) y día nublado (600 W/m²). FF = 0,810." />
          <Table
            align="left"
            compact
            headers={['Parámetro', 'PERC', 'TOPCon', 'HJT']}
            rows={[
              ['Eficiencia módulo comercial', '20 a 23%', <Ok key="1">22 a 26%</Ok>, '22 a 23%'],
              ['Coef. temperatura Pmpp', <Bad key="2">-0,36 a -0,38 %/°C</Bad>, <Ok key="3">-0,30 a -0,31 %/°C</Ok>, '-0,24 a -0,26 %/°C'],
              ['Degradación inicial (LID)', <Bad key="4">1,5 a 2,5%</Bad>, <Ok key="5">0,5 a 1,0%</Ok>, '< 0,5%'],
              ['Degradación anual posterior', '0,45 a 0,55%', '0,40 a 0,50%', '0,40 a 0,50%'],
              ['Cuota de mercado 2024', '~20%', <Ok key="6">~65%</Ok>, '~8%'],
              ['Costo relativo', 'Referencia', '+5 a 10%', <Bad key="7">+15 a 20%</Bad>],
            ]}
          />
        </div>
        <Body className="mt-3">
          En un verano del AMBA la célula supera 55 °C: con -0,30 %/°C la potencia real cae 9% (580 Wp a 528 W), frente a -0,38 %/°C
          del PERC. Para un contrato con garantía de producción desde el año 1, el LID menor a 1% es decisivo.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Degradación a 30 años',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.1.4, Figura 3.2" source="Elaboración propia con datos de LONGi Solar, JA Solar y NREL (2024). Figura 3.2 del informe.">
        <Title>Degradación: el activo conserva más del 90% de su potencia al año 20</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[3fr_2fr]">
          <Figura src="/figuras/fig-3-2-degradacion-tec.png" caption="Figura 3.2. Curvas de degradación a 30 años: PERC (2% + 0,55%/año), TOPCon estándar (1% + 0,45%/año) y TOPCon premium (0,5% + 0,40%/año, garantía del fabricante)." />
          <div className="flex flex-col gap-3">
            <Stat tone="accent" value="92,3%" label="retención al año 20 bajo garantía del fabricante (TOPCon premium): 4.818 Wp de 5.220 Wp" />
            <Stat tone="primary" value="90,4%" label="retención al año 20 bajo el escenario estándar (1% + 0,45%/año): 4.719 Wp" />
            <Body>
              Mecanismos: LID (mínimo en n-type sin boro), LeTID, PID (mitigado por tensión DC de 200 a 250 V y puesta a tierra), y
              degradación gradual del encapsulante, backsheet y contactos. SolarPower descuenta la degradación en la producción
              estimada y agrega un margen conservador de 10% por variabilidad climática.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Inversor de string',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.1.5 y 3.1.6, Tabla 3.3" source="Fichas técnicas DEYE (2024) y Huawei (2024); certificación IEC 62109. Informe TPP, Tabla 3.3.">
        <Title>Inversor de string con doble MPPT: la elección validada en el piloto</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Table
            align="left"
            compact
            headers={['Parámetro', 'DEYE SUN-5K-SG04LP3', 'Huawei SUN2000-5KTL-M1']}
            rows={[
              ['Potencia AC nominal', '5.000 W', '5.000 W'],
              ['Potencia DC máxima de entrada', '6.500 W', '7.500 W'],
              ['Rango MPPT por canal', '90 a 520 V', '90 a 560 V'],
              ['MPPT / strings por MPPT', '2 / 1', '2 / 2'],
              ['Eficiencia pico', '97,6%', '98,4%'],
              ['Protección', 'IP65', 'IP65'],
              ['Garantía', '10 años (ext. 15)', '10 años (ext. 15)'],
              ['Comunicación y monitoreo', 'Wi-Fi + RS485 · DEYE Cloud', 'Wi-Fi + RS485 + Ethernet · FusionSolar'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Bullets
              dense
              items={[
                <>Costo por Wp: <Hi>USD 0,08 a 0,10/W</Hi> frente a USD 0,25 a 0,35/W de microinversores (2,5 a 3 veces más).</>,
                <>Doble MPPT: divide los 9 módulos en dos strings (5 + 4), de modo que una sombra en uno no afecta al otro; mitiga el "efecto árbol de Navidad" del entorno urbano.</>,
                <>Un solo equipo montado en pared a nivel accesible: instalación más simple, diagnóstico remoto por canal y reemplazo rápido (RMA en 3 a 7 días hábiles).</>,
                <>DEYE como inversor principal por presencia local y precio; Huawei como alternativa premium.</>,
              ]}
            />
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Arquitectura on-grid',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.2.1, Figura 3.4" source="Elaboración propia. Figura 3.4 del informe.">
        <Title>Arquitectura del sistema on-grid</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[3fr_2fr]">
          <Figura src="/figuras/fig-3-4-diagrama-ongrid.png" caption="Figura 3.4. Diagrama de bloques del sistema on-grid SolarPower: dos strings DC (amarillo), inversor, tablero del hogar, medidor bidireccional y conexión con la red de Edenor/Edesur (verde). Monitoreo por Wi-Fi." />
          <div className="flex flex-col gap-3">
            <Body>
              Durante las horas de sol, los módulos generan corriente continua que el inversor convierte en alterna de 230 V y 50 Hz
              con factor de potencia mayor a 0,99. La energía se inyecta al tablero del hogar mediante un interruptor dedicado.
            </Body>
            <Body>
              Si la generación supera el consumo instantáneo, el excedente fluye a la red y el medidor bidireccional lo registra como
              exportación. Si el consumo supera la generación (de noche), la red cubre la diferencia. No hay gestión activa de cargas:
              ambas fuentes se suman en el tablero.
            </Body>
            <Body>
              Todos los sistemas SolarPower son on-grid e incluyen medición de consumo, producción y autoconsumo.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Balance neto (net metering)',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.2.2, Tabla 3.4" source="Elaboración propia con datos ENRE y CAMMESA (2024). Tarifa T1R y precio MEM aproximados a octubre 2024; la tarifa varía mensualmente.">
        <Title>Cómo funciona el balance neto de la Ley 27.424</Title>
        <Lead>
          Factura = R × T_T1R − I × T_MEM. El consumo de red (R) se paga a tarifa minorista; la inyección (I) se acredita al precio del
          mercado mayorista (MEM), que es menor. Por eso la energía vale más autoconsumida que inyectada.
        </Lead>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Table
            align="left"
            compact
            headers={['Concepto', 'Ejemplo mes típico AMBA (octubre)']}
            rows={[
              ['Consumo total del hogar (C)', '380 kWh'],
              ['Generación solar (G)', '430 kWh'],
              ['Autoconsumo in situ (A ≈ 50% de G)', '~190 kWh'],
              ['Inyección a la red (I = G − A)', '240 kWh'],
              ['Consumo de red (R = C − A)', '190 kWh'],
              ['Costo del consumo de red (190 × ~$106)', 'ARS 20.140'],
              ['Crédito por inyección (240 × ~$65)', '(ARS 15.600)'],
              ['Factura neta antes de cargos fijos', 'ARS 4.540'],
              ['Factura sin solar (380 × ~$106)', 'ARS 40.280'],
              ['Reducción de la factura de energía', '~88,7%'],
            ]}
            highlightLast
          />
          <div className="flex flex-col gap-3">
            <Body>
              Los créditos no utilizados se acumulan sin vencimiento durante el contrato y compensan la mayor demanda de red en invierno.
              En el AMBA el crédito se genera típicamente en primavera y en días de verano con bajo uso de aire acondicionado.
            </Body>
            <Body>
              Factor de simultaneidad típico: 40 a 55% en verano y 55 a 70% en invierno. La Res. SE 287/2025 obliga a mostrar en la
              factura los kWh consumidos con su tarifa y los inyectados con su precio.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Estacionalidad y perfil horario',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.2.2, Figuras 3.5 y 3.6" source="Elaboración propia con datos PVGIS y Edenor (2024); perfiles de consumo residencial Argentina (CNT 2022). Figuras 3.5 y 3.6 del informe.">
        <Title>Generación vs. consumo: variación estacional y horaria</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-4 md:grid-cols-2">
          <Figura src="/figuras/fig-3-5-balance-mensual.png" caption="Figura 3.5. Balance energético mensual, hogar N1 del AMBA con 380 kWh/mes: generación vs. consumo, balance neto y crédito acumulado." />
          <Figura src="/figuras/fig-3-6-perfil-horario.png" caption="Figura 3.6. Perfil horario de generación (amarillo) y consumo (azul) en verano e invierno: autoconsumo directo (verde), excedente inyectado y consumo cubierto por la red (rojo)." />
        </div>
        <Body className="mt-3">
          Generación máxima en diciembre y enero (~648 kWh/mes) y mínima en junio y julio (~240 a 264 kWh/mes), una variación de casi
          2,7 veces. El consumo es alto en verano (aire acondicionado) y en invierno (calefón y calefacción eléctrica).
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Dimensionamiento con PVGIS',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.2.4 y 3.4.2, Tabla 3.6" source="PVGIS (Comisión Europea, 2024); INDEC EPH 2022 y Edenor para consumo; cálculo propio.">
        <Title>Dimensionamiento: E = P × GII × PR</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Table
            align="left"
            compact
            headers={['Parámetro', 'Valor', 'Fuente / método']}
            rows={[
              ['Potencia instalada (P)', '5,22 kWp', '9 × 580 Wp'],
              ['Irradiación inclinada anual (GII)', '1.985 kWh/m²/año', 'PVGIS, Buenos Aires, 34° norte'],
              ['Performance Ratio (PR)', '0,80', 'Temperatura -5%, soiling y sombra -2,5%, cableado -1,5%, inversor -2%, mismatch -1,5%, otros -1%'],
              ['Producción anual estimada', '5,22 × 1.985 × 0,80 = 8.289 kWh', 'Año 0'],
              ['Con degradación año 1 / 10 / 20', '8.206 / 7.866 / 7.493 kWh', 'LID 1% + 0,45%/año'],
              ['Consumo típico hogar N1 AMBA', '4.440 kWh/año (370 kWh/mes)', 'INDEC EPH 2022 + Edenor'],
              ['Cobertura solar año 1', '185%', 'Genera más de lo que consume'],
              ['Autoconsumo / inyección / red residual', '~2.700 / ~4.000 / ~1.700 kWh/año', 'Factor de autoconsumo ~50%'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              Ejemplo del informe (La Matanza, losa plana, 430 kWh/mes): potencia mínima para cubrir el 100% del consumo = 5.160 /
              (1.940 × 0,80) = 3,32 kWp. El estándar de 5,22 kWp produce 8.101 kWh/año, una cobertura de 157%. El sobredimensionamiento
              asegura cobertura total incluso al final del contrato, con degradación, y genera crédito de balance neto.
            </Body>
            <Pendiente title="Nota para el equipo: unificar cifra de generación en el informe">
              El informe muestra valores distintos para la generación anual del mismo sistema: 8.289 kWh (Tabla 3.6), 8.101 kWh
              (ejemplo 3.4.2), 5.500 a 6.500 kWh (2.3.1), 5.000 a 8.300 kWh (2.2.7) y 4.612 kWh (Figura 3.5). Conviene elegir una
              cifra base y explicar el rango antes de la defensa. Esta slide usa la Tabla 3.6.
            </Pendiente>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Evaluación del sitio e instalación',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.4.1 y 3.4.3" source="Informe TPP, secciones 3.4.1 y 3.4.3; normas CIRSOC 102, IRAM 2281, AEA 90364-7-712.">
        <Title>Evaluación del sitio e instalación en un día</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-semibold">Visita técnica (site assessment)</div>
            <Bullets
              dense
              items={[
                'Techo: tipo de cubierta, superficie, orientación norte (±45° con pérdidas menores a 5%), inclinación óptima 30 a 35°, sombras entre 9:00 y 15:00 en el solsticio de invierno (diagrama de trayectoria solar para 34° S).',
                'Estructura: 9 módulos de 33,5 kg = 301,5 kg de carga muerta; sin problema en losas (150 a 200 kg/m² de uso); en chapa o teja se verifican correas y viguetas.',
                'Tablero: disyuntor dedicado, espacio disponible, sección del cableado hasta el punto de medición.',
                'Consumo: una factura reciente alcanza para verificar que el sistema estándar es adecuado.',
              ]}
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Obra: jornada de 8 horas, equipo de 2 técnicos</div>
            <Steps
              steps={[
                { title: 'Replanteo y estructura', detail: 'Rieles de aluminio anodizado sobre tacos químicos (losa) o grampas sin perforar (chapa). Puesta a tierra con cobre 4 mm².' },
                { title: 'Montaje de módulos', detail: 'Fijación reversible con abrazaderas; conexión en serie por string con MC4.' },
                { title: 'Inversor y conexión al tablero', detail: 'Inversor en pared; salida AC en 6 mm² a disyuntor bipolar de 25 A; seccionador DC.' },
                { title: 'Puesta en marcha', detail: 'Verificación en la app del fabricante, pinza amperimétrica por string, continuidad de tierra, dossier fotográfico para la habilitación.' },
              ]}
            />
          </div>
        </div>
        <Body className="mt-4">
          Carga de viento de diseño en AMBA: 0,60 a 0,85 kN/m² (CIRSOC 102), hasta 1,5 kN por módulo. Orientación al norte verdadero
          (declinación magnética en Buenos Aires: -9°).
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'Habilitación ante la distribuidora',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.4.4, Figura 3.7, Tabla 3.10" source="Procedimiento Edenor/Edesur (2025), Decreto 986/2018, ENRE 314/2018, Res. SE 235/2024 y 287/2025; experiencia operativa 2025 a 2026.">
        <Title>Habilitación: ocho pasos, 45 a 70 días hábiles</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-[2fr_3fr]">
          <Figura src="/figuras/fig-3-7-habilitacion.png" caption="Figura 3.7. Flujo de habilitación de un sistema de generación distribuida ante Edenor/Edesur." />
          <div className="flex flex-col gap-3">
            <Steps
              columns={2}
              steps={[
                { title: 'Formulario 1A: solicitud de conexión', meta: '10 días hábiles' },
                { title: 'Formulario 1B: proyecto técnico', meta: '5 a 10 días hábiles' },
                { title: 'Inspección presencial de la distribuidora', meta: '15 días hábiles' },
                { title: 'Formulario 2A: acta de aprobación', meta: '5 días hábiles' },
                { title: 'Formulario 2B: solicitud de medidor', meta: 'Inmediato' },
                { title: 'Instalación del medidor bidireccional', meta: '10 días hábiles' },
                { title: 'Activación de tarifa UGD', meta: '5 días hábiles' },
                { title: 'Registro en el RUGER', meta: '15 días hábiles' },
              ]}
            />
            <Body>
              Plazo efectivo 2025 a 2026: <Hi>45 a 70 días hábiles</Hi> (frente a 90 a 120 en 2022 y 2023) gracias a la plataforma digital
              de las distribuidoras. Entre instalación y medidor, el inversor opera en modo zero-export y el cliente ya autoconsume de
              día. La Res. SE 287/2025 prohíbe cargos por interconexión y fija plazos bajo apercibimiento de multa.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Monitoreo y mantenimiento',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.4.5 y 3.4.6, Tabla 3.11" source="Informe TPP, secciones 3.4.5 y 3.4.6; DEYE Cloud y Huawei FusionSolar (documentación técnica 2024 a 2025).">
        <Title>Operación: monitoreo remoto y plan de mantenimiento</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
          <Table
            align="left"
            compact
            headers={['Actividad', 'Frecuencia', 'Modalidad']}
            rows={[
              ['Monitoreo de producción y alertas', 'Continua (24/7)', 'Remota, automática'],
              ['Revisión de alertas y diagnóstico', 'Semanal o ante alerta', 'Remota'],
              ['Actualización de firmware (OTA)', 'Según fabricante', 'Remota'],
              ['Limpieza de módulos', '1 a 2 veces por año', 'Presencial'],
              ['Inspección de estructura y cableado', 'Anual', 'Presencial'],
              ['Verificación de puesta a tierra', 'Cada 2 años', 'Presencial'],
              ['Reemplazo de inversor o módulo con falla', 'Ante alerta', 'Presencial, bajo garantía'],
              ['Auditoría de producción vs. garantía', 'Anual', 'Remota; cliente notificado'],
            ]}
          />
          <div className="flex flex-col gap-3">
            <Stat tone="accent" value="70%" label="de las actividades de mantenimiento son remotas; más del 60% de las alertas de primer nivel se resuelven sin visita" />
            <Stat tone="primary" value="7 a 10 días hábiles" label="tiempo objetivo de resolución de un inversor con falla (diagnóstico, RMA, envío, sustitución)" />
            <Body>
              Tres niveles de alerta: comunicación (inversor sin reportar), producción reducida (más de 20% bajo lo estimado) y falla del
              inversor. Configuración remota: firmware, zero-export, potencia de inyección, reinicio.
            </Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Modelo operativo end-to-end',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.5.1, Tabla 3.12" source="Informe TPP, Tabla 3.12.">
        <Title>Modelo operativo end-to-end: diez etapas</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Etapa', 'Descripción', 'Actores', 'Duración', 'Entregable']}
            rows={[
              ['1 · Generación de leads', 'Canales digitales (Meta Ads, Google Ads, SEO), referidos, inmobiliarias', 'Marketing / Vendedores', 'Continuo', 'Base de leads'],
              ['2 · Calificación', 'Propietario, zona AMBA, sin subsidio, consumo > 300 kWh/mes, techo apto', 'Asesor comercial', '1 a 3 días', 'Lead calificado'],
              ['3 · Propuesta comercial', 'Simulación de ahorro, presentación del contrato UVA', 'Asesor comercial', '1 a 2 días', 'Contrato firmado'],
              ['4 · Evaluación técnica', 'Visita: techo, sombreado, tablero', 'Técnico', '1 día', 'Informe técnico'],
              ['5 · Diseño del sistema', 'Dimensionamiento según consumo y sitio', 'Ingeniero', '2 a 3 días', 'Plano y unifilar'],
              ['6 · Instalación', 'Estructura, módulos, inversor, cableado, protecciones', 'Equipo de 2 técnicos', '1 día', 'Sistema instalado'],
              ['7 · Habilitación', 'Formularios 1A/1B, inspección, medidor bidireccional', 'SolarPower + distribuidora', '45 a 70 días', 'Medidor operativo'],
              ['8 · Puesta en marcha', 'Activación en plataforma, verificación de producción', 'Técnico', '1 día', 'Dashboard activo'],
              ['9 · Operación y facturación', 'Monitoreo, facturación UVA, mantenimiento', 'Operaciones', 'Vigencia', 'Servicio operativo'],
              ['10 · Fin de contrato', 'Compra a valor residual, renovación o remoción', 'SolarPower + cliente', '30 a 60 días', 'Cierre contractual'],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'Puntos críticos',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.5.2 y 3.5.3, Tabla 3.13" source="Informe TPP, Tabla 3.13 y sección 3.5.3.">
        <Title>Tres puntos críticos del proceso y sus mitigaciones</Title>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ['Habilitación ante la distribuidora (etapa 7)', '45 a 70 días hábiles: principal cuello de botella temporal. Sistemas instalados esperando medidor tienen costo financiero.', 'Pipeline de trámites en paralelo, seguimiento semanal, escalamiento ante ENRE si supera 90 días, zero-export mientras tanto.'],
            ['Capacidad de instalación (etapa 6)', 'Un equipo de 2 técnicos ejecuta una instalación estándar por día laborable. La tasa de crecimiento depende de equipos certificados disponibles.', 'Programa de formación continua, alianzas con escuelas técnicas e INTI, red de subcontratistas certificados bajo estándar SolarPower.'],
            ['Cobranza y morosidad (etapa 9)', 'La sostenibilidad depende de una mora controlada. Referencia internacional (Sunrun): 1,8% de default.', 'Débito automático CBU/CVU, gestión temprana de mora desde el primer incumplimiento, penalización contractual.'],
          ].map(([t, p, m]) => (
            <div key={t} className="rounded-lg border border-border bg-card/60 p-4">
              <div className="font-serif font-semibold">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p}</p>
              <div className="mt-3 text-xs font-semibold text-accent">Mitigación</div>
              <p className="text-sm text-muted-foreground">{m}</p>
            </div>
          ))}
        </div>
        <Body className="mt-5">
          Otros riesgos operativos por etapa: CAC superior al presupuestado (referidos reducen 40%), techo no apto (pre-evaluación
          satelital con Google Earth), error de dimensionamiento (doble verificación con PVGIS), accidente en obra (seguro RC, ART,
          protocolo de altura), falla de inversor (monitoreo 24/7 y stock de repuestos). Tabla completa en el Anexo.
        </Body>
      </Slide>
    ),
  },
]

void Lead
void Hi
