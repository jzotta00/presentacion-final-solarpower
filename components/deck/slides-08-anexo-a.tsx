import { Slide, Title, Body, Bullets, Divider, Figura, Table, Pendiente, HBars } from './primitives'
import { Stepper } from './diagrams'
import type { SlideDef } from './types'

const B = 'Anexo'

export const anexoA: SlideDef[] = [
  {
    nav: 'Anexo',
    block: B,
    node: (
      <Divider
        number="A"
        title="Anexo: material de respaldo"
        subtitle="Tablas completas del informe, figuras adicionales y material complementario. Se muestra solo ante preguntas del tribunal."
        items={['A1 a A9: mercado y contexto', 'A10 a A14: técnico', 'A15 a A24: financiero', 'A25 a A26: estrategia y proveedores', 'A27 a A32: material complementario y pendientes']}
      />
    ),
  },

  {
    nav: 'A1 · Cuadro tarifario sin subsidio',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 2.15a" source="ENRE, cuadros tarifarios residenciales sin subsidio, Edenor y Edesur, período 05/2026.">
        <Title>A1. Cuadro tarifario residencial sin subsidio (ex-N1 y ex-N3)</Title>
        <div className="mt-4">
          <Table
            compact
            headers={['Categoría', 'Unidad', 'Edenor', 'Edesur']}
            rows={[
              ['R1 · Cargo fijo 0-150', '$/mes', '1.586,65', '1.557,06'],
              ['R1 · Cargo variable 0-150', '$/kWh', '144,321', '144,234'],
              ['R2 · Cargo fijo 151-400', '$/mes', '3.384,07', '3.268,31'],
              ['R2 · Cargo variable 151-400', '$/kWh', '144,899', '144,740'],
              ['R3 · Cargo fijo 401-500', '$/mes', '11.112,56', '10.698,21'],
              ['R3 · Cargo variable 401-500', '$/kWh', '155,596', '155,492'],
              ['R4 · Cargo fijo 501-600', '$/mes', '17.777,59', '17.446,02'],
              ['R4 · Cargo variable 501-600', '$/kWh', '159,077', '159,126'],
              ['R5 · Cargo fijo 601-700', '$/mes', '37.470,12', '37.721,37'],
              ['R5 · Cargo variable 601-700', '$/kWh', '159,337', '170,148'],
              ['R6 · Cargo fijo +700', '$/mes', '58.444,45', '57.239,79'],
              ['R6 · Cargo variable +700', '$/kWh', '173,296', '185,105'],
            ]}
          />
        </div>
        <Body className="mt-3">Valores sin impuestos. Se agregan IVA (21%), contribución municipal y tasas que en algunos municipios del AMBA alcanzan hasta 37% adicional.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A2 · Cuadro tarifario con subsidio',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 2.15b" source="ENRE, cuadros tarifarios residenciales con subsidio (N2), Edenor y Edesur, período 05/2026.">
        <Title>A2. Cuadro tarifario residencial con subsidio (N2)</Title>
        <div className="mt-4">
          <Table
            compact
            headers={['Categoría', 'Unidad', 'Edenor', 'Edesur']}
            rows={[
              ['R1 · Cargo variable 0-150', '$/kWh', '70,863', '70,913'],
              ['R2 · Cargo variable consumo base', '$/kWh', '71,441', '71,420'],
              ['R2 · Cargo variable excedente', '$/kWh', '144,899', '144,740'],
              ['R3 · Cargo variable consumo base', '$/kWh', '82,137', '82,172'],
              ['R3 · Cargo variable excedente', '$/kWh', '155,596', '155,492'],
              ['R4 · Cargo variable consumo base', '$/kWh', '85,618', '85,806'],
              ['R4 · Cargo variable excedente', '$/kWh', '159,077', '159,126'],
            ]}
          />
        </div>
        <Body className="mt-3">Consumo base subsidiado: 300 kWh/mes en diciembre a febrero y mayo a agosto; 150 kWh/mes en marzo, abril y septiembre a noviembre. El excedente paga tarifa plena.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A3 · Segmentación por jurisdicción',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 2.5" source="INDEC, Censo 2022; elaboración propia. Se excluye Tierra del Fuego por baja irradiación.">
        <Title>A3. Viviendas tipo casa por jurisdicción y aplicación de filtros</Title>
        <div className="mt-4">
          <Table
            compact
            headers={['Jurisdicción', 'Casas (Censo)', 'Ajustado techo y piso (× 59,7%)', 'Aptas para instalación (× 50%)']}
            rows={[
              ['CABA', '314.375', '187.677', '93.838'],
              ['AMBA (24 partidos del GBA)', '2.882.203', '1.720.627', '860.313'],
              ['Prov. Buenos Aires (resto)', '1.970.057', '1.176.091', '588.045'],
              ['Córdoba', '1.099.869', '656.603', '328.302'],
              ['Santa Fe', '848.023', '506.256', '253.128'],
              ['Mendoza', '524.127', '312.895', '156.448'],
              ['Tucumán', '416.842', '248.848', '124.424'],
              ['Otras provincias', '3.844.865', '2.295.319', '1.147.659'],
              ['Total país', '11.900.361', '7.104.316', '3.552.157'],
            ]}
            highlightLast
          />
        </div>
        <Body className="mt-3">
          Potencial de CABA según el Mapa del Potencial Solar (GCBA): 27.644.439 m² de techos aprovechables, 4.135.250 MWh/año, 1.117.635 hogares equivalentes, 1.778.158 t CO₂/año evitables.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'A4 · Adhesión provincial',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 2.1" source="Secretaría de Energía, Reporte Anual GD 2024.">
        <Title>A4. Adhesión provincial a la Ley 27.424 y usuarios-generadores</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Jurisdicción', 'Adhesión', 'Distribuidoras habilitadas', 'Usuarios-generadores (2024)']}
            rows={[
              ['Ciudad de Buenos Aires', 'Sí', 'Edesur / Edenor (CABA)', '119'],
              ['Provincia de Buenos Aires', 'Sí', '74 distribuidoras', '508'],
              ['Córdoba', 'Sí', '157 distribuidoras', '815'],
              ['Santa Fe', 'Sí', 'Parcial', 'N/D'],
              ['Mendoza', 'Sí', '11 distribuidoras', '46'],
              ['San Juan', 'Sí', '2 distribuidoras', '89'],
              ['Misiones', 'Sí', 'Cooperativas regionales', '12'],
              ['Chaco, La Rioja, La Pampa, Chubut, otros', 'Sí', 'Varias', '< 50 cada una'],
            ]}
          />
        </div>
        <Body className="mt-3">Diecisiete provincias adheridas a la fecha del informe.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A5 · Comparación internacional',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 2.3 y Figura 2.3" source="PowerMag, SEIA, IRENA, Secretaría de Energía (2024); Statista / U.S. EIA para la Figura 2.3.">
        <Title>A5. Penetración solar residencial en mercados seleccionados</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-6 md:grid-cols-2">
          <Table
            compact
            headers={['País', 'Penetración', 'Sistemas (aprox.)', 'Año']}
            rows={[
              ['Australia', '37,7%', '> 3,7 millones', '2024'],
              ['Alemania', '12,3%', '> 2,5 millones', '2024'],
              ['Países Bajos', '~10%', '> 800.000', '2024'],
              ['Italia', '~8%', '> 700.000', '2024'],
              ['Japón', '7,7%', '> 3 millones', '2023'],
              ['Estados Unidos', '4,96%', '> 4,2 millones', '2024'],
              ['Argentina', '< 0,01%', '~1.299 residenciales', '2024'],
            ]}
          />
          <Figura src="/figuras/fig-2-3-eeuu-region.png" caption="Figura 2.3. Porcentaje de hogares con sistemas solares en EE.UU. por región (promedio nacional 3,7%)." />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A6 · Costos fotovoltaicos',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.4.1, Figuras 2.9 y 2.10" source="NREL / Our World in Data (Figura 2.9); SEIA / Wood Mackenzie, U.S. Solar Market Insight 2023 (Figura 2.10).">
        <Title>A6. Caída del costo fotovoltaico y crecimiento del mercado</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-4 md:grid-cols-2">
          <Figura src="/figuras/fig-2-9-costo-fv.png" caption="Figura 2.9. Costo de capital de sistemas fotovoltaicos por tecnología (USD/W), 1995 a 2020." />
          <Figura src="/figuras/fig-2-10-seia.png" caption="Figura 2.10. Precios y crecimiento del mercado solar en EE.UU., 2011 a 2023." />
        </div>
        <Body className="mt-3">
          Módulos: USD 7,50/W (1995) a USD 0,08 a 0,28/W (2024). Ley de Swanson: cada duplicación de volumen acumulado baja el precio 20%. En Argentina, un panel de 580 Wp cuesta USD 120 a 180 (USD 0,20 a 0,30/W) frente a USD 0,087/W FOB China, por aranceles (14% a 28%), flete y canal.
        </Body>
      </Slide>
    ),
  },

  {
    nav: 'A7 · Precios internacionales de electricidad',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.2.8, Figuras 2.5 y 2.6" source="U.S. Energy Information Administration (2023); Comisión Europea / Eurostat (2023).">
        <Title>A7. Tendencia de largo plazo del precio residencial de la electricidad</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-4 md:grid-cols-2">
          <Figura src="/figuras/fig-2-5-precio-eeuu.png" caption="Figura 2.5. Precio minorista de electricidad en EE.UU. por sector, 1998 a 2023 (centavos USD/kWh)." />
          <Figura src="/figuras/fig-2-6-precio-ue.png" caption="Figura 2.6. Precios residenciales de electricidad en la UE, 1S-2010 a 1S-2023 (euro-centavos/kWh)." />
        </div>
        <Body className="mt-3">EE.UU.: de 8,3 a 16,1 centavos/kWh (+94% nominal, ~1,8% anual real). UE: de 17 a 28 euro-centavos/kWh. Tendencia real de 2% a 4% anual en países desarrollados.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A8 · UVA, MEP y crédito hipotecario',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 2.5.5 y 2.5.6, Figuras 2.12 y 2.13" source="FMyA con base en BCRA y FRED (Figura 2.12); Market Partners / Argentina en Datos (Figura 2.13).">
        <Title>A8. Evolución de la UVA frente al dólar MEP y recuperación del crédito hipotecario</Title>
        <div className="mt-4 grid min-h-0 flex-1 gap-4 md:grid-cols-2">
          <Figura src="/figuras/fig-2-13-uva-mep.png" caption="Figura 2.13. UVA vs. dólar MEP, enero 2016 a mayo 2024." />
          <Figura src="/figuras/fig-2-12-hipotecario.png" caption="Figura 2.12. Crédito hipotecario como % del PBI: Argentina vs. Chile, 1993 a 2023." />
        </div>
        <Body className="mt-3">UVA y MEP convergen en el largo plazo con divergencias en los saltos cambiarios (2018, 2019, dic-2023). Ingresos en UVA preservan el valor real en pesos; el descalce con equipos importados se gestiona con contratos de largo plazo y stock.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A9 · Renovables y GD por región',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 2.2 (Figura 2.2 recreada) y Figura 2.4" source="Secretaría de Energía, potencia de GD por jurisdicción al cierre de 2023 (total 37,58 MW); CAMMESA, Informe de Generación 2023 (Figura 2.4).">
        <Title>A9. Capacidad de GD por jurisdicción (2023) y renovables por región del SADI</Title>
        <div className="mt-3 grid min-h-0 flex-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <HBars
              valueFormat={(v) => `${v.toLocaleString('es-AR')} kW`}
              data={[
                { label: 'Córdoba', value: 15151, tone: 'primary', note: '40,3%' },
                { label: 'Buenos Aires', value: 8554, tone: 'primary', note: '22,7%' },
                { label: 'San Juan', value: 3527, tone: 'muted', note: '9,4%' },
                { label: 'CABA', value: 2943, tone: 'primary', note: '7,8%' },
                { label: 'Misiones', value: 2112, tone: 'muted', note: '5,6%' },
                { label: 'Mendoza', value: 1654, tone: 'muted', note: '4,4%' },
                { label: 'La Pampa', value: 642, tone: 'muted', note: '1,7%' },
                { label: 'Resto del país', value: 2001, tone: 'muted', note: '5,3%' },
              ]}
            />
            <Body className="mt-2 text-xs">Total 37.584 kW. Usuarios-generadores: Córdoba 815, Buenos Aires 508, CABA 119, San Juan 89, La Pampa 49, Mendoza 46, Misiones 12, resto 133.</Body>
          </div>
          <Figura src="/figuras/fig-2-4-renovables-sadi.png" caption="Figura 2.4. Potencia instalada de renovables por región del SADI (MW). Fotovoltaica: Cuyo 564 MW, NOA 778 MW, BAS + GBA 48 MW." />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A10 · Parámetros del módulo',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 3.1" source="Datasheet LONGi Solar Hi-MO 7, 580 Wp N-type TOPCon bifacial (2024).">
        <Title>A10. Parámetros eléctricos y físicos del módulo de referencia</Title>
        <div className="mt-4">
          <Table
            compact
            headers={['Parámetro', 'Símbolo', 'Valor', 'Unidad', 'Condición']}
            rows={[
              ['Potencia pico nominal', 'Pmpp', '580', 'Wp', 'STC'],
              ['Tensión en MPP', 'Vmpp', '43,70', 'V', 'STC'],
              ['Corriente en MPP', 'Impp', '13,72', 'A', 'STC'],
              ['Tensión de circuito abierto', 'Voc', '49,32', 'V', 'STC'],
              ['Corriente de cortocircuito', 'Isc', '14,52', 'A', 'STC'],
              ['Eficiencia del módulo', 'η', '21,2', '%', 'STC'],
              ['Factor de forma', 'FF', '81,0', '%', 'STC'],
              ['Coef. temperatura (Pmpp)', 'γ', '-0,30', '%/°C', 'STC'],
              ['Coef. temperatura (Voc)', 'β', '-0,29', '%/°C', 'STC'],
              ['Temperatura nominal de célula', 'NOCT', '45 ± 2', '°C', '800 W/m², 20 °C, 1 m/s'],
              ['Dimensiones', '', '2.382 × 1.134 × 30', 'mm', ''],
              ['Peso', '', '33,5', 'kg', ''],
              ['Factor de bifacialidad', '', '80 a 85', '%', ''],
            ]}
          />
        </div>
        <Body className="mt-3">STC: 1.000 W/m², 25 °C, espectro AM 1.5G (IEC 60904-3). FF = 580 / (49,32 × 14,52) = 0,810. Límite Shockley-Queisser para silicio: 33,7%.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A11 · BOS y protecciones',
    block: B,
    node: (
      <Slide block={B} chapter="Informe 3.1.7 y 3.2.3" source="AEA 90364-7-712; IRAM 2184; IRAM 2281; CIRSOC 102; Res. ENRE 314/2018; IEEE 1547.">
        <Title>A11. Balance de sistema, protecciones eléctricas y protección de interfaz de red</Title>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <Bullets
            dense
            items={[
              'Estructura: aluminio anodizado o acero galvanizado; grapas sin perforar el impermeabilizante; carga de viento 0,60 a 0,85 kN/m² (CIRSOC 102), hasta 1,5 kN por módulo.',
              'Inclinación óptima 32 a 35° a latitud -34,6°; orientación al norte verdadero (declinación magnética -9°).',
              'Cableado DC: cable solar 4 mm² con MC4 IP67; tensión máxima ~250 V. Salida AC monofásica 230 V, 50 Hz.',
              'Seccionador DC bipolar en la entrada del inversor.',
              'Termomagnética bipolar con corte ≥ 1,25 × I nominal.',
              'Diferencial tipo A de 30 mA (obligatorio por componente pulsante DC en inversores sin transformador, AEA 90364-7-712).',
              'Descargadores de sobretensión tipo 1+2 en DC y AC (IRAM 2184).',
              'Puesta a tierra de estructura y marcos (IRAM 2281).',
            ]}
          />
          <div>
            <div className="mb-2 text-sm font-semibold">Protección de interfaz red-generador (Res. ENRE 314/2018)</div>
            <Table
              compact
              headers={['Condición', 'Umbral', 'Desconexión máxima']}
              rows={[
                ['Sobretensión', '> 110% nominal', '0,2 s'],
                ['Subtensión', '< 85% nominal', '0,2 s'],
                ['Sobrefrecuencia', '> 50,2 Hz', '0,2 s'],
                ['Subfrecuencia', '< 49,8 Hz', '0,2 s'],
                ['Detección de isla', 'Pérdida de referencia de red', '0,5 s'],
              ]}
            />
            <Body className="mt-3">Los inversores DEYE y Huawei cumplen mediante anti-islanding IEEE 1547 integrado en firmware. Equipos bajo IRAM 210013-17 (módulos, equivalente IEC 61215) e IRAM 210013-21 (inversores, equivalente IEC 62109-2 + IEC 62116).</Body>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A12 · Habilitación, plazos regulatorios',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 3.10" source="Procedimiento Edenor/Edesur (2025), ENRE 314/2018, experiencia operativa SolarPower.">
        <Title>A12. Secuencia de habilitación ante Edenor/Edesur</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Paso', 'Formulario / acción', 'Responsable', 'Plazo regulatorio máximo']}
            rows={[
              ['1', 'Formulario 1A: solicitud de conexión', 'SolarPower / cliente', '10 días hábiles (respuesta de la distribuidora)'],
              ['2', 'Formulario 1B: proyecto técnico (unifilar firmado, specs, certificados, site assessment)', 'Ingeniero habilitado SolarPower', '5 a 10 días hábiles tras aprobación 1A'],
              ['3', 'Inspección técnica presencial', 'Inspector de la distribuidora', '15 días hábiles tras presentación 1B'],
              ['4', 'Formulario 2A: acta de aprobación', 'Edenor / Edesur', '5 días hábiles tras inspección'],
              ['5', 'Formulario 2B: solicitud de medidor bidireccional', 'SolarPower / cliente', 'Inmediato tras 2A'],
              ['6', 'Instalación del medidor bidireccional', 'Cuadrilla de la distribuidora', '10 días hábiles tras 2B'],
              ['7', 'Activación de tarifa UGD en facturación', 'Sistema de la distribuidora', '5 días hábiles tras medidor'],
              ['8', 'Registro en el RUGER (Ministerio de Economía)', 'SolarPower', '15 días hábiles tras habilitación'],
            ]}
          />
        </div>
        <Body className="mt-3">Cuello de botella frecuente en el paso 2: certificación IRAM 210013-21 de inversores; la IEC 62109 es aceptada como equivalente. Tiempo total contrato a medidor: 60 a 90 días calendario.</Body>
      </Slide>
    ),
  },

  {
    nav: 'A12b · Apoderamiento en TAD',
    block: B,
    node: (
      <Slide block={B} chapter="Material de SolarPower (no está en el informe)" source="SolarPower, instructivo Trámites a Distancia: cómo autorizar en TAD al matriculado de SolarPower para gestionar el medidor bidireccional.">
        <Title>A12b. Apoderamiento en TAD: cómo el cliente habilita a SolarPower</Title>
        <div className="mt-3 grid min-h-0 flex-1 gap-6 md:grid-cols-[3fr_2fr]">
          <Stepper
            steps={[
              { title: 'Ingresar a tramitesadistancia.gob.ar', owner: 'Cliente', time: 'Paso 1', ownerTone: 'accent' },
              { title: 'Clic en "Ingresar"', owner: 'Cliente', time: 'Paso 2', ownerTone: 'accent' },
              { title: 'Iniciar sesión con clave fiscal de AFIP', detail: 'Nivel 2 o superior; con otras opciones no figura el apoderamiento. Si es una sociedad, entra el dueño o apoderado', owner: 'Cliente', time: 'Paso 3', ownerTone: 'accent' },
              { title: 'Clic en "Apoderados"', detail: 'Si es una sociedad, cambiar al rol de sociedad', owner: 'Cliente', time: 'Paso 4', ownerTone: 'accent' },
              { title: 'Nuevo apoderado: cargar el CUIT del matriculado de SolarPower y "Agregar"', owner: 'Cliente', time: 'Paso 5', ownerTone: 'accent' },
              { title: 'Elegir "Especificar los trámites que puede realizar"', detail: 'No dar poder sobre todos los trámites', owner: 'Cliente', time: 'Paso 6', ownerTone: 'accent' },
              { title: 'Buscar "Generación Distribuida"', owner: 'Cliente', time: 'Paso 7', ownerTone: 'accent' },
              { title: 'Tildar "Usuario-Generador · Generación Distribuida" y confirmar', owner: 'Cliente', time: 'Paso 8', ownerTone: 'accent' },
            ]}
          />
          <div className="flex flex-col gap-3">
            <Body>
              El apoderamiento se limita a un único trámite (Usuario-Generador · Generación Distribuida) del Ministerio de Economía. A partir
              de ahí, SolarPower presenta los formularios, sigue la inspección y registra en el RUGER en nombre del cliente.
            </Body>
            <Body>
              Requisito excluyente: clave fiscal nivel 2 o superior. Es el punto donde más clientes se traban, y por eso el instructivo
              existe.
            </Body>
            <Pendiente title="Nota">
              Los datos personales del matriculado (nombre y CUIT) no se muestran en la presentación. El instructivo original está disponible
              si el tribunal lo pide.
            </Pendiente>
          </div>
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A13 · Riesgos operativos por etapa',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 3.13" source="Elaboración propia.">
        <Title>A13. Riesgos operativos por etapa del ciclo de vida y mitigación</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Etapa', 'Riesgo operativo', 'Impacto', 'Mitigación']}
            rows={[
              ['Generación de leads', 'CAC superior al presupuestado', 'Reduce rentabilidad', 'Optimización de campañas; referidos (CAC ~40% menor)'],
              ['Calificación', 'Lead no calificable (inquilino, techo no apto, subsidiado)', 'Tiempo desperdiciado', 'Pre-filtro digital antes de la visita'],
              ['Propuesta', 'Cliente no firma (plazo, cuota, UVA)', 'Pipeline estancado', 'Material de objeciones; simulador transparente; casos de referencia'],
              ['Evaluación técnica', 'Techo no apto', 'Cancelación', 'Pre-evaluación satelital con Google Earth'],
              ['Diseño', 'Error de dimensionamiento', 'Insatisfacción', 'Doble verificación (ingeniero senior); PVGIS'],
              ['Instalación', 'Accidente laboral; daño al techo', 'Responsabilidad legal', 'Seguro RC; protocolo de altura; ART'],
              ['Habilitación', 'Demora de la distribuidora (> 90 días)', 'Facturación retrasada', 'Seguimiento semanal; escalamiento ante ENRE'],
              ['Operación', 'Falla de inversor; caída de producción', 'Pérdida de ingresos', 'Monitoreo 24/7; stock de repuestos'],
              ['Facturación', 'Morosidad', 'Deterioro del flujo de caja', 'Débito automático CBU/CVU; gestión temprana de mora'],
              ['Fin de contrato', 'Cliente rechaza opciones; sistema deteriorado', 'Costo de remoción', 'Cláusula contractual de estado mínimo'],
            ]}
          />
        </div>
      </Slide>
    ),
  },

  {
    nav: 'A14 · Plan de mantenimiento completo',
    block: B,
    node: (
      <Slide block={B} chapter="Informe Tabla 3.11" source="Elaboración propia.">
        <Title>A14. Plan de mantenimiento preventivo y correctivo</Title>
        <div className="mt-4">
          <Table
            align="left"
            compact
            headers={['Actividad', 'Frecuencia', 'Modalidad', 'Responsable']}
            rows={[
              ['Monitoreo remoto de producción y alertas', 'Continua (24/7)', 'Remota, DEYE Cloud / FusionSolar', 'SolarPower (automático)'],
              ['Revisión de alertas y diagnóstico remoto', 'Semanal o ante alerta', 'Remota', 'SolarPower'],
              ['Actualización de firmware del inversor', 'Según fabricante', 'Remota, OTA', 'DEYE/Huawei / SolarPower'],
              ['Limpieza de módulos', '1 a 2 veces por año', 'Presencial, técnico en techo', 'SolarPower'],
              ['Inspección visual de estructura y cableado', 'Anual', 'Presencial', 'SolarPower'],
              ['Verificación de puesta a tierra', 'Cada 2 años', 'Presencial', 'SolarPower'],
              ['Verificación del inversor', 'Anual (remota) + presencial si hay alerta', 'Mixta', 'SolarPower'],
              ['Reemplazo de inversor con falla', 'Ante alerta', 'Presencial', 'SolarPower (garantía DEYE/Huawei)'],
              ['Reemplazo de módulo con falla o rotura', 'Ante detección', 'Presencial', 'SolarPower (garantía LONGi)'],
              ['Auditoría de producción vs. garantía', 'Anual', 'Plataforma de monitoreo', 'SolarPower (cliente notificado)'],
            ]}
          />
        </div>
        <Body className="mt-3">Precipitación anual del AMBA (~1.050 mm) lava gran parte de la suciedad; en zonas de alto tránsito o industriales la limpieza puede ser trimestral. RMA de inversor: 3 a 7 días hábiles de envío; resolución objetivo 7 a 10 días hábiles.</Body>
      </Slide>
    ),
  },
]
