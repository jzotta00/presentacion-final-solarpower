import type { DeckSlide, SlideDef } from './types'
import { apertura } from './slides-00-apertura'
import { contexto } from './slides-01-contexto'
import { mercado } from './slides-02-mercado'
import { solucion } from './slides-03-solucion'
import { tecnico } from './slides-04-tecnico'
import { implementacion } from './slides-05-implementacion'
import { financiero } from './slides-06-financiero'
import { cierre } from './slides-07-cierre'
import { anexoA } from './slides-08-anexo-a'
import { anexoB } from './slides-09-anexo-b'

export type { DeckSlide }

const all: SlideDef[] = [
  ...apertura,
  ...contexto,
  ...mercado,
  ...solucion,
  ...tecnico,
  ...implementacion,
  ...financiero,
  ...cierre,
  ...anexoA,
  ...anexoB,
]

export const slides: DeckSlide[] = all.map((s, i) => ({ ...s, id: i + 1 }))
export const bodyCount = all.length - anexoA.length - anexoB.length
